package main

import "fmt"

func main() {
	fmt.Print("Enter the roman number: ")
	var roman string
	fmt.Scanln(&roman)
	flag := true

	for i := 0; i < len(roman); i++ {
		if !checkInput(roman[i]) {
			flag = false
			break
		}
	}
	if flag {
		fmt.Println("Year is: ", calculation(roman))
	}
}

func checkInput(letter byte) bool {
	correctLetters := [7]string{"I", "V", "X", "L", "C", "D", "M"}
	for _, b := range correctLetters {
		if b == string(letter) {
			return true
		}
	}
	return false
}

func calculation(roman string) int {
	year := 0
	flag := 0
	correctLetters := [7][2]int{{'I', 1}, {'V', 5}, {'X', 10}, {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000}}
	for i := len(roman) - 1; i >= 0; i-- {
		for c, b := range correctLetters {
			if int(roman[i]) == b[0] {
				if flag > c {
					year -= b[1]
				} else {
					year += b[1]
				}
				flag = c
			}
		}
	}

	return year
}
