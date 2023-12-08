fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((json) => {
    for (let x of json){
    let element = document.createElement("li");
    let ul = document.getElementById("list");
    element.innerText = "Name: "+x.name+"\n"+"Username: "+x.username;
    ul.appendChild(element);
    let br = document.createElement("br");
    ul.appendChild(br);
    }
});