import { Suspense } from "react";
import Link from "next/link";

import classes from "./page.module.scss";
import ProductsGrid from "@/components/products/product-grid";

import { dummyProducts } from "@/data/products";

export const metadata = {
  title: "All Products",
  description: "Browse the delicious shared by our vibrant community.",
};

function Products() {
  return <ProductsGrid products={dummyProducts} />;
}

export default function ProductsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Information
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/products/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching products...</p>}
        >
          <Products />
        </Suspense>
      </main>
    </>
  );
}
