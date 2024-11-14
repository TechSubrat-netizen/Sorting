function quickSort(arr,low=0,high=arr.length-1){
    if(low<high){
        let pivotIndex=partition(arr,low,high)
        quickSort(arr,low,pivotIndex-1)
        quickSort(arr,pivotIndex+1,high)
    }
    return arr
   
}
function partition(arr,low,high){
    let pivotIndex=arr[high]
    let i=low-1
    for(let j=low;j<high;j++){
        if(arr[j]<pivotIndex){ 
            i++
            [arr[i],arr[j]]=[arr[j],arr[i]]

        }
      
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]]
    return i+1
    

}
console.log(quickSort([1,5,3,8,2]));
