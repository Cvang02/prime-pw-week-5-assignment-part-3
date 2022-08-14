console.log('***** Music Collection *****')

// - Create a variable `collection` that starts as an empty array.

let collection = [];

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

function addToCollection(title, artist, yearPublished, tracks) {
    const albums = {
        title ,
        artist ,
        yearPublished ,
        tracks: [tracks]
    }
    collection.push(albums)
    return albums;
}

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both 
// same and different artists and published years. 
// (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

console.log(addToCollection('Be','BTS',2020,[{
    track1: {
        trackName: 'Life Goes On',
        duration: '3:28'
    },
    track2: {
        trackName: 'Stay',
        duration: '3:25'
    },
    track3: {
        trackName: 'Dynamite',
        duration: '3:19'
    }
}]));

console.log(addToCollection('MAP OF THE SOUL: PERSONA ','BTS', 2019,[{
    track1: {
        trackName:'Boy with LUV',
        duration: '3:50'},
    track2: {
        trackName: 'Make It Right',
        duration: '3:26'
    }
}]));

console.log(addToCollection('You Never Walk Alone','BTS', 2017,['N/A']));
console.log(addToCollection('Square two','BlackPink',2017,['N/A']));
console.log(addToCollection('Kill This Love','BlackPink',2019,['N/A']));
console.log(addToCollection('The Album','BlackPink',2020,['N/A']));



// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, 
// like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information 
// formatted like: `TITLE by ARTIST, published in YEAR`.
// - Test the `showCollection` function.

console.log ('Albums Information formatted to Title by Artist, published in year: plus tracks!!!');

function showCollection (array) {
    for (i=0; i<array.length; i++) {
        console.log (array[i].title, 'by', array[i].artist, ',published in', array[i].yearPublished,
        ' - Including title tracks:', array[i].tracks);
    } // end of for-loop.
 return collection;
} //end of showCollection-function.

console.log(showCollection(collection));


// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.
//   - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection,
//  as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
// > When testing your functions, write all tests in the JavaScript file!

function findByArtist(artist) {
    let findArtist = [];
      for (let singers of collection) {
        if (singers.artist === artist) {
        findArtist.push(singers);
        } // end of if-statement.
        // else if ( singers.artist !== artist ) {
        // findArtist.push('no match');     
        // }    
    } // end of for-loop.
    return findArtist;
} // end of findByArtist-function.

console.log('Should Show 3 Album from BTS:',findByArtist('BTS'));
console.log('Should Show 3 Album from BlackPink:',findByArtist('BlackPink'));
console.log('No Matched Founded',findByArtist('Random Singer'));


// ### Stretch goals

// - Create a function called `search`. This function should:
// - Take an input parameter for a search criteria object. 
//   Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
// - The returned output from `search` should meet these requirements:
// - Return a new array of all items in the `collection` matching *all* of the search criteria.
// - If no results are found, return an empty array.
// - If there is no search object or an empty search object provided 
//   as input, then return all albums in the `collection`.

function search (albumArtist, year) {
    let searchArtist = [];
      for (let idol of collection) {
        if (idol.artist === albumArtist && idol.yearPublished === year) {
                searchArtist.push(idol);
                    return searchArtist;
        } //end of if-statement.
    } //end of for-loop. 
} //end of search-function.

console.log(search ('BTS', 2017));
console.log(search ('BlackPink', 2019));
console.log(search ('BTS', 5000)); // should return as an empty array.
console.log(search ()); // should return as collection. 


// - Add an array of `tracks` to your album objects. Each track should have a `name` 
//   and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with 
//     its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// 