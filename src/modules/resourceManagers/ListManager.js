import APIManager from "../utilities/APIManager"

const ListManager = Object.create(APIManager, {
    DBarray: {
        value: "lists"
    }
})

export default ListManager