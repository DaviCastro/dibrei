package com.belbin.dibreiro.entidades;

import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "dibtb004_pelada", schema = "public")
public class Pelada implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private long idPelada;
	private Liga liga;
	private Date inicio;
	private Date fim;
	private String local;
	private boolean fixa;
	private Date dataMarcarPelada;
	private Set<Presenca> presencas;
	
	

	@Id
	@Column(name = "id_pelada", unique = true, nullable = false)
	public long getIdPelada() {
		return this.idPelada;
	}

	public void setIdPelada(long idPelada) {
		this.idPelada = idPelada;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_liga")
	public Liga getLiga() {
		return this.liga;
	}

	public void setLiga(Liga liga) {
		this.liga = liga;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "inicio", nullable = false, length = 13)
	public Date getInicio() {
		return this.inicio;
	}

	public void setInicio(Date inicio) {
		this.inicio = inicio;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "fim", nullable = false, length = 13)
	public Date getFim() {
		return this.fim;
	}

	public void setFim(Date fim) {
		this.fim = fim;
	}

	@Column(name = "local", nullable = false, length = 500)
	public String getLocal() {
		return this.local;
	}

	public void setLocal(String local) {
		this.local = local;
	}

	@Column(name = "fixa", nullable = false)
	public boolean isFixa() {
		return this.fixa;
	}

	public void setFixa(boolean fixa) {
		this.fixa = fixa;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "data_marcar_pelada", length = 13)
	public Date getDataMarcarPelada() {
		return this.dataMarcarPelada;
	}

	public void setDataMarcarPelada(Date dataMarcarPelada) {
		this.dataMarcarPelada = dataMarcarPelada;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "pelada")
	public Set<Presenca> getPresencas() {
		return this.presencas;
	}

	public void setPresencas(Set<Presenca> presencas) {
		this.presencas = presencas;
	}

}
