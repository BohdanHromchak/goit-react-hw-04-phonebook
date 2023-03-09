import { nanoid } from 'nanoid'
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Layout from './Layout/Layout';
const { Component } = require("react");

const initialContacts = [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
{id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: ''
  }

componentDidMount() {
const savedContacts = localStorage.getItem('contacts')
if(savedContacts !== null) {
  const parsedContacts = JSON.parse(savedContacts)
  this.setState({contacts: parsedContacts})
  return
}
this.setState({contacts: initialContacts})
}

componentDidUpdate(prevProps, prevState) {
if(prevState.contacts !== this.state.contacts){
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
}
}


formSubmitHandler = (data) => {

      const newContact = {
        id: nanoid(),
        name: data.name,
        number: data.number
      }
   
    this.setState((prevState)=> {
     if(prevState.contacts.find(contact => contact.name.includes(newContact.name))) {
      return alert(`${newContact.name} is already in contacts.`)
     }
      
    return {
    contacts: [...prevState.contacts, newContact]
    }
    })
} 

handleDelete = (id) => {
  this.setState((prevState) => {
    return {
      contacts: prevState.contacts.filter((contact) => contact.id !== id)
    }
  })
}

handleChange = (event) => {
  const {name, value} = event.currentTarget
  this.setState({[name]: value})
}

handleSearch = () => {
  const {contacts, filter} = this.state
 return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

}

  render() {
    return(
<Layout>
<h1>Phonebook</h1>
<ContactForm onFormSubmit={this.formSubmitHandler}/>
<h2>Contacts</h2>
<Filter value={this.state.filter} onChange={this.handleChange}/>
<ContactList onSearch={this.handleSearch} onDelete={this.handleDelete}/>
</Layout>
    )
  }
}
export default App