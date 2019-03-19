import React, { Component } from 'react'
import { Link } from "react-router-dom"

class ListCard extends Component {
    render() {
        let list = this.props.list
        let listItems = this.props.usersListItems.filter(item => item.listId === list.id)
        let privacySetting = ""
        if (list.public === true) {
            privacySetting = "PUBLIC. It will appear in search results."
        } else {
            privacySetting = "PRIVATE. It will not appear in search results."
        }
        return (
            <React.Fragment>
                <section className="ListCard">
                    <div className="ListHeader">
                        <h1 className="ListName">{list.listName}</h1>
                        <div className="ListCatAndNum">
                            <div className="ListCategory">Category: {list.listCategory}</div>
                            <div className="ListNumber">List #: {list.id}</div>
                        </div>
                    </div>
                    <div className="ListItems">
                        {
                            listItems.map((item, index) =>
                                <section key={`itemSection--${index + 1}`}
                                    className="ItemSection">
                                    <div key={`item--${index + 1}`}>
                                        {item.itemText}
                                    </div>
                                    <input type="checkbox"
                                        id={`checkbox--${item.id}`}
                                        checked={item.itemActive}
                                        onClick={(evt) => this.props.changeItemStatus(evt)}
                                        readOnly />
                                </section>
                            )
                        }
                    </div>
                    <div className="">
                        <button className=""
                            id={`edit--${list.id}`}
                            onClick={() => this.props.displayEditListModal(list)}>
                            Edit List
                        </button>
                        {listItems.length >= 3
                            ? <Link className="nav-link" to={`/bracket/${list.id}`}>
                                <button className="BrackItButton">
                                    BrackIt
                            </button>
                            </Link>
                            : ""
                        }
                    </div>
                    <div className="ListFooter">
                        This list is {privacySetting}
                    </div>
                    <div>
                        <button className=""
                            id={`delete--${list.id}`}
                            onClick={() => this.props.displayDeleteConfirmModal(list)}>
                            Delete
                        </button>
                        <div>
                            Make list public
                        </div>
                        <input type="checkbox"
                            id={`public--${list.id}`}
                            checked={list.public}
                            onClick={(evt) => {
                                this.props.changeListPrivacySetting(evt)
                            }}
                            readOnly />
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ListCard