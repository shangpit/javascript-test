function canGetNestedInside(arr1, arr2) {
	return (
        Math.max(...arr1) < Math.max(...arr2)
        && Math.min(...arr1) > Math.min(...arr2)
    )
}

module.exports = canGetNestedInside;