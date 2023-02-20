package main

import (
	"bufio"
	"fmt"
	"os"
	"unicode/utf8"
)

type Palavrim struct {
	palarvas []string
}

func (p *Palavrim) Init(size int) *Palavrim {
	readFile, _ := os.Open("palavras.txt")
	fileScanner := bufio.NewScanner(readFile)
	for fileScanner.Scan() {
		text := fileScanner.Text()
		if utf8.RuneCountInString(text) <= size {
			p.palarvas = append(p.palarvas, text)
		}
	}
	return p
}

func main() {
	p := Palavrim{}
	p.Init(6) // TODO tornar configurável
	fmt.Println(len(p.palarvas))
}
