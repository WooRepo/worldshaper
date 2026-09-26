import sharp from 'sharp'
import seedrandom from 'seedrandom'

const width = 1080;
const height = 1920;

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

function generate_voronoi(points, width, height) {
	const pixelBuffer = Buffer.alloc(width * height);
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			const v = get_voronoi_area(points, v2(x/width, y/width));
			pixelBuffer[y * width + x] = v[0].index;
		}
	}
	return pixelBuffer;
}

function voronize_image(vimg, frame) {
	const pixelBuffer = Buffer.alloc(width * height * 4);

	//console.log(points)

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
    			const index = (y * width + x) * 4;
			//const v = get_voronoi_area(points, v2(x/width,y/height)) // sorted list of distance
			/*if (distance(v2(x/height,y/height), v[0]) - distance(v2(x/height,y/height), v[1]) < 0.05) {
				color = 255;
			}*/
			//if (distance(v[0], v2(x/width,y/height)) > 0.1) {
			const generator = seedrandom(vimg[index/4]);
			let new_x = parseInt(x + (generator()-0.5) * frame);
			let new_y = parseInt(y + (generator()-0.5) * frame);
			new_x += (new_x<0)?width:0;
			new_y += (new_y<0)?height:0;
			new_x -= (new_x>width)?width:0;
			new_y -= (new_y>height)?height:0;
	
	    		const index2 = (new_y * width + new_x) * 3;
		
			pixelBuffer[index] = baseImageBuffer[index2];
			pixelBuffer[index+1] = baseImageBuffer[index2+1];
			pixelBuffer[index+2] = baseImageBuffer[index2+2];
			pixelBuffer[index+3] = 255;
		}
	}
	return pixelBuffer;
}

const voronoi = generate_voronoi(points, width, height);

for (let x = 0; x<20; x++) {
	console.log("starting frame " +x)
  	await sharp(voronize_image(voronoi, x), {
    		raw: {
      			width,
      			height,
      			channels: 4, // RGBA
    		},
  	}).toFile("result/voronoi"+x+".png");
}

