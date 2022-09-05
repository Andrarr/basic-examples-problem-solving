// 27. LeetCode removeElement 
function removeElement(nums, val) {
    for(let i=0; i<nums.length; i++){
        
        if(val == nums[i]){
            nums.splice(i, 1)
            i--;
           
        }
    }
    return nums.length
    
};
console.log("[3,2,2,3]", 3)