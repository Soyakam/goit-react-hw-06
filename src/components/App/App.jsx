import { useState, useEffect } from "react";
import css from "./App.module.css"
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import contacts from "../../contacts.json";


function App() {
  const [contactList, setContactList] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : [...contacts];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  const addContact = (newContact) => {
    setContactList([...contactList, newContact]);
  };

  const deleteContact = (contactId) => {
    setContactList((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className={css.head}>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;