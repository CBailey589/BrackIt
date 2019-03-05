import APIManager from "../utilities/APIManager"

const ListManager = Object.create(APIManager, {
    array: {
        value: "lists"
    }
})

export default ListManager