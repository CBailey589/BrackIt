function AddressCodesArrayMaker(totalRounds, currentRound, nextRoundsArray) {
    if (totalRounds < currentRound) {
        return [{ "winner": "" }]
    }
    else if (totalRounds === currentRound) {
        return [{ "1": "" }]
    }
    else {
        let expandedArray = []
        nextRoundsArray.forEach(address => {
            for(var i = 1; i <= 2; i++){
                let newAddress = Object.keys(address)[0] += i.toString()
                expandedArray.push(newAddress)
            }
        });
        return expandedArray
    }
}


export default AddressCodesArrayMaker