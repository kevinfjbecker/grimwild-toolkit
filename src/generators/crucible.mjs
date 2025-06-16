import * as fs from 'fs'

const crucibles = JSON.parse(fs.readFileSync('./grimwild/json/heritage_crucible.json'))

const crucibleMarkup = (crucible) =>
{
    return `<div class="crucible">${
        crucible.map((section) =>
        {
            return `<div class="crucible-section">${
                section.map((entry) =>
                {
                    return `<div class="crucible-section-entry">${
                        entry
                    }</div>`
                }).join('')
            }</div>`
        }).join('')
    }</div>`
}

console.log(crucibles.map(crucibleMarkup).join('\n'))