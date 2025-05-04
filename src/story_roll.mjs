const d6 = () => Math.floor(Math.random() * 6 + 1)

// roll n d6 take the highest
const nd = (n) => () => Array(n).fill(0).map(d6).sort().reverse()[0]

const badOdds = nd(1)
const evenOdds = nd(2)
const goodOdds = nd(3)

const theOdds = [
    { description: 'Bad Odds', fn: badOdds },
    { description: 'Even Odds', fn: evenOdds },
    { description: 'Good Odds', fn: goodOdds }
]

const grim = 'GRIM'
const messy = 'MESSY'
const perfect = 'PERFECT'

const results = [
    undefined,
    grim,
    grim,
    grim,
    messy,
    messy,
    perfect
]

const description = {}
description[grim] = `It's not good, and now it's a problem.`
description[messy] = `It's okay, but there's a catch.`
description[perfect] = `It's the ideal situation.`

const sampleSize = 12

// console.log(Array(sampleSize).fill(0).map(badOdds))
// console.log(Array(sampleSize).fill(0).map(evenOdds))
// console.log(Array(sampleSize).fill(0).map(goodOdds))

for(let i = 0; i < sampleSize; i++)
{
    const someOdds = theOdds[Math.floor(Math.random() * theOdds.length)]
    const aResult = description[results[someOdds.fn()]]
    console.log(`${someOdds.description} => ${aResult}`)
}