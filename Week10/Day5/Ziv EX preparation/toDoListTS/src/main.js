"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FullList_1 = require("./model/FullList");
var ListItem_1 = require("./model/ListItem");
var ListTemplate_1 = require("./templates/ListTemplate");
// Initialize the list and template
var fullList = new FullList_1.FullList();
var listTemplate = new ListTemplate_1.ListTemplate('todo-list');
// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Load items from localStorage and render them
    fullList.loadFromLocalStorage();
    listTemplate.renderList(fullList);
    // Handle form submission
    var form = document.querySelector('#todo-form');
    var input = document.querySelector('#todo-input');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        var inputValue = input.value.trim();
        if (!inputValue) {
            alert('Please enter a to-do item.');
            return;
        }
        // Add new item to the list
        var newItem = new ListItem_1.ToDoItemClass(Date.now(), inputValue);
        fullList.addItem(newItem);
        // Re-render the list
        listTemplate.renderList(fullList);
        // Clear the input field
        input.value = '';
    });
    // Handle clear-all button
    var clearButton = document.querySelector('#clear-btn');
    clearButton.addEventListener('click', function () {
        if (confirm('Are you sure you want to clear the entire list?')) {
            fullList.clearList();
            listTemplate.renderList(fullList);
        }
    });
});
