function submitData(name, email) {
    const data = {
        name: name,
        email: email,
    }

    const postRequest = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }

    return fetch("http://localhost:3000/users", postRequest)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const newId = data.id
        const element = document.createElement('p')
        element.textContent = `New ID: ${newId}`
        document.body.appendChild(element);
        })

    .catch(function(message) {
            const errorMessage = document.createElement('p')
            errorMessage.textContent = message
            document.body.appendChild(errorMessage);
        })
}

submitData()