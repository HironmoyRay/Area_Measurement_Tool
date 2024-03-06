function getInputFieldValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    inputField.value = "";
    const inputValue = parseFloat(inputFieldText);
    return inputValue;
}

function setAreaValue(areaFieldId,areaValue){
    const areaField = document.getElementById(areaFieldId);
    areaField.innerText = areaValue;
}