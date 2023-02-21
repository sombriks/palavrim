package main

import (
	"errors"
	"fmt"
	"strings"
)

type Tentativa struct {
	palavra   string
	palpite   string
	resultado string
}

func NewTentativa(palavra string, palpite string) (*Tentativa, error) {
	var tentativa *Tentativa
	var err error

	rPalavra := []rune(strings.ToLower(palavra))
	rPalpite := []rune(strings.TrimSpace(strings.ToLower(palpite)))

	if len(strings.TrimSpace(palpite)) == 0 {
		err = errors.New("palpite não pode ser vazio")
	} else if len(rPalavra) != len(rPalpite) {
		err = errors.New("plapite de tamanho incorreto")
	} else {
		resultado := ""
		for i := 0; i < len(rPalpite); i++ {
			if rPalavra[i] == rPalpite[i] {
				resultado += "#"
			} else if strings.Contains(string(rPalavra), string(rPalpite[i])) {
				resultado += "$"
			} else {
				resultado += "*"
			}
		}
		tentativa = &Tentativa{
			palavra,
			palpite,
			resultado,
		}
	}

	return tentativa, err
}

func (t *Tentativa) Acertou() bool {
	return strings.ToLower(t.palavra) == strings.ToLower(t.palpite)
}

func (t *Tentativa) Status() string {
	return fmt.Sprintf("%s|%s\n", t.palpite, t.resultado)
}
