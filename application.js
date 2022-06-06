import { readFileSync } from 'fs'
import {robotExplorer} from "./src/main/robotExplorer.js";
import {generateMars} from "./src/main/generateMars.js";

try {
    const data = readFileSync('./input.txt', 'utf8').split('\n');

    const [rightLimit, upperLimit] = data.shift().split(' ').map(val => parseInt(val))
    const map = generateMars(upperLimit, rightLimit)


    while (data.length > 2) {
        const initialPosition = data.shift().split(' ')
        const coordinates = data.shift().split('')

        void data.shift()
        robotExplorer(map, initialPosition, coordinates)
    }
} catch (e) {
    console.log('Error:', e);
}
