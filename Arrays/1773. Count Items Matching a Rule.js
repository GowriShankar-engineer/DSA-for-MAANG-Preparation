/**
 * Leetcode Question : 1773 - Count Items Matching a Rule
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const ruleMap = {
        type: 0,
        color: 1,
        name: 2
    }
    const ruleIndex = ruleMap[ruleKey];

    return items.filter((item) => item[ruleIndex] == ruleValue).length;
};