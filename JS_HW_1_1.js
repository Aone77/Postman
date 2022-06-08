
// const checkAge = function (age) {
//     if (age > 17) {
//         console.log("Родители разрешили")
//     }
// }

// let age = 18;

// if (typeof (age) == "number") {
//     if (age >= 18 && age < 60) {
//         console.log("Full")
//     }
//     else if (age < 18){
//         console.log("Mult")
//     }
//     else if (age >= 60) {
//         console.log ("Kultura")
//     }
// } else {
//     console.log("Good Luck!")
// }

// const checkAge = function (age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61



// let age_1 = 17;
// let age_2 = 18;
// let age_3 = 60;


// const checkAge = (age) => {
//     const minimum = 18;
//     return age >= minimum;
// };

const checkAge = function (age) {
    age = Number(age)

    if (!isNaN(age)) {
        if (Number(age)) {
            if (+age) {
                if (age < age_2) {
                    console.log("You don't have access cause your age is\t" + age + "\tit's less then\t" + age_2);
                }
                else if (age >= age_2 && age < age_3) {
                    console.log("Welcome !")
                }
                else if (age > age_3) {
                    console.log("Keep calm and look Culture channel")
                }
                else {
                    console.log("Technical work")
                }
            } else { console.log("Not inreger value") }
        }
        checkAge(25)
        checkAge(61)
        checkAge("-22")

        let agePrompt = prompt('Enter age')

        // checkAge(agePrompt)
