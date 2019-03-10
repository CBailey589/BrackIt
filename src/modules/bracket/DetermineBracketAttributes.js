function DetermineBracketAttributes(array) {
    console.log(array.length)
    const bracketInfo = {}
    bracketInfo.rounds = Math.ceil(Math.log2(array.length))
    if (bracketInfo.rounds === 1) {
        bracketInfo.rows = 1
        bracketInfo.columns = 3
    } else {
        bracketInfo.rows = (Math.pow(2, bracketInfo.rounds) - 1)
        bracketInfo.columns = (bracketInfo.rounds*2) + 1
    }
    
    bracketInfo.columnInfo = []
    for (var i = 0; i < bracketInfo.columns; i++) {
        bracketInfo.columnInfo.push({})
    }
    console.log(bracketInfo)
}

export default DetermineBracketAttributes