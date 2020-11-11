//bubbleSort
export const getBubbleSortAnimations = (array) => {
    const animations = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                animations.push([j, j + 1]);
            }
            else
                animations.push([j, j]);
        }
    }
    return animations;
}

//heapSort
export const getHeapSortAnimations = (array) => {
    const animations = [];
    let arrLength = array.length;
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
        heapify(array, arrLength, i, animations);
    }
    for (let i = array.length - 1; i > 0; i--) {
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        animations.push([0, i]);
        arrLength--;
        heapify(array, arrLength, 0, animations);
    }
    return animations;
}

const heapify = (array, arrLength, i, animations) => {
    const leftIndex = i * 2 + 1;
    const rightIndex = i * 2 + 2;
    let maxIndex = i;
    if (leftIndex < arrLength && array[leftIndex] > array[maxIndex]) {
        maxIndex = leftIndex;
    }
    if (rightIndex < arrLength && array[rightIndex] > array[maxIndex]) {
        maxIndex = rightIndex;
    }
    if (maxIndex !== i) {
        let temp = array[i];
        array[i] = array[maxIndex];
        array[maxIndex] = temp;
        animations.push([i, maxIndex]);
        heapify(array, arrLength, maxIndex, animations);
    }
}

//mergeSort
export const getMergeSortAnimations = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    const auxillaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxillaryArray, animations);
    return animations;
}

const mergeSortHelper = (mainArray,
    startIdx,
    endIdx,
    auxillaryArray,
    animations) => {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxillaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxillaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxillaryArray, animations);
}

const doMerge = (mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxillaryArray,
    animations) => {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxillaryArray[i] <= auxillaryArray[j]) {
            animations.push([k, auxillaryArray[i]]);
            mainArray[k++] = auxillaryArray[i++];
        } else {
            animations.push([k, auxillaryArray[j]]);
            mainArray[k++] = auxillaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxillaryArray[i]]);
        mainArray[k++] = auxillaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxillaryArray[j]]);
        mainArray[k++] = auxillaryArray[j++];
    }
}

//quickSort
export const getQuickSortAnimations = (array, low, high) => {
    const animations = [];
    quickSort(array, low, high, animations);
    return animations;
}

const quickSort = (array, low, high, animations) => {
    if (low < high) {
        let pi = partition(array, low, high, animations);
        quickSort(array, low, pi - 1, animations);
        quickSort(array, pi + 1, high, animations);
    }
}

const partition = (array, low, high, animations) => {
    let pivot = array[high];
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        if (array[j] < pivot) {
            i++;
            animations.push([i, j]);
            animations.push([i, j]);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            animations.push([i, j]);
        }
    }
    animations.push([i + 1, high]);
    animations.push([i + 1, high]);
    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    animations.push([i + 1, high]);
    return i + 1;
}

//Radix Sort
export const getRadixSortAnimations = (array) => {
    const animations = [];
    let maxValue = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxValue)
            maxValue = array[i];
    }

    const iterationCount = maxValue.toString().length;
    for (let digit = 0; digit < iterationCount; digit++) {
        const bucketArray = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < array.length; i++) {
            const digitValue = Math.floor(array[i] / Math.pow(10, digit)) % 10;
            bucketArray[digitValue].push(array[i]);
        }
        array = [].concat(...bucketArray);
        animations.push(array);
    }

    return animations;
}

//Shell Sort
export const getShellSortAnimations = (array) => {
    const animations = [];
    for (let gap = Math.floor(array.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < array.length; i++) {
            const temp = array[i];
            for (var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
                animations.push([j, array[j - gap]]);
            }
            array[j] = temp;
            animations.push([j, temp]);
        }
    }
    return animations;
}

//Insertion Sort
export const getInsertionSortAnimations = (array) => {
    const animations = [];
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            animations.push([j + 1, array[j + 1]]);
            j = j - 1;
        }
        array[j + 1] = temp;
        animations.push([j + 1, array[j + 1]]);
    }
    console.log(array);
    return animations;
}

//Selection Sort
export const getSelectionSortAnimations = (array) => {
    const animations = [];
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j])
                min = j;
        }
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
        animations.push([i, min]);
    }
    return animations;
}