import React, { Component } from 'react'

class ListCard extends Component {
    render() {
        let list = this.props.list
        let listItems = list.listItems
        let privacySetting = ""
        if (list.private === true) {
            privacySetting = "PRIVATE. It will not appear in search results."
        } else {
            privacySetting = "PUBLIC. It will appear in search results."
        }
        return (
            <React.Fragment>
                <section className="ListCard">
                    <div className="ListHeader">
                        <h1 className="ListName">{list.listName}</h1>
                        <div className="ListCatAndNum">
                            <div className="ListCategory">{list.listCategory}</div>
                            <div className="ListNumber">List #: {list.id}</div>
                        </div>
                    </div>
                    <div className="ListItems">
                        {
                            listItems.map((item, index) =>
                                <div className="ListItem" key={`ListItem--${index + 1}`}>{item}</div>
                            )
                        }
                    </div>
                    <div className="ListButtons">
                        <button className="ListEditButton">
                            Edit List
                        </button>
                        <button className="BrackItButton">
                            BrackIt
                        </button>
                    </div>
                    <div className="ListFooter">
                        This list is {privacySetting}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ListCard