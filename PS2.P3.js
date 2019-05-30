function cubes (anArrayVal) {

    return anArrayVal * anArrayVal * anArrayVal;
}

const newarray= [1,2,3,4,5,6,7].map(x=>cubes(x))
console.log(newarray);