const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let decodedStr = "";
    const iLength = expr.length;
    if (!(iLength % 10)) {
        for (let i = 0; i < iLength / 10; i++) {
            let element = expr.substring(i * 10, (i + 1) * 10);
            if (element === "**********") {
                decodedStr = decodedStr.concat(" ");
            } else {
                element = element.replace(/00/g, '').replace(/10/g, ".").replace(/11/g, "-");
                decodedStr = decodedStr.concat(MORSE_TABLE[element]);
            }
        }
    }
    return decodedStr;
}

module.exports = {
    decode
}