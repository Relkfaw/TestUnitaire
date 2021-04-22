export default class Exercice2 {
    static is_leap_year_v1(number): Boolean{
        return false
    }

    static is_leap_year_v2(number): Boolean{
        return number%400 === 0
    }

    static is_leap_year_v3(number): Boolean{
        return number%400 === 0
    }

    static is_leap_year_v4(number): Boolean{
        return (number%400 === 0 || number%4 === 0) && number%100!==0
    }

    static is_leap_year_v5(number): Boolean{
        return (number%400 === 0 || number%4 === 0) && number%100!==0
    }
}