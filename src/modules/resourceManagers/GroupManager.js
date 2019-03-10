import APIManager from "../utilities/APIManager"

const GroupManager = Object.create(APIManager, {
    DBarray: {
        value: "groups"
    }
})

export default GroupManager
