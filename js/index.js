let arr = []
function renderWork() {
    let html = ''
    for (let item in arr) {
        // console.log(arr[item])
        html += `
        <li >
        <span>${arr[item]}</span>
        <i class="fa fa-trash" aria-hidden="true" onclick="deT('${item}')"></i>
        <i class="fa fa-check-circle" aria-hidden="true" onclick="checkWork('${arr[item]}')"></i>
        </li>
        `
    }
    document.querySelector('#todo').innerHTML = html
}
function renderComplete() {
    let html = ''
    for (let item in arrInput) {
        html += `
        <li >
        <span>${arrInput[item]}</span>
        <i class="fa fa-trash" aria-hidden="true" onclick="delWork('${item}')"></i>
        <i class="fa fa-check-circle" aria-hidden="true"></i>
        </li>
        `
    }
    document.querySelector('#completed').innerHTML = html
}
document.querySelector('#addItem').onclick = (event) => {
    event.preventDefault();
    let valueInput = document.querySelector('#newTask').value
    arr.push(valueInput)
    luuCongViec()
    renderWork()
}
//Ham xoa cong viec chua cap nhat
window.deT = (idclick) => {
    let indexDel = arr.findIndex(item => item === idclick)
    arr.splice(indexDel, 1)
    luuCongViec()
    renderWork()
}

let arrInput = []
//Ham them cong viec hoan thanh 
window.checkWork = (id) => {
    // console.log('first', id)
    let indexArr = arr.find(item => item === id)
    console.log(indexArr)
    arrInput.push(indexArr)
    luuCongViec()
    renderComplete()
}
//Ham xoa cong viec cap nhat 
window.delWork = (idclick) => {
    console.log('first', idclick)
    console.log(arrInput)
    let indexDel = arrInput.findIndex(item => item === idclick)
    // console.log(item)
    console.log(indexDel)
    arrInput.splice(indexDel, 1)
    luuCongViec()
    renderComplete()
}
/**
 * @param:Sap xep tu A den Z
 */
document.querySelector('#two').onclick = () => {
    console.log('tung')
    const sapXepAZ = _.orderBy(arrInput, [], ['esc'])
    console.log(sapXepAZ)
    let html = ''
    for (let item in sapXepAZ) {
        html += `
        <li >
        <span>${sapXepAZ[item]}</span>
        <i class="fa fa-trash" aria-hidden="true" onclick="delWork('${item}')"></i>
        <i class="fa fa-check-circle" aria-hidden="true"></i>
        </li>
        `
    }
    // luuCongViec()
    document.querySelector('#completed').innerHTML = html
 
}
/**
 * @param:Sap xep tu Z den A
 */
document.querySelector('#three').onclick = () => {
    console.log('tung')
    const sapXepZA = _.orderBy(arrInput, [], ['desc'])
    console.log(sapXepZA)
    let html = ''
    for (let item in sapXepZA) {
        html += `
        <li >
        <span>${sapXepZA[item]}</span>
        <i class="fa fa-trash" aria-hidden="true" onclick="delWork('${item}')"></i>
        <i class="fa fa-check-circle" aria-hidden="true"></i>
        </li>
        `
    }
    // luuCongViec()
    document.querySelector('#completed').innerHTML = html 
}

function luuCongViec() {
    localStorage.setItem('arr', JSON.stringify(arr))
    localStorage.setItem('arrInput', JSON.stringify(arrInput))
}
function layCongViec() {
    if (localStorage.getItem('arr') && localStorage.getItem('arrInput')) {
        arr = JSON.parse(localStorage.getItem('arr'))
        arrInput = JSON.parse(localStorage.getItem('arrInput'))
    }
}
window.onload = function () {
    layCongViec()
    renderWork()
    renderComplete()
}