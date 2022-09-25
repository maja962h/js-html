const URL = "https://jsonplaceholder.typicode.com/users/"


document.getElementById("b1").onclick = fetchOneUser
document.getElementById("b2").onclick = fetchAllUsers

function fetchAllUsers(){
    document.getElementById("fetch-one").style.display = "none"

    fetch(URL)    
    .then(res => res.json())
    .then(users => {
        const tableRows = users.map(user => `
        <tr>
            <td>${user.name}</td>
            <td>${user.phone}</td>
          </tr>
          `).join("")
        
        document.getElementById("fetch-all").style = "block"
        document.getElementById("tbody").innerHTML = tableRows
    })

} 



function fetchOneUser(){
    document.getElementById("p-error").innerText = ""
    const userInput = document.getElementById("input").value
    document.getElementById("fetch-all").style.display = "none"
    document.getElementById("fetch-one").style.display = "block"
    
    if (!userInput) {
        document.getElementById("p-error").innerText = "Please provide a number"
        return
      }

    fetch(URL + userInput)
    
    .then(res => res.json())
    
    .then(user => {
        document.getElementById("fetch-one")
        document.getElementById("name").innerText = user.name
        document.getElementById("phone").innerText = user.phone
      
    })
    
    .catch(e => {
        console.error("upsi", e)
        const node = document.getElementById("p-error")
        node.innerText = e
    })
}




