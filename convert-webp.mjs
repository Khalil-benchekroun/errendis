import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, dirname } from 'path';

async function convertDir(dir) {
  for (const file of readdirSync(dir)) {
    const full = join(dir, file);
    if (statSync(full).isDirectory()) {
      await convertDir(full);
    } else if (['.png', '.jpg'].includes(extname(file).toLowerCase())) {
      const out = full.replace(/\.(png|jpg)$/i, '.webp');
      await sharp(full).webp({ quality: 82 }).toFile(out);
      console.log('✓', out);
    }
  }
}

convertDir('public/screenshots');