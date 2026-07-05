const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Usuario\\.gemini\\antigravity\\brain\\3ccbdfa9-98f5-400a-99f1-57e7a066c02b';
const destDir = path.join(__dirname, 'assets');

// Ensure assets directory exists
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log('Created assets folder');
}

// Map files to their destination names
const filesToCopy = [
    { src: 'media__1781802126366.png', dest: 'avatar.png' },
    { src: 'project1_1781802095529.png', dest: 'project1.png' },
    { src: 'project2_1781802107881.png', dest: 'project2.png' }
];

filesToCopy.forEach(file => {
    const srcPath = path.join(srcDir, file.src);
    const destPath = path.join(destDir, file.dest);
    
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Successfully copied ${file.src} to ${file.dest}`);
    } else {
        console.error(`Source file not found: ${srcPath}`);
    }
});
