import { Route } from "react-router-dom"
import React, { Component } from "react"

import UserManager from "../modules/resourceManagers/UserManager"
import GroupManager from "../modules/resourceManagers/GroupManager"
import ListItemsManager from "../modules/resourceManagers/ListItemsManager"
import ListManager from "../modules/resourceManagers/ListManager"

import UserLists from "./lists/UserLists"
import Bracket from "./bracket/Bracket";

class ApplicationViews extends Component {
    state = {
        usersLists: [],
        usersListItems: [],
        groupNames: [],
        usersGroups: [],
        globalLists: [],
        globalListItems: []
    }

    componentDidMount() {
        const newState = {}

        let userId = parseInt(sessionStorage.getItem("BrackItId"))
        let prom1 = Promise.resolve(UserManager.CUSTOMSEARCH(`?id=${userId}&_embed=lists`)).then(json => newState.usersLists = json[0].lists)
        let prom2 = Promise.resolve(UserManager.CUSTOMSEARCH(`?id=${userId}&_embed=groupsToUsers`)).then(json => newState.usersGroups = json[0].groupsToUsers)
        let prom3 = Promise.resolve(GroupManager.GETALL()).then(json => newState.groupNames = json)
        let prom4 = Promise.resolve(ListItemsManager.CUSTOMSEARCH(`?userId=${userId}`)).then(json => newState.usersListItems = json)
        let prom5 = Promise.resolve(ListManager.GETALL()).then(json => newState.globalLists = json)
        let prom6 = Promise.resolve(ListItemsManager.GETALL()).then(json => newState.globalListItems = json)
        Promise.all([prom1, prom2, prom3, prom4, prom5, prom6])
            .then(() => this.setState(newState))
    }

    changeItemStatus = (evt) => {
        // debugger
        let newState = this.state
        const checkboxId = parseInt(evt.target.id.split("--")[1])
        if (evt.target.checked) {
            newState.usersListItems.find(item => item.id === checkboxId).itemActive = true
            newState.globalListItems.find(item => item.id === checkboxId).itemActive = true
        } else {
            newState.usersListItems.find(item => item.id === checkboxId).itemActive = false
            newState.globalListItems.find(item => item.id === checkboxId).itemActive = false
        }
        this.setState(newState)
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <UserLists
                        usersLists={this.state.usersLists}
                        usersListItems={this.state.usersListItems}
                        changeItemStatus={this.changeItemStatus} />
                }} />
                <Route exact path="/bracket/:listId(\d+)" render={(props) => {
                    return <Bracket
                        {...props}
                        globalLists={this.state.globalLists}
                        globalListItems={this.state.globalListItems} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews