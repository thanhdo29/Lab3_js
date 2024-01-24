const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];
//1
dogs.forEach(dog => {
    dog.recommendedFood = dog.weight ** 0.75 * 28
})
console.log(dogs);

//2
const dogsSarah = dogs.find(dog => {
    return dog.owners.includes('Sarah')
})
console.log(dogsSarah);
console.log(`cho cua Sarah an qua ${dogsSarah.curFood > dogsSarah.recommendedFood ? 'nhieu' : 'it'}`);

//3
const ownersEatTooMuch = dogs.filter(dog => {
    return dog.curFood > dog.recommendedFood
}).map(dog => {
    return dog.owners
}).flat()
console.log(ownersEatTooMuch);

//
const ownersEatTooLittle = dogs.filter(dog => {
    return dog.curFood < dog.recommendedFood
}).map(dog => {
    return dog.owners
}).flat()
console.log(ownersEatTooLittle);

//4
console.log(`${ownersEatTooMuch.join(' and ')       }`);
console.log(`${ownersEatTooLittle.join(' and ')      }`);

//5
console.log(dogs.some(dog => {
    return dog.curFood === Math.recommendedFood
}));

//6
console.log(dogs.some(dog => {
    return dog.curFood > dog.recommendedFood*0.9 && dog.curFood < dog.recommendedFood* 1.1
}));

//7
const dogs1 = dogs.filter(dog =>{
    return dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1

})
console.log(dogs1);

//8
const dog_new = dogs.slice().sort((a,b) => a.recommendedFood - b.recommendedFood)
console.log(dogs, dog_new);




