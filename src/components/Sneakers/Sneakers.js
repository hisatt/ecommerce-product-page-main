
import SneakersHero from './SneakersHero/SneakersHero';
import SneakersItem from './SneakersItem/SneakersItem';
import classes from './Sneakers.module.css';

const Sneakers = () => {
    return (
        <div className={classes['content-wrapper']}>
            <SneakersHero />
            <SneakersItem />
        </div>
    )
};

export default Sneakers;