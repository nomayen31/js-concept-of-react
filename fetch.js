const student = {
    name: 'nomayen hossain ohin',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

const studentJSON = JSON.stringify(student);
// console.log(studentJSON);

const studentParse = JSON.parse(studentJSON)
// console.log(studentParse);

// fetch('url')
    // .then(res => res.json())
    // .then(data => console.log(data))

    const numbers = [23,54,67,87,23,78];
    numbers.forEach(num => console.log(num));

    numbers.map(num => num * 3)
