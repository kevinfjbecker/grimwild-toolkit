import * as fs from 'fs'

const adventuring_party_concepts = fs
    .readFileSync('./grimwild/txt/adventuring_party_concepts.txt')
    .toString()
    .split('\n')

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