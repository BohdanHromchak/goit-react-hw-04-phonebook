import css from './Layout.module.css'
const { Component } = require("react")


class Layout extends Component {
    render() {
        return(
            <div className={css.container}>{this.props.children}</div>
        )
    }
}

export default Layout