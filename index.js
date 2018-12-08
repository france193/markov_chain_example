const MarkovChain = require('markovchain');
const fs = require('fs');

// read input file
const inputFile = fs.readFileSync('./input.txt', 'utf8');

// create a new Markov chain
const quotes1 = new MarkovChain(inputFile);
const quotes2 = new MarkovChain(inputFile);
const quotes3 = new MarkovChain(inputFile);

// create a new sentence that starts with "The" and has at least 10 words
const sentence1 = quotes1.start('The').end(10).process() + ".";

// create a new sentence that has at least 15 words
const sentence2 = quotes2.end(15).process() + ".";

// create a new sentence that has at least 10 words
const sentence3 = quotes3.end(10).process() + ".";

console.log("Sentence 1: \"" + sentence1 + "\"");
console.log("Sentence 2: \"" + sentence2 + "\"");
console.log("Sentence 3: \"" + sentence3 + "\"");

//Examples:

/*
* Sentence 1: "The round pegs in a creative way, as crazy, we loved."
* Sentence 2: "opinions drown out your own inner voice."
* Sentence 3: "things that you that the experience will somehow connect in mind."
* */
