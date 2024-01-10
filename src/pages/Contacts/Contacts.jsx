import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/Contacts/operations';
import { selectError, selectIsLoading } from '../../redux/Contacts/selectors';

import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { Loader } from '../../components/Loader/Loader';
import css from './Contacts.module.css';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';
import { Navigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <HelmetProvider>
      <div className={css.phonebookContainer}>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <h1 className={css.phonebookHeading}>Phonebook</h1>
        <ContactForm />
        <h2>Contacts: {isLoading && !error && <Loader />}</h2>
        <Filter />
        <ContactList />
      </div>
    </HelmetProvider>
  );
};

export default Contacts;
