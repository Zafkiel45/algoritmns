# Search for the smaller value in the Array. 
# First: Get the first element from Array 
# Declare a for loop, whose start from 1 until the length of array 
# So get the element based on current range value, compare with the current value of array
# if the current value is smaller, update the "menor" and "menor_indice"
def buscaMenor(arr):
  menor = arr[0];
  menor_indice = 0;

  for i in range(1, len(arr)):
    if arr[i] < menor:
      menor = arr[i];
      menor_indice = i;
  return menor_indice;
# Create a new array for the ordered list 
# Loop over the array desordered
# call "buscaMenor" for get the smaller value and push it to the new array 
def ordernacaoPorSelecao(arr):
  novoArr = [];
  for i in range(len(arr)):
    menor = buscaMenor(arr);
    novoArr.append(arr.pop(menor));
  return novoArr;
print(ordernacaoPorSelecao([10,3,199,24,11]));