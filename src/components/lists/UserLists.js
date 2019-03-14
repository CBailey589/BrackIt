import React, { Component } from 'react'

import "./Lists.css"
import ListCard from './ListCard';

import NewListModal from '../../modules/modalViews/NewListModal'
import DeleteConfirmModal from '../../modules/modalViews/DeleteConfirmModal'



class UserLists extends Component {
    state = {
        modalContent: []
    }

    displayNewListModal = () => {
        const newState = {}

        let modalContent = NewListModal()
        newState.modalContent = modalContent
        this.setState(newState)
    }

    displayDeleteConfirmModal = () => {
        const newState = {}

        let modalContent = DeleteConfirmModal()
        newState.modalContent = modalContent
        this.setState(newState)
    }

    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="">
                        <button
                            onClick={() => this.displayNewListModal()}>
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