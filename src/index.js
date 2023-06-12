export function reverseString(startString) {
    if (startString) {
        console.log(startString[0]);
        let resultString = '';
        for (let i = 0; i < startString.length; i++) {
            resultString += startString[startString.length - i - 1];
        }
        return resultString;
    } else return 'error';
}