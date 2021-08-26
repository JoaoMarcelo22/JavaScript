//-----------------------Json--------------------------------//
let exemploJson = '{"ong": "Recode", "telefone" : "22223333"}';
let exemploConversao= JSON.parse(exemploJson);

console.log(exemploJson);
//exibição no console : { ong: 'Recode', telefone:'22223333'}
//-------------------------------------------------------------//
let objeto = '{ong: 'Recode', telefone : 22223333}';
let exemploConversao= JSON.stringify(objeto);

console.log(exemploJson);
//exibição no console : {"ong": "Recode", "telefone" : "22223333"}