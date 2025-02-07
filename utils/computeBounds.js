const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Computes the bounds of the inside transparent rectangle.
 * @param {string} imagePath - The path to the image file.
 * @returns {Promise<Object>} - The bounds of the transparent rectangle.
 */
async function computeImageBounds(imagePath) {
    const image = sharp(imagePath);
  
    // Get image metadata
    const { width, height } = await image.metadata();
  
    // Get raw image data
    const rawData = await image.raw().toBuffer();
    const channels = 4; // Assuming RGBA
  
    // Analyze the alpha channel for transparency
    let top, left, bottom, right;
    top = left = bottom = right = null;
  
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const alpha = rawData[y * width * channels + x * channels + 3]; // Alpha channel
  
        if (alpha === 0) { // Fully transparent pixel
          if (top === null) top = y;
          if (left === null || x < left) left = x;
          if (right === null || x > right) right = x;
          bottom = y; // Update bottom every time
        }
      }
    }
  
    // Default to whole image if no transparency found
    if (top === null || left === null || bottom === null || right === null) {
      return {
        top: 0,
        left: 0,
        bottom: height,
        right: width,
        width,
        height
      };
    }
  
    return {
      original : {
        height : height,
        width : width,
      },
      top,
      left,
      bottom: height - bottom - 1,
      right: width - right - 1,
      width: right - left + 1,
      height: bottom - top + 1
    };
}
  
// Function to process all images in the directory
async function processAllImages(directory) {
  const files = fs.readdirSync(directory);
  const results = [];

  for (const file of files) {
    const imagePath = path.join(directory, file);
    const bounds = await computeImageBounds(imagePath);
    results.push({
      fileName: file,
      bounds: bounds
    });
  }

  return results;
}

// Function to save bounds to JSON file
function saveBoundsToFile(data, fileName) {
  const filePath = path.join(__dirname, '..', 'data', fileName);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Example usage
(async () => {
  const directoryPath = path.join(__dirname, '..', 'public', 'pictureframes');
  const results = await processAllImages(directoryPath);
  saveBoundsToFile(results, 'imageBounds.json');
})();
