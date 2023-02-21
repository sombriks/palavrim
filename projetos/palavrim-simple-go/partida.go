package main

import (
	"errors"
	"fmt"
	"regexp"
	"strings"
)

type Partida struct {
	palavras            []string
	segredo             string
	tentativas          []*Tentativa
	mascara             string
	tentativasRestantes int
}

func NewPartida(palavras []string, idx int) *Partida {
	segredo := palavras[idx]
	rgx := regexp.MustCompile(".")
	return &Partida{
		palavras:            palavras,
		segredo:             segredo,
		tentativasRestantes: 8, // TODO tornar configurável
		mascara:             rgx.ReplaceAllString(segredo, "*"),
	}
}

func (p *Partida) Resolvida() bool {
	for _, t := range p.tentativas {
		if t.Acertou() {
			return true
		}
	}
	return false
}

func (p *Partida) Status() string {
	stat := fmt.Sprintf("status:\n\t%s\ntentativas:\n", p.mascara)
	for _, e := range p.tentativas {
		stat += "\t" + e.Status()
	}
	return stat
}

func (p *Partida) Tentar(palpite string) (*Tentativa, error) {
	var err error
	var t *Tentativa
	// palavras que não estão na lista não contam como tentativa
	if noneMatchIgnoreCase(p.palavras, palpite) {
		err = errors.New("palpite não existe na lista de palavras")
	} else {
		t, err = NewTentativa(p.segredo, palpite)
		if err == nil {
			p.tentativasRestantes--
			// guarda a tentativa
			p.tentativas = append(p.tentativas, t)
			// atualiza a mascara
			rResultado := []rune(t.resultado)
			rStatus := []rune(p.mascara)
			for i := 0; i < len(rResultado); i++ {
				if rResultado[i] == '#' {
					rStatus[i] = rune(p.segredo[i])
				}
			}
			p.mascara = string(rStatus)
		}
	}
	return t, err
}

func noneMatchIgnoreCase(palavras []string, palpite string) bool {
	for _, p := range palavras {
		if strings.EqualFold(p, palpite) {
			return false
		}
	}
	return true
}
