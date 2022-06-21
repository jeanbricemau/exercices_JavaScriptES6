//4.1 Découverte

const [a, b , c , d] = [1, 2, 3, 4]
console.log(a)
console.log(b)
console.log(c);

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35}

console.log(first)
console.log(last)
console.log(age)


//   id: 108939,
//   dateDebut: '07/01/2019 05:20',
//   dateFin: '31/12/2050 23:59',



let dataArray = Object.values(data)
let data2 = []
    for(let i = 0; i < dataArray.length; i++){
      data2[i] = [ `id : ${dataArray[i].id}`,  `dateDebut : ${dataArray[i].dateDebut}`,`dateFin : ${dataArray[i].dateFin}`]
    }


console.log(data2[0][0])

 