const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
	await imagemin(['images/*.jpg'], 'build/images', {
		use: [
			imageminMozjpeg({
        quality: 50,
      })
    ],
	});

	console.log('Images optimized');
})();