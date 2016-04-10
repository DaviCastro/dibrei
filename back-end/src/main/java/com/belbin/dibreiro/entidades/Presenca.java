package com.belbin.dibreiro.entidades;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "dibtb005_presenca", schema = "public")
public class Presenca implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private long idPresenca;
	private Dibreiro dibreiro;
	private Pelada pelada;
	private Avulso avulso;
	private Time time;
	private Date dataConfirmacao;
	private boolean confirmado;
	private Integer totalGols;
	private Integer totalDibres;

	@Id
	@Column(name = "id_presenca", unique = true, nullable = false)
	public long getIdPresenca() {
		return this.idPresenca;
	}

	public void setIdPresenca(long idPresenca) {
		this.idPresenca = idPresenca;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_dibreiro")
	public Dibreiro getDibreiro() {
		return this.dibreiro;
	}

	public void setDibreiro(Dibreiro dibreiro) {
		this.dibreiro = dibreiro;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_pelada", nullable = false)
	public Pelada getPelada() {
		return this.pelada;
	}

	public void setPelada(Pelada pelada) {
		this.pelada = pelada;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_avulso")
	public Avulso getAvulso() {
		return this.avulso;
	}

	public void setAvulso(Avulso avulso) {
		this.avulso = avulso;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_time")
	public Time getTime() {
		return this.time;
	}

	public void setTime(Time time) {
		this.time = time;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "data_confirmacao", nullable = false, length = 13)
	public Date getDataConfirmacao() {
		return this.dataConfirmacao;
	}

	public void setDataConfirmacao(Date dataConfirmacao) {
		this.dataConfirmacao = dataConfirmacao;
	}

	@Column(name = "confirmado", nullable = false)
	public boolean isConfirmado() {
		return this.confirmado;
	}

	public void setConfirmado(boolean confirmado) {
		this.confirmado = confirmado;
	}

	@Column(name = "total_gols")
	public Integer getTotalGols() {
		return this.totalGols;
	}

	public void setTotalGols(Integer totalGols) {
		this.totalGols = totalGols;
	}

	@Column(name = "total_dibres")
	public Integer getTotalDibres() {
		return this.totalDibres;
	}

	public void setTotalDibres(Integer totalDibres) {
		this.totalDibres = totalDibres;
	}

}
