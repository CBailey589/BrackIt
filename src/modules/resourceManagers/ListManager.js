import APIManager from "../utilities/APIManager"

const ListManager = Object.create(APIManager, {
    array: {
        value: "lists",
        id: () => {
            if (parseInt(sessionStorage.credentials.split(",")[2].split(":")[1]) !== undefined) {
                return parseInt(sessionStorage.credentials.split(",")[2].split(":")[1]) !== undefined
            } else {
                return 0
            }
        }
    }
})

export default ListManager