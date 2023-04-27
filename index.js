function saturdayFun (activity = "roller-skate"){
    let message = `This Saturday, I want to ${activity}!`;
    return message;
};
function mondayWork (where = "go to the office"){
    let message = `This Monday, I will ${where}.`;
    return message;
};


function wrapAdjective(symbol = "*") {
    const innerFunction = function (adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    };
    return innerFunction;
}