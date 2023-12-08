fetch("https://jsonplaceholder.typicode.com/users")  //I am using fetch to make a GET request 
.then((response) => response.json())   //It response back in binary so we put it through response.json to help us read it 
.then((json) => { 
    for (let x of json){ //goes through each element in the json array and creates an list item element for it 
    let element = document.createElement("li"); 
    let ul = document.getElementById("list");
    element.innerText = "Name: "+x.name+"\n"+"Username: "+x.username;
    ul.appendChild(element);
    let br = document.createElement("br");
    ul.appendChild(br);
    }
});