function sort(arr) {
  if (arr.length <= 1) {
      return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = sort(arr.slice(0, middle));
  let right = sort(arr.slice(middle));
  return mergeSort(left, right);
}

function mergeSort(left, right) {
  let result = [];
  let leftBox = 0;
  let rightBox = 0;

  while (leftBox < left.length && rightBox < right.length) {
      if (left[leftBox] < right[rightBox]) {
          result.push(left[leftBox]);
          leftBox++;
      } else {
          result.push(right[rightBox]);
          rightBox++;
      }
  }

  // Add the remaining elements from both arrays
  return result.concat(left.slice(leftBox)).concat(right.slice(rightBox));
}

console.log(sort([2, 5, 3, 1])); // Output: [1, 2, 3, 5]
