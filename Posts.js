fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((json) => {
    for (let x of json){
    let element = document.createElement("li");
    let ul = document.getElementById("list");
    element.innerText = "UserID: "+x.userId+"\n"+"Title: "+x.title +"\n"+"Body: "+x.body;
    ul.appendChild(element);
    let br = document.createElement("br");
    ul.appendChild(br);
    }
});