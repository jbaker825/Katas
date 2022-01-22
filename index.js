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