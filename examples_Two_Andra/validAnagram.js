// 242. Valid Anagram LeetCode

function isAnagram(s, t) {
    
    let sameLetters;
    if(s.length !== t.length){
       return false;
    }
    let sSorted = s.split('').sort().join('');
    let tSorted = t.split('').sort().join('');
    
    if(sSorted == tSorted){
        return true;
    }
    return false;
}
console.log(isAnagram("rat", "car"))