const str = "coding is fun what do you think about it !";

// let new_str = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   new_str += str[i];
// }

// const wrapperDiv = document.getElementById("firstDiv");
// const firstH1 = document.createElement("h1");
// firstH1.innerHTML = str;

// const secondH1 = document.createElement("h1");
// secondH1.innerHTML = new_str;

// wrapperDiv.appendChild(firstH1);
// wrapperDiv.appendChild(secondH1);

// https://codesandbox.io/p/sandbox/cocky-nobel-t5xwwc?file=%2Fsrc%2FApp.js%3A16%2C24

let newArr = [
  { title: "first", status: "todo", id: 1 },
  { title: "second", status: "todo", id: 2 },
];

const renderTable = () => {
    const tableElem = document.getElementById("todoList")
    tableElem.innerHTML = ""
    newArr.forEach((elem) => {
        let paraElem = document.createElement("p")
        paraElem.innerHTML = elem?.title
        tableElem.appendChild(paraElem)
    })
}

renderTable();
const func = () => {
    let obj = {}
    const textEntered = document.getElementById("title")?.value
    obj = {
        title: textEntered,
        status: "todo",
        id: newArr.length + 1
    }
    console.log(obj);
    newArr = [obj, ...newArr]
    console.log(newArr)
    renderTable();
}
