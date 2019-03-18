import React, { Component } from 'react'

// import ListManager from "../../modules/resourceManagers/ListManager"


import "./Lists.css"
import ListCard from './ListCard';

import NewListModal from '../modal/NewListModal'
import DeleteConfirmModal from '../modal/DeleteConfirmModal'
// import EditListModal from "../modal/EditListModal"



class UserLists extends Component {
    state = {
        modalContent: []
    }

    clearModal = () => {
        const newState = this.state
        newState.modalContent = []
        this.setState(newState)
    }

    displayNewListModal = () => {
        const newState = {}

        let modalContent = <NewListModal
            clearModal={this.clearModal}
            postNewList={this.props.postNewList} />

        newState.modalContent = modalContent
        this.setState(newState)
    }

    displayDeleteConfirmModal = (listObj) => {
        const newState = {}

        let modalContent = <DeleteConfirmModal
            listObj={listObj}
            clearModal={this.clearModal}
            deleteList={this.props.deleteList} />

        newState.modalContent = modalContent
        this.setState(newState)
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