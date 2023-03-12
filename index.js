const input = document.getElementById('button');
function addingEventListener() {
   
    function clickAlert() {
        alert('I was CLicked');
    } 
    input.addEventListener('click', clickAlert);
}
addingEventListener();
