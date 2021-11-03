// For this challenge, you'll be implementing a word search solver, as a function that receives a 2D array of letters and a word. The function must:

// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found
// NOTE: You do not need to check to see if a word is written backwards or diagonally.
// const wordSearch = (letters, word) => { 

    const transpose = function(matrix) {
        const results = [];
        for (i = 0; i < matrix[0].length; i++) {
          const temp = [];
          for (let j = 0; j < matrix.length; j++) {
            temp.push(matrix[j][i]);
          }
          results.push(temp);
        }
        return results;
      };
        
      const printMatrix = (matrix) => {
        for (const row of matrix) {
          for (const el of row) {
            process.stdout.write(el + " ");
          }
          process.stdout.write('\n');
        }
 };

    const wordSearch = (letters, word) => { 
        if (letters.length === 0){
            return false; 
        }
        const horizontalJoin = letters.map(ls => ls.join(''))
        for (l of horizontalJoin) {

            if (l.includes(word)) 
                return true 
        };
        const transposedLetters = transpose(letters);

        const verticalJoin = transposedLetters.map(ls => ls.join(''));
        for(let l of verticalJoin){
            if(l.includes(word))
            return true;
        };
        return false; 
        
    }    

console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'F'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'R'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'A'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'N'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'K'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK'))
      
        





module.exports = wordSearch



