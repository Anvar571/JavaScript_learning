package main
 
import "fmt"

func maxmin(a int, b int) (int, int) {
 
    if a > b {
        return a, b
    } else {
        return b, a
    }
}
 
func main() {
 
    var a = 50
    var b = 70
 
    var max, min = maxmin(a, b)
 
    fmt.Println("Max = ", max, "\nMin = ", min)
}