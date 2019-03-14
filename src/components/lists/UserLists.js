import React, { Component } from 'react'

import "./Lists.css"
import ListCard from './ListCard';

import NewListModal from '../modal/NewListModal'
import DeleteConfirmModal from '../modal/DeleteConfirmModal'



class UserLists extends Component {
    state = {
        modalContent: [],
        modalValues: {}
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
        postNewList={this.postNewList}/>

        newState.modalContent = modalContent
        this.setState(newState)
    }

    postNewList = () => {

    }

    displayDeleteConfirmModal = () => {
        const newState = {}

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
                                    displayDeleteConfirmModal={this.displayDeleteConfirmModal}/>
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