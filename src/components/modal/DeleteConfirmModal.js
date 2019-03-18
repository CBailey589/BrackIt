import React, { Component } from 'react'

class DeleteConfirmModal extends Component {
    render() {
        let id = this.props.listObj.id
        return (
            <React.Fragment>
                <div>
                    are you sure you want to delete the list named {this.props.listObj.listName}?
                </div>
                <button
                        onClick={() => {
                            this.props.clearModal()
                            this.props.deleteList(id)
                        }}>
                        Delete
                    </button>
            </React.Fragment >
        )
    }
}


export default DeleteConfirmModal