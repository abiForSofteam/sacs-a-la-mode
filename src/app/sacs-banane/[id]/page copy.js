"use client";

import { useParams } from "next/navigation";
import detailsProductStyles from "../../styles/detailsProduct.module.css";
import Head from "next/head";

export default async function SacsADos() {
  const params = useParams();

  const response = await fetch("http://localhost:3000/api/products");
  const products = await response.json();
  const product = products.find((p) => p.product_id === params.id);

  return (
    <>
      <div className={detailsProductStyles.productContainer}>
        <div className={detailsProductStyles.productImage}>
          <img src={`${product.largeImage}`} alt={product.title} />
        </div>
        <div className={detailsProductStyles.productTitle}>{product.title}</div>
        <div className={detailsProductStyles.productPrice}>
          {product.price}€
        </div>
      </div>

      <div className={detailsProductStyles.productDescription}>
        {product.title}
      </div>

      <div className={detailsProductStyles.secureLogo}>
        <img
          src="/images/secure-logo.png"
          height={62}
          width={245}
          alt="secure logo"
        />
      </div>
    </>
  );
}
