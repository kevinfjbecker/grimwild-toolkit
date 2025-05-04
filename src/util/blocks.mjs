export const getBlocks = (words) =>
{
    const blocks = []

    let j = 0
    for(let i = 0; i < words.length; i++)
    {
        if(i % 6 === 0)
        {
            j = Math.floor(i / 6)
            blocks[j] = []
        }
        blocks[j].push(words[i])
    }

    return blocks
}
