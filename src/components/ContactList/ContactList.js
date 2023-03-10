import PropTypes from 'prop-types'
import css from './ContactList.module.css'


export const ContactList = ({ onDelete, filterContacts }) => {
    return (
      <ul className={css.list}>
        {filterContacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            {name}: {number}
            <button onClick={() => onDelete(id)} className={css.button}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  ContactList.propTypes = {
    filterContacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
      })
    ).isRequired,
    onDelete: PropTypes.func.isRequired
  };
  