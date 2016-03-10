import java.util.Random;



public class Jogador implements Comparable<Jogador>{

	private Integer nota;
	private String nome;
	private Integer time;
	private static Random random = new Random();
	
	public Jogador(int i, String string) {
		
		nota = i;
		nome = string;
	}

	@Override
	public int compareTo(Jogador o) {
		if(o.getNota() == this.getNota()){
			return random.nextBoolean()?1:-1;
		}
		return o.nota > nota?1:-1;
	}

	public Integer getNota() {
		return nota;
	}

	public void setNota(Integer nota) {
		this.nota = nota;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getTime() {
		return time;
	}

	public void setTime(Integer time) {
		this.time = time;
	}


}
