import { useDispatch, useSelector } from 'react-redux';
import css from './RegisterForm.module.css';
import { register } from '../../redux/Auth/operations';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';
import { Navigate } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegistration = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(register({ name, email, password }));
    form.reset();
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={css.form}>
      <form className={css.form__form} onSubmit={handleRegistration}>
        <label htmlFor="registrationUsername" className={css.form__label}>
          Username
        </label>
        <input
          id="registrationUsername"
          className={css.form__input}
          name="name"
          placeholder="Enter your name"
          autoComplete="name"
        ></input>

        <label htmlFor="registrationEmail" className={css.form__label}>
          Email{' '}
        </label>
        <input
          id="registrationEmail"
          className={css.form__input}
          name="email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
        ></input>

        <label htmlFor="registrationPassword" className={css.form__label}>
          Password
        </label>
        <input
          id="registrationPassword"
          className={css.form__input}
          name="password"
          type="password"
          placeholder="Enter password"
        ></input>

        <button className={css.form__button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
