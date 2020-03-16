function isUppercase(c) {
  return 65 <= c && c <= 90; // 65 is character code for 'A'. 90 is 'Z'.
}
function isLowercase(c) {
  return 97 <= c && c <= 122; // 97 is character code for 'a'. 122 is 'z'.
}
function isLetter(c) {
  return isUppercase(c) || isLowercase(c);
}
function filterKey(key) {
  let result = [];
  for (let i = 0; i < key.length; i++) {
    let c = key.charCodeAt(i);
    if (isLetter(c)) result.push((c - 65) % 32);
  }
  return result;
}

class VigenereCipheringMachine {
    constructor(isDirect = true){
        this.isDirect=isDirect;
    }
  encrypt(a, b) {
    if (arguments.length < 2 || a === undefined || b === undefined) {
      throw new Error();
    }
    let key = filterKey(b);
    let output = '';
    for (let i = 0, j = 0; i < a.length; i++) {
      let c = a.charCodeAt(i);
      if (isUppercase(c)) {
        let e = ((c - 65 + key[j % key.length]) % 26) + 65;
        output += String.fromCharCode(e);
        j++;
      } else if (isLowercase(c)) {
        let d = ((c - 97 + key[j % key.length]) % 26) + 97;
        output += String.fromCharCode(d);
        j++;
      } else {
        output += a.charAt(i);
      }
    }
    const result = output.toUpperCase();
    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(a, b) {
    if (arguments.length < 2 || a === undefined || b === undefined) {
      throw new Error();
    }
    let key = filterKey(b);
    for (var i = 0; i < key.length; i++) {
        key[i] = (26 - key[i]) % 26;
    }
    let output = '';
    for (let i = 0, j = 0; i < a.length; i++) {
      let c = a.charCodeAt(i);
      if (isUppercase(c)) {
        let e = ((c - 65 + key[j % key.length]) % 26) + 65;
        output += String.fromCharCode(e);
        j++;
      } else if (isLowercase(c)) {
        let d = ((c - 97 + key[j % key.length]) % 26) + 97;
        output += String.fromCharCode(d);
        j++;
      } else {
        output += a.charAt(i);
      }
    }
    const result = output.toUpperCase();
    return this.isDirect ? result : result.split('').reverse().join('');
  }
}
module.exports = VigenereCipheringMachine;
