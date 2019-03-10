import APIManager from "../utilities/APIManager"

const UserManager = Object.create(APIManager, {
    DBarray: {
        value: "users"
    }
})

export default UserManager
