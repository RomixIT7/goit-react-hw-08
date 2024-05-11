import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

import { fetchContacts } from "../../redux/contacts/operations";
import { selectItems } from "../../redux/contacts/selectors";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectItems);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts Page</title>
      </Helmet>

      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {Array.isArray(contacts) && contacts.length !== 0 && <ContactList />}
        {Array.isArray(contacts) && contacts.length === 0 && (
          <p className={css.noContacts}>You have no contacts yet</p>
        )}
      </div>
    </>
  );
};

export default ContactsPage;
