import APIManager from "../utilities/APIManager"

const ListManager = Object.create(APIManager, {
    DBarray: {
        value: "groups"
    }
})

export default ListManager
