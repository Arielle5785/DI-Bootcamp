"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTemplate = void 0;
var ListTemplate = /** @class */ (function () {
    function ListTemplate(ulId) {
        var ulElement = document.getElementById(ulId);
        if (!ulElement || !(ulElement instanceof HTMLUListElement)) {
            throw new Error("Element with id \"".concat(ulId, "\" is not a valid <ul> element."));
        }
        this.ul = ulElement;
    }
    // Render the list of to-do items
    ListTemplate.prototype.renderList = function (fullList) {
        var _this = this;
        // Clear existing list in the DOM
        this.ul.innerHTML = '';
        // Get the items and iterate over them
        fullList.getItems().forEach(function (item) {
            // Create <li> element
            var li = document.createElement('li');
            li.className = 'todo-item';
            li.id = "todo-".concat(item.id);
            // Create checkbox
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.checked;
            checkbox.id = "checkbox-".concat(item.id);
            checkbox.addEventListener('change', function () {
                item.checked = checkbox.checked;
                fullList.saveToLocalStorage(); // Update localStorage
            });
            // Create label
            var label = document.createElement('label');
            label.htmlFor = "checkbox-".concat(item.id);
            label.textContent = item.item;
            // Create delete button
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';
            deleteButton.addEventListener('click', function () {
                fullList.removeItem(item.id);
                _this.renderList(fullList); // Re-render the list
            });
            // Append elements to <li>
            li.append(checkbox, label, deleteButton);
            // Append <li> to <ul>
            _this.ul.appendChild(li);
        });
    };
    return ListTemplate;
}());
exports.ListTemplate = ListTemplate;
