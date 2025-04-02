const tutorials = [
  'what does the this keyword mean?',
  'what is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const titleCased = () => {
  const exceptions = ["API", "OO", "JSON", "DOM", "HTTP", "URL", "CSS", "HTML", "NaN", "JSONP",];

  return tutorials.map((tutorial) => {
    return tutorial
      .split(" ")
      .map((word) => {
        if (exceptions.includes(word)) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
};
