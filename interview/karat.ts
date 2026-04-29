/*
You are going on a camping trip, but before you leave you need to buy groceries. To optimize your time spent in the store, instead of buying the items from your shopping list in order, you plan to buy everything you need from one department before moving to the next.

Given an unsorted list of products with their departments and a shopping list, return the time saved in terms of the number of department visits eliminated.

Example: 
products = [
    ["Cheese",          "Dairy"],
    ["Carrots",         "Produce"],
    ["Potatoes",        "Produce"],
    ["Canned Tuna",     "Pantry"],
    ["Romaine Lettuce", "Produce"],
    ["Chocolate Milk",  "Dairy"],
    ["Flour",           "Pantry"],
    ["Iceberg Lettuce", "Produce"],
    ["Coffee",          "Pantry"],
    ["Pasta",           "Pantry"],
    ["Milk",            "Dairy"],
    ["Blueberries",     "Produce"],
    ["Pasta Sauce",     "Pantry"]
]

list1 = ["Blueberries", "Milk", "Coffee", "Flour", "Cheese", "Carrots"]

For example, buying the items from list1 in order would take 5 department visits, whereas your method would lead to only visiting 3 departments, a difference of 2 departments.

Produce(Blueberries)->Dairy(Milk)->Pantry(Coffee/Flour)->Dairy(Cheese)->Produce(Carrots) = 5 department visits
New: Produce(Blueberries/Carrots)->Pantry(Coffee/Flour)->Dairy(Milk/Cheese) = 3 department visits

list2 = ["Blueberries", "Carrots", "Coffee", "Milk", "Flour", "Cheese"] => 2
list3 = ["Blueberries", "Carrots", "Romaine Lettuce", "Iceberg Lettuce"] => 0
list4 = ["Milk", "Flour", "Chocolate Milk", "Pasta Sauce"] => 2
list5 = ["Cheese", "Potatoes", "Blueberries", "Canned Tuna"] => 0

All Test Cases:
shopping(products, list1) => 2
shopping(products, list2) => 2
shopping(products, list3) => 0
shopping(products, list4) => 2
shopping(products, list5) => 0

Complexity Variable:
n: number of products
*/

const products: [string, string][] = [
	['Cheese', 'Dairy'],
	['Carrots', 'Produce'],
	['Potatoes', 'Produce'],
	['Canned Tuna', 'Pantry'],
	['Romaine Lettuce', 'Produce'],
	['Chocolate Milk', 'Dairy'],
	['Flour', 'Pantry'],
	['Iceberg Lettuce', 'Produce'],
	['Coffee', 'Pantry'],
	['Pasta', 'Pantry'],
	['Milk', 'Dairy'],
	['Blueberries', 'Produce'],
	['Pasta Sauce', 'Pantry'],
]

const list1 = ['Blueberries', 'Milk', 'Coffee', 'Flour', 'Cheese', 'Carrots']
const list2 = ['Blueberries', 'Carrots', 'Coffee', 'Milk', 'Flour', 'Cheese']
const list3 = ['Blueberries', 'Carrots', 'Romaine Lettuce', 'Iceberg Lettuce']
const list4 = ['Milk', 'Flour', 'Chocolate Milk', 'Pasta Sauce']
const list5 = ['Cheese', 'Potatoes', 'Blueberries', 'Canned Tuna']

// const approach1 = ["Dairy","Produce","Produce" ,"Pantry"] // 4
// const approach2 = [ "Produce","Produce"] //2
// const result = approach1 - approach2 // 2

// const approach1 =["Produce", "Dairy", "Pantry","Dairy", "Produce"] // 6
// const approach2 =["Produce", "Dairy", "Pantry"] // 3
// const result = approach1 - approach2 // 3

function main(product: [string, string][], list: string[]): number {
	let approach1 : string[] = []
	let approach2 : string[] = []

	for (const [name, category] of product) {
		// approach1
		for (let j = 0; j <= list.length; j++) {
			if (name === list[j] && approach1.slice(-1)[0] !== category) {
				approach1.push(category)
			}

			// approach2
			const isIncluded = approach2.some((product) => product.includes(category))
			if (name === list[j] && !isIncluded) {
				approach2.push(category)
			}
		}
	}
	console.log('approach1', approach1)
	console.log('approach2', approach2)
	const result = approach1.length - approach2.length
	console.log('result:', result)
	return result
}

main(products, list1)
main(products, list2)
main(products, list3)
main(products, list4)
main(products, list5)
