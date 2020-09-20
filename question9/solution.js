function getNumberOfLayers(rug) {
    const centerLine = rug[Math.floor(rug.length / 2)];
    const aHalfOfCenterLine = centerLine.slice(0, Math.round(centerLine.length / 2));

    let count = 0;
    [...aHalfOfCenterLine].reduce((previous, current) => {
        if (previous !== current) {
            count += 1;
        }
        return current;
    }, '');
    return count;
}

module.exports = getNumberOfLayers;