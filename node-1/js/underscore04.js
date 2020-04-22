let _ = require('underscore');
let arr = [1, 2, 3, 4, 5];
arr = _.without(arr, 5);
console.log(arr);
let arr1 = [1, 3, 41, 2, 3, 21, 35, 3, 2, 21];
let m = _.find(arr1, item => item % 5 == 0)
console.log(m) // 35
const _ = require('underscore')

// 1 map 可以应用到对象身上
let obj = {
	name: 'adley',
	age: 18,
	addr: 'Beijing'
}

let newObj = _.map(obj, (value, key) => {
	console.log(value, key);
	
	let _o = {}
	if (key == 'age' && value >= 18){
		_o.desc = '你已经是成年人了'
	}else {
		_o[key]=value;
	}
	return _o;
})

console.log(newObj) 
// [ { name: 'adley' }, { desc: '你已经是成年人了' }, { addr: 'Beijing' } ]

// 2 range
let a1 = _.range(10)
let a2 = _.range(0,60,5)
console.log(a1) // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(a2) // [ 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55 ]

// 3 every some
// 有一项满足条件 some
let r1 = _.some(obj, (value, key) => {
	return value >= 18;
})
console.log(r1) // true
// 都满足 every
let r2 = _.every(obj, (value, key) => {
	return value > 18;
})
console.log(r2) // false

// 4 delay 与setTimeout 效果一致 简单写法
function log() {
	console.log(new Date())
}
_.delay(log, 3000)

// 5 find 
// 返回第一个操作结果为true的成员。如果所有都为false，则返回undefined
let arr = [1,3,41,2,3,21,35,3,2,21];
let m = _.find(arr, item => item % 5 == 0)
console.log(m) // 35

// 6 contains 如果某个值在数组内，则返回true，否则返回false
_.contains([1, 2, 3], 3);




