
let arr = []
document.querySelector('#addItem').onclick = function () {
    let valueinput = document.querySelector('#newTask').value
    arr.push(valueinput)
    // console.log(arr)
    let html = ''
    for (let item in arr) {
        // console.log(item)
        let html1 = `
        <li >
        <span>${arr[item]}</span>
        <i class="fa fa-trash" aria-hidden="true"></i>
        <i class="fa fa-check-circle" aria-hidden="true" onclick="checkWork('${item}')"></i>
        </li>
        `
        // console.log(item)
        html += html1
    }
    document.querySelector('#todo').innerHTML = html
}
// let arrInput=[...arr]
window.checkWork = (id) => {
    // let valueinput = document.querySelector('#newTask').value
    // arr.push(valueinput)
    // console.log(arrInput)
    let html1 = ''
    for (let item in arr) {
        // console.log(item)
        if (item === id) {
            // console.log(arrInput[item])
            let html2 = `
        <li >
        <span>${arr[item]}</span>
        <i class="fa fa-trash" aria-hidden="true"></i>
        <i class="fa fa-check-circle" aria-hidden="true"></i>
        </li>
        `
            // console.log(item)
            html1 += html2
        }
    }
    document.querySelector('#completed').innerHTML = html1
}

