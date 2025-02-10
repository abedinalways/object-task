const mobile = {
    brand: "Real-Me",
    price: 12000,
    battery: 5000,
    isAndroid: true,
    'made in': 'china',
    display: 6.5,
}
for(property in mobile){
    console.log(property);
  
}
const keys= Object.keys(mobile)
console.log(keys);
for(key of keys){
    console.log(key,":" ,mobile[key])
}
//create object and decleare
const pen=new Object({color:'white',
                                      price:10});
console.log(pen)
for(prop in pen){
    console.log(prop)
}
