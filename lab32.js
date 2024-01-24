const checkDogs = (dogsJulia, dogsKate) => {
    //1
    console.log(dogsJulia,dogsKate);
    // const dogsJulia_new = [...dogsJulia]

    const dogsJulia_new = dogsJulia.slice();

    console.log(dogsJulia_new);

    dogsJulia_new.splice(0, 1);
    dogsJulia_new.splice(-2);

    console.log(dogsJulia_new);

    //2
    // const dogs = [...dogsJulia_new, ...dogsKate]

    const dogs = dogsJulia_new.concat(dogsKate);
    console.log(dogs);

    //3
    //c1
    for (const [i, age] of dogs.entries()) {
        if (age >= 3) {
            console.log(`cho so ${i+1} la cho truong thanh`);
        }else{
            console.log(`cho so ${i+1} la cho con`);
        }
    }
  
    //c2
    dogs.forEach((age, i, arr) => {
        if (age >= 3) {
            console.log(`cho so ${i+1} la cho truong thanh`);
        }else{
            console.log(`cho so ${i+1} la cho con`);
        }
    });

}

checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3])


