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
                            <div className="ListCategory"><b>Category: </b>{list.listCategory}</div>
                            <div className="ListNumber"><b>List #: </b>{list.id}</div>
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
                                    <div className="CheckboxContainer">
                                        <input type="checkbox"
                                            id={`checkbox--${item.id}`}
                                            checked={item.itemActive}
                                            onClick={(evt) => this.props.changeItemStatus(evt)}
                                            readOnly />
                                        <div className="Checkmark"></div>
                                    </div>
                                </section>
                            )
                        }
                    </div>
                    <div className="CardButtons">
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
                            : <div className="BrackitWarning">
                                <b>*Must have at least <br />3 items to BrackIt!</b>
                            </div>
                        }
                    </div>
                    <div className="ListFooter">
                        {/* <div className="PrivacySetting">
                            This list is {privacySetting}
                        </div> */}
                        <button className="ListDeleteButton"
                            id={`delete--${list.id}`}
                            onClick={() => this.props.displayDeleteConfirmModal(list)}>
                            Delete
                        </button>
                        {/* <div className="PrivacyCheckboxContainer">
                            <div className="PrivacyCheckboxLabel">
                                Make list public
                            </div>
                            <div className="PrivacyCheckbox">
                                <input type="checkbox"
                                    id={`public--${list.id}`}
                                    checked={list.public}
                                    onClick={(evt) => {
                                        this.props.changeListPrivacySetting(evt)
                                    }}
                                    readOnly />
                                <div></div>
                            </div>
                        </div> */}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ListCard