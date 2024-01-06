import css from './LoginForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';
import { login } from '../../redux/Auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(login({ email, password }));
    form.reset();
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className={css.form}>
      <form className={css.form__form} onSubmit={handleLogin}>
        <label htmlFor="loginEmail" className={css.form__label}>
          Email{' '}
        </label>
        <input
          id="loginEmail"
          className={css.form__input}
          name="email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
        ></input>

        <label htmlFor="loginPassword" className={css.form__label}>
          Password
        </label>
        <input
          id="loginPassword"
          className={css.form__input}
          name="password"
          type="password"
          placeholder="Enter password"
        ></input>

        <button className={css.form__button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
