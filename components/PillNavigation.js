import Link from 'next/link';

export default function PillNavigation(props) {
  const markedItems = props.items.map((item) => {
    if (item.name === props.active) {
      const newItem = Object.assign(item);
      newItem.active = true;
      return newItem;
    }
    return item;
  });
  const items = markedItems.map((item) => {
    if (item.active) {
      return (
        <Link href={item.href}>
          <a className="button active">{item.name}</a>
        </Link>
      );
    }
    return (
      <Link href={item.href}>
        <a className="button">{item.name}</a>
      </Link>
    );
  });

  return <nav className="nav">{items}</nav>;
}
