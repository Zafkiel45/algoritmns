# The quick sort algorithm thar required an array of numbers 
# The order of numbers no matter 
# The result is a ordered array of numbers
def quickSort(arr):
  # if an array has a single item or it is empty, the array already is ordered
  if len(arr) < 2:
    return arr;
  else:
    pivot = arr[0]; # Arbitrary number to comparison between other item on array
    smaller_numbers = [i for i in arr[1:] if i < pivot]; # get all items smaller than pivot
    greater_numbers = [i for i in arr[1:] if i > pivot]; # get all items greater than pivot
    return quickSort(smaller_numbers) + [pivot] + quickSort(greater_numbers); # the quickSort must order the subarrays too

# MENTAL STEP-STEP VIEW OF QUICKSORT 
# get the 10 and store in "pivot" | pivot = arr[0]
# iterate over the array (less the first item, the pivot), get all item smaller than pivot and store it at a subarray
# Do the same thing again, but to greater items than pivot
# the smaller array is: [5, 2,3]
# the greater array is: []
# call the quickSort() recursively two times with smaller item and greater items, respectively 

# THE RECURSIVE CALL OF quickSort(smaller_numbers):
# get the 5 and store it in pivot 
# get all items smaller than pivot(5) and store it in a subarray 
# get all items greater than pivot(5) and store it in a subarray 
# the smaller array is: [2,3] 
# the greater array is: []
# Again, the same above process 
# pivot is 2 now 
# the number 3 is greater than 2, so the smaller_numbers is empty
# the greater array s: [3]
# the same process occurs again, but [3] has a length of 1, so the [3] is returned
# this frame is removed from stack, returning to when pivot was 2. 
# the function returns: [2,3]
# removing the function from stack 
# returning to when pivot was five 
# the function returns [2,3,5]
# removing function from stack
# returning to when pivot was 10 
# the function returns [2,3,5,10]
print(quickSort([10, 5, 2, 3]));