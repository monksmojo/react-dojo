import Item from "./Item";
function ItemList({ items }) {
  const itemsList = items.map((item) => {
    return <Item key={item.id} item={item} />;
  });
  return <ul>{itemsList}</ul>;
}

export default ItemList;
