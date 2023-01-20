// XMLHTTpRequest
const API = 'https://jsonplaceholder.typicode.com/users'

const getData = (method, url, body=null) => {
    return new Promise((res, rej) => {
        const request = new XMLHttpRequest();

        request.open(method, url)

        request.responseType = "json";
        request.setRequestHeader("Content-type", "application/json")

        request.onload = () => {
            if (request.status >= 400) {
                res(JSON.parse(request.response))
            } else {
                rej(request.response)
            }
        }

        request.onerror =() => {
            rej(request.response)
        }

        request.send(JSON.stringify(body))
    })
}

const body = {
    name: "anvar",
    age: 21
}

getData("POST" ,API, body)
    .then(data => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })