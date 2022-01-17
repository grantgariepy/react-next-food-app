import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
    ];
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}}>
                <Image src="/img/arrowl.png" alt='' layout="fill"/>
               </div> 
                <div className={styles.wrapper}>
                    {images.map((img, i) => (
                        <div className={styles.imgContainer} key={i}>
                            <Image src={img}  alt='' layout="fill"/>
                        </div>
                    ))}                      
                </div>
                <div className={styles.arrowContainer} style={{right:0}}>
                    <Image src="/img/arrowr.png" alt='' layout="fill"/>
                </div>
        </div>
    )
}

export default Featured
