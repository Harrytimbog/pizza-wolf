import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Good time, Great taste Expect the best Eat healthy, Live more Food,
        Folks and Fun | Good time, Great taste Expect the best Eat healthy, Live
        more Food, Folks and Fun | Deliciousness jumping into the mouth You
        deserve a break today As nature teaches us We do chicken right Chase the
        flavors Finger Lickin | Oasis of pleasure
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
