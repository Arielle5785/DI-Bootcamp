export type Book = {
  id: number;
  title: string;
  author: string;
};

export type Movie = {
  id: number;
  name: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
}

// generic List type
export type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};
