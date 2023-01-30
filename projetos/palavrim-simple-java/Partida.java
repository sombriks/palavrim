import java.util.ArrayList;
import java.util.List;

public class Partida {

    private final String palavra;
    private String status;
    private final List<String> palavras;
    private final List<Tentativa> tentativas = new ArrayList<>();

    public Partida(List<String> palavras, String palavra) {
        this.palavras = palavras;
        this.palavra = palavra;
        this.status = palavra.replaceAll(".", "*");
    }

    public boolean resolvida() {
        return tentativas.stream().anyMatch(Tentativa::acertou);
    }

    public String getStatus() {
        String ret = String.format("status:\n\t%s\ntentativas:\n", status);
        for (Tentativa t : tentativas)
            ret += String.format("\t%s\n", t);
        return ret;
    }

    public Tentativa tentar(String palavra) throws Exception {
        if (palavras.stream().noneMatch(palavra::equalsIgnoreCase))
            throw new Exception("Palavra não existe");
        Tentativa tentativa = new Tentativa(this.palavra, palavra);
        tentativas.add(tentativa);
        char[] resultado = tentativa.getResultado().toCharArray();
        char[] update = status.toCharArray();
        char[] pal = palavra.toCharArray();
        for (int i = 0; i < resultado.length; i++) {
            if (resultado[i] == '#')
                update[i] = pal[i];
        }
        status = new String(update);
        return tentativa;
    }

    public int numTentativas() {
        return tentativas.size();
    }

}
