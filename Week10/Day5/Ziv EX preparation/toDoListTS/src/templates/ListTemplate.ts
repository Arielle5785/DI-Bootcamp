import { FullList } from '../model/FullList';
import { ToDoItemClass } from '../model/ListItem';

export class ListTemplate {
    private ul: HTMLUListElement;

    constructor(ulId: string) {
        const ulElement = document.getElementById(ulId);
        if (!ulElement || !(ulElement instanceof HTMLUListElement)) {
            throw new Error(`Element with id "${ulId}" is not a valid <ul> element.`);
        }
        this.ul = ulElement;
    }

    // Render the list of to-do items
    renderList(fullList: FullList): void {
        // Clear existing list in the DOM
        this.ul.innerHTML = '';

        // Get the items and iterate over them
        fullList.getItems().forEach((item: ToDoItemClass) => {
            // Create <li> element
            const li = document.createElement('li');
            li.className = 'todo-item';
            li.id = `todo-${item.id}`;

            // Create checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.checked;
            checkbox.id = `checkbox-${item.id}`;
            checkbox.addEventListener('change', () => {
                item.checked = checkbox.checked;
                fullList.saveToLocalStorage(); // Update localStorage
            });

            // Create label
            const label = document.createElement('label');
            label.htmlFor = `checkbox-${item.id}`;
            label.textContent = item.item;

            // Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';
            deleteButton.addEventListener('click', () => {
                fullList.removeItem(item.id);
                this.renderList(fullList); // Re-render the list
            });

            // Append elements to <li>
            li.append(checkbox, label, deleteButton);

            // Append <li> to <ul>
            this.ul.appendChild(li);
        });
    }
}
