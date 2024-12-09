// * ===============================1========================================

/*
 ? look at the code below:
 ? make a sentence by concatenating the object keys 
*/
const object1 = {
  ali: 'name',
  writes: 'does what',
  novels: 'kind of book',
};

// output => 'ali writes novels'
const sentence = (obj) => {
  const keys = Object.keys(obj); 
  return `${keys[0]} ${keys[1]} ${keys[2]}`;
};

console.log(sentence(object1));
