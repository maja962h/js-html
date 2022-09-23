const URL = "https://jsonplaceholder.typicode.com/users/"

/* const options = {
method: "POST",
Headers: {"Content-type": "application/json"},
body: JSON.stringify({id: })
}

fetch(URL, options)
.then(r => r.json())
.then(data => {console.log(data)}) */


const button = document.getElementById("b1")
button.onclick = loadData

function loadData(){
    fetch(URL)

    .then(function (r) {
        if(!r.ok){
            return Promise.reject("error", r.status)
        }
        return r.json()
    })
    
    .then(users => {
        const ul = users.map(user => `
        <li>
        ${user.name}
        </li> `)
        const ulAsStr = ul.join("")
        document.getElementById("my-ul").innerHTML = ulAsStr
    })
    
    .catch(e => {
        console.error(e)
    })
}


