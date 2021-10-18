//street
//city
//zipCode
//showAddress(address)

//factory method
function creatAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
} 

let address1 = creatAddress('xin xia', 'kaohsoung', '812')

//constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.ciyt = city;
    this.zipCode = zipCode;     
}

let address2 = new Address('Daan', 'Taipei', '106')

function showAddress(address) {
    console.log(address);
}

showAddress(address1);
showAddress(address2);

//simple address object
let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAddress_simple(address) {
    for (let key in address) 
        console.log(key, address[key])
}

showAddress_simple(address)