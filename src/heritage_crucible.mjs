import * as fs from 'fs'
import { getBlocks } from './util/blocks.mjs'
import { readTextLines } from './util/textLines.mjs'

const lines = readTextLines('./grimwild/txt/heritage_crucible.txt')

const blocks = getBlocks(lines)

const blockMapping = [0, 2, 1]

const crucible = [[],[],[]]

for(let k = 0; k < blocks.length; k++)
{
    crucible[blockMapping[k % 3]].push(blocks[k])
}

fs.writeFileSync('./grimwild/json/heritage_crucible.json', JSON.stringify(crucible, null, 4))

const d6 = () => Math.floor(Math.random() * 6) // 0 - 5

const sampleSize = 12

for(let i = 0; i < sampleSize; i++)
{
    console.log(`${crucible[0][d6()][d6()]} of the ${crucible[1][d6()][d6()]} ${crucible[2][d6()][d6()]}`)
}