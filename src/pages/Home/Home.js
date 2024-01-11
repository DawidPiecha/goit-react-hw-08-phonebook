import { Helmet, HelmetProvider } from 'react-helmet-async';
import phonebook from './phonebook.png';
import css from './Home.module.css';

const Home = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div className={css.homeContainer}>
          <img src={phonebook} alt="phonebook logo" width="400" height="420" />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
