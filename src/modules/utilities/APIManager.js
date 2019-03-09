import Settings from "./Settings"

export default Object.create(null, {
    GET: {
        value: function (id) {
            return fetch(`${Settings.url}/${this.DBarray}/${id}`)
                .then(r => r.json())
        }
    },
    GETALL: {
        value: function () {
            return fetch(`${Settings.url}/${this.DBarray}`)
                .then(r => r.json())
        }
    },
    DELETE: {
        value: function (id) {
            return fetch(`${Settings.url}/${this.DBarray}/${id}`,
                {
                    method: "DELETE"
                })
        }
    },
    POST: {
        value: function (obj) {
            return fetch(`${Settings.url}/${this.DBarray}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            }).then(r => r.json())
        }
    },
    PUT: {
        value: function (obj) {
            return fetch(`${Settings.url}/${this.DBarray}/${obj.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            }).then(r => r.json());
        }
    },
    MATCHLIKE: {
        value: function (DBKey, searchVal) {
            return fetch(`${Settings.url}/${this.DBarray}?${DBKey}_like=${searchVal}`)
                .then(r => r.json())
        }
    },
    CUSTOMSEARCH: {
        value: function (searchString) {
            return fetch(`${Settings.url}/${searchString}`)
            .then(r => r.json())
        }
    }
})
