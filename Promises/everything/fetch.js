const url = "https://jsonplaceholder.typicode.com/users"

function sentFechRequest(method, url, body = null) {
    let headers = {
        "Content-type": "application/json"
    }

    return fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(res => {
        console.log(res.status);
        if (res.ok){
            return res.json()
        }
    })
    .then(data => console.log(data))
}

// sentFechRequest("GET", url)
const body = {
    name: "anvar",
    age: 21
}
sentFechRequest("POST", url, body)

