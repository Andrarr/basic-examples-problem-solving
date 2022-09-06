function containsWord(s, p) {
    let words = s.split(" ")
    for(let i =0; i<words.length; i++){
        if(words[i] == p){
            return true;
        }
    }
    return false;
};

console.log(lengthOfLastWord("Kosovo is the best", "the"));