function reverseWords(sentence) {
  // Your code will replace the placeholder return statement.
  const split = sentence.trim().split(" ");
  console.log("split", split);
  console.log("length", split.length);
  let left = 0;
  let right = sentence.length - 1;

  while (left < right) {
    [split[left], split[right]] = [split[right], split[left]];
    left++;
    right--;
    console.log(split);
  }

  return split.join(" ").trim();
}

const string = "We love JS";

console.log(reverseWords(string));
