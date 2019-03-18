import React, { Component } from 'react'

class NewListModal extends Component {
    state = {
        listItems: []
    }

    componentDidMount() {
        const newState = {}
        let listObj = this.props.listObj
        let listItems = this.props.usersListItems.filter(item => item.listId === listObj.id)
        newState.listItems = listItems
        this.setState(newState)

    }

    render() {
        let listObj = this.props.listObj

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
                        this.state.listItems.map((item, index) =>
                            <section key={`itemSection--${index + 1}`}
                                className="ItemSection">
                                <div key={`item--${index + 1}`}>
                                    {item.itemText}
                                </div>
                                <button>remove</button>
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
                            let newState = this.state
                            newState.listItems.push(itemObj)
                            this.setState(newState)
                            document.querySelector("#itemText").value = ""
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


export default NewListModal