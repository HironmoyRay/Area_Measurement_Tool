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

function getTitle(titleId){
    const titleField = document.getElementById(titleId);
    const title = titleField.innerText;
    return title;

}

function setReference(area,title){
const referenceField = document.getElementById("reference-field");
const countChild = referenceField.childElementCount;
// console.log(countChild);
const p = document.createElement("p");
p.innerHTML = `<span class="font-bold">${countChild+1}.</span>  Area of ${title} is <span class="font-bold">${area}</span>  cm <sup>2</sup>`;
p.className="m-1 px-1 bg-sky-200 rounded-sm";

referenceField.appendChild(p);


}