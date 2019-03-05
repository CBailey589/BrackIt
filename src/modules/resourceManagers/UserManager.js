import APIManager from "../utilities/APIManager"

const EmployeeManager = Object.create(APIManager, {
    array: {
        value: "users",
        id: ""
    }
})

export default EmployeeManager