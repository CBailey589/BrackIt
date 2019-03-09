import APIManager from "../utilities/APIManager"

const ListManager = Object.create(APIManager, {
    DBarray: {
        value: "users"
    }
})

export default ListManager
