class Formatter {
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    const exceptionArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = string.split(' ');
    let newWords = [];
    for(let word of words) {
      if (exceptionArray.indexOf(word) === -1) {
        newWords.push(this.capitalize(word));
      } else {
        if (words.indexOf(word) === 0) {
          newWords.push(this.capitalize(word));
        } else {
          newWords.push(word);
        }
      }
    }
    return newWords.join(' ');
  }
}