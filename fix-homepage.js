const fs = require('fs');
const path = require('path');

const correctHome = path.join(__dirname, 'out', 'index.html');
const deployedHome = path.join(__dirname, 'public_html', 'index.html'); // Copying to public_html/index.html

console.log('--- Homepage Fix Tool ---');
console.log('Source:', correctHome);
console.log('Destination:', deployedHome);

if (fs.existsSync(correctHome)) {
    try {
        // Ensure destination directory exists (if public_html is a sibling/child)
        const destDir = path.dirname(deployedHome);
        if (!fs.existsSync(destDir)) {
            console.log(`Creating directory: ${destDir}`);
            fs.mkdirSync(destDir, { recursive: true });
        }
        
        fs.copyFileSync(correctHome, deployedHome);
        console.log('SUCCESS: Content of out/index.html copied to public_html/index.html');
        
        // Also check if we should copy to the root if that's what's served
        const rootHome = path.join(__dirname, 'index.html');
        // fs.copyFileSync(correctHome, rootHome); // Risk of overwriting server.js if not careful, better not
        
    } catch (err) {
        console.error('ERROR during copy:', err.message);
    }
} else {
    console.error('FAILED: out/index.html does not exist. Run build first.');
}
