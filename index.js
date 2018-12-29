const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
  try {
    const images = await imagemin(['images/*.jpg'], 'build/images', {
      use: [
        imageminMozjpeg({
          quality: 50,
        })
      ],
    });

    console.log('Images optimized', images);
  }
  catch (e) {
    console.log('ERROR:', e)
  }
})();