/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    const expandAroundCenter = (s, left, right) => {
        let L = left;
        let R = right;

        while (L >= 0 && R < s.length && s[L] == s[R]) {
            L --;
            R ++;
        }
        return R - L - 1;
    };

    if (s.length === 0) return "";

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i + 1);
        const len = Math.max(len1, len2);
        if (len > (end - start)) {
            start = Math.round(i - (len - 1) / 2);
            end = Math.round(i + len / 2);
        }
    }

    return s.substring(start, end + 1);

};

console.log(longestPalindrome('cbbd'));