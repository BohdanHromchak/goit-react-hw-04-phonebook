import PropTypes from 'prop-types'
import css from "./Filter.module.css"

export const Filter = ({ filter, setFilter }) => {
    return (
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
    );
  };
  
  export default Filter;
  
  Filter.propTypes = {
    setFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
  };