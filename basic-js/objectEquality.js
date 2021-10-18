let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1

function Address(street, city, zipCode) {
    this.street = street;
    this.ciyt = city;
    this.zipCode = zipCode;     
}

function areEqual(address1, address2) {
    for (let key in address1) 
        if (address1[key] !== address2[key])
            return false;
    return true;
}

function areSame(address1, address2) {
    //The code I writte
    if (address1 === address2)
        return true;
    return false;
    
}
// much simple 
function areSame1(address1, address2) {
    return address1 === address2;
}
function areEqual1(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}


console.log(areEqual1(address1, address3))
console.log(areSame1(address1, address3))
console.log(areSame1(address1, address2))