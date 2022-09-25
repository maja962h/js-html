const URL =  "https://countries.plaul.dk/api/countries/"

document.getElementById("map").addEventListener("click", )

function clickCountry(){
fetch(URL)
.then(res => res.json())
.then(country => {
    document.getElementById("svg2")

    document.getElementById("dk").innerHTML = country.name.common

})


}