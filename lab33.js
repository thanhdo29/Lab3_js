
//lab3.3
const calcAverageHumanAge = (ages) => {
    //1
    console.log(ages);
    //c1
    // const humanAge = [];
    // for (const age of ages) {
    //     let new_age = (age <= 2) ? age*2 : 16+age*4
    //     humanAge.push(new_age)
    // }
    // console.log(humanAge);

    //c2
    const humanAge = ages.map(age => {
        return (age <= 2) ? age*2 : 16+age*4
    })
    console.log(humanAge);

    //2
    //c1
    // const dogs18t = []
    // for (const age of humanAge) {
    //     if (age >= 18) {
    //         dogs18t.push(age)
    //     }
    // }
    // console.log(dogs18t);

    //c2
    const dogs18t = humanAge.filter(age => {
        return age>=18
    })
    console.log(dogs18t);

    //3
    let total = dogs18t.reduce((sum, age) => {
        return (sum + age) 
    }, 0)

    console.log(`tong tb: ${total/dogs18t.length}`);

    




}
calcAverageHumanAge([5,2,4,1,15,8,3])

