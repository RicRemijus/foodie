import Image from "next/dist/client/image";
//importing hooks from react-redux
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Cart.module.css";
//importing actions from cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import Head from "next/dist/shared/lib/head";
import Link from "next/dist/client/link";
import CheckoutForm from "../components/forms/CheckoutForm";

const CartPage = () => {
  //extracting cart state from redux store
  const cart = useSelector((state) => state.cart);

  //Reference to the dispacth function from the redux store
  const dispatch = useDispatch();
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div>
      <Head>
        <title>Cart Page</title>
        <meta
          name="cartpage"
          content="page to display the list of items in cart"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {cart.length === 0 ? (
        <div className={styles.emptycart}>
          <h1 className={styles.cartEmpty}>Your Cart is Empty !</h1>
        </div>
      ) : (
        <>
          <div>
            <table className={styles.tableHead}>
              <tr>
                <th>
                  <h4>
                    NUMBER OF ITEMS : <strong>{getItemsCount()}</strong>
                  </h4>
                </th>
                <th>
                  <h4 className={styles.gt}>
                    TOTAL : <strong>&#x20A6; {getTotalPrice()}</strong>
                  </h4>
                </th>
                <th>
                  {/* <button
                    style={{ float: "right" }}
                    className={styles.checkoutBtn}
                  >
                    CHECKOUT
                  </button> */}
                  <CheckoutForm amount={getTotalPrice()} />
                </th>
              </tr>
            </table>
          </div>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th className={styles.th}>Image</th>
              <th className={styles.th}>Product</th>
              <th className={styles.th}>Price</th>
              <th className={styles.th}>Quantity</th>
              <th className={styles.th}>Action</th>
              <th className={styles.th}>Total Price</th>
            </tr>
            {cart.map((item) => (
              <tr className={styles.tr}>
                <td className={styles.td}>
                  <Image src={item.image} height="150" width="250" alt="" />
                </td>
                <td className={styles.td}>{item.product}</td>
                <td className={styles.td}>&#x20A6; {item.price}</td>
                <td className={styles.td}>{item.quantity}</td>
                <td className={styles.td}>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    x
                  </button>
                </td>
                <td className={styles.td}>
                  &#x20A6; {item.quantity * item.price}
                </td>
              </tr>
            ))}
          </table>
          <h2 className={styles.gtl}>
            Grand Total : &#x20A6; {getTotalPrice()}
          </h2>
        </>
      )}
    </div>
  );
};

export default CartPage;
