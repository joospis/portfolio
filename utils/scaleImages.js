const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

const inputDir = '../unscaled-pictureframes' // Change to your directory
const outputDir = '../public/pictureframes' // Directory for scaled images

if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true })
}

fs.readdir(inputDir, (err, files) => {
	if (err) {
		console.error('Error reading directory:', err)
		return
	}

	files.forEach(file => {
		const inputPath = path.join(inputDir, file)
		const outputPath = path.join(outputDir, file)

		if (!fs.lstatSync(inputPath).isFile()) return

		exec(`ffmpeg -i "${inputPath}" -vf scale=-1:480 "${outputPath}"`, (error, stdout, stderr) => {
			if (error) {
				console.error(`Error processing ${file}:`, error)
				return
			}
			console.log(`Processed: ${file}`)
		})
	})
})
