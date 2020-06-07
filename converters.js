/* Binds the events/functions to the buttons */
function bindButtons() {
    //Celsius to Fahrenheit conversion
    document.getElementById('c2f-btn').addEventListener('click', (event) => {
        event.preventDefault();//necessary so page doesnt auto refresh
        let input = document.getElementById('c2f').value;
        if (isNaN(input) || "" == input) {
            document.getElementById('c2f').value = "Invalid input. Enter a number";
        } else {
            document.getElementById('c2f').value = (input * 9/5)+32;
        }
    })

    //Lbs to kg conversion
    document.getElementById('l2k-btn').addEventListener('click', (event) => {
        event.preventDefault();//necessary so page doesnt auto refresh
        let input = document.getElementById('l2k').value;
        if (isNaN(input) || "" == input) {
            document.getElementById('l2k').value = "Invalid input. Enter a number";
        } else {
            document.getElementById('l2k').value = Math.round(input * 100 / 2.205) / 100;
        }
    })
}

document.addEventListener('DOMContentLoaded', bindButtons);
