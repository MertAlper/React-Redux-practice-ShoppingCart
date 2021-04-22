import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = [
    {
      id: 1,
      title: "ipod",
      price: 6,
      description: "this is unnecessary when you have iphone",
      amount: 1,
    },
    {
      id: 2,
      title: "macbook",
      price: 60,
      description: "you should buy it",
      amount: 1,
    },
    { id: 3, title: "iphone", price: 70, description: "must have", amount: 1 },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => {
          return (
            <li>
              <ProductItem
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                amount={product.amount}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
