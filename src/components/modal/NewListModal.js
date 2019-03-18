import React, { Component } from 'react'

class NewListModal extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="NewListForm">
                    <div className="">
                        <label htmlFor="listName">List name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="listName"
                            placeholder="List name"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="listCategory">List Category</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="listCategory"
                            placeholder="List name"
                        />
                    </div>
                    <button
                        onClick={() => {
                            this.props.clearModal()
                            this.props.postNewList()}}>
                        click it
                    </button>
                </div>
            </React.Fragment >
        )





    }

}


export default NewListModal