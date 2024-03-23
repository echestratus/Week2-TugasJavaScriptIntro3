const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
.then(response => {
    if(response.ok){
        return response.json();
    } else{
        throw new Error('Network response was not ok').message;
    }
})
.then(userData => {
    userData.map((name) => {
        console.log(name.name);
    })
})
.catch(error => {
    console.error('Error:', error);
});