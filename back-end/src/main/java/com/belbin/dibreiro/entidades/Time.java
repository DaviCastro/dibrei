package com.belbin.dibreiro.entidades;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "dibtb006_time", schema = "public")
public class Time implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private long idTime;
	private Integer vitoria;
	private Set<Presenca> presencas;

	@Id
	@Column(name = "id_time", unique = true, nullable = false)
	public long getIdTime() {
		return this.idTime;
	}

	public void setIdTime(long idTime) {
		this.idTime = idTime;
	}

	@Column(name = "vitoria")
	public Integer getVitoria() {
		return this.vitoria;
	}

	public void setVitoria(Integer vitoria) {
		this.vitoria = vitoria;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "time")
	public Set<Presenca> getPresencas() {
		return this.presencas;
	}

	public void setPresencas(Set<Presenca> presencas) {
		this.presencas = presencas;
	}

}
