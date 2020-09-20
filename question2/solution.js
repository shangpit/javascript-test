function insertArrayInTheMiddle(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr1) || arr1.length !== 2) {
        throw Error('input information wrong');
    }
	return [arr1[0], ...arr2, arr1[1]];
}

module.exports = insertArrayInTheMiddle;