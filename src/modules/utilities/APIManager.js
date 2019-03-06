import Settings from "./Settings"

export default Object.create(null, {
    GetAll: {
        value: function () {
            return fetch(`${Settings.url}/${this.array}`)
                .then(r => r.json())
        }
    },
    GetSearchResults: {
        value: function (arrayWithKey, searchInput) {
            return fetch(`${Settings.url}/${arrayWithKey}_like=${searchInput}`)
                .then(r => r.json())
        }
    }
})