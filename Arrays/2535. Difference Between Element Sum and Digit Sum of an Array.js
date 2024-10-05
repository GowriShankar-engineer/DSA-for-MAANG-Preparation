/**
 * Leetcode Question : 2535 - Difference Between Element Sum and Digit Sum of an Array
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;

    for (let index = 0; index < nums.length; index++) {
        let num = nums[index];
        elementSum += num;

        while (num > 0) {
            digitSum += num % 10;
            num = Math.trunc(num / 10);
        }
    }

    return Math.abs(elementSum - digitSum);
};