package main

import (
	"fmt"
	"reflect"
	"sort"
	"strconv"
	"strings"
)

func main() {
	var input string
	fmt.Print("Enter the numbers and please put ',' between numbers: ")
	fmt.Scan(&input)
	s := strings.Split(input, ",")
	var array []int
	for i := 0; i < len(s); i++ {
		j, _ := strconv.Atoi(s[i])
		array = append(array, j)
	}
	fmt.Println(threeSum(array))

}

func threeSum(nums []int) [][]int {
	var array [][]int
	count := 0
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			for k := j + 1; k < len(nums); k++ {
				if nums[i]+nums[j]+nums[k] == 0 {

					array = append(array, []int{nums[i], nums[j], nums[k]})
					sort.Ints(array[count])
					count++
				}
			}
		}
	}
	return removeDuplicate(array)
}

func removeDuplicate(nums [][]int) [][]int {
	array := [][]int{}
	for _, a := range nums {
		if !contains(array, a) {
			array = append(array, a)
		}
	}
	return array
}

func contains(s [][]int, e []int) bool {
	for _, a := range s {
		if reflect.DeepEqual(a, e) {
			return true
		}
	}
	return false
}
