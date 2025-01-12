// import { v4 as uuidv4 } from "uuid";


export interface Item  {
    id: string;
    title: string;
    author: string;
    red: boolean;
}

export default class ListItem implements Item{
    constructor(
        private _id: string,
        private _title: string,
        private _author: string,
        private _red: boolean,
    ) { }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get author(): string {
        return this._author;
    }
    get red(): boolean {
        return this._red;
    }

    set id(value: string) {
        this._id = value;
    }

    set title(value: string) {
        this._title = value;
    }
    set author(value: string) {
        this._author = value;
    }
     set red(value: boolean) {
        this._red = value;
    }

}

