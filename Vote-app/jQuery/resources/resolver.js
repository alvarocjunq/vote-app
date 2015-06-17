function positiveclick(id){
	var strAcu = this.getAcumulator(id);
	$(strAcu).text(parseInt($(strAcu).text())+1); //Soma no acumulador
	if(this.getIndice(id) > 1) //Se não for a primeira linha, reordena
		render();
}

function negativeclick(id){
	var strAcu = this.getAcumulator(id);
	$(strAcu).text(parseInt($(strAcu).text())-1); //Subtrai no acumulador
	if(this.getIndice(id) < $('.row').length) //Se não for a ultima linha, reordena
		render();
}

function render(){
	var id = "", acum = "", lines = [];
	$(".row").each(function(){ //Armazeno as linhas da tela
		id = $(this).attr("id");
		acum = $(getAcumulator(id)).text();
		lines.push({id: id, acum:acum, html:$("#"+id).html()});
	});
	lines = lines.sort(function(a,b){ //Ordeno por acumulador
		return b.acum - a.acum; 
	}); 
	
	lines.forEach(function(value,index){ //Recoloco na lista, ordenadamente
		$("#cit-"+(parseInt(index)+1)).html(value.html);
	});
}

function getAcumulator(id){	return "#".concat(id," > .acumulator > span");}
function getIndice(id){ return id.substring(4, id.length);}