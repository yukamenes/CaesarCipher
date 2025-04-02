function caesarCipher(text, shift, mode) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    if (mode === "decode") {
        shift *= -1;
    }

    for (let char of text) {
        let lowerChar = char.toLowerCase();
        if (alphabet.includes(lowerChar)) {
            let newIndex = (alphabet.indexOf(lowerChar) + shift) % 26;
            if (newIndex < 0) newIndex += 26;
            result += (char === char.toUpperCase()) 
                ? alphabet[newIndex].toUpperCase() 
                : alphabet[newIndex];
        } else {
            result += char;
        }
    }
    
    return result;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("runCipher").addEventListener("click", function() {
        let text = document.getElementById("textInput").value;
        let shift = parseInt(document.getElementById("shiftInput").value) || 0;
        let mode = document.getElementById("mode").value;

        document.getElementById("output").textContent = caesarCipher(text, shift, mode);
    });
});
