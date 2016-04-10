package com.belbin.dibreiro.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "dibtb003_liga_dibreiro", schema = "public")
public class LigaDibreiro implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private long idLigaDibreiro;
	private Dibreiro dibreiro;
	private Liga liga;

	@Id
	@Column(name = "id_liga_dibreiro", unique = true, nullable = false)
	public long getIdLigaDibreiro() {
		return this.idLigaDibreiro;
	}

	public void setIdLigaDibreiro(long idLigaDibreiro) {
		this.idLigaDibreiro = idLigaDibreiro;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_dibreiro")
	public Dibreiro getDibreiro() {
		return this.dibreiro;
	}

	public void setDibtb002Dibreiro(Dibreiro dibreiro) {
		this.dibreiro = dibreiro;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_liga")
	public Liga getLiga() {
		return this.liga;
	}

	public void setLiga(Liga liga) {
		this.liga = liga;
	}

}
