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
@Table(name = "dibtb001_liga", schema = "public")
@SequenceGenerator(name = "dibsq001_liga", sequenceName = "dibsq001_liga", allocationSize = 1, schema = "public")
public class Liga implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private int idLiga;
	private String nome;
	private String descricao;
	private String icone;
	private Set<LigaDibreiro> ligasDibreiro;
	private Set<Pelada> peladas;

	@Id
	@Column(name = "id_liga", unique = true, nullable = false)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "dibsq001_liga")
	public int getIdLiga() {
		return this.idLiga;
	}

	public void setIdLiga(int idLiga) {
		this.idLiga = idLiga;
	}

	@Column(name = "nome", nullable = false, length = 200)
	public String getNome() {
		return this.nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Column(name = "descricao", length = 20)
	public String getDescricao() {
		return this.descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	@Column(name = "icone", length = 256)
	public String getIcone() {
		return this.icone;
	}

	public void setIcone(String icone) {
		this.icone = icone;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "liga")
	public Set<LigaDibreiro> getLigasDibreiro() {
		return this.ligasDibreiro;
	}

	public void setLigasDibreiro(Set<LigaDibreiro> ligasDibreiro) {
		this.ligasDibreiro = ligasDibreiro;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "liga")
	public Set<Pelada> getPeladas() {
		return this.peladas;
	}

	public void setPeladas(Set<Pelada> peladas) {
		this.peladas = peladas;
	}

}
