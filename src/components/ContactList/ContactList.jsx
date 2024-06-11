import { filteredContacts } from "../../redux/actions";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(filteredContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contactItem}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;