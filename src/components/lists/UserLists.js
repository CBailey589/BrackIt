import React, { Component } from 'react'

// import ListManager from "../../modules/resourceManagers/ListManager"


import "./Lists.css"
import ListCard from './ListCard';

import NewListModal from '../modal/NewListModal'
// import DeleteConfirmModal from '../modal/DeleteConfirmModal'
import EditListModal from "../modal/EditListModal"



class UserLists extends Component {
    state = {
        modalContent: []
    }

    handleFieldChange = evt => {
        const stateToChange = this.state
        stateToChange.modalValues[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    displayNewListModal = () => {
        const newState = {}

        let modalContent = <NewListModal
            handleFieldChange={this.handleFieldChange}
            postNewList={this.postNewList} />

        newState.modalContent = modalContent
        this.setState(newState)
    }

    postNewList = () => {
        const listObj = {
            userId: parseInt(sessionStorage.getItem("BrackItId")),
            listName: document.querySelector("#listName").value,
            listCategory: document.querySelector("#listCategory").value,
            listCreatedDateTime: Date.now(),
            listLastUsed: Date.now(),
            public: false,
            groupId: 0
        }

        let newState = {}
        let modalContent = <EditListModal
        listObj = {listObj} />

        newState.modalContent = modalContent
        this.setState(newState)
        // return ListManager.POST(listObj)
        //     .then((r) => {
        //         let newState = {}
        //         let modalContent = < EditListModal
        //             listObj={r} />

        //         newState.modalContent = modalContent
        //         this.setState(newState)
        //     })
        // .then(()=> this.props.history.push(""))
    }

    displayDeleteConfirmModal = () => {

    }

    render() {
        let usersGroups = this.props.usersGroups
        let groupNames = this.props.groupNames
        return (
            <React.Fragment>
                <section>
                    <div className="">
                        <button
                            onClick={() => this.displayNewListModal(usersGroups, groupNames)}>
                            Make New List Button
                    </button>
                    </div>
                    <section className="">
                        {
                            this.props.usersLists.map(list =>
                                <ListCard key={`list--${list.id}`}
                                    usersListItems={this.props.usersListItems}
                                    list={list}
                                    changeItemStatus={this.props.changeItemStatus}
                                    displayDeleteConfirmModal={this.displayDeleteConfirmModal} />
                            )
                        }
                    </section>
                </section>
                <div className="Modal" id="Modal">
                    {this.state.modalContent}
                </div>
            </React.Fragment>
        )
    }
}

export default UserLists