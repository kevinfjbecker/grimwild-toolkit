import * as fs from 'fs'

const gm_crucible_text = fs
    .readFileSync('./grimwild/txt/gm_crucible.txt')
    .toString()

const gm_crucible = [[], []]

gm_crucible_text.split('\n').forEach((word, i) =>
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



const d6 = () => Math.floor(Math.random() * 6) // 0 - 5

const sampleSize = 12

for(let i = 0; i < sampleSize; i++)
{
    console.log(`${gm_crucible[0][d6()][d6()]} + ${gm_crucible[1][d6()][d6()]}`)
}
