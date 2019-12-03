const sentence = "hello there from lighthouse labs";​
const typewriterPrint = function(callback) {
  let timer = 0;

  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
      if (i === sentence.length - 1) {
        callback();
      }
    }, timer);
    timer += 50;
  }​
};​
typewriterPrint(() => {
  process.stdout.write('\n');
});