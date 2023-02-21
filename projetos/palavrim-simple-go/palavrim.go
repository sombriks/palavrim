package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"time"
	"unicode/utf8"
)

type Palavrim struct {
	palarvas []string
}

func NewPalavrim(size int) *Palavrim {
	p := Palavrim{}
	readFile, _ := os.Open("palavras.txt")
	fileScanner := bufio.NewScanner(readFile)
	for fileScanner.Scan() {
		text := fileScanner.Text()
		if utf8.RuneCountInString(text) <= size {
			p.palarvas = append(p.palarvas, text)
		}
	}
	return &p
}

func (p *Palavrim) CriarPartida(idx int) *Partida {
	if idx == -1 {
		r1 := rand.New(rand.NewSource(time.Now().UnixNano()))
		idx = r1.Intn(len(p.palarvas))
	}
	return NewPartida(p.palarvas, idx)
}

func (p *Palavrim) JogarNoTerminal(partida *Partida) {
	input := bufio.NewScanner(os.Stdin)
	for !partida.Resolvida() && partida.tentativasRestantes > 0 {
		fmt.Println(partida.Status())
		fmt.Println("Qual a próxima tentativa? ")
		input.Scan()
		tentativa, err := partida.Tentar(input.Text())
		if err != nil {
			fmt.Println(err)
		} else {
			partida.tentativas = append(partida.tentativas, tentativa)
		}
		fmt.Printf("Restam %d tentativas\n", partida.tentativasRestantes)

	}
	if partida.Resolvida() {
		fmt.Printf("Você acertou a palavra em %d tentativas, parabéns!\n", len(partida.tentativas))
	} else {
		fmt.Printf("Suas chances acabaram, a palavra era %s.\n", partida.segredo)
	}
	fmt.Println(partida.Status())
}

func main() {
	palavrim := NewPalavrim(6) // TODO tornar configurável
	fmt.Println(len(palavrim.palarvas))
	idx, err := strconv.Atoi(os.Args[0])
	var partida *Partida
	if err == nil {
		partida = palavrim.CriarPartida(idx)
	} else {
		partida = palavrim.CriarPartida(-1)
	}
	palavrim.JogarNoTerminal(partida)
}
