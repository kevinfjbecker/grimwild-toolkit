import * as fs from 'fs'
import { readTextLines } from './util/textLines.mjs'

const gm_crucible_lines = readTextLines('./grimwild/txt/gm_crucible.txt')

const gm_crucible = [[], []]

gm_crucible_lines.forEach((word, i) =>
{
    const x = Math.floor(i / 6) % 2
    const y = Math.floor(i / 12)
    const z = i % 6

    if(i % 6 === 0)
    {
        if(i / 6 % 2 === 0)
        {
            // console.log(`gm_crucible[${x}].push([])`)
            gm_crucible[x].push([])
        }
        else
        {
            // console.log(`gm_crucible[${x}].push([])`)
            gm_crucible[x].push([])
        }
    }
    // console.log(`gm_crucible[${x}][${y}].push(${word})`)
    gm_crucible[x][y].push(word)
})

fs.writeFileSync(
    './grimwild/json/gm_crucible.json',
    JSON.stringify(gm_crucible, null, 4)
)

const d6 = () => Math.floor(Math.random() * 6) // 0 - 5

const sampleSize = 12

for(let i = 0; i < sampleSize; i++)
{
    console.log(`${gm_crucible[0][d6()][d6()]} + ${gm_crucible[1][d6()][d6()]}`)
}
