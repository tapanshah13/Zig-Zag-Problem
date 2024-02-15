function convert(s, numRows) {
    // Return the original string if numRows is 1, as there is no zigzag pattern.
    if (numRows === 1) return s;

    // Length of the input string
    const len = s.length;

    // Length of each cycle in the zigzag pattern by adding number of rows and diagonal element which is number of raw minus 2
    const cycle = numRows + numRows - 2;

    // Initialize the result string
    let result = '';

    // Iterate through each row in the zigzag pattern
    for (let i = 0; i < numRows; i++) {
        // Initialize the index for the current element
        let diagonalIndex = i;

        // Initialize the index for the diagonal character in the same loop which will minus the number of element we need to skip after every iteration
        let alternateDiagonalIndex = cycle - i;

        // Loop until the diagonal index goes beyond the length of the input string
        while (diagonalIndex < len) {
            // Add the character at the diagonal index to the result string
            result += s[diagonalIndex];
            
            // If the current row is not the first or last row, and the alternate diagonal index
            // is within the bounds of the input string, add the character at the alternate diagonal index (elements which will be in diagonal pattern)
            if (i !== 0 && i !== numRows - 1 && alternateDiagonalIndex < len) {
                result += s[alternateDiagonalIndex];
            }

            // Move to the next position in the cycle by adding the cycle length
            diagonalIndex += cycle;
            
            // Move to the next position for the alternate diagonal by adding the cycle length
            alternateDiagonalIndex += cycle;
        }
    }

    // Return the resulting zigzag pattern
    return result;
}

// Example usage:
const s = "PAYPALISHIRING";
const numRows = 3;
console.log(convert(s, numRows));