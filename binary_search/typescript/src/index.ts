const ordernedList = [1,3,4,5,10,12,15,18];

type BinarySearchSignature = {
  steps: number;
  currentValue: number;
  middle: number;
}

function binarySearch(list: number[], target: number): BinarySearchSignature | null {
  let start = 0;
  let end   = list.length - 1;
  let steps = 0;

  while(start <= end) {
    const middle = Math.floor((start + end) / 2);
    const currentValue = list[middle];

    if(typeof currentValue === 'undefined') {
      return null;
    };

    if(currentValue === target) {
      return { steps, middle, currentValue};
    } else if(currentValue < target) {
      start = middle + 1;
    } else {
      end = middle - 1; 
    };

    steps++;
  };

  return null;
};

console.log("Position: ", binarySearch(ordernedList, 18)?.middle);
console.log("Logarithm: ", binarySearch(ordernedList, 18)?.steps);
console.log("Value", binarySearch(ordernedList, 18)?.currentValue);