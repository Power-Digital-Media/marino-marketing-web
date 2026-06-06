import { execSync } from 'child_process';
import { existsSync, copyFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const src = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\c6d9027b-b995-4964-9311-74cb67ace284\\marino_favicon_mm_1780717674502.png';
const destPng = 'E:\\AntiGravity\\marino-marketing-web\\public\\assets\\logo_mm.png';

if (!existsSync(src)) {
  console.error('Source file not found:', src);
  process.exit(1);
}

mkdirSync('E:\\AntiGravity\\marino-marketing-web\\public\\assets', { recursive: true });
copyFileSync(src, destPng);
console.log('Copied PNG to public/assets/logo_mm.png');
