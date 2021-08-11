const person = {
    name : 'Emmanuel',
    age : 25,
    myDetails(city1,city2){
       console.log('my name is ' + this.name + ' and my age is ' + this.age + '' + city1 + city2)
    }
}
//spread operator
const copiedPerson = {...person}
const {name} = person;
console.log(name)
const person1 = {
    name : 'Joseph',
    age : 32
}
const person2 = {
    name : 'Wafula',
    age : 58
}

const myNumbers = (...nums) => {
    return nums
}
console.log(myNumbers(1,2,54,77,95,447,656,444))
person.myDetails.apply(person1,['tokyo','rio'])

setTimeout(()=>{
    console.log('timer is done')
},8000)