type RecResult = { index: number; steps: number } | null;

function binarySearchRecursive(
  arr: number[],
  target: number,
  low = 0,
  high = arr.length - 1,
  steps = 0
): RecResult {
  if (low > high) return null;

  const mid = Math.floor((low + high) / 2);
  const value = arr[mid] as number;
  steps++;

  if (value === target) {
    return { index: mid, steps };
  } else if (value < target) {
    return binarySearchRecursive(arr, target, mid + 1, high, steps);
  } else {
    return binarySearchRecursive(arr, target, low, mid - 1, steps);
  }
}

// Usage
const data = [1, 3, 4, 5, 10, 12, 15, 18];
console.log(binarySearchRecursive(data, 10)); // { index: 4, steps: 3 }
