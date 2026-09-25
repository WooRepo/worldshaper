import sharp from 'sharp'
import seedrandom from 'seedrandom'

const width = 200;
const height = 200;

const baseImg = await sharp("assets/kitty.jpeg").resize(width,height).raw().toBuffer({ resolveWithObject: true });
const baseImageBuffer = new Uint8ClampedArray(baseImg.data.buffer);

function v2(x, y) {
	return {x:x,y:y};
}

const distance = (a,b) => Math.hypot(b.x- a.x, b.y - a.y);

function plot_rand_points_tree(point_count, depth) {
	const points = [];
	for (let x = 0; x < point_count; x++) {
		const point = v2(Math.random(), Math.random());
		point.index = x;
		points.push(point);
	}
	return points;
}

function get_voronoi_area(points, position) {
	return points.toSorted((a, b) => distance(a, position) - distance(b, position));
}

const points = plot_rand_points_tree(30, 10);

const pixelBuffer = Buffer.alloc(width * height * 4);

//console.log(points)

for (let y = 0; y < height; y++) {
	for (let x = 0; x < width; x++) {
    		const index = (y * width + x) * 4;
		const v = get_voronoi_area(points, v2(x/width,y/height)) // sorted list of distance
		/*if (distance(v2(x/height,y/height), v[0]) - distance(v2(x/height,y/height), v[1]) < 0.05) {
			color = 255;
		}*/
		//if (distance(v[0], v2(x/width,y/height)) > 0.1) {
		const generator = seedrandom(v[0].index);
		const new_x = parseInt(x + generator() * 20);
		const new_y = parseInt(y + generator() * 20);

    		const index2 = (new_y * width + new_x) * 3;
	
		pixelBuffer[index] = baseImageBuffer[index2];
		pixelBuffer[index+1] = baseImageBuffer[index2+1];
		pixelBuffer[index+2] = baseImageBuffer[index2+2];
		pixelBuffer[index+3] = 255;
	}
}

async function saveImage() {
  await sharp(pixelBuffer, {
    raw: {
      width,
      height,
      channels: 4, // RGBA
    },
  }).toFile("voronoi.png");
}

saveImage();
