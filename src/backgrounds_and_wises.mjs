import * as fs from 'fs'
import { readTextLines } from './util/textLines.mjs'

const lines =
    readTextLines('./grimwild/txt/backgrounds_and_wises.txt')
    .slice(1)

// console.log(lines) // debug

const linesSections = lines.map(line => line.match(/(^\w+)(.+)\.(.+)/).slice(1, 4))

const output = linesSections
    .map(sections =>
    {
        const background = sections[0]

        const wises = sections[1]
            .split(',')
            .map(s => s.trim())
            .filter(s => s)
        wises[2] = wises[2].slice(4)

        const alsoKnownAs = sections[2]
            .split(',')
            .map(s => s.trim())

        return {
            background,
            wises,
            alsoKnownAs
        }
    })

fs.writeFileSync('./grimwild/json/backgrounds_and_wises.json', JSON.stringify(output, null, 4))

// todo: add some sample text output
