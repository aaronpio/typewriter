const process = require("process");

const sentence = "Hello there from lighthouse labs";

const typewriter = sentence => {
  let t = 0;
  for (let char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, t);
    t += 100;
  }
  setTimeout(() => {
    console.log();
  }, 100 * sentence.length);
};

typewriter(sentence);
