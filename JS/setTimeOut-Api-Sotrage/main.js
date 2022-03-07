// setTimeOut()
// console.log("programm start..");
// setTimeout(() => {
//     console.log("I loged after 3s.")
// }, 3000)

// prompt, alert, confrim
// let input = prompt("Please enter a number");
// alert(parseInt(input) + 200)

// let seelocation = confirm("Do you want to see website location?")
// if (seelocation) {
//     console.log(window.location.href);
// }


// local storage, season storage
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const ul = document.getElementById("product-list")

const saveProduct = () => {
    const key = productName.value;
    const value = productPrice.value;

    addItemsToLocalStorage(key, value);
    displayProducts(key, value)

    productName.value = '';
    productPrice.value = '';
}


const displayProducts = (name, price) => {
    const li = document.createElement("li");
    li.innerText = `${name}: ${price}`;
    ul.appendChild(li);
}


const getItemsFromLocalStorage = () => {
    const items = localStorage.getItem('items');
    let itemsObj;

    if (items) {
        itemsObj = JSON.parse(items);
    } else {
        itemsObj = {};
    }

    return itemsObj;
}

const addItemsToLocalStorage = (key, value) => {
    const getItems = getItemsFromLocalStorage();
    getItems[key] = value;

    const itemStringify = JSON.stringify(getItems);
    localStorage.setItem('items', itemStringify)
}

const displayItemsfromLocal = () => {
    const getItems = getItemsFromLocalStorage();
    for (const key in getItems) {
        displayProducts(key, getItems[key]);
    }
}

displayItemsfromLocal();
