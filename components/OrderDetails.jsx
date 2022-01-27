import styles from "../styles/OrderDetail.module.css";

const OrderDetails = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>You will pay $12 after delivery.</h1>
                <div className={styles.item}>
                    <label className={styles.input}>Name Surname</label>
                    <input placeholder="John Doe" type="text" className={styles.input} />
                </div>
            </div>

        </div>
    )
}

export default OrderDetails
