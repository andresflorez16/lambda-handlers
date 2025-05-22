
const esbuild = require('esbuild');
const fs = require('node:fs');
const path = require('node:path');

const entryDir = path.join(__dirname, 'src');
const outDir = path.join(__dirname, 'dist');

// Crea dist si no existe
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

// Compilar cada archivo individualmente
fs.readdirSync(entryDir).forEach(file => {
  const input = path.join(entryDir, file);
  const output = path.join(outDir, file);

  esbuild.buildSync({
    entryPoints: [input],
    bundle: true,
    platform: 'node',
    target: 'node20',
    outfile: output,
  });

  console.log(`✔️ Compiled ${file}`);
});
