const items = [2, 5, 1, 4, 1, 2, 5, 6, 8]

/**
 * @desc: First occurance at a paticular index (2 & 2)
 *
 * @time: Big O (n)
 * @space: Big O (n)
 */

const findRepeatByIdx = (items: number[]) => {
	for (let i = 0; i < items.length; i++) {
		for (let j = i + 1; j < items.length; j++) {
			if (items[i] === items[j]) {
				return items[i]
			}
		}
	}

	return null
}

/**
 * @desc: First occurance based on index distance (1 & 1)
 *
 * @time: Big O (n^2)
 * @space: Big O (1)
 */

const findRepeatByIdxDiff = (items: number[]) => {
	let unqiue = {}

	for (let i = 0; i < items.length; i++) {
		const key = items[i]

		if (!unqiue[key]) {
			unqiue[key] = true
		} else {
			return key
		}
	}

	return null
}
