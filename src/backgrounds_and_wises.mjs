import * as fs from 'fs'

const lines = fs.readFileSync('./grimwild/txt/backgrounds_and_wises.txt').toString().split('\n').slice(1)

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