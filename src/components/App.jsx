import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import contacts from './data/contacts.json'

import ContactForm from './ContactForm/ContactForm.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import ContactList from './ContactList/ContactList.jsx';


function App() {
  const [userContacts, setUserContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts != null) {
      return JSON.parse(savedContacts);
    }
    return contacts;
  });
  const [searchInput, setSearchInput] = useState("");

  const addContact = (values) => {
    setUserContacts([
      ...userContacts,
      {
        id: nanoid(),
        ...values,
      }
    ]);
  };

  const deleteContact = (deleteId) => {
    setUserContacts(userContacts.filter(contact => contact.id !== deleteId))
  };

  useEffect(() => {localStorage.setItem("contacts", JSON.stringify(userContacts))}, [userContacts]);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredContacts = !searchInput ? userContacts : userContacts.filter(
    contact => contact.name.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact}/>
      <SearchBox
        searchInput={searchInput}
        handleChange={handleChange} />
      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
      />
    </div>

  )
};

export default App;