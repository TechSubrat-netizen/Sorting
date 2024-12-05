// function quickSort(arr,low=0,high=arr.length-1){
//     if(low<high){
//         let pivotIndex=partition(arr,low,high)
//         quickSort(arr,low,pivotIndex-1)
//         quickSort(arr,pivotIndex+1,high)
//     }
//     return arr
   
// }
// function partition(arr,low,high){
//     let pivotIndex=arr[high]
//     let i=low-1
//     for(let j=low;j<high;j++){
//         if(arr[j]<pivotIndex){ 
//             i++
//             [arr[i],arr[j]]=[arr[j],arr[i]]

//         }
      
//     }
//     [arr[i+1],arr[high]]=[arr[high],arr[i+1]]
//     return i+1
    

// }
// console.log(quickSort([1,5,3,8,2]));
let arr=[3,7,2,10,1]
sort(arr,0,arr.length-1)
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    
}
console.log(arr);


function sort(arr,start,end){
    if(start>end) return ;
    let i=start;
    let j=end;
    let pivot=Math.trunc((start+end)/2)
    while(arr[i]<arr[pivot])i++;
    while(arr[j]>arr[pivot])j--;
    if(i<=j){   
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--
    }
    sort(arr,start,j);
    sort(arr,i,end);
}
