import { nanoid } from 'nanoid'
const { Component } = require("react");

class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
    name: '',
    number: ''
  }

handleChange = (event) => {
      const {name, value} = event.currentTarget
      this.setState({[name]: value})
    }

handleSubmit = (event) => {
      event.preventDefault()
      this.setState({name: "", number: ""})

      const newContact = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number
      }
   
    this.setState((prevState)=> {
     if(prevState.contacts.find(contact => contact.name.includes(this.state.name))) {
      return alert(`${this.state.name} is already in contacts.`)
     }
      
    return {
    contacts: [...prevState.contacts, newContact]
    }
    })
  }

handleSearch = () => {
    const {contacts, filter} = this.state
   return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  }

handleDelete = (id) => {
  this.setState((prevState) => {
    return {
      contacts: prevState.contacts.filter((contact) => contact.id !== id)
    }
  })
}

  render() {
    return(
      <>
      <h1>Phonebook</h1>
<form onSubmit={this.handleSubmit}>

  <label>Name
      <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  value={this.state.name}
  onChange={this.handleChange}
/>
</label>

<label>Number
      <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  value={this.state.number}
  onChange={this.handleChange}
/>
</label>

<button>Add contact</button>

</form>

<label>Find contacts by name
<input
  type="text"
  name="filter"
  value={this.state.filter}
  onChange={this.handleChange}
/>
</label>

<h2>Contacts</h2>

<ul>
{this.handleSearch().map(({id, name, number}) => (
    <li key={id}>{name}: {number}<button onClick={() => this.handleDelete(id)}>Delete</button></li>
  ))}

</ul>
      </>
    )
  }
}
export default App