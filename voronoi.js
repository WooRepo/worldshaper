import sharp from 'sharp'
import seedrandom from 'seedrandom'
import { GPU } from 'gpu.js'
const gpu = new GPU();

const width = 1920/3;
const height = 1080/3;
//const width = 300;
//const height = 300;


const baseImg = await sharp("continent_map.png").resize(width,height).raw().toBuffer({ resolveWithObject: true });
console.log(baseImg.info)
const baseImageBuffer = new Uint8ClampedArray(baseImg.data.buffer);

const cpic = gpu.createKernel(function(points, width, pointlength) {
	const y = Math.floor(this.thread.x / width);
	const x = this.thread.x % width;
	let closest_index = 1;
	let closest_dist = 999999999;
	for (let i=0;i<pointlength/2;i++) {
		let dx = x - points[i*2];
		let dy = y - points[i*2+1];
		const dist = Math.sqrt(dx*dx + dy*dy);
		if (dist < closest_dist) {
			closest_dist = dist;
			closest_index = i;
		}
	}
	return closest_index
}).setOutput([width * height]);

const voronization = gpu.createKernel(function(vimg, image, offset, width, height, pointcount) {
	const x_offset = Math.floor(Math.sin(vimg[Math.floor(this.thread.x/4)]/pointcount * 6.28)) * offset;
	const y_offset = Math.floor(Math.cos(vimg[Math.floor(this.thread.x/4)]/pointcount * 6.28)) * offset;
	
	const index = this.thread.x + x_offset*4 + y_offset*width*4;

	index -= (index > width*height*4)?width*height*4:0;
	index += (index < 0)?width*height*4:0;

	return image[index];
}).setOutput([width * height * 4]);

const points = [];
for (let i = 0;i<20;i++) {
	points.push(Math.random()*width, Math.random()*height)
}

const voronoi = cpic(points,width,points.length);

console.log(voronoi)

//const rand = Math.random() * 1000

for (let x = 0; x<50; x++) {
	console.log("starting frame " +x)
	//console.log(baseImageBuffer)
	//console.log(voronization(voronoi, baseImageBuffer, 1, width))
	//voronization(voronoi, baseImageBuffer, x, width)
  	await sharp(Buffer.from(voronization(voronoi, baseImageBuffer, x, width, height, Math.floor(points/2))), {
    		raw: {
      			width,
      			height,
      			channels: 4, // RGBA
    		},
  	}).toFile("result/voronoi"+x+".png");
}

