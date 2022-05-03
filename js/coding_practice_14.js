const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi']; //, 'Sam'

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const studentsLength = students.length;
//     let newArr = [];
//     let result = 'Оставшиеся студенты:';
//     const divisionRemainder = studentsLength % 3;//остаток от деления кол-ва студентов на 3
//     const arrAll = studentsLength - divisionRemainder;
    
//     if (studentsLength % 3 === 0) {
//         for (let i = 0; i < studentsLength; i = i + 3) {
//             newArr.push(arr.slice(i, i + 3));
//         }
//         const a = `${result} - `;
//         newArr.push(a);
//         return newArr;
//     } else {
//         for (let i = 0; i < arrAll; i = i + 3) {
//             newArr.push(arr.slice(i, i + 3));
//         }
//         const a = `${result} ${arr.slice(-divisionRemainder).join(', ')}`;
//         newArr.push(a);
//         return newArr;
//     }

// }

// console.log(sortStudentsByGroups(students));


//Второй вариант решения, решение от Петреченко
function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

console.log(sortStudentsByGroups(students));

function alphabetPosition(text) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    console.log(alphabet.indexOf('a'));
    
    return text;

}