import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

// class NavBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             SearchInput: '',
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.keyPress = this.keyPress.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ SearchInput: event.target.value });
//     }

//     keyPress(event) {
//         const SearchResults = {}
//         if (event.keyCode === 13) {
//             console.log(this.state.SearchInput)
//             fetch(`http://localhost:5002/storeArray?name_like=${this.state.SearchInput}`)
//                 .then(r => r.json())
//                 .then((parsedJson => SearchResults.FilteredStores = parsedJson))
//                 .then(() => fetch(`http://localhost:5002/employeeArray?name_like=${this.state.SearchInput}`))
//                 .then(r => r.json())
//                 .then(parsedJson => SearchResults.FilteredEmployees = parsedJson)
//                 .then(() => fetch(`http://localhost:5002/candyArray?name_like=${this.state.SearchInput}`))
//                 .then(r => r.json())
//                 .then(parsedJson => SearchResults.FilteredCandies = parsedJson)
//                 .then(() => this.setState(SearchResults))
//                 .then(() => {
//                     this.props.history.push({
//                         pathname: `/search`,
//                         SearchResults
//                     })
//                 })
//         }
//     }


//     render() {
//         return (
//             <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
//                 <ul className="nav nav-pills">
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/">Locations</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/employees">Employees</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/candies">Candies</Link>
//                     </li>
//                     <li className="nav-item">
//                         <input value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange} placeholder="Search..." />
//                     </li>
//                 </ul>
//             </nav >
//         )
//     }
// }

// export default withRouter(NavBar)