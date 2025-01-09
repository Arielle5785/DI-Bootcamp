"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullList = void 0;
var ListItem_1 = require("./ListItem");
var FullList = /** @class */ (function () {
    function FullList() {
        this.items = [];
    }
    // Load the list from localStorage
    FullList.prototype.loadFromLocalStorage = function () {
        var data = localStorage.getItem('todo-list');
        if (data) {
            var parsedData = JSON.parse(data);
            this.items = parsedData.map(function (item) { return new ListItem_1.ToDoItemClass(item._id, item._item, item._checked); });
        }
    };
    // Save the list to localStorage
    FullList.prototype.saveToLocalStorage = function () {
        var serializableItems = this.items.map(function (item) { return ({
            id: item.id,
            item: item.item,
            checked: item.checked,
        }); });
        localStorage.setItem('todo-list', JSON.stringify(serializableItems));
    };
    // Add an item to the list
    FullList.prototype.addItem = function (item) {
        this.items.push(item);
        this.saveToLocalStorage(); // Save the updated list
    };
    // Remove an item from the list by id
    FullList.prototype.removeItem = function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
        this.saveToLocalStorage(); // Save the updated list
    };
    // Clear the entire list
    FullList.prototype.clearList = function () {
        this.items = [];
        localStorage.removeItem('todo-list');
    };
    // Get the full list of items
    FullList.prototype.getItems = function () {
        return this.items;
    };
    return FullList;
}());
exports.FullList = FullList;
