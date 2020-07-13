const list = document.querySelector('.list');
const plus = document.querySelector('.plusBtn');
const inputText = document.querySelector('#inputText');

// Add item
function additem(text) {
    // Create a item element as li tag
    const item = document.createElement('li'); // <li></li>
    item.setAttribute('class', 'item'); // <li class="item"></li>

    // Create a item's name element as div tag
    const name = document.createElement('div'); // <div></div>
    name.setAttribute('class', 'name'); // <div class="name"></div>
    name.textContent = text; // <div class="name" data-name="text">text</div>

    // Create a icon element as i tag
    const icon = document.createElement('i'); // <i></i>
    icon.setAttribute('class', 'fas fa-trash-alt'); // <i class="fas fa-trash-alt"></i>

    // Create a delete button adding icon
    const deleteBtn = document.createElement('div'); // <div></div>
    deleteBtn.setAttribute('class', 'deleteBtn'); // <div class="deleteBtn"></div>
    deleteBtn.appendChild(icon); // <div class="deleteBtn"><i class="fas fa-trash-alt"></i></div>

    // Add eventListener on deleteBtn
    deleteBtn.addEventListener('click', (e) => {
        const thisItem = e.target.parentElement.parentElement;
        list.removeChild(thisItem);
    });

    // Add child elements into item
    item.appendChild(name);
    item.appendChild(deleteBtn);

    // Add a item into shopping list
    list.appendChild(item);
}

// Add item when a plus button is clicked.
plus.addEventListener('click', () => {
    const text = inputText.value;
    if (!text) {
        return
    }
    additem(text);
    inputText.value = '';
});

// Add item when Enter is pressed.
inputText.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        const text = inputText.value;
        if (!text) {
            return
        }
        additem(text);
        inputText.value = '';
    }
});