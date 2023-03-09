import PropTypes from 'prop-types'
import css from "./Filter.module.css"
const { Component } = require("react");

class Filter extends Component {
    render() {
        return(

<label className={css.label}>Find contacts by name
<input className={css.input}
  type="text"
  name="filter"
  value={this.props.value}
  onChange={this.props.onChange}
/>
</label>
        )
    }
}

export default Filter

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}