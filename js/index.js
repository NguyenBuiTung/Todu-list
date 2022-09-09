document.querySelector('#addItem').onclick = function () {
    // console.log('tung')
    let arr = []
    let valueinput = document.querySelector('#newTask').value
    arr.push(valueinput)
    console.log(arr)
    // let arrInput=[...arr]
    // console.log(arrInput)
    // console.log('first', valueinput)
    // console.log('tung',valueinput)
    let html = ''
    for (let item of arr) {
        // console.log(item)
        let html1 = `
        <li >
        <span>${valueinput}</span>
        <i class="fa fa-trash" aria-hidden="true"></i>
        <i class="fa fa-check-circle" aria-hidden="true"></i>
        </li>
        `
        html += html1
    }
    document.querySelector('#todo').innerHTML = html
}