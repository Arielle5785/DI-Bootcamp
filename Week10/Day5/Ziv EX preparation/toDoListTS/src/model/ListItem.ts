interface ToDoItem {
    id: number;
    item: string;
    checked: boolean;
}
export class ToDoItemClass implements ToDoItem {
    readonly _id: number;
    private _item: string;
    private _checked: boolean;

    constructor(id: number, item: string, checked: boolean = false) {
        this._id = id;
        this._item = item;
        this._checked = checked;
    }

    get id(): number {
        return this._id;
    }

    get item(): string {
        return this._item;
    }

    set item(value: string) {
        if (!value.trim()) {
            throw new Error("Item cannot be empty.");
        }
        this._item = value;
    }

    get checked(): boolean {
        return this._checked;
    }

    set checked(value: boolean) {
        this._checked = value;
    }
}


// const task1 = new ToDoItemClass(1, "Buy groceries");
// console.log(`Task 1: ${task1.item}, Completed: ${task1.checked}`);
