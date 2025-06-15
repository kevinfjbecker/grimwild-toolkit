import * as fs from 'fs'
import { readTextLines } from './util/textLines.mjs'

const adventuring_party_concepts =
    readTextLines('./grimwild/txt/adventuring_party_concepts.txt')

const partyConcepts = () =>
{
    const threeChoices = []

    while(threeChoices.length < 3)
    {
        const choice = Math.floor(Math.random() * adventuring_party_concepts.length)
        if( ! threeChoices.some(x => x === choice))
        {
            threeChoices.push(choice)
        }
    }

    return threeChoices.map(i => adventuring_party_concepts[i])
}

fs.writeFileSync(
    './grimwild/json/adventuring_party_concepts.json',
    JSON.stringify(adventuring_party_concepts, null, 4)
)

const conceptStatement = (concepts) =>
    `The party are ${
        concepts[0]
    } and ${
        concepts[1]
    }, but they definitely are not ${
        concepts[2]
    }`

const sampleSize = 5

for(let i = 0; i < sampleSize; i++)
{
    console.log(conceptStatement(partyConcepts()))
}