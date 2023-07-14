import Image from "next/image";
import Link from "next/link";
// import styles from "./page.module.css";
import styles from "./Products.module.css";
import productStyles from "./Product.module.css";
// export default function Home() {
//   return (
//     <>
//       <main className={styles.main}>
//         <div className={styles.description}>
//           <p>
//             Get started by editing&nbsp;
//             <code className={styles.code}>src/app/page.js</code>
//           </p>
//         </div>
//       </main>
//     </>
//   );
// }

export default async function Home() {

  const response = await fetch('http://localhost:3000/api/products')
  // const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const products = await response.json()

// console.log('products555', products )

  return (
    <div className={styles.mainContainer}>
    {/* <div className="main-container"> */}
      <h2 className={styles.choiceProductTitle}>Sacs à dos nouvelle génération ...</h2>
      <div className={styles.productsContainer}>
        {products.map((p) => {
          return (
            <Link
              key={p.product_id}
              href={"/sacs-a-dos/" + p.product_id}
              className="link-style"
            >
              <div className={productStyles.productContainer}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <div className={[productStyles.productImageContainer, "wow bounceInDown"]}>
                    <img
                      className={productStyles.productImage}
                      data-wow-delay="0.5s"
                      alt={p.title}
                      src={p.image}
                    />
                  </div>
                </div>

                <div className={productStyles.productTitle}>
                  {p.title.substring(0, 35)}...
                </div>
                <div className={productStyles.productPrice}>{p.price}€</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
  // return <main></main>
}