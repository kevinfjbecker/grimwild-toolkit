import * as fs from 'fs'

const characterClasses = JSON.parse(fs.readFileSync('./grimwild/json/classes.json'))

const myClass = characterClasses[Math.floor(Math.random() * characterClasses.length)]

console.log(myClass)