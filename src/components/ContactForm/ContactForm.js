import PropTypes from 'prop-types'
import css from './ContactForm.module.css'
const { Component } = require("react");

class ContactForm extends Component{

    state = {
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
       this.props.onFormSubmit(this.state)
      }

    render() {
 
        return(
    <form onSubmit={this.handleSubmit} className={css.form}>

    <label className={css.label}>Name
      <input
      className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={this.state.name}
        onChange={this.handleChange}
       />
    </label>

    <label className={css.label}>Number
      <input
      className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={this.state.number}
        onChange={this.handleChange}
       />
    </label>

    <button className={css.button}>Add contact</button>

    </form>
        )
    }
}

export default ContactForm

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
}
