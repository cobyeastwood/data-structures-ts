class HashTable {
	data: any[][]

	constructor(public size: number) {
		this.data = new Array(size)
	}

	get(key): unknown {
		let hashKey = this._hash(key)

		if (this.data[hashKey]) {
			for (const [keys, datas] of this.data[hashKey]) {
				if (keys === key) {
					return datas
				}
			}
		}

		return null
	}

	set(key, data): void {
		let hashKey = this._hash(key)

		if (!this.data[hashKey]) {
			this.data[hashKey] = []
		}

		this.data[hashKey].push([key, data])
	}

	keys(): unknown[] {
		let dataArray = []

		for (const array of this.data) {
			if (Array.isArray(array)) {
				if (array.length === 0) {
					dataArray.push(array[0])
					return
				}
				// now loop collisions
				for (const innerArray of array) {
					dataArray.push(innerArray)
				}
			}
		}
		return dataArray
	}

	private _hash(key): number {
		let hash = 0

		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length
		}

		return hash
	}
}

const ht = new HashTable(1)

ht.set('Mazzy', 2.5)
ht.set('Odie', 3.25)
console.log(ht.keys())
