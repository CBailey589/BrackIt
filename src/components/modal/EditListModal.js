import React, { Component } from 'react'

class EditListModal extends Component {

    render() {
        let listObj = this.props.listObj
        let listItems = this.props.usersListItems.filter(item => item.listId === listObj.id)

        return (
            <React.Fragment>
                <div className="">
                    <label htmlFor="listName">List name:</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        id="listName"
                        placeholder={`${listObj.listName}`}
                    />
                </div>
                <div className="">
                    <label htmlFor="listCategory">List Category:</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        id="listCategory"
                        placeholder={`${listObj.listCategory}`}
                    />
                </div>
                <div className="ListItems">
                    {
                        listItems.map((item, index) =>
                            <section key={`itemSection--${index + 1}`}
                                className="ItemSection">
                                <div key={`item--${index + 1}`}>
                                    {item.itemText}
                                </div>
                                <button
                                id={`remove--${item.id}`}
                                onClick={(evt)=> {
                                    this.props.removeListItem(item)
                                }}>
                                remove
                                </button>
                            </section>
                        )
                    }
                </div>
                <div className="">
                    <label htmlFor="itemText">Item Name:</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        id="itemText"
                        placeholder="enter item here"
                    />
                    <button
                        onClick={() => {
                            let itemObj = {
                                itemText: document.querySelector("#itemText").value,
                                listId: listObj.id,
                                itemActive: true,
                                itemWeight: 0.5,
                                userId: listObj.userId
                            }
                            this.props.addNewListItem(itemObj)
                            document.querySelector("#itemText").value=""
                        }}>
                        Add
                    </button>
                </div>
                <button>Save</button>
                <button>Discard</button>





            </React.Fragment >
        )





    }

}


export default EditListModal