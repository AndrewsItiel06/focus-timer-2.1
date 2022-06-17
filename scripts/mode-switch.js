let body = document.querySelector("body");
 
 
 export function modeSwitch (sunnyButton , moonButton) {
  
  function toggleModeButton () {
    sunnyButton.classList.toggle("show");
    moonButton.classList.toggle("show");
  }

  function toggleMode () {
    body.classList.toggle("dark")
  }

  return {toggleModeButton , toggleMode}
}