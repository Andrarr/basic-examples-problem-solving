let phone = {
	color : "black",
	size : 5.5,
	iphone: {
		color : "white",
		hasButton : false,
		ram : 4,
	}
}
console.log(phone.color)
console.log(phone.iphone?.color) // with ? we check if that property exists, and if not, it returns undefined instead of error