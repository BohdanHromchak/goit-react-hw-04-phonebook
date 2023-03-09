import PropTypes from 'prop-types'
import css from './ContactList.module.css'
const { Component } = require("react");

class ContactList extends Component {
    render() {
        const {onSearch, onDelete} = this.props

        return(
            <ul className={css.list}>
    {onSearch().map(({id, name, number}) => (
    <li key={id} className={css.item}>{name}: {number}<button onClick={() => onDelete(id)} className={css.button}>Delete</button></li>
  ))}
</ul>
        )
    }
}
export default ContactList

ContactList.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}