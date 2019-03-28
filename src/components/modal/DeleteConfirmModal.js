import React, { Component } from 'react'

class DeleteConfirmModal extends Component {
    render() {
        let id = this.props.listObj.id
        return (
            <React.Fragment>
                <div className="BehindModalCover"></div>
                <div className="DeleteConfirmForm">
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
                    <button
                        onClick={() => this.props.clearModal()}>
                        Cancel
                    </button>
                </div>
            </React.Fragment >
        )
    }
}


export default DeleteConfirmModal