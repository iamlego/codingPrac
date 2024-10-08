class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        return Math.max(
            nums[0],
            Math.max(
                this.helper(nums.slice(1)),
                this.helper(nums.slice(0, -1)),
            ),
        );
    }

    /**
     * @param {number[]} nums
     * @return {number}
     */
    helper(nums) {
        let rob1 = 0;
            let rob2 = 0;
        for (const n of nums) {
            const newRob = Math.max(rob1 + n, rob2);
            rob1 = rob2;
            rob2 = newRob;
        }
        return rob2;
    }
}
