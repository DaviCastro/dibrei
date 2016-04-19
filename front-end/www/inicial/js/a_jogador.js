
/**
 * [description]
 * @return {[type]} [description]
 */
 function Jogador(nome,nota,time,gols, ativo){
 	this._nome = nome;
 	this._nota = nota;
 	this._time = time;
 	this._gols = gols;
 	this._ativo = ativo;


 };


 Object.defineProperty(Jogador.prototype, 'nome', {
 	get: function () { return this._nome; },
 	set: function (value) { this._nome = value }
 });

 Object.defineProperty(Jogador.prototype, 'ativo', {
 	get: function () { return this._ativo; },
 	set: function (value) { this._ativo = value }
 });



 Object.defineProperty(Jogador.prototype, 'nota', {
 	get: function () { return this._nota; },
 	set: function (value) { this._nota = value }
 });


 Object.defineProperty(Jogador.prototype, 'time', {
 	get: function () { return this._time; },
 	set: function (value) { this._time = value }
 });

  Object.defineProperty(Jogador.prototype, 'gols', {
 	get: function () { return this._gols; },
 	set: function (value) { this._gols = value }
 });



 function Time(numeroTime,jogadores, vitorias){
 	this._jogadores = jogadores;
 	this._numeroTime = numeroTime;
 	this._vitorias = vitorias;
 };



  Object.defineProperty(Time.prototype, 'jogadores', {
 	get: function () { return this._jogadores; },
 	set: function (value) { this._jogadores = value }
 });


 Object.defineProperty(Time.prototype, 'numeroTime', {
 	get: function () { return this._numeroTime; },
 	set: function (value) { this._numeroTime = value }
 });

 Object.defineProperty(Time.prototype, 'vitorias', {
 	get: function () { return this._vitorias; },
 	set: function (value) { this._vitorias = value }
 });

