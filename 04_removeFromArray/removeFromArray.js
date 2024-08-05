const removeFromArray = function(array, ...argumetns) {
    let input_array = arguments[0];

    let args = Array.from(arguments);
    args.shift();

    let index;

    for (let i = 0; i < args.length; i++)
    {
        while ((index = input_array.indexOf(args[i])) !== -1)
        {
            input_array.splice(index, 1);
        }
    }

    return input_array;
};



// Do not edit below this line
module.exports = removeFromArray;
