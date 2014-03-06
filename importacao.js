var soap = require('soap');
 
var url = "https://www3.bcb.gov.br/sgspub/JSP/sgsgeral/FachadaWSSGS.wsdl"
var args = {name: 'value'};
 
function round(valor){
        return Math.round(valor * Math.pow(10,2)) / Math.pow(10,2)
}
 
 
soap.createClient(url, function(err, client) {
  client.getUltimosValoresSerieVO({'in0': 1, 'in1': 1}, function(err, result) {
          valorDolar = result.getUltimosValoresSerieVOReturn.valores.valores.svalor * 1.0;
          console.log("Cambio: U$ " + valorDolar);
          console.log("");
          var valor = round(valorDolar * process.argv[2]);
          console.log("Valor inicial: .........U$ " + process.argv[2]);
          console.log("Valor convertido: ......R$ " + valor);
          console.log("Taxa importação média: .R$ " + round(valor * 0.5));
          console.log("Total: .................R$ " + round(valor * 1.5));
  });
});
