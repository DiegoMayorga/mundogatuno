import Link from "next/link";
import Image from "next/image";

import classes from "./product-item.module.scss";

interface ProductItemProps {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  title,
  slug,
  image,
  summary,
  creator,
}) => {
  return (
    <article className={classes.product}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/products/${slug}`}>Ver detalles</Link>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
