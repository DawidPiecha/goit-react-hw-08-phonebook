import css from './NotFound.module.css';
import notfound from './notfound.png';

const NotFound = () => {
  return (
    <div className={css.NotFoundContainer}>
      Sorry, page not found !{' '}
      <img src={notfound} alt="Sad face" width="280" height="320" />
    </div>
  );
};

export default NotFound;
