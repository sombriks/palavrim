
public class Tentativa {

  private final String palavra;
  private final String palpite;
  private final String resultado;

  public Tentativa(String palavra, String palpite) throws Exception {
    if (palpite == null)
      throw new Exception("Informe uma palavra válida!");
    if (palpite.length() != palavra.length())
      throw new Exception("Palavra de tamanho incorreto!");
    this.palpite = palpite;
    this.palavra = palavra;
    String r = "";
    char[] check = palpite.toCharArray();
    for (int i = 0; i < check.length; i++) {
      if (palavra.charAt(i) == check[i])
        r += "#";
      else if (palavra.indexOf(check[i]) > -1)
        r += "$";
      else
        r += "*";
    }
    resultado = r;
  }

  public boolean acertou() {
    return palpite.equalsIgnoreCase(palavra);
  }

  public String getResultado() {
    return resultado;
  }

  @Override
  public String toString() {
    return palpite + "|" + resultado;
  }

}