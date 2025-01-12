import GenericList from "../utils/GenericList";
import { Book, Movie } from "../types/types";

type ItemType = Book | Movie;

export default function ListTemplate({ items, type }: { items: ItemType[]; type: "books" | "movies" }) {
  return (
    <GenericList
      items={items}
      renderItem={(item: ItemType) =>
        type === "books" ? (
          <span>{(item as Book).title} by {(item as Book).author}</span>
        ) : (
          <span>{(item as Movie).name}</span>
        )
      }
    />
  );
}
