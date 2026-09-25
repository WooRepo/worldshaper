import { createNoise2D } from "simplex-noise";
import sharp from "sharp";

const width = 256;
const height = 256;
const scale = 30.0;

const noise2D = createNoise2D();

const pixelBuffer = Buffer.alloc(width * height * 4);

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const value = noise2D(x / scale, y / scale);
    const color = value < 0 ? 0 : 255;
    const index = (y * width + x) * 4;
    pixelBuffer[index] = color; // R
    pixelBuffer[index + 1] = color; // G
    pixelBuffer[index + 2] = color; // B
    pixelBuffer[index + 3] = 255; // A
  }
}

async function saveImage() {
  await sharp(pixelBuffer, {
    raw: {
      width,
      height,
      channels: 4, // RGBA
    },
  }).toFile("perlin_output.png");

  console.log("Initial perlin generated.");
}

saveImage();
