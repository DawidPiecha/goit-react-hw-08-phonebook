import css from './NotFound.module.css';
import notfound from './notfound.png';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const NotFound = () => {
  return (
    <HelmetProvider>
      <div className={css.NotFoundContainer}>
        <Helmet>
          <title>Page Error</title>
        </Helmet>
        Sorry, page not found !{' '}
        <img src={notfound} alt="Sad face" width="280" height="320" />
      </div>
    </HelmetProvider>
  );
};

export default NotFound;
