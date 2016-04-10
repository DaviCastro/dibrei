package com.Sorteio.src;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

public class Sorteio {

	public static HashMap<Integer, Jogador> jogadoresMap = new HashMap<Integer, Jogador>();
	public static List<Jogador> jogadores = new ArrayList<Jogador>();
	public static List<Jogador> jogadoresOrdenadosQuick = new ArrayList<Jogador>();
	public static int jogadoresporTime = 5;
	public static int numeroTimes = 0;

	public static int notaAvulso = 0;

	public static boolean merge = false;

	public static void main(String[] args) {
		adicionaJogadores();
		adicionaAvulsos();

		ordenaJogadores();
		numeroTimes = jogadores.size() / jogadoresporTime;
		sortearTimes(jogadoresporTime);
		imprimirTimes(jogadores);

	}

	private static void ordenaJogadores() {
		Collections.sort(jogadores);

	}

	private static void imprimirTimes(List<Jogador> jogadores) {
		for (int i = 0; i < numeroTimes; i++) {
			System.out.println("-----------------");
			System.out.println("Time " + i);
			int notaTime = 0;
			for (Jogador jogador : jogadores) {
				if (jogador.getTime() == i) {
					System.out.println(jogador.getNome() + " --" + jogador.getNota());
					notaTime += jogador.getNota();
				}
			}

			System.out.println(" Nota Time " + i + " eh " + notaTime);
		}

	}

	private static void sortearTimes(int jogadoresporTime) {
		Random randomico = new Random();
		for (int i = 0; i < jogadoresporTime; i++) {
			for (int j = 0; j < numeroTimes; j++) {
				int min = i * numeroTimes;
				int max = min + numeroTimes - 1;
				while (faltamJogadoresPote(min, max)) {
					int aleatorio = randomico.nextInt(max - min + 1) + min;
					if (jogadores.get(aleatorio).getTime() == null) {
						atribuirTime(j, jogadores.get(aleatorio));
						break;
					}
				}
			}
		}
	}

	private static boolean faltamJogadoresPote(int min, int max) {
		for (int i = min; i <= max; i++) {
			if (jogadores.get(i).getTime() == null) {
				return true;
			}
		}
		return false;
	}

	private static void atribuirTime(int i, Jogador jogador) {
		// System.out.println(jogador.getNome() +" TIME " +i);
		jogador.setTime(i);

	}

	private static void adicionaAvulsos() {
		notaAvulso = calculaAvulso(jogadores);
		int qtdJogadores = jogadores.size();
		int faltam = jogadoresporTime - (qtdJogadores % jogadoresporTime);
		for (int i = 0; i < faltam; i++) {
			jogadores.add(new Jogador(0, "Avulso"));
		}

	}

	private static int calculaAvulso(List<Jogador> jogadores) {
		Double soma = new Double(0);
		Double media;
		for (Jogador jogador : jogadores) {
			soma += jogador.getNota();
		}
		media = soma / jogadores.size();
		return media.intValue();
	}

	private static void adicionaJogadores() {
		jogadores.add(new Jogador(7, "Cunhado Jackson"));
		jogadores.add(new Jogador(7, "Egidio"));
		jogadores.add(new Jogador(4, "Filipe"));
		// jogadores.add(new Jogador(6,"Ganso"));
		jogadores.add(new Jogador(8, "Jackson"));
		jogadores.add(new Jogador(6, "JOtavio"));
		jogadores.add(new Jogador(5, "Leles"));
		jogadores.add(new Jogador(5, "Paulinho"));
		// jogadores.add(new Jogador(4, "Irmao Paulinho"));
		jogadores.add(new Jogador(6, "Rodolfo"));
		jogadores.add(new Jogador(3, "Doug"));
		jogadores.add(new Jogador(9, "Orlando"));
		jogadores.add(new Jogador(5, "Pimenta"));
		jogadores.add(new Jogador(6, "TIzil"));
		// jogadores.add(new Jogador(4, "Robson"));
		jogadores.add(new Jogador(6, "Pedro"));

	}
}
