import React, { Component } from 'react'

class NewListModal extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="BehindModalCover"></div>
                <div className="NewListForm">
                    <div className="NewListName">
                        <label htmlFor="listName">List name: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="listName"
                            placeholder="List name"
                        />
                    </div>
                    <div className="NewListCat">
                        <label htmlFor="listCategory">List category: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="listCategory"
                            placeholder="List category"
                        />
                    </div>
                    <div className="NewListButtons">
                        <button
                            onClick={() => {
                                this.props.clearModal()
                                this.props.postNewList()
                            }}>
                            Create
                        </button>
                        <button
                            onClick={() => this.props.clearModal()}>
                            Cancel
                        </button>
                    </div>

                </div>
            </React.Fragment >
        )
    }
}


export default NewListModal