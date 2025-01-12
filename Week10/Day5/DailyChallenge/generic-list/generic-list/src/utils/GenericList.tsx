import { ListProps } from "../types/types";

export default function GenericList<T>({
  items,
  renderItem,
}: ListProps<T>): React.ReactElement {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
