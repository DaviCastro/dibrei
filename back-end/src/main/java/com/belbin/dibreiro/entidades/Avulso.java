package com.belbin.dibreiro.entidades;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "dibtb007_avulso", schema = "public")
@SequenceGenerator(name = "dibsq007_avulso", sequenceName = "dibsq007_avulso", allocationSize = 1, schema = "public")
public class Avulso implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private int idAvulso;
	private String nome;
	private Set<Presenca> presencas;

	@Id
	@Column(name = "id_avulso", unique = true, nullable = false)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "dibsq007_avulso")
	public int getIdAvulso() {
		return this.idAvulso;
	}

	public void setIdAvulso(int idAvulso) {
		this.idAvulso = idAvulso;
	}

	@Column(name = "nome", length = 100)
	public String getNome() {
		return this.nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "avulso")
	public Set<Presenca> getPresencas() {
		return this.presencas;
	}

	public void setPresencas(Set<Presenca> presencas) {
		this.presencas = presencas;
	}

}
