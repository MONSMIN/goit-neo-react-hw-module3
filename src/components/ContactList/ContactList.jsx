import Contact from "../Contact/Contact.jsx";

import style from './ContactList.module.css'

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul className={style.list}>
            {contacts.map(contact => {
                return (
                    <li key={contact.id} className={style.card}>
                        <Contact
                            name={contact.name}
                            number={contact.number}
                            id={contact.id}
                            deleteContact={deleteContact}
                        />
                   </li>
               )
           })}
        </ul>
    )
};

export default ContactList;