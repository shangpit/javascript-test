function moveAllUppercaseLetetrsToFirst(s) {
    let index = 0;
    return [...s].reduce((previous, current) => {
        if (current.toUpperCase() === current) {
            previous.splice(index, 0, current);
            index += 1;
        } else {
            previous.push(current);
        }
        return previous;
    }, []).join('');

}

module.exports = moveAllUppercaseLetetrsToFirst;