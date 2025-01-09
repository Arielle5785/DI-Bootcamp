import { FullList } from './model/FullList';
import { ToDoItemClass } from './model/ListItem';
import { ListTemplate } from './templates/ListTemplate';

// Initialize the list and template
const fullList = new FullList();
const listTemplate = new ListTemplate('todo-list');

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Load items from localStorage and render them
    fullList.loadFromLocalStorage();
    listTemplate.renderList(fullList);

    // Handle form submission
    const form = document.querySelector('#todo-form') as HTMLFormElement;
    const input = document.querySelector('#todo-input') as HTMLInputElement;

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        const inputValue = input.value.trim();
        if (!inputValue) {
            alert('Please enter a to-do item.');
            return;
        }

        // Add new item to the list
        const newItem = new ToDoItemClass(Date.now(), inputValue);
        fullList.addItem(newItem);

        // Re-render the list
        listTemplate.renderList(fullList);

        // Clear the input field
        input.value = '';
    });

    // Handle clear-all button
    const clearButton = document.querySelector('#clear-btn') as HTMLButtonElement;
    clearButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear the entire list?')) {
            fullList.clearList();
            listTemplate.renderList(fullList);
        }
    });
});
