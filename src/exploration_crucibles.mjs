import * as fs from 'fs'
import { getBlocks } from './util/blocks.mjs'
import { readTextLines } from './util/textLines.mjs'

const lines = readTextLines('./grimwild/txt/exploration_crucibles.txt')

const blocks = getBlocks(lines)

const crucible = [[[],[]],[[],[]],[[],[]]]

const c = i => i % 3 // crucible index
const p = i => Math.floor(i / 3) % 2 // part index

for(let i = 0; i < blocks.length; i++)
{
    // console.log(''+c(i)+p(i)+(Math.floor(i % 6)))
    crucible[c(i)][p(i)].push(blocks[i])
}

fs.writeFileSync('./grimwild/json/exploration_crucibles.json', JSON.stringify(crucible, null, 4))

// todo: add some sample text output