import ProductItem from "./product-item";
import classes from "./product-grid.module.scss";

type Product = {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

type ProductsGridProps = {
  products: Product[];
};

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <ul className={classes.products}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductItem {...product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsGrid;
