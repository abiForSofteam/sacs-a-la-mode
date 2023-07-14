"use client";
// import { useEffect, useState } from "react";
import detailsProductStyles from "../../styles/detailsProduct.module.css";
import getAllProducts from "../../../../getData/getAllProducts";
import getAProduct from "../../../../getData/getAProduct";
import { useParams } from "next/navigation";


export default async function SacsADos() {
  const params = useParams();
  const id = params.id;
  // const products = await getAllProducts();
  // const product = products.find((p) => p.product_id === id);
  const product = await getAProduct(id);



  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  //   // alert('okok')
  // }, [params.params.id]);

  console.log("params1", params);
  return (
    <>
      <div className={detailsProductStyles.productContainer}>
        <div className={detailsProductStyles.productImage}>
          <img
            src={product ? `${product.largeImage}` : null}
            // src={isClient ? `${product.largeImage}` :null}
            alt={product ? product.title : null}
          />
        </div>
        <div className={detailsProductStyles.productTitle}>{product ? product.title : null}</div>
        <div className={detailsProductStyles.productPrice}>
          {product ? product.price : null}€
        </div>
      </div>

      <div className={detailsProductStyles.productDescription}>
        {product ? product.title : null}
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
