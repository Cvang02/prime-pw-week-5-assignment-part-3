console.log('***** Music Collection *****')

// - Create a variable `collection` that starts as an empty array.

let collection = [];

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

function addToCollection(title, artist, yearPublished) {
    const album = {
        title ,
        artist ,
        yearPublished
    }
    collection.push(album)
    return album;
}
   
// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both 
// same and different artists and published years. 
// (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

console.log(addToCollection('Life Goes On','BTS',2020));
console.log(addToCollection('Make It Right','BTS', 2019));
console.log(addToCollection('Spring Day','BTS', 2017));
console.log(addToCollection('Playing with Fire','BlackPink',2017));
console.log(addToCollection('Kill This Love','BlackPink',2019));
console.log(addToCollection('Lovesick Girls','BlackPink',2020));
console.log(collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, 
// like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information 
// formatted like: `TITLE by ARTIST, published in YEAR`.
// - Test the `showCollection` function.

function showCollection (array) {
    console.log('The number of items in the array', array.length);
    for (let i=0; i<array.length; i++);
    console.log (array[0].title, 'by', array[0].artist, 'published in', array[0].yearPublished);
    console.log (array[1].title, 'by', array[1].artist, 'published in', array[1].yearPublished);
    console.log (array[2].title, 'by', array[2].artist, 'published in', array[2].yearPublished);
    console.log (array[3].title, 'by', array[3].artist, 'published in', array[3].yearPublished);
    console.log (array[4].title, 'by', array[4].artist, 'published in', array[4].yearPublished);
    console.log (array[5].title, 'by', array[5].artist, 'published in', array[5].yearPublished);
    return collection;
}

console.log(showCollection(collection));


// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.
//   - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection,
//  as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
// > When testing your functions, write all tests in the JavaScript file!


function findByArtist (artist) {
    let anArray = [];
    let singers = 'BTS'
    for (let i=0; i<artist.length; i++) {
        if (artist[i].artist === singers) {
            console.log(artist[i]);
            
        }
        else {
            return [];
        }
    }
}

console.log(findByArtist (collection));
// console.log(findByArtist ('BTS'));
// console.log(findByArtist ('BLackPink'));


// ### Stretch goals

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

// > Make sure to test all your code!