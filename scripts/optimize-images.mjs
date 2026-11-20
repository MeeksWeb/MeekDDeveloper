import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const directory = new URL("../public/images/", import.meta.url);
for (const name of await readdir(directory)) {
  if (!name.endsWith(".png")) continue;
  const input = new URL(name, directory);
  const original = (await stat(input)).size;
  for (const width of [800, 1600]) {
    const output = new URL(name.replace(/\.png$/, width === 800 ? "-800.webp" : ".webp"), directory);
    await sharp(fileURLToPath(input))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(fileURLToPath(output));
    const size = (await stat(output)).size;
    console.log(`${name} (${width}px): ${Math.round(size / 1024)} KB, ${Math.round((1 - size / original) * 100)}% smaller`);
  }
}
