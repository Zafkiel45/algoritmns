ordened_list = [1,3,4,5,10,12,15,18];

def binarySearch(list, target): 
  start = 0;
  end   = len(list) - 1; 
  steps = 0;

  while(start <= end):
    middle = (start + end) // 2;
    current_value = list[middle];

    if current_value == target:
      return { "value": current_value, "logarithm": steps, "position": middle};
    elif current_value < target: 
      start = middle + 1;
    else:
      end = middle - 1;
    steps += 1;
  return None;

print("Logarithm: ", binarySearch(ordened_list, 18)["logarithm"]);
print("Position: ", binarySearch(ordened_list, 18)["position"]);
print("Value: ", binarySearch(ordened_list, 18)["value"]);
