var frequencySort = function(s) {
    let frequencies = {}

    s = s.split('')

    for (let i = 0; i < s.length; i++) {
        if (frequencies[s[i]] === undefined) {
            frequencies[s[i]] = 1
        } else {
            frequencies[s[i]]++
        }
    }

    //sorts them based on frequencies (Object.entries makes it into a nested array based on key and value pairings)
    let sortedKeys = Object.entries(frequencies).sort((a,b) => b[1] - a[1])

    let newString = ''
    for (let i = 0; i < sortedKeys.length; i++) {
        while (sortedKeys[i][1] > 0) {
            newString += sortedKeys[i][0]
            sortedKeys[i][1]--
        }
    }

    return newString
};
