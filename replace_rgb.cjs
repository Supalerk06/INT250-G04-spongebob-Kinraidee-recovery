const fs = require('fs');
const path = require('path');

function replaceRGB(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceRGB(fullPath);
        } else if (fullPath.endsWith('.vue')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let updated = content
                .replace(/255,107,53/g, '249,115,22')
                .replace(/#FF6B35/g, '#F97316')
                .replace(/#EE1B24/gi, '#F97316');
            
            if (content !== updated) {
                fs.writeFileSync(fullPath, updated, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

replaceRGB(path.join(__dirname, 'src'));
