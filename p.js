 let myFunction = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(del => onCountries(del) )
 }


 let onCountries = (countries)=>{
    let country = document.getElementById('countries')
//   console.log(countries[0].capital[0],countries[0].name.common)

  countries.forEach(element =>{
    // console.log(element)
    let imran = document.createElement("div");
    imran.classList.add("imran")
    
    imran.innerHTML=`
    <h1>name: ${element.name.common}<h1>
     <p> city: ${element.capital[0]}<p>
     <button onclick="clickHere('${element.cca2}')">click here</button>
    
    `;
    country.appendChild(imran)

  })
 }
 let clickHere = (code) =>{
    let url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res=>res.json())
    .then(del => button(del[0]))
 } 


 let button = (fl)=>{
    // console.log(fl.flags)
    let flags = document.getElementById('flags');
    flags.innerHTML=`
    <h1>name:${fl.name.common}<h1>
     <img src="${fl.flags.png}">
   
    `
 }

 