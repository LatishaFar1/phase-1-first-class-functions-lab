// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

let returnFirstTwoDrivers = function(){
  return(drivers.slice(0,2));
};

returnFirstTwoDrivers();

let returnLastTwoDrivers = function(){
    return(drivers.slice(-2))
};
returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = times => {
    return (num) => num * times;
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => returnFirstTwoDrivers(drivers);

