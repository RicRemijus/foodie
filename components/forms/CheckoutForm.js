import styles from "../../styles/CheckoutForm.module.css";
export default function CheckoutForm(props) {
  return (
    <form method="POST" action="https://checkout.flutterwave.com/v3/hosted/pay">
      <div>Your order is ₦{props.amount}</div>
      <input
        type="hidden"
        name="public_key"
        value={`${process.env.NEXT_PUBLIC_PUBLIC_KEY}`}
      />
      <input
        type="hidden"
        name="customer[email]"
        value="customeremail@site.com"
      />
      <input type="hidden" name="customer[name]" value="Jesse Pinkman" />
      <input type="hidden" name="tx_ref" value="bitethtx-019203" />
      <input type="hidden" name="amount" value={props.amount} />
      <input type="hidden" name="currency" value="NGN" />
      <input type="hidden" name="meta[token]" value="54" />
      <input
        type="hidden"
        name="redirect_url"
        value={`${process.env.NEXT_PUBLIC_HOME_URL}`}
      />
      <button type="submit" className={styles.submitBtn}>
        CHECKOUT
      </button>
    </form>
  );
}
