function createBubble() { 
    const section = document.querySelector("Section"); 
    const createElement = document.createElement("span"); 
    var size = Math.random() * 60; 

    createElement.style.animation =  
      "animation 8s linear infinite"; 
    createElement.style.width = 180 + size + "px"; 
    createElement.style.height = 180 + size + "px"; 
    createElement.style.left =  
      Math.random() * innerWidth + "px"; 

    createElement.style.top = (window.innerHeight + 100) + "px";

    createElement.onclick = function() { 
        createElement.remove(); 
    };

    section.appendChild(createElement); 

    console.log(createElement);

    setTimeout(() => { 
        createElement.remove(); 
    }, 5000);
} 
setInterval(createBubble, 100); 
