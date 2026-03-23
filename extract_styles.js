const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, 'views');
const cssPath = path.join(__dirname, 'public', 'css', 'styles.css');

let cssOutput = '\n/* Extracted Inline Styles */\n';
const styleMap = new Map();
let classCounter = 1;

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract <style>
    content = content.replace(/<style>([\s\S]*?)<\/style>/gi, (match, p1) => {
        cssOutput += p1 + '\n';
        return '';
    });

    // Extract style="..."
    content = content.replace(/<([a-zA-Z0-9\-]+)([^>]*)style="([^"]*)"([^>]*)>/gi, (match, tag, before, styleVal, after) => {
        if (!styleVal.trim()) return `<${tag}${before}${after}>`;

        let className;
        if (styleMap.has(styleVal)) {
            className = styleMap.get(styleVal);
        } else {
            className = `es-util-${classCounter++}`;
            styleMap.set(styleVal, className);
            cssOutput += `.${className} { ${styleVal} }\n`;
        }

        let newAttrs = `${before} ${after}`;
        if (/class="([^"]*)"/i.test(newAttrs)) {
            newAttrs = newAttrs.replace(/class="([^"]*)"/i, `class="$1 ${className}"`);
        } else {
            newAttrs += ` class="${className}"`;
        }

        newAttrs = newAttrs.replace(/\s+/g, ' ');

        return `<${tag}${newAttrs}>`;
    });

    fs.writeFileSync(filePath, content);
}

function walkSync(currentDirPath) {
    fs.readdirSync(currentDirPath).forEach((name) => {
        const filePath = path.join(currentDirPath, name);
        const stat = fs.statSync(filePath);
        if (stat.isFile() && filePath.endsWith('.html')) {
            processFile(filePath);
        } else if (stat.isDirectory()) {
            walkSync(filePath);
        }
    });
}

walkSync(viewsDir);
fs.appendFileSync(cssPath, cssOutput);
console.log('Styles extracted successfully!');
