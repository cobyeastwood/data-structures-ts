class HashTable {
	data: any[][]

	constructor(public size: number) {
		this.data = new Array(size)
	}

	get(key) {
		let hashKey = this._hash(key)

		if (this.data[hashKey]) {
			for (const [keys, datas] of this.data[hashKey]) {
				if (keys === key) {
					return datas
				}
			}
		}
	}

	set(key, data) {
		let hashKey = this._hash(key)

		if (!this.data[hashKey]) {
			this.data[hashKey] = []
		}

		this.data[hashKey].push([key, data])
	}

	private _hash(key): number {
		let hash = 0

		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length
		}

		return hash
	}
}

const ht = new HashTable(50)

ht.set('Mazzy', 2.5)
console.log(ht.get('Mazzy'))
