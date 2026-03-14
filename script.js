

function changeColor(box){
    let color = box.innerText.toLowerCase();
    box.style.backgroundColor = color;
};

function Greet(){
    let name = document.getElementById("name").value;
    document.getElementById("greeting").innerText = `Hello, ${name}`
};