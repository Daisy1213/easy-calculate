function calculate_median(arr) {
  //请勿改动函数名
    var evenums = new Array(),
        sortarr = new Array();

    for(var i = 0; i < arr.length; i++){
        if((i + 1) % 2 == 0){
            evenums.push(arr[i]);
        }
    }

    sortarr = sortArray(evenums);
    var median = getMedian(sortarr);
    return median ;
}

function sortArray(arrs){
    var temp;

    for(var i = 0; i < arrs.length - 1; i++){
        if(arrs[i] >= arrs[i + 1]){
            temp = arrs[i];
            arrs[i] = arrs[i + 1];
            arrs[i + 1] = temp;
        }
    }

    return arrs;
}

function getMedian(arr){
    if(arr.length % 2 == 0){
        return (arr[arr.length / 2 - 1] + arr[arr.length / 2 ]) / 2;
    }else{
        return arr[Math.ceil(arr.length / 2) - 1];
    }
}

module.exports = calculate_median;
