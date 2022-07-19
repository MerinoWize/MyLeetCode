/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let highestSubstringLen = 0;
    let visitedChars = {};
    let currentSubstringLen = 0;
    let subStart = 0;
    let subEnd = 0;

    for (subEnd; subEnd < s.length; subEnd++) {
        const currentChar = s[subEnd];

        if (Object.keys(visitedChars).includes(currentChar)) {
            const posOfPrevious = visitedChars[currentChar];
            subStart = posOfPrevious > subStart ? posOfPrevious : subStart;
        }

        currentSubstringLen = (subEnd + 1) - subStart;

        visitedChars[currentChar] = subEnd + 1;

        if (currentSubstringLen > highestSubstringLen) { 
            highestSubstringLen = currentSubstringLen;
        }
        
    }
    
    return highestSubstringLen;
};