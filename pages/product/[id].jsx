import styles from "../../styles/Prodcut.module.css";
import Image from "next/image";

const Product = () => {
    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet, consectetur adipsicing elit."
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image alt="" src={pizza.img} objectFit="contain" layout="fill"/>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
            </div>
        </div>
    )
}

export default Product