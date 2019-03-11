import AddressCodesArrayMaker from "./AddressCodesArrayMaker"

function DetermineBracketAttributes(array) {
    console.log(array.length)
    const bracketInfo = {}
    bracketInfo.rounds = Math.ceil(Math.log2(array.length))
    if (bracketInfo.rounds === 1) {
        bracketInfo.rows = 1
        bracketInfo.columns = 3
    } else {
        bracketInfo.rows = (Math.pow(2, bracketInfo.rounds) - 1)
        bracketInfo.columns = (bracketInfo.rounds * 2) + 1
    }
    bracketInfo.columnInfo = []
    let builderIndex = Math.ceil((bracketInfo.columns) / 2)
    for (var i = builderIndex; i > 0; i--) {
        let columnObj = {}
        if (i === builderIndex) {
            columnObj.top = Math.ceil(bracketInfo.rows / 2)
            columnObj.inOut = 0
            columnObj.bottom = columnObj.top - 1
            columnObj.numItemsIn = 1
            columnObj.addressCodes = AddressCodesArrayMaker(bracketInfo.rounds, i)
            bracketInfo.columnInfo.push(columnObj)
        } else if (i === builderIndex - 1) {
            columnObj.top = Math.ceil(bracketInfo.rows / 2)
            columnObj.inOut = 0
            columnObj.bottom = columnObj.top - 1
            columnObj.numItemsIn = 1
            columnObj.addressCodes = AddressCodesArrayMaker(bracketInfo.rounds, i)
            bracketInfo.columnInfo.unshift(columnObj)
            bracketInfo.columnInfo.push(columnObj)
        } else {
            let len = bracketInfo.columnInfo.length
            columnObj.top = Math.pow(2, i - 1)
            columnObj.inOut = Math.pow(2, i)
            columnObj.bottom = columnObj.top - 1
            columnObj.numItemsIn = Math.pow(2, bracketInfo.rounds - i)
            columnObj.addressCodes = AddressCodesArrayMaker(bracketInfo.rounds, i, bracketInfo.columnInfo[0].addressCodes)
            bracketInfo.columnInfo.unshift(columnObj)
            bracketInfo.columnInfo.push(columnObj)
        }
    }
    console.log(bracketInfo.columnInfo)
}

export default DetermineBracketAttributes