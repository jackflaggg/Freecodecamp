function getMaxSubSum(arr) {
    let currentSum = arr[0];
    let maxSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (currentSum + arr[i] >= arr[i]) {
            currentSum += arr[i];
        } else {
            currentSum = arr[i];
        }
        maxSum = Math.max(maxSum, currentSum)
    }
        return console.log(maxSum > 0 ? maxSum : 0);
}

getMaxSubSum([2, 8, -5, -1, 2, -3, -2])
