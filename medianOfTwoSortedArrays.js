/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let biggerArray, smallerArray;

    if (nums1.length >= nums2.length) {
        biggerArray = [...nums1];
        smallerArray = [...nums2];
    } else {
        biggerArray = [...nums2];
        smallerArray = [...nums1];
    }

    let smallArrVal = smallerArray.pop();


    for (let i = (biggerArray.length - 1); i >= 0; i--) {
        const bigArrVal = biggerArray[i];

        if (smallArrVal <= bigArrVal && smallArrVal > biggerArray[i - 1]) {
            biggerArray.splice(i, 0, smallArrVal);
            smallArrVal = smallerArray.pop();
            i ++;
        } else if (i === (biggerArray.length - 1) && smallArrVal > bigArrVal) {
            biggerArray.push(smallArrVal);
            smallArrVal = smallerArray.pop();
            i += 2;
        } else if (i === 0 && smallArrVal && smallArrVal < bigArrVal) {
            biggerArray = [smallArrVal, ...biggerArray];
            smallArrVal = smallerArray.pop();
        }
    }

    if (typeof smallArrVal === 'number') {
        smallerArray.push(smallArrVal);
    }

    if (smallerArray.length) {
        biggerArray = [...smallerArray, ...biggerArray];
    }

    const medianIndex = biggerArray.length / 2;

    let median = 0;

    if (Number.isInteger(medianIndex)) {
        median = (biggerArray[medianIndex] + biggerArray[medianIndex - 1]) / 2;
    } else {
        median = biggerArray[Math.trunc(medianIndex)];
    }


    return(median);
};