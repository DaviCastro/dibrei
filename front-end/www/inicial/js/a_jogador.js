
/**
 * [description]
 * @return {[type]} [description]
 */
 function Jogador(nome,nota,time,gols){
 	this._nome = nome;
 	this._nota = nota;
 	this._time = time;
 	this._gols = gols;


 };


 Object.defineProperty(Jogador.prototype, 'nome', {
 	get: function () { return this._nome; },
 	set: function (value) { this._nome = value }
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



 function Time(numeroTime,jogadores){
 	this._jogadores = jogadores;
 	this._numeroTime = numeroTime;
 };



  Object.defineProperty(Time.prototype, 'jogadores', {
 	get: function () { return this._jogadores; },
 	set: function (value) { this._jogadores = value }
 });


 Object.defineProperty(Time.prototype, 'numeroTime', {
 	get: function () { return this._numeroTime; },
 	set: function (value) { this._numeroTime = value }
 });

