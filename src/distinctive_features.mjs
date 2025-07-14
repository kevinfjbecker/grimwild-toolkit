import * as fs from 'fs'
import { getBlocks } from './util/blocks.mjs'
import { readTextLines } from './util/textLines.mjs'

const keys = readTextLines('./grimwild/txt/distinctive_features_keys.txt')
    .map(t => t.charAt(0).toUpperCase() + t.substring(1).toLowerCase())

const lines = readTextLines('./grimwild/txt/distinctive_features.txt')
    .filter(l => l.trim() !== '')

const blocks = getBlocks(lines)

const crucible = [[],[],[],[],[]]

const c = i => [1, 3, 2, 4][i % 4]

let i = 0
for(; i < 6 * 4; i++)
{
    crucible[c(i)].push(blocks[i])
}
for(; i < blocks.length; i++)
{
    crucible[0].push(blocks[i])
}

fs.writeFileSync('./grimwild/json/distinctive_features_keys.json', JSON.stringify(keys, null, 4))
fs.writeFileSync('./grimwild/json/distinctive_features.json', JSON.stringify(crucible, null, 4))
