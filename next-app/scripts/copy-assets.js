const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '..', '..', 'assets');
const destDir = path.resolve(__dirname, '..', 'public', 'assets');

async function copyRecursive(src, dest) {
  try {
    await fs.promises.mkdir(dest, { recursive: true });
    const entries = await fs.promises.readdir(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        await copyRecursive(srcPath, destPath);
      } else if (entry.isFile()) {
        await fs.promises.copyFile(srcPath, destPath);
      }
    }
  } catch (err) {
    console.error('Error copying assets:', err);
    process.exitCode = 1;
  }
}

(async () => {
  console.log('Copying assets from', srcDir, 'to', destDir);
  await copyRecursive(srcDir, destDir);
  console.log('Assets copied.');
})();
