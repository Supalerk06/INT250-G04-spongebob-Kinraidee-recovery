const fs = require('fs');
const path = require('path');

function replaceRedWithOrange(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceRedWithOrange(fullPath);
        } else if (fullPath.endsWith('.vue')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let updated = content
                .replace(/bg-red-/g, 'bg-orange-')
                .replace(/text-red-/g, 'text-orange-')
                .replace(/border-red-/g, 'border-orange-')
                .replace(/shadow-red-/g, 'shadow-orange-')
                .replace(/from-red-/g, 'from-orange-')
                .replace(/via-red-/g, 'via-orange-')
                .replace(/to-red-/g, 'to-orange-');
            
            if (content !== updated) {
                fs.writeFileSync(fullPath, updated, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

replaceRedWithOrange(path.join(__dirname, 'src'));

