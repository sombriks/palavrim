
public class Tentativa {

  private final String segredo;
  private final String palavra;
  private final String resultado;

  public Tentativa(String segredo, String palavra) throws Exception {
    if (palavra == null)
      throw new Exception("Informe uma palavra válida!");
    if (palavra.length() != segredo.length())
      throw new Exception("Palavra de tamanho incorreto!");
    this.palavra = palavra;
    this.segredo = segredo;
    String r = "";
    char[] check = palavra.toCharArray();
    for (int i = 0; i < check.length; i++) {
      if (segredo.charAt(i) == check[i])
        r += "#";
      else if (segredo.indexOf(check[i]) > -1)
        r += "$";
      else
        r += "*";
    }
    resultado = r;
  }

  public boolean acertou() {
    return palavra.equalsIgnoreCase(segredo);
  }

  public String getResultado() {
    return resultado;
  }

  @Override
  public String toString() {
    return palavra + "|" + resultado;
  }

}