function MakeBracketSquareInfo(col, row, bracketObj) {
    const squareInfo = {
        itemKey: "",
        itemText: ""
    }
    let columnInfo = bracketObj.columnInfo[col - 1]
    let numItemsInCol = columnInfo.items.length
    let top = columnInfo.top
    let inOut = columnInfo.inOut
    let firstLastCol = false

    console.log(columnInfo)

    if (col === 1 || col === bracketObj.columns) {
        firstLastCol = true
    }

    if (top === row) {
        squareInfo.holdsItem = true
        squareInfo.itemKey = columnInfo.addressCodes[0]
    } else if (firstLastCol && Number.isInteger((row - top) / inOut) && ((row - top) - inOut) <= numItemsInCol) {
        squareInfo.holdsItem = true
        squareInfo.itemKey = columnInfo.addressCodes[(row - top / inOut)]
    } else if (firstLastCol === false && Number.isInteger((row - top) / inOut)) {
        squareInfo.holdsItem = true
    }






    let classList = []
    if (squareInfo.holdsItem === true) {
        classList.push("HoldsItem")
    }
    squareInfo.classList = classList.join(" ")
    return squareInfo
}

export default MakeBracketSquareInfo