import java.util.ArrayList;
import java.util.List;

public class Partida {

    private final String palavra;
    private String mascara;
    private final List<String> palavras;
    private final List<Tentativa> tentativas = new ArrayList<>();

    private int tentativasRestantes = 8;

    public Partida(List<String> palavras, int idx) {
        this.palavras = palavras;
        this.palavra = palavras.get(idx);
        this.mascara = palavra.replaceAll(".", "*");
    }

    public boolean resolvida() {
        return tentativas.stream().anyMatch(Tentativa::acertou);
    }

    public String getStatus() {
        String ret = String.format("status:\n\t%s\ntentativas:\n", mascara);
        for (Tentativa t : tentativas)
            ret += String.format("\t%s\n", t);
        return ret;
    }

    public Tentativa tentar(String palpite) throws Exception {
        tentativasRestantes--;
        if (palavras.stream().noneMatch(palpite::equalsIgnoreCase))
            throw new Exception("Palavra não existe");
        Tentativa tentativa = new Tentativa(this.palavra, palpite);
        tentativas.add(tentativa);
        char[] resultado = tentativa.getResultado().toCharArray();
        char[] update = mascara.toCharArray();
        char[] pal = palpite.toCharArray();
        for (int i = 0; i < resultado.length; i++) {
            if (resultado[i] == '#')
                update[i] = pal[i];
        }
        mascara = new String(update);
        return tentativa;
    }

    public int numTentativas() {
        return tentativas.size();
    }

    public boolean restamTentativas() {
        return tentativasRestantes > 0;
    }

    public int getTentativasRestantes() {
        return tentativasRestantes;
    }

    public String getPalavra() {
        return palavra;
    }
}
