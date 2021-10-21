const movies = [
    {title: 'a', year: 2018, rating: 4.5 },
    {title: 'b', year: 2018, rating: 4.7 },
    {title: 'c', year: 2018, rating: 3 },
    {title: 'd', year: 2017, rating: 4.5 },
];

//All the moives in 2018 with rating > 4 
//Sort them by thier rating
//Descending order
//pick thier title


function selectMovie(movies) {
    let array = [];

    for (let element of movies) {
        if (element.year === 2018 && element.rating > 4) array.push(element);
    }
    array.sort(function(a, b) {
        if (a.rating < b.rating) return -1;
        if (a.rating > b.rating) return 1;
        return 0;
    })
    array.reverse();
    const output = [];
    for (let i of array)
        output.push(i.title);
    return output;
}

const output = selectMovie(movies);
console.log(output);

//using array prototype
const selectMovie1 = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(selectMovie1)