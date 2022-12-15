// Code your solution in this file!
const drivers = [`a`,`b`,`c`,`d`,`e`,`f`]

const returnFirstTwoDrivers = (drivers) => {
    const firstTwo = drivers.slice(0,2) 
    
    console.log(firstTwo)

    return firstTwo
  
}
returnFirstTwoDrivers(drivers)


const returnLastTwoDrivers = function(drivers) {
    const lastTwo = drivers.slice(-2)
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return (fare) => multiplier * fare
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(xyz, asdf) { 
    return asdf(xyz)
 }