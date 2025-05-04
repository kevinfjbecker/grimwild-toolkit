import * as fs from 'fs'

export const readTextLines = (filePath) =>
    fs.readFileSync(filePath)
        .toString()
        .split('\n')
