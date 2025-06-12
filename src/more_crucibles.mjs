import * as fs from 'fs'
import { getBlocks } from './util/blocks.mjs'
import { readTextLines } from './util/textLines.mjs'

const lines = readTextLines('./grimwild/txt/more_crucibles.txt')

const blocks = getBlocks(lines)

const crucible = [[[],[]],[[],[]],[[],[]]]

const c_top = i => 0 // crucible index
const p_top = i => i % 2 // part index
for(let i = 0; i < 12; i++)
{
    // console.log(''+c_top(i)+p_top(i)+(Math.floor(i % 6)))
    crucible[c_top(i)][p_top(i)].push(blocks[i])
}

const c_bot = i => i % 2 + 1 // crucible index
const p_bot = i => Math.floor(i / 2) % 2 // part index
for(let i = 12; i < blocks.length; i++)
{
    // console.log(''+c_bot(i)+p_bot(i)+(Math.floor(i % 6)))
    crucible[c_bot(i)][p_bot(i)].push(blocks[i])
}

fs.writeFileSync('./grimwild/json/more_crucibles.json', JSON.stringify(crucible, null, 4))

// todo: add some sample text output