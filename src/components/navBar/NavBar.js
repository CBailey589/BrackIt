import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import APIManager from "../../modules/utilities/APIManager"
import "./NavBar.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SearchInput: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    handleChange(event) {
        this.setState({ SearchInput: event.target.value });
    }

    keyPress(event) {
        const SearchResults = {}
        if (event.keyCode === 13) {
            let prom1 = Promise.resolve(APIManager.GetSearchResults("lists?listName", this.state.SearchInput)).then(r => r.json())
                .then((json) => SearchResults.FilteredLists = json)
            Promise.all([prom1])
                .then(() => this.setState(SearchResults))
                .then(() => {
                    this.props.history.push({
                        pathname: `/search`,
                        SearchResults
                    })
                })
        }
    }


    render() {
        return (
            <nav className="NavBar">
                <ul className="">
                    <li className="NavItem">
                        <Link className="nav-link" to="/">My Lists</Link>
                    </li>
                    <li className="NavItem">
                        <input
                            value={this.state.value}
                            onKeyDown={this.keyPress}
                            onChange={this.handleChange}
                            placeholder="Search..." />
                    </li>
                </ul>
            </nav >
        )
    }
}

export default withRouter(NavBar)