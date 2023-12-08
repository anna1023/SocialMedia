fetch("https://jsonplaceholder.typicode.com/albums")
.then((response) => response.json())
.then((json) => {
    for (let x of json){
    let element = document.createElement("li");
    let ul = document.getElementById("list");
    element.innerText = "UserID: "+x.userId+"\n"+"Title: "+x.title
    ul.appendChild(element);
    let br = document.createElement("br");
    ul.appendChild(br);
    }
});