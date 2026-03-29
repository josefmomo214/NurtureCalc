const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const pages = walk('./src/app');

for (const page of pages) {
  // don't modify layout.tsx here, handled separately
  if (page === 'src/app/page.tsx') continue; // actually wait, page.tsx at root needs canonical: '/' but we put that in layout.tsx? Wait, layout.tsx has metadataBase. root page.tsx needs canonical: '/'? The user says "in src/app/layout.tsx, ... canonical: '/'". Wait, layout.tsx applies to all pages unless overridden. If layout.tsx has canonical: '/', then all pages without an override will have canonical: '/'. So individual pages need their own.
  
  const content = fs.readFileSync(page, 'utf8');
  let slug = page.replace('src/app', '').replace('/page.tsx', '');
  if (slug === '') slug = '/';
  
  // Need to append alternates: { canonical: 'slug' } to the metadata object.
  // We can look for `export const metadata: Metadata = {` and add it inside.
  
  if (content.includes('alternates:')) continue; // already has it
  
  const edited = content.replace(
    /export const metadata: Metadata = {/,
    `export const metadata: Metadata = {\n  alternates: {\n    canonical: '${slug}',\n  },`
  );
  
  fs.writeFileSync(page, edited);
}
console.log('Modified', pages.length, 'pages');
