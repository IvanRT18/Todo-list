exports.getDate = function(){
    const today = new Date();
    const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    };

    return today.toLocaleDateString("en-GB", option);
}

exports.getDay = function(){
    const today = new Date();
    const option = {
        weekday: "long"
    };

    return today.toLocaleDateString("en-GB", option);
}

console.log(module.exports);