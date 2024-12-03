function BubbleSort(arr){
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]; 
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    
    return arr;
}

console.log(BubbleSort([2, 8, 3, 6, 1]));
//Another way
let arr=[9,4,3,8,1]
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log(arr);

