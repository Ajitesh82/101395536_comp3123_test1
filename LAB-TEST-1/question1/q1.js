function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        reject(new Error('Input is not an array'));
        return;
      }
  
      const filteredLowercaseWords = arr
        .filter(item => typeof item === 'string')
        .map(word => word.toLowerCase());
  
      if (filteredLowercaseWords.length === 0) {
        reject(new Error('No valid words found in the array'));
      } else {
        resolve(filteredLowercaseWords);
      }
    });
  }
  
 
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  lowerCaseWords(mixedArray)
    .then(result => {
      console.log('Lowercased words:', result);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  