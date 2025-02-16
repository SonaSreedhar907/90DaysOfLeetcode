var leftRightDifference = function(nums) {
    let totalSum = nums.reduce((sum, num) => sum + num, 0); // Get total sum of array
    let leftSum = 0;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i]; // Calculate right sum
        result.push(Math.abs(leftSum - rightSum)); // Store absolute difference
        leftSum += nums[i]; // Update left sum
    }

    return result;
};