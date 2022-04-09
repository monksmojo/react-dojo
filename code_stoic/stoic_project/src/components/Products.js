import ProductItem from "./ProductItem";

function Products(props) {
  const productsItems = props.products.map((product) => (
    <ProductItem key={product.id} productItem={product} />
  ));

  return <ul>{productsItems}</ul>;
}

export default Products;
