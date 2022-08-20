const no2Value = document.querySelector(`#no2Value`);
const no3Value = document.querySelector(`#no3Value`);
const feValue = document.querySelector(`#feValue`);
const po4Value = document.querySelector(`#po4Value`);
const kValue = document.querySelector(`#kValue`);
const caValue = document.querySelector(`#caValue`);
const mgValue = document.querySelector(`#mgValue`);
const phValue = document.querySelector(`#phValue`);
const nh4Value = document.querySelector(`#nh4Value`);
const button = document.querySelector(`.button__btn`);
const newDates = document.querySelector(`.newDates__table`);
const tbody = document.querySelector(`tbody`);
const deleteAll = document.querySelector(`.settings__trash`);

const date = new Date().toISOString().split('T')[0];;
const keys = Object.keys(localStorage);
let keysLength = keys.length;
let keyValue = keysLength;
let oldDataFromLocalStorage;

loadDataFromLocalStorage = () => {
    while(keysLength !== 0){
    oldDataFromLocalStorage = JSON.parse(localStorage.getItem((keysLength-1)));
    const newRowInTable = document.createElement("tr");
    newDates.appendChild(newRowInTable);
    oldDataFromLocalStorage.forEach((e, i) => {
        e = document.createElement("td");
        e.innerText = oldDataFromLocalStorage[i];
            if(oldDataFromLocalStorage[i] == ""){
                e.innerText = "-";
            }
        newRowInTable.appendChild(e);
    });
    keysLength--;
}
}

addElementsToArray = () => {
    const arrayOfValues = [date, no2Value.value, no3Value.value, feValue.value,
         po4Value.value, kValue.value, caValue.value, mgValue.value, phValue.value, 
         nh4Value.value];
    const newRowInTable = document.createElement("tr");
    if(document.querySelector(`.test`)){
        const newRow = document.querySelector(`.test`);
        tbody.insertBefore(newRowInTable, newRow);
        newRowInTable.classList = `test`;
    }
    else{
        tbody.appendChild(newRowInTable);
        newRowInTable.classList = `test`;
    }
    arrayOfValues.forEach((e, i) => {
        e = document.createElement("td");
        e.innerText = arrayOfValues[i];
            if(arrayOfValues[i] == ""){
                e.innerText = "-";
            }
        newRowInTable.appendChild(e);
    });
    localStorage.setItem(keyValue, JSON.stringify(arrayOfValues));
    keyValue = keyValue + 1;
}

deleteAllLocalStorage = () => {
    window.localStorage.clear();
    location.reload();
}

button.addEventListener(`click`, addElementsToArray);
deleteAll.addEventListener(`click`, deleteAllLocalStorage);

loadDataFromLocalStorage();