"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoItemClass = void 0;
var ToDoItemClass = /** @class */ (function () {
    function ToDoItemClass(id, item, checked) {
        if (checked === void 0) { checked = false; }
        this._id = id;
        this._item = item;
        this._checked = checked;
    }
    Object.defineProperty(ToDoItemClass.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToDoItemClass.prototype, "item", {
        get: function () {
            return this._item;
        },
        set: function (value) {
            if (!value.trim()) {
                throw new Error("Item cannot be empty.");
            }
            this._item = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToDoItemClass.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (value) {
            this._checked = value;
        },
        enumerable: false,
        configurable: true
    });
    return ToDoItemClass;
}());
exports.ToDoItemClass = ToDoItemClass;
// const task1 = new ToDoItemClass(1, "Buy groceries");
// console.log(`Task 1: ${task1.item}, Completed: ${task1.checked}`);
