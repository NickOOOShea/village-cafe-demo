/**
 * Image Optimization Script for Village Cafe
 * Converts images to WebP format
 * Run: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public', 'images');
const QUALITY = 80;

async function optimizeImage(inputPath) {
  const dir = path.dirname(inputPath);
  const filename = path.basename(inputPath, path.extname(inputPath));
  const ext = path.extname(inputPath).toLowerCase();

  if (ext === '.webp') return;
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const stats = fs.statSync(inputPath);
  console.log(`Processing: ${path.basename(inputPath)} (${(stats.size / 1024).toFixed(0)}KB)`);

  try {
    const webpPath = path.join(dir, `${filename}.webp`);
    await sharp(inputPath).webp({ quality: QUALITY }).toFile(webpPath);
    const webpStats = fs.statSync(webpPath);
    const savings = ((stats.size - webpStats.size) / stats.size * 100).toFixed(1);
    console.log(`  → ${filename}.webp (${(webpStats.size / 1024).toFixed(0)}KB) - ${savings}% smaller`);
    return stats.size - webpStats.size;
  } catch (error) {
    console.error(`  ✗ Error: ${error.message}`);
    return 0;
  }
}

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return 0;
  let totalSavings = 0;
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dirPath, item.name);
    if (item.isDirectory()) {
      totalSavings += await processDirectory(fullPath);
    } else if (item.isFile()) {
      const savings = await optimizeImage(fullPath);
      if (savings) totalSavings += savings;
    }
  }
  return totalSavings;
}

async function main() {
  console.log('Image Optimization Script - Village Cafe\n');
  const totalSavings = await processDirectory(PUBLIC_DIR);
  console.log('\n' + '='.repeat(50));
  console.log(`Total savings: ${(totalSavings / 1024).toFixed(0)}KB`);
  console.log('='.repeat(50));
}

main().catch(console.error);
