const URL = "https://jsonplaceholder.typicode.com/users/"


//POST request
const options = {
    method: "POST",
    Headers: {"Content-type": "application/json"},
    body: JSON.stringify({name: "kurt"})
}

fetch(URL, options)
    .then(r => r.json())
    .then(data => {console.log(data)})


    
//GET request
/* const res = fetch(URL)

.then(function (r) {
    if(!r.ok){
        return Promise.reject("error", r.status)
    }
    return r.json()
})

.then(data => {
    console.log(data)
})

.catch(e => {
    console.error(e)
}) */




