function SplitTeamsToRegions(array, obj) {
    const fullRounds = obj.rounds - 1
    const numItems = array.length
    const numItemsInFullRounds = Math.pow(2, fullRounds)
    const excessItemsTotal = (numItems - numItemsInFullRounds) * 2
    const excessItemsLeft = (excessItemsTotal / 2) + 1
    const excessItemsRight = excessItemsTotal - excessItemsLeft
    const itemsLeft = ((numItemsInFullRounds / 2) - excessItemsLeft / 2)
    const itemsRight = ((numItemsInFullRounds / 2) - excessItemsRight / 2)

    console.log(numItems)
    console.log(numItemsInFullRounds)
    console.log(excessItemsLeft)
    console.log(itemsLeft)
    console.log(excessItemsRight)
    console.log(itemsRight)
}


export default SplitTeamsToRegions