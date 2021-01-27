window.addEventListener("DOMContentLoaded", function() {

    let headContainer = document.createElement("div");
    headContainer.className = "header-container";

    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode('This is an h1');
    h1.appendChild(h1Text);
    h1.className = "h1"
    
    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode('This is an h2');
    h2.appendChild(h2Text);
    h2.className = "h2"

    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode('This is an h3');
    h3.appendChild(h3Text);
    h3.className = "h3"

    let h4 = document.createElement("h4");
    let h4Text = document.createTextNode('This is an h4');
    h4.appendChild(h4Text);
    h4.className = "h4"

    let h5 = document.createElement("h5");
    let h5Text = document.createTextNode('This is an h5');
    h5.appendChild(h5Text);
    h5.className = "h5"

    let h6 = document.createElement("h6");
    let h6Text = document.createTextNode("this is an h6");
    h6.appendChild(h6Text);
    h6.className = "h6"
    
    headContainer.appendChild(h1);
    headContainer.appendChild(h2);
    headContainer.appendChild(h3);
    headContainer.appendChild(h4);
    headContainer.appendChild(h5);
    headContainer.appendChild(h6);
    document.body.appendChild(headContainer);
})