function PrepareBracketList(array) {
    let preparedArray = array.filter(item => item.itemActive === true)
        .map(item => {
            item.id = Math.floor(Math.random() * 1000000)
            return item
        })
        .sort((a, b) => a.id - b.id)
    if (preparedArray.length > 64) {
        preparedArray = preparedArray.splice(0, 64)
    }
    return preparedArray
}

export default PrepareBracketList