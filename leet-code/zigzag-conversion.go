package main

import (
	"fmt"
)

func main() {
	fmt.Print("Enter the string: ")
	var s string
	fmt.Scanln(&s)
	fmt.Print("Enter number of Rows: ")
	var i int
	fmt.Scanln(&i)
	fmt.Println(convert(s, i))
}

func convert(s string, numRows int) string {
	if len(s) == 0 || len(s) == 1 {
		return s
	}
	increase := 2 * (numRows - 1)
	if increase < 1 {
		increase = 1
	}
	max := increase
	add := 0
	count := 0
	flag := true
	var answer string
	answer = string(s[count])
	for true {
		if increase != max {
			if flag {
				add += increase
				flag = !flag
			} else if !flag {
				add += max - increase
				flag = !flag
			}
		} else {
			add += increase
		}
		if int(add) >= len(s) {
			flag = true
			count++
			add = count
			increase -= 2

			if increase == 0 {
				increase = max
			}
		}

		answer = answer + string(s[int(add)])

		if len(string(answer)) == len(s) {
			break
		}
	}
	return answer
}
