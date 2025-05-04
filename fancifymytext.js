function makeBigger(){
    //alert("Hello, world!");
    document.getElementById("text").style.fontSize = "24pt";
}

function changeStyle() {
    //alert("Style changed!");

    const textArea = document.getElementById("text");
    const fancy = document.getElementById("fancy");
    const boring = document.getElementById("boring");

    if (fancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if(boring.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function moo(){
    let text = document.getElementById("text").value;
    text = text.toUpperCase();
    const str = text.split(".");
    text = str.join("-Moo");
    document.getElementById("text").value = text;
}
