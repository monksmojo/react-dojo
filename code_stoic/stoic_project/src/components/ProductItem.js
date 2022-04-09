function ProductItem(props) {
  return (
    <li>
      <h3>
        {props.productItem.id} {props.productItem.name}{" "}
        {props.productItem.price}
      </h3>
    </li>
  );
}

export default ProductItem;
