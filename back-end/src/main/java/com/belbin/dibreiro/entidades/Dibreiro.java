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
@Table(name = "dibtb002_dibreiro", schema = "public")
@SequenceGenerator(name = "dibsq002_dibreiro", sequenceName = "dibsq002_dibreiro", allocationSize = 1, schema = "public")
public class Dibreiro implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private int idDibreiro;
	private String nome;
	private String email;
	private Short nota;
	private Set<Presenca> presencas;
	private Set<LigaDibreiro> ligasDibreiro;

	@Id
	@Column(name = "id_dibreiro", unique = true, nullable = false)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "dibsq002_dibreiro")
	public int getIdDibreiro() {
		return this.idDibreiro;
	}

	public void setIdDibreiro(int idDibreiro) {
		this.idDibreiro = idDibreiro;
	}

	@Column(name = "nome", nullable = false, length = 200)
	public String getNome() {
		return this.nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Column(name = "email", length = 200)
	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name = "nota")
	public Short getNota() {
		return this.nota;
	}

	public void setNota(Short nota) {
		this.nota = nota;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "dibreiro")
	public Set<Presenca> getPresencas() {
		return this.presencas;
	}

	public void setPresencas(Set<Presenca> presencas) {
		this.presencas = presencas;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "dibreiro")
	public Set<LigaDibreiro> getLigaDibreiros() {
		return this.ligasDibreiro;
	}

	public void setLigaDibreiros(Set<LigaDibreiro> ligasDibreiro) {
		this.ligasDibreiro = ligasDibreiro;
	}

}
