const list = document.querySelector('.list');
const plus = document.querySelector('.plusBtn');
const inputText = document.querySelector('.inputText');

// Add item
let id = 0;
function createItem(text) {
    // Create a item element as li tag
    const item = document.createElement('li'); // <li></li>
    item.setAttribute('class', 'item'); // <li class="item"></li>
    item.setAttribute('data-id', id);
    item.innerHTML = `
        <div class="item__name" data-name="text">${text}</div>
        <button class="item__delete">
            <i class="fas fa-trash-alt" data-id=${id}></i>
        </button>`;
    id++;
}

function onAdd() {
    const text = inputText.value;
    if (!text) {
        inputText.focus();
        return;
    }
    createItem(text);
    list.appendChild(item);
    // Reset input tap
    inputText.value = '';
    inputText.focus();
}

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

//  remove item when clicked a delete button in it.
list.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`.item[data-id="${id}"]`)
        toBeDeleted.remove();
    }
});