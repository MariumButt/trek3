import { useItemsStore } from "../stores/itemsStore";
import Logo from "./Logo";
import Counter from "./Counter";

export default function Header() {
  const items = useItemsStore((state) => state.items);

  const numberOfItemsPacked = items.filter((item) => item.packed).length;
  const totalNumberOfItems = items.length;

  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={numberOfItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
}