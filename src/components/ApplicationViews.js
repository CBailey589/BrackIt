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
            groupId: null
        }

        return ListManager.POST(listObj)
            .then(newListObj => {
                const newState = this.state
                newState.usersLists.push(newListObj)
                this.setState(newState)
            })
    }

    deleteList = (listId) => {
        return ListManager.DELETE(listId)
        .then(()=> {
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
    }
    removeListItem = (itemId) => {
        return ListManager.DELETE(itemId)
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

    changeItemStatus = (evt) => {
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
                        {...props}
                        usersLists={this.state.usersLists}
                        usersListItems={this.state.usersListItems}
                        changeItemStatus={this.changeItemStatus}
                        usersGroups={this.state.usersGroups}
                        groupNames={this.state.groupNames}

                        postNewList={this.postNewList}
                        deleteList={this.deleteList}
                        addNewListItem={this.addNewListItem}
                        removeListItem={this.removeListItem} />
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