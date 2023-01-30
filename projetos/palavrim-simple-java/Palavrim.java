import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Scanner;
import java.util.logging.Logger;
import java.util.stream.Collectors;

public class Palavrim {

    private static final Logger LOG = Logger.getLogger("Palavrim");

    private List<String> palavras;

    public Palavrim(int max) throws Exception {
        palavras = Files.readAllLines(Paths.get(Palavrim.class.getResource("/palavras.txt").toURI()));
        if (max > 0)
            palavras = palavras.stream().filter(p -> p.length() <= max).collect(Collectors.toList());
        LOG.info(String.format("Tem %d palavras disponíveis", palavras.size()));
    }

    public Partida criaPartida() {
        int idx = (int) (Math.random() * palavras.size());
        return criaPartida(idx);
    }

    private Partida criaPartida(int idx) {
        return new Partida(palavras, palavras.get(idx));
    }

    public void jogarNoTerminal(Partida partida) {
        try (Scanner input = new Scanner(System.in)) {
            while (!partida.resolvida()) {
                System.out.println(partida.getStatus());
                System.out.print("Qual a próxima tentativa? ");
                try {
                    partida.tentar(input.nextLine());
                } catch (Exception e) {
                    System.out.println(e);
                }
                System.out.println();
            }
            System.out.printf("Você acertou a palavra em %d tentativas, parabéns!\n", partida.numTentativas());
            System.out.println(partida.getStatus());
        }
    }

    public static void main(String[] args) throws Exception {
        Palavrim palavrim = new Palavrim(6);
        Partida partida = null;
        if (args.length > 0) {
            partida = palavrim.criaPartida(Integer.parseInt(args[0]));
        } else {
            partida = palavrim.criaPartida();
        }
        palavrim.jogarNoTerminal(partida);
    }
}