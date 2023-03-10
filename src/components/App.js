import { nanoid } from 'nanoid'
import {ContactForm} from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList';
import {Filter} from './Filter/Filter';
import {Layout} from './Layout/Layout';
import { useState, useMemo, useEffect } from "react";

const initialContacts = [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
{id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]

export const App = () => {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? initialContacts;
  });  
  
  const [filter, setFilter] = useState("");
 
  useEffect(() => {window.localStorage.setItem("contacts", JSON.stringify(contacts))},[contacts]);

  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filterContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  }, [filter, contacts]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={addContact} />
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList onDelete={deleteContact} filterContacts={filterContacts} />
    </Layout>
  );
};