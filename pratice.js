function bubble_Sort(arr){
   let swapped;
   do{
    swapped=false;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            swapped=true
        }
    }
   
   }
  
   while(swapped);
   return arr
}
console.log(bubble_Sort([1,5,8,3,4]));
//insertion sort
function Insertion_Sort(arr){
for(let i=0;i<arr.length;i++){
    let current=arr[i]
    j=i-1                                               
    while(j>=0 &&arr[j]>current){
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1]=current
 
}
return arr
}
console.log(Insertion_Sort([1,5,8,3,4]));
//mergesort
function sort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    
    let medium = Math.floor(arr.length / 2);
    let left = arr.slice(0, medium);
    let right = arr.slice(medium);
    
    // Corrected function call
    return mergesort(sort(left), sort(right));
}

function mergesort(left, right) {
    let result = [];
    let leftBox = 0;
    let rightBox = 0;
    
    // Merge the two arrays
    while (leftBox < left.length && rightBox < right.length) {
        if (left[leftBox] < right[rightBox]) {
            result.push(left[leftBox]);
            leftBox++;
        } else {
            result.push(right[rightBox]);
            rightBox++;
        }
    }
    
    // Concatenate remaining elements
    return result.concat(left.slice(leftBox)).concat(right.slice(rightBox));
}

// Correct function call
console.log(sort([2, 1, 4, 3]));
//quick sort
function quicksort(arr,low=0,high=arr.length-1){
    if(low<high){
        let pivotIndex=partition(arr,low,high)
        quicksort(arr,low,pivotIndex-1)
        quicksort(arr,pivotIndex+1,high)
        
    }
    return arr
}

function partition(arr,low,high){
    let pivot=arr[high]
    let i=low-1
for(let j=low;j<pivot;j++){
    if(arr[j]<pivot){
        i++
        [arr[i],arr[j]]=[arr[j],arr[i]]
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]]
}
[arr[i+1],arr[high]]=[arr[high],arr[i+1]]
return i+1
}
console.log(quicksort([3,2,1]));

