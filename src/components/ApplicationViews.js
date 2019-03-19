import { Route } from "react-router-dom"
import React, { Component } from "react"

import UserManager from "../modules/resourceManagers/UserManager"
// import GroupManager from "../modules/resourceManagers/GroupManager"
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
        globalListItems: [],
    }

    postNewList = () => {
        const listObj = {
            userId: parseInt(sessionStorage.getItem("BrackItId")),
            listName: document.querySelector("#listName").value,
            listCategory: document.querySelector("#listCategory").value,
            listCreatedDateTime: Date.now(),
            listLastUsed: Date.now(),
            public: false,
        }

        return ListManager.POST(listObj)
            .then(newListObj => {
                const newState = this.state
                newState.usersLists.push(newListObj)
                newState.globalLists.push(newListObj)
                this.setState(newState)
            })
    }

    deleteList = (listId) => {
        return ListManager.DELETE(listId)
            .then(() => {
                const newState = this.state
                let shortenedArray = newState.usersLists.filter(list => list.id !== listId)
                newState.usersLists = shortenedArray
                this.setState(newState)
            })
        // let promise = null

        // try {
        //     promise = ListManager.DELETE(listId)
        //     .then(() => {
        //         const newState = this.state
        //         let shortenedArray = newState.usersLists.filter(list => list.id !== listId)
        //         newState.usersLists = shortenedArray
        //         this.setState(newState)
        //     })
        // } catch (error) {
        //     console.log(error)
        // }
        // return promise
    }

    addNewListItem = (itemObj) => {
        return ListItemsManager.POST(itemObj)
            .then(postedObj => {
                let newState = this.state
                newState.usersListItems.push(postedObj)
                newState.globalListItems.push(postedObj)
                this.setState(newState)
            })
    }
    removeListItem = (item) => {
        let newState = this.state
        let userId = parseInt(sessionStorage.getItem("BrackItId"))
        return ListItemsManager.DELETE(item.id)
            .then(() => ListItemsManager.CUSTOMSEARCH(`?userId=${userId}`))
            .then(json => newState.usersListItems = json)
            .then(() => ListItemsManager.GETALL())
            .then(json => newState.globalListItems = json)
            .then(() => this.setState(newState))
            .then(() => document.querySelector(`#edit--${item.listId}`).click())
    }

    updateList = (listObj) => {
        let newState = this.state
        return ListManager.PUT(listObj)
            .then(() => UserManager.CUSTOMSEARCH(`?id=${listObj.userId}&_embed=lists`))
            .then(json => newState.usersLists = json[0].lists)
            .then(() => ListManager.GETALL())
            .then(json => newState.globalLists = json)
            .then(() => this.setState(newState))
    }


    changeItemStatus = (evt) => {
        let newState = this.state
        const checkboxId = parseInt(evt.target.id.split("--")[1])
        let userId = parseInt(sessionStorage.getItem("BrackItId"))
        if (evt.target.checked) {
            ListItemsManager.PATCH(checkboxId, "itemActive", true)
            .then(() => ListItemsManager.CUSTOMSEARCH(`?userId=${userId}`))
            .then(json => newState.usersListItems = json)
            .then(() => ListItemsManager.GETALL())
            .then(json => newState.globalListItems = json)
            .then(() => this.setState(newState))
        } else {
            ListItemsManager.PATCH(checkboxId, "itemActive", false)
            .then(() => ListItemsManager.CUSTOMSEARCH(`?userId=${userId}`))
            .then(json => newState.usersListItems = json)
            .then(() => ListItemsManager.GETALL())
            .then(json => newState.globalListItems = json)
            .then(() => this.setState(newState))
        }
    }

    changeListPrivacySetting =(evt) => {
        let newState = this.state
        const checkboxId = parseInt(evt.target.id.split("--")[1])
        let userId = parseInt(sessionStorage.getItem("BrackItId"))
        if (evt.target.checked) {
            ListManager.PATCH(checkboxId, "public", true)
            .then(() => UserManager.CUSTOMSEARCH(`?id=${userId}&_embed=lists`))
            .then(json => newState.usersLists = json[0].lists)
            .then(() => ListManager.GETALL())
            .then(json => newState.globalLists = json)
            .then(() => this.setState(newState))

        } else {
            ListManager.PATCH(checkboxId, "public", false)
            .then(() => UserManager.CUSTOMSEARCH(`?id=${userId}&_embed=lists`))
            .then(json => newState.usersLists = json[0].lists)
            .then(() => ListManager.GETALL())
            .then(json => newState.globalLists = json)
            .then(() => this.setState(newState))
        }
    }


    componentDidMount() {
        const newState = {}

        let userId = parseInt(sessionStorage.getItem("BrackItId"))
        let prom1 = Promise.resolve(UserManager.CUSTOMSEARCH(`?id=${userId}&_embed=lists`)).then(json => newState.usersLists = json[0].lists)
        let prom2 = Promise.resolve(UserManager.CUSTOMSEARCH(`?id=${userId}&_embed=groupsToUsers`)).then(json => newState.usersGroups = json[0].groupsToUsers)
        // let prom3 = Promise.resolve(GroupManager.GETALL()).then(json => newState.groupNames = json)
        let prom4 = Promise.resolve(ListItemsManager.CUSTOMSEARCH(`?userId=${userId}`)).then(json => newState.usersListItems = json)
        let prom5 = Promise.resolve(ListManager.GETALL()).then(json => newState.globalLists = json)
        let prom6 = Promise.resolve(ListItemsManager.GETALL()).then(json => newState.globalListItems = json)
        Promise.all([prom1, prom2, prom4, prom5, prom6])
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <UserLists
                        {...props}
                        usersLists={this.state.usersLists}
                        usersListItems={this.state.usersListItems}
                        changeItemStatus={this.changeItemStatus}
                        usersGroups={this.state.usersGroups}
                        groupNames={this.state.groupNames}

                        postNewList={this.postNewList}
                        deleteList={this.deleteList}
                        addNewListItem={this.addNewListItem}
                        removeListItem={this.removeListItem}
                        updateList={this.updateList}
                        changeListPrivacySetting={this.changeListPrivacySetting} />
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