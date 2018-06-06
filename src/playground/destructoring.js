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
/////////////////////////// Chanllenge Time niggers yo
const book = {
    title: 'Ego is the enemy',
    authory: 'Frank Simons',
    publisher: {
        name: 'Penguin Studios'
    }
};

const {name: publisherName = 'selfpublished'} = book.publisher;
console.log("Challenge"+publisherName);