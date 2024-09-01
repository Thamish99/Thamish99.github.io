const angleTextBox = document.getElementById('angleTextBox');
const angleSlider = document.getElementById('angleSlider');
const radioButtons = document.querySelectorAll('input[name="commonAngles"]');

function updateComponents(value) {
    let newvalue;
    if (value<0){
        newvalue = Math.abs(value)
    }else if(0 <= value && value <= 360){
        newvalue = value
    }else{
        newvalue = value%360
    }
    angleTextBox.value = newvalue;
    angleSlider.value = value;
    radioButtons.forEach(radio => {
        radio.checked = (parseInt(radio.value) === value);
    });
}


angleTextBox.addEventListener('input', (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    updateComponents(value);
});

// Event listener for pressing Enter key
angleTextBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        let value = parseInt(e.target.value);
        if (isNaN(value)) value = 0;
        updateComponents(value);
    }
});


angleSlider.addEventListener('input', (e) => {
    let value = parseInt(e.target.value);
    updateComponents(value);
});

radioButtons.forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.checked) {
            updateComponents(parseInt(e.target.value));
        }
    });
});


// Initial sync
updateComponents(0);