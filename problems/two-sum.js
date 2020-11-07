/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        
        console.log(nums[i], diff, map.get(diff))
        if (map.get(diff) !== undefined) return [map.get(diff), i]
        
        map.set(nums[i], i)
    }

    return 'No two sum solution'
};

console.log(twoSum([2, 7, 11, 15],9))