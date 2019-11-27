
fetch("https://api.github.com/users")
    .then(function(response) {
        if(response.status === 200){
            return response.json();
        } else {
            return "Greska"
        }
        
    })
    .then(function(jsonData){
        console.log(jsonData);
    })