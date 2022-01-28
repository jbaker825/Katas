(7 kyu) Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

    Solution:

    function findShort(s) {
        let arr = s.split(" ").sort((a, b) => a.length - b.length);
        return arr[0].length
    }

___________________________________________________________________________

    (8 kyu) Reversed Strings

Complete the solution so that it reverses the string passed into it.    

'world'  => 'dlrow'
'word'   => 'drow'_________________

Solution:

function solution(str) {
    return str.split('').reverse().join('')
}

___________________________________________________________________________

    (8 kyu) Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.Return the resulting string.

    Note: input will never be an empty string

Solution:

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

___________________________________________________________________________

    (8 kyu) Calculate BMI 

    Write function bmi that calculates body mass index(bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"


Solution:

function bmi(weight, height) {
    let bmi = (weight) / (height * height)
    if (bmi <= 18.5)
        return "Underweight"
    else if (bmi <= 25.0)
        return "Normal"
    else if (bmi <= 30.0)
        return "Overweight"
    else (bmi > 30)
    return "Obese"
    return "";
}

___________________________________________________________________________

    (7 kyu) Sum of two lowest positive integers

    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.No floats or non - positive integers will be passed.

For example, when an array is passed like[19, 5, 42, 2, 77], the output should be 7.


Solution:

function sumTwoSmallestNumbers(numbers) {
    let [a, b] = numbers.sort((a, b) => a - b)
    return a + b
}

