let searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length -1;

 
    while(start < end){
        let mid = start + Math.floor( ((end - start)/2) )
        if(target == nums[mid]) return mid;
        else if(target > nums[mid]){
            start = mid + 1
            
        }
        else {
            start = mid -1
        }
    }
    return mid
};
console.log(searchInsert([1,3,5,6], 2))
