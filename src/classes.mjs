import * as fs from 'fs'
import { readTextLines } from './util/textLines.mjs'

const lines =
    readTextLines('./grimwild/txt/classes.txt')

console.log(lines)

fs.writeFileSync(
    './grimwild/json/classes.json',
    JSON.stringify(lines, null, 4)
)