import { Book, Movie } from "../types/types";

type ItemType = Book | Movie;

export default class FullList {
  private _list: ItemType[];
  static instance: FullList = new FullList([]);

  constructor(list: ItemType[] = []) {
    this._list = list;
  }

  get list(): ItemType[] {
    return this._list;
  }

  addItem(item: ItemType): void {
    this._list.push(item);
    this.save();
  }

  removeItem(id: number): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }

  load(): void {
    const storedList = localStorage.getItem("mylist");
    if (!storedList) return;

    this._list = JSON.parse(storedList);
  }

  save(): void {
    localStorage.setItem("mylist", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }
}
