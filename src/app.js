// Es6 Object destructuring makes shit way easier & simplier by neglecting variable names to cut down time. 
const person = {
    name: 'Lyndle',
    age: 28, 
    location: {
        city: 'Washington',
        temp: 94
    }
};
// Normally folks would be doing this to reference the person object
console.log("Hello my name is" + person.name);
// But with es-6 syntax object destructuring we can reference multiple data from one object in one line & do it easier faster etc.
// When using = we can set the default value if that object name does not exist. Instead of NoN we get the default value
const {name: Nick ='Default Value',age = 0} = person;

console.log(Nick,age);
// For referencing objects within objects refer to the object name where it lives at
// If you want to name a name value pair to a different variable name just use : name to re-name it customly
const {city,temp:temperature} = person.location;

if(city && temperature){
    console.log(city,temperature);
}
//Challenge
const book = {
    title: 'Ego is the enemy',
    authory: 'Frank Simons',
    publisher: {
        name: 'Penguin Studios'
    }
};

const {name: publisherName = 'selfpublished'} = book.publisher;
console.log("Challenge"+publisherName);
// Array Destructuring
// For object destructuring we use {} & for array destructuring we use []
const address = ['15873 Chestnut rd.','Henries-Rollin','Georgia','93233-123'];
// When we access it normally its like this
console.log('Combining addresses'+address[3]+address[0]);
// New fast es6 array destructuring used with [] instead of {} 
const [street,arrayCity,state,zip] = address;
console.log(street+zip);
// If I only wanted to use the 3rd element in the array to access it we just place a , for each empty element in the array before that position
const [,fuckinCity,,theZip]=address;
console.log("the, skipped state array destructured statement"+fuckinCity+theZip );
// We can do the same thing with default values
const item = ['Coffee (hot)','$2.50','$3.00','$4.75'];
const [coffee='fuck you',,,Large] = item;
console.log("This is a "+coffee+"and it is "+Large);