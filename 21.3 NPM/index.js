import generateName from "sillyname";
import { randomSuperhero } from "superheroes";

var sillyName = generateName();
var test = generateName.randomNoun();
console.log(`My name is ${sillyName}, ${test}`);
console.log(`Here is a superhero name: ${randomSuperhero()}`);
