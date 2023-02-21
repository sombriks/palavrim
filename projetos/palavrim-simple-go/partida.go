package main

import (
	"fmt"
	"regexp"
)

type Partida struct {
	palavras            []string
	segredo             string
	tentativas          []*Tentativa
	status              string
	tentativasRestantes int
}

func NewPartida(palavras []string, idx int) *Partida {
	segredo := palavras[idx]
	rgx := regexp.MustCompile(".")
	return &Partida{
		palavras:            palavras,
		segredo:             segredo,
		tentativasRestantes: 8, // TODO tornar configurável
		status:              rgx.ReplaceAllString(segredo, "*"),
	}
}

func (p *Partida) Resolvida() bool {
	for _, t := range p.tentativas {
		if t.acertou() {
			return true
		}
	}
	return false
}

func (p *Partida) Status() string {
	stat := fmt.Sprintf("status:\n\t%s\ntentativas:\n", p.status)

	return stat
}

func (p *Partida) Tentar(palpite string) (*Tentativa, error) {
	p.tentativasRestantes--
	return nil, nil
}
