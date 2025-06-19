function smallSearch(arr: number[]): number {
  let smallerNum = arr[0] as number;
  let smallerIndice = 0;

  for(let idx = 1; idx < arr.length; idx++) {
    if((arr[idx] as number) < smallerNum) {
      smallerNum = arr[idx] as number;
      smallerIndice = idx;
    };
  };

  return smallerNum;
}; 

function selectionOrder(arr: number[]) {
  const newArr = [];
  for(const num of arr) {
    const smallerNum = smallSearch(arr);
    newArr.push(arr.filter((num) => num === smallerNum)[0]);
    arr = arr.filter((num) => num !== smallerNum);
  };
  return newArr;
};

console.log(selectionOrder([10,3,199,24,11]))