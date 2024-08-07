window.onload = function() {
  function createBubble() { 
      const section = document.querySelector("section"); 
      if (!section) {
          console.error("Section not found");
          return;
      }

      const createElement = document.createElement("span"); 
      var size = Math.random() * 60; 

      createElement.style.position = "absolute"; // Ensure elements are positioned correctly
      createElement.style.animation = "animation 8s linear infinite"; 
      createElement.style.width = 180 + size + "px"; 
      createElement.style.height = 180 + size + "px"; 
      createElement.style.left = Math.random() * innerWidth + "px"; 
      createElement.style.top = (window.innerHeight + 100) + "px";
      createElement.style.zindex = -1;

    /*
      createElement.style.pointerEvents = "auto"; // Ensure pointer events are enabled

      createElement.onclick = function() { 
          this.remove(); // Remove the clicked element
      };
    */

      section.appendChild(createElement); 

      setTimeout(() => { 
          createElement.remove(); 
      }, 5000);
  } 

  setInterval(createBubble, 200); 
};
