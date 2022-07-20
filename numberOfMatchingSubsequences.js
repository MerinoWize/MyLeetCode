/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
 var numMatchingSubseq = function(s, words) {
    let matchingSubs = [];

    for (let i = 0; i < words.length; i++) {
        const word =  words[i];

        let j = 0;
        let isValidSub = true;
        let currentLatestIndex = -1;

        while (j < word.length && isValidSub) {
            const char = word[j];

            let indexOfChar = s.indexOf(char, (currentLatestIndex + 1));
            if (indexOfChar !== -1) {
                currentLatestIndex = indexOfChar;
            } else {
                isValidSub = false;
            }



            j++;
        }
        
        j = 0;
        currentLatestIndex = -1;

        if (isValidSub) {
            matchingSubs.push(word);
        }

        isValidSub = true;
    }

    return matchingSubs.length;
};