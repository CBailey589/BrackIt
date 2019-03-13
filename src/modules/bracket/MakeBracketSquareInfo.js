function MakeBracketSquareInfo(col, row, bracketObj) {
    const squareInfo = {
        itemKey: "",
        itemText: ""
    }
    let columnInfo = bracketObj.columnInfo[col - 1]
    let numItemsInCol = columnInfo.items.length
    let top = columnInfo.top
    let inOut = columnInfo.inOut
    let bottom = columnInfo.bottom
    let regionBreak = Math.floor(bracketObj.columns / 2)
    let firstLastCol = false
    let addressesWithItems = bracketObj.AddressesWithItems
    // Check to see if current column is the first or last column
    if (col === 1 || col === bracketObj.columns) {
        firstLastCol = true
    }

    //Check to see if current square should have an item in it
    if (top === row && firstLastCol === false) {
        squareInfo.holdsItem = true
        squareInfo.itemKey = columnInfo.addressCodes[0]
        squareInfo.itemText = addressesWithItems[squareInfo.itemKey].itemText
    } else if (firstLastCol === true && top === row && numItemsInCol > 0) {
        squareInfo.holdsItem = true
        squareInfo.itemKey = columnInfo.addressCodes[0]
        squareInfo.itemText = addressesWithItems[squareInfo.itemKey].itemText
    } else if (firstLastCol && Number.isInteger((row - top) / inOut) && ((row - top) / inOut) <= numItemsInCol - 1) {
        squareInfo.holdsItem = true
        squareInfo.itemKey = columnInfo.addressCodes[(row - top) / inOut]
        squareInfo.itemText = addressesWithItems[squareInfo.itemKey].itemText
    } else if (firstLastCol === false && Number.isInteger((row - top) / inOut)) {
        squareInfo.holdsItem = true
        squareInfo.itemKey = columnInfo.addressCodes[(row - top) / inOut]
        squareInfo.itemText = addressesWithItems[squareInfo.itemKey].itemText
    }

    // Check to see if boxes should have side borders, and which side they should be on
    if (firstLastCol === false && row > top && row < (bracketObj.rows - bottom + 1) && (Math.floor((row - top) / (inOut + 0.1)) % 2 === 0)) {
        if (col < regionBreak) {
            squareInfo.inside = "InsideLeft"
        } else {
            squareInfo.inside = "InsideRight"
        }
    } else if (firstLastCol === true && row > top && row < (bracketObj.rows - bottom + 1) && (Math.floor((row - top) / (inOut + 0.1)) % 2 === 0) && ((row - top) / inOut) <= numItemsInCol) {
        if (col < regionBreak) {
            squareInfo.inside = "InsideLeft"
        } else {
            squareInfo.inside = "InsideRight"
        }
    }

    //Check to see if button should be in square
    // if (firstLastCol === false && row > top && row < (bracketObj.rows - bottom + 1) && Math.floor((row - top) / (inOut + 0.1)) % 2 === 0) {
    //     squareInfo.test = true
    // }
    if (firstLastCol === false && row % inOut === 0 && (row / inOut) % 2 !== 0) {
        squareInfo.button = true
    } else if (firstLastCol === true && row % inOut === 0 && (row / inOut) % 2 !== 0 && ((row - top) / inOut) <= numItemsInCol) {
        squareInfo.button = true
    }




        let classList = []
    if (squareInfo.holdsItem === true) {
        classList.push("HoldsItem")
    }
    if (squareInfo.inside) {
        classList.push(`${squareInfo.inside}`)
    }
    if (squareInfo.button === true) {
        classList.push("ButtonSquare")
    }

    squareInfo.classList = classList.join(" ")
    return squareInfo
}

export default MakeBracketSquareInfo