const sharp = require("sharp")

sharp("./assets/kitty.jpeg")
	.extract({ width: 100, height: 100, left: 120, top: 30 })
	.grayscale()
	.toFile("./assets/evilkitty.jpeg")
