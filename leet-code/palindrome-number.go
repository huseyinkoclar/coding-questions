package main

import "fmt"

func main() {

	fmt.Print("Enter the number: ")
	var number int
	fmt.Scanln(&number)
	if isPalindrome(number) {
		fmt.Printf("This number is palindrome!")
	} else {
		fmt.Printf("This number is not palindrome!")
	}
}

func isPalindrome(number int) bool {
	if number == reverse_int(number) {
		return true
	}
	return false
}

func reverse_int(n int) int {
	new_int := 0
	for n > 0 {
		remainder := n % 10
		new_int *= 10
		new_int += remainder
		n /= 10
	}
	return new_int
}
