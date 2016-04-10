CREATE SEQUENCE dibsq001_liga;
CREATE SEQUENCE dibsq002_dibreiro;
CREATE SEQUENCE dibsq003_liga_dibreiro;
CREATE SEQUENCE dibsq004_pelada;
CREATE SEQUENCE dibsq005_presenca;
CREATE SEQUENCE dibsq006_time;
CREATE SEQUENCE dibsq007_avulso;


/*==============================================================*/
/* Table: DIBTB001_LIGA                                         */
/*==============================================================*/
CREATE TABLE DIBTB001_LIGA (
   ID_LIGA              INT4                 NOT NULL,
   NOME                 VARCHAR(200)         NOT NULL,
   DESCRICAO            VARCHAR(20)          NULL,
   ICONE                VARCHAR(256)         NULL,
   CONSTRAINT PK_DIBTB001_LIGA PRIMARY KEY (ID_LIGA)
);

/*==============================================================*/
/* Table: DIBTB002_DIBREIRO                                     */
/*==============================================================*/
CREATE TABLE DIBTB002_DIBREIRO (
   ID_DIBREIRO          INT4                 NOT NULL,
   NOME                 VARCHAR(200)         NOT NULL,
   EMAIL                VARCHAR(200)         NULL,
   NOTA                 INT2                 NULL,
   CONSTRAINT PK_DIBTB002_DIBREIRO PRIMARY KEY (ID_DIBREIRO)
);

/*==============================================================*/
/* Table: DIBTB003_LIGA_DIBREIRO                                */
/*==============================================================*/
CREATE TABLE DIBTB003_LIGA_DIBREIRO (
   ID_LIGA_DIBREIRO     INT8                 NOT NULL,
   ID_LIGA              INT4                 NULL,
   ID_DIBREIRO          INT4                 NULL,
   CONSTRAINT PK_DIBTB003_LIGA_DIBREIRO PRIMARY KEY (ID_LIGA_DIBREIRO)
);

/*==============================================================*/
/* Table: DIBTB004_PELADA                                       */
/*==============================================================*/
CREATE TABLE DIBTB004_PELADA (
   ID_PELADA            INT8                 NOT NULL,
   ID_LIGA              INT4                 NULL,
   INICIO               DATE                 NOT NULL,
   FIM                  DATE                 NOT NULL,
   LOCAL                VARCHAR(500)         NOT NULL,
   FIXA                 BOOL                 NOT NULL,
   DATA_MARCAR_PELADA   DATE                 NULL,
   CONSTRAINT PK_DIBTB004_PELADA PRIMARY KEY (ID_PELADA)
);

/*==============================================================*/
/* Table: DIBTB005_PRESENCA                                     */
/*==============================================================*/
CREATE TABLE DIBTB005_PRESENCA (
   ID_PRESENCA          INT8                 NOT NULL,
   ID_TIME              INT8                 NULL,
   ID_AVULSO            INT4                 NULL,
   ID_PELADA            INT8                 NOT NULL,
   ID_DIBREIRO          INT4                 NULL,
   DATA_CONFIRMACAO     DATE                 NOT NULL,
   CONFIRMADO           BOOL                 NOT NULL,
   TOTAL_GOLS           INT4                 NULL,
   TOTAL_DIBRES         INT4                 NULL,
   CONSTRAINT PK_DIBTB005_PRESENCA PRIMARY KEY (ID_PRESENCA)
);

/*==============================================================*/
/* Table: DIBTB006_TIME                                         */
/*==============================================================*/
CREATE TABLE DIBTB006_TIME (
   ID_TIME              INT8                 NOT NULL,
   VITORIA              INT4                 NULL,
   CONSTRAINT PK_DIBTB006_TIME PRIMARY KEY (ID_TIME)
);

/*==============================================================*/
/* Table: DIBTB007_AVULSO                                       */
/*==============================================================*/
CREATE TABLE DIBTB007_AVULSO (
   ID_AVULSO            INT4                 NOT NULL,
   NOME                 VARCHAR(100)         NULL,
   CONSTRAINT PK_DIBTB007_AVULSO PRIMARY KEY (ID_AVULSO)
);

ALTER TABLE DIBTB003_LIGA_DIBREIRO
   ADD CONSTRAINT FK_DIBTB003_MODELO_DI_DIBTB002 FOREIGN KEY (ID_DIBREIRO)
      REFERENCES DIBTB002_DIBREIRO (ID_DIBREIRO)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE DIBTB003_LIGA_DIBREIRO
   ADD CONSTRAINT FK_DIBTB003_MODELO_DI_DIBTB001 FOREIGN KEY (ID_LIGA)
      REFERENCES DIBTB001_LIGA (ID_LIGA)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE DIBTB004_PELADA
   ADD CONSTRAINT FK_DIBTB004_MODELO_DI_DIBTB001 FOREIGN KEY (ID_LIGA)
      REFERENCES DIBTB001_LIGA (ID_LIGA)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE DIBTB005_PRESENCA
   ADD CONSTRAINT FK_DIBTB005_MODELO_DI_DIBTB004 FOREIGN KEY (ID_PELADA)
      REFERENCES DIBTB004_PELADA (ID_PELADA)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE DIBTB005_PRESENCA
   ADD CONSTRAINT FK_DIBTB005_MODELO_DI_DIBTB002 FOREIGN KEY (ID_DIBREIRO)
      REFERENCES DIBTB002_DIBREIRO (ID_DIBREIRO)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE DIBTB005_PRESENCA
   ADD CONSTRAINT FK_DIBTB005_MODELO_DI_DIBTB006 FOREIGN KEY (ID_TIME)
      REFERENCES DIBTB006_TIME (ID_TIME)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE DIBTB005_PRESENCA
   ADD CONSTRAINT FK_DIBTB005_MODELO_DI_DIBTB007 FOREIGN KEY (ID_AVULSO)
      REFERENCES DIBTB007_AVULSO (ID_AVULSO)
      ON DELETE RESTRICT ON UPDATE RESTRICT;
