/*
Task:
  You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:
  If, you can read?

Output:
  India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:
  There is a preloaded dictionary that you can use, named NATO. 
  It uses uppercase keys, e.g. NATO['A'] is "Alfa".
  The set of used punctuation is ,.!?.
  Punctuation should be kept in your return string, but spaces should not.
  Xray should not have a dash within.
  Every word and punctuation mark should be seperated by a space ' '.
  There should be no trailing whitespace.
*/


// Solution

let natos = ['Alfa', 'Bravo', 'Charlie',
'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India',
'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar',
'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform',
'Victor', 'Whiskey', 'Xray', 'Yankee', 'Zulu'];

function to_nato(words) {
  words = words.toLowerCase();
	let arr = [];
  for (let i = 0; i < words.length; i++) {
    if (words.charCodeAt(i) < 97 || words.charCodeAt(i) > 122) {
      if (words[i] != ' ') {
        arr.push(words[i]);
      }
    } else {
      arr.push(natos[words.charCodeAt(i) - 97]);
    }
  }
  return arr.join(' ');
}

// or

function toNato(words) {
  return words
    .split('')
    .map(x => /[a-zA-Z]/.test(x) ? NATO[x.toUpperCase()] : x)
    .filter(x => x != ' ')
    .join(' ');
}