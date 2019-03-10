import { Route } from "react-router-dom"
import React, { Component } from "react"

import UserManager from "../modules/resourceManagers/UserManager"
import GroupManager from "../modules/resourceManagers/GroupManager"
import ListItemsManager from "../modules/resourceManagers/ListItemsManager"

import UserLists from "./lists/UserLists"

class ApplicationViews extends Component {
    state = {
        lists: [],
        groupNames: [],
        usersGroups: [],
        listItems: []
    }

    componentDidMount() {
        const newState = {}

        let userId = parseInt(sessionStorage.getItem("BrackItId"))
        let prom1 = Promise.resolve(UserManager.CUSTOMSEARCH(`?id=${userId}&_embed=lists`)).then(json => newState.lists = json[0].lists)
        let prom2 = Promise.resolve(UserManager.CUSTOMSEARCH(`?id=${userId}&_embed=groupsToUsers`)).then(json => newState.usersGroups = json[0].groupsToUsers)
        let prom3 = Promise.resolve(GroupManager.GETALL()).then(json => newState.groupNames = json)
        let prom4 = Promise.resolve(ListItemsManager.CUSTOMSEARCH(`?userId=${userId}`)).then(json => newState.listItems = json)
        Promise.all([prom1, prom2, prom3, prom4])
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <UserLists
                        lists={this.state.lists}
                        listItems={this.state.listItems} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews