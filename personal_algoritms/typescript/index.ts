const arr = [2, 4, 6];

function sumArr(arr: number[], idx: number): number {
  if(idx < 0) {
    return 0;
  } else {
    console.log(`${(arr[idx] as number)}`)
    return (arr[idx] as number) + sumArr(arr, idx - 1);
  }
};

console.log(sumArr(arr, arr.length -1));