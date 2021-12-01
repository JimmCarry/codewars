// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

const arr = "bitcoin take over the world maybe who knows perhaps";
function findShort(s){
    const words = s.split(' ').map(x => x.length).sort((a,b) => a - b);
    return words[0];
  }
// solutions of other warriors from codewars what i chose for u and me :)