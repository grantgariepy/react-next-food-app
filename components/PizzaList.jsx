import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Rem laboriosam nulla beatae neque unde error et totam, harum, culpa nemo molestias
                 praesentium excepturi assumenda sunt eligendi enim veniam omnis deserunt!
            </p>
            <div className={styles.wrapper}>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
            </div>            
        </div>
    )
}

export default PizzaList
