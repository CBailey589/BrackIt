import APIManager from "../utilities/APIManager"

const ListItemsManager = Object.create(APIManager, {
    DBarray: {
        value: "listItems"
    }
})

export default ListItemsManager