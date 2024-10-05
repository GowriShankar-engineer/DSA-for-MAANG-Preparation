/**
 * Leetcode Question : 1389 - Create Target Array in the Given Order
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const target = [];

    for (let element = 0; element < nums.length; element++) {
        target.splice(index[element], 0, nums[element]);
    }

    return target;
};