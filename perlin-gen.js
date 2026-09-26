import { createNoise2D } from "simplex-noise";
import sharp from "sharp";

const CONFIG = {
  width: 3840,
  height: 2160,
  scale: 0.004,
  warpScale: 0.002,
  warpStrength: 0.2,
  edgeMargin: 0.03,
};

const noise = createNoise2D();

const PLANETS = ["standard", "desert", "fireLand", "purplePalace", "random"];
const selectedPlanet = PLANETS[Math.floor(Math.random() * PLANETS.length)];
console.log(`Generating planet preset: ${selectedPlanet}`);

let colours = [];

if (selectedPlanet === "standard") {
  colours = [
    [0.35, [20, 50, 120]],
    [0.4, [40, 90, 180]],
    [0.46, [210, 200, 130]],
    [0.6, [60, 140, 50]],
    [0.7, [30, 90, 30]],
    [0.82, [100, 90, 80]],
    [Infinity, [240, 240, 250]],
  ];
} else if (selectedPlanet === "desert") {
  colours = [
    [0.25, [222, 212, 144]],
    [0.3, [207, 196, 126]],
    [0.46, [210, 200, 130]],
    [Infinity, [176, 158, 91]],
  ];
} else if (selectedPlanet === "fireLand") {
  colours = [
    [0.35, [20, 50, 120]],
    [0.4, [40, 90, 180]],
    [0.46, [210, 200, 130]],
    [0.6, [199, 140, 74]],
    [0.7, [199, 74, 76]],
    [0.82, [100, 90, 80]],
    [Infinity, [240, 240, 250]],
  ];
} else if (selectedPlanet === "purplePalace") {
  colours = [
    [0.35, [20, 50, 120]],
    [0.4, [40, 90, 180]],
    [0.46, [210, 200, 130]],
    [0.6, [182, 50, 194]],
    [0.7, [109, 31, 145]],
    [0.82, [100, 90, 80]],
    [Infinity, [240, 240, 250]],
  ];
} else if (selectedPlanet === "random") {
  const randomRange = (min, max) =>
    Math.floor(min + Math.random() * (max - min));
  const waterR = randomRange(10, 60);
  const waterG = randomRange(30, 100);
  const waterB = randomRange(100, 220);

  const landR = randomRange(40, 180);
  const landG = randomRange(60, 180);
  const landB = randomRange(30, 120);

  const seaLevel = 0.32 + Math.random() * 0.16;

  colours = [
    [seaLevel - 0.05, [waterR, waterG, waterB]],
    [
      seaLevel,
      [
        Math.min(255, waterR + 30),
        Math.min(255, waterG + 40),
        Math.min(255, waterB + 40),
      ],
    ],
    [
      seaLevel + 0.05,
      [randomRange(180, 230), randomRange(170, 210), randomRange(110, 150)],
    ],
    [seaLevel + 0.25, [landR, landG, landB]],
    [
      seaLevel + 0.45,
      [
        Math.floor(landR * 0.6),
        Math.floor(landG * 0.6),
        Math.floor(landB * 0.6),
      ],
    ],
    [
      Infinity,
      [
        Math.min(255, landR + 100),
        Math.min(255, landG + 100),
        Math.min(255, landB + 100),
      ],
    ],
  ];
}

function fbm(x, y) {
  let total = 0,
    freq = 1,
    amp = 1,
    max = 0;
  for (let i = 0; i < 4; i++) {
    total += noise(x * freq, y * freq) * amp;
    max += amp;
    amp *= 0.5;
    freq *= 2.0;
  }
  return total / max;
}

function getEdgeMask(x, y, w, h, margin) {
  const dx = Math.min(x, w - x) / (w * margin);
  const dy = Math.min(y, h - y) / (h * margin);
  return Math.max(0, Math.min(1, Math.min(dx, dy)));
}

function getBiomeColor(elevation) {
  return colours.find(([threshold]) => elevation < threshold)[1];
}

async function generateMap() {
  console.log("beginning generation.");
  const buffer = Buffer.alloc(CONFIG.width * CONFIG.height * 4);
  let idx = 0;

  for (let y = 0; y < CONFIG.height; y++) {
    for (let x = 0; x < CONFIG.width; x++) {
      const wx =
        noise(x * CONFIG.warpScale, y * CONFIG.warpScale) * CONFIG.warpStrength;
      const wy =
        noise((x + 100) * CONFIG.warpScale, (y + 100) * CONFIG.warpScale) *
        CONFIG.warpStrength;

      const rawNoise =
        (fbm(x * CONFIG.scale + wx, y * CONFIG.scale + wy) + 1) / 2;
      const mask = getEdgeMask(
        x,
        y,
        CONFIG.width,
        CONFIG.height,
        CONFIG.edgeMargin,
      );
      const elevation = Math.pow(rawNoise * mask, 1.1);

      const [r, g, b] = getBiomeColor(elevation);
      buffer[idx++] = r;
      buffer[idx++] = g;
      buffer[idx++] = b;
      buffer[idx++] = 255;
    }
  }

  const rawOptions = {
    raw: {
      width: CONFIG.width,
      height: CONFIG.height,
      channels: 4,
    },
  };

  await sharp(buffer, rawOptions).toFile("worldMap.png");
  console.log("PNG map generated: worldMap.png");

  await sharp(buffer, rawOptions)
    .tile({
      size: 256,
      layout: "dz",
    })
    .toFile("worldMap");

  console.log("DZI tiles generated successfully: worldMap.dzi");
}

generateMap().catch(console.error);
