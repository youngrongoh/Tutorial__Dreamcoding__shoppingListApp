const list = document.querySelector('.list');
const plus = document.querySelector('.plusBtn');
const inputText = document.querySelector('.inputText');

// Add item
function createItem(text) {
    // Create a item element as li tag
    const item = document.createElement('li'); // <li></li>
    item.setAttribute('class', 'item'); // <li class="item"></li>

    // Create a item's name element as div tag
    const name = document.createElement('div'); // <div></div>
    name.setAttribute('class', 'item__name'); // <div class="item__name"></div>
    name.textContent = text; // <div class="item__name" data-name="text">text</div>

    // Create a delete button adding icon
    const deleteBtn = document.createElement('button'); // <button></button>
    deleteBtn.setAttribute('class', 'item__deleteBtn'); // <button class="item__deleteBtn"></button>
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'; // <button class="item__deleteBtn"><i class="fas fa-trash-alt"></i></button>

    // Add child elements into item
    item.appendChild(name);
    item.appendChild(deleteBtn);

    // Add a item into shopping list
    list.appendChild(item);
}

function onAdd() {
    const text = inputText.value;
    if (!text) {
        inputText.focus();
        return;
    }
    createItem(text);
    inputText.value = '';
    inputText.focus();
}


list.addEventListener('click', (e) => {
    if (e.target.tagName !== 'I') {
        return;
    }
    const thisItem = e.target.parentElement.parentElement;
    list.removeChild(thisItem);
});

// Add item when a plus button is clicked.
plus.addEventListener('click', () => {
    onAdd();
});

// Add item when Enter is pressed.
inputText.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        onAdd();
    }
});