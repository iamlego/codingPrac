class Solution {
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l<=r) {
            const m = l + Math.floor((r - l) / 2);
            if(nums[m] > target) {
                r = m-1;
            }else if (nums[m] < target) {
                l=m+1;
            }else{
                return m;
            }
        }
        return -1;
    }
}
