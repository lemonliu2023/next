import fs from 'node:fs'
import path from 'node:path'

console.log(path.resolve('./README.md'))

fs.copyFileSync(path.resolve('./README.md'), path.resolve('./src/views/MarkDown/copyedData.txt'))