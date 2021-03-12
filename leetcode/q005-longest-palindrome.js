function longestPalindrome(str) {
    if (str && str.length <= 0) {
        return null
    }

    let longest = 1
    let start = 0

    for (let i = 0; i < str.length; i++) {
        findLongest(i - 1, i + 1)
        findLongest(i, i + 1)

        function findLongest(j, k) {
            while (j >= 0 && k < str.length && str[j] === str[k]) {
                if (k - j + 1 > longest) {
                    longest = k - j + 1
                    start = j
                }

                j--
                k++
            }
        }
    }

    return str.substr(start, longest)
}

function longestPalindromeDP(str) {
    if (str && str.length <= 0) {
        return null
    }

    const dp = []
    for (let i = 0; i < str.length; i++) {
        dp[i] = []
    }

    let longest = 1
    let start = 0

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (i - j < 2) {
                // i next to j of i == j
                dp[j][i] = str[i] === str[j]
            } else {
                // Compare, then bring i and j closer.
                dp[j][i] = str[i] === str[j] && dp[j + 1][i - 1]
            }

            // Found a longer one.
            const distance = i - j + 1
            if (dp[j][i] && longest < distance) {
                longest = distance
                start = j
            }
        }
    }

    return str.substr(start, longest)
}

module.exports = {
    longestPalindrome,
    longestPalindromeDP,
}