function missingNumber(nums) {
    // let arr = nums.sort()
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i < nums.length - 1) {
            result += i + 1 - nums[i];
        }
        else {
            return 'no missing element'
        }
    }
    return `${result} missing element`

};
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1, 8]))
