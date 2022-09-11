
let arr = []
document.querySelector('#addItem').onclick = () => {

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
        <i class="fa fa-check-circle" aria-hidden="true" onclick="checkWork('${arr[item]}')"></i>
        </li>
        `
        // console.log(item)
        html += html1
    }
    document.querySelector('#todo').innerHTML = html
}
let arrInput = []
window.checkWork = (id) => {
    // let valueinput = document.querySelector('#newTask').value
    // arr.push(valueinput)
    // console.log(arrInput)
    let html1 = ''
    console.log(arr, arrInput)
    let itemClicked = arr.find(item => item === id)
    console.log("clickkkk", itemClicked)
    if (!itemClicked) return
    arrInput.push(itemClicked)
    for (let item in arrInput) {
        html1 += `
        <li >
        <span>${arrInput[item]}</span>
        <i class="fa fa-trash" aria-hidden="true"></i>
        <i class="fa fa-check-circle" aria-hidden="true"></i>
        </li>
        `
    }
    document.querySelector('#completed').innerHTML = html1
}

