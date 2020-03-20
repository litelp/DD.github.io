var arr = new Array(parseInt(5)).fill().map(() => Math.random() * 200 - 100 | 0);
console.log(arr);

//перебор элементов и замена нулями

for (let i = 0; i < arr.length; i++) {
	if (arr[i] < 0) {
		arr[i] = 0;
	}
}

console.log(arr);

let counter = 0; //счетчик нулей

for (let i = 0; i < arr.length; i++) {
	if (arr[i] = 0) {
		counter++;
		if (arr[i+1] = 0) {
			arr[i+2] = -1;
		}
	}
}
console.log(arr);