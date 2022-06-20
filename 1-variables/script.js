//1.1 Types simples
const name = 'Jacques';
let age = 80;
let useless = 'something';

console.log(name, age, useless);

age += 1; // age est une constante, elle ne peut etre modifée par la suite 
useless = 14;

console.log(name, age, useless); 

//----------------------//
//1.2 Tableaux
const fruits = ['apple', 'pear', 'cherry'];
const vegetables = ['potato', 'curlyflower', 'tomato'];
//on peut modifier une array en const 

console.log(fruits, vegetables);

fruits.push('banana');
vegetables.pop();

console.log(fruits, vegetables);

//----------------------//
//1.3 Objets

const settings = {
   sound: true,
   music: false,
   graphics: 'high',
   resolution: [1920, 1080],
};

let savedGame = {
   time: 384,
   score: 47,
   opponent: 'Lolo',
};

console.log(settings, savedGame);

savedGame = {}; // on neut peut pas enlever les valeurs d'un objet const
settings.music = true; 
settings.resolution = [3840, 2160];  // on put peut modifier les valeurs d'un objet const 

console.log(settings, savedGame);
