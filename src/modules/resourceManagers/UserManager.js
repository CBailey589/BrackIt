import APIManager from "../utilities/APIManager"

const EmployeeManager = Object.create(APIManager, {
    array: {
        value: "users"
    }
})

export default EmployeeManager