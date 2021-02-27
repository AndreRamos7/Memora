var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
    var data_atual = new Date();
    var dia = data_atual.getDate();
    var mes = data_atual.getMonth() + 1;
    var ano = data_atual.getFullYear();
    var agora = new Date([mes-1, "/" , dia, "/" , ano].join(''));   
    
    

    $scope.data = [dia, "/0" , mes, "/" , ano].join('');
    console.log($scope.funcao);
    if($scope.funcao != undefined){
        $scope.funcao = " na função de " + $scope.funcao;
    }    

    $scope.imprimir = function(){        
        var html_para_replicar = document.getElementById('pagina_esquerda').innerHTML;         
        document.getElementById('pagina_direita').innerHTML = html_para_replicar;
        if($scope.numero == undefined || $scope.numero == "" || $scope.numero == "0"){
            alert("Digite a numeração!");
        }else window.print();
    };
    $scope.editToogle = function(){   
           
        var element  = document.getElementById('redacao_view');   
        var editavel = element.contentEditable; 
        console.log("asdsasddasd ", editavel);       
        if(editavel == "true"){
            element.contentEditable = false;        
            $scope.editable = "Editar";
        }else{
            element.contentEditable = true;        
            $scope.editable = "Bloquear";
        }
        
    };
    $scope.editToogle();

    /* ==================================== JQUERY UI ================================================ */

    var funcoesDisponiveis = [
        "AGENTE ADMINISTRATIVO","PROFESSOR DE EDUCAÇÃO BÁSICA I","AUXILIAR DE ADMINISTRAÇÃO","DIRETOR","SERVENTE","BRAÇAL","PROFISSIONAL DE APOIO ESCOLAR - MEDIADOR","ESTAGIÁRIO - PEDAGOGIA","PROFESSOR","LÍNGUA PORTUGUESA","PROFESSOR PEDAGOGIA","PROFESSOR ARTES","PROFESSOR BILÍNGUE","MERENDEIRA","SECRETÁRIO ESCOLAR","PROFESSOR HISTÓRIA","PROFESSOR EDUCAÇÃO FÍSICA","PROFESSOR MATEMÁTICA","PROFESSOR","ESPANHOL","MOTORISTA","PROFISSIONAL DE APOIO ESCOLAR - CUIDADOR","ESPECIALISTA EM EDUCAÇÃO","PROFESSOR","GEOGRAFIA","VICE-DIRETOR","ZELADOR","PROFESSOR DE LIBRAS","PROFESSOR CIÊNCIAS","TECNÓLOGO EM INFORMÁTICA","VIGIA","PROFESSOR ENSINO RELIGIOSO","ADVOGADO","PROFESSOR INGLÊS","AUXILIAR DE ALMOXERIFE","COORDENADOR","PROFESSOR RESPONSÁVEL","PROFESSOR DE BRAILLE","PROFESSOR DE EDUCAÇAO ESPECIAL E INCLUSIVA","ESTAGIÁRIO - CIÊNCIAS NATURAIS","SECRETÁRIO MUNICIPAL","TRADUTOR E INTERPRETE DE LIBRAS","AUXILIAR DE COORDENADOR","ENCANADOR","MECÂNICO I","ELETRICISTA","NUTRICIONISTA"
    ];
    var cargosDisponiveis = [
        "AGENTE ADMINISTRATIVO","PROFESSOR DE EDUCAÇÃO BÁSICA I","AUXILIAR DE ADMINISTRAÇÃO","DIRETOR","SERVENTE","BRAÇAL","PROFISSIONAL DE APOIO ESCOLAR - MEDIADOR","ESTAGIÁRIO - PEDAGOGIA","PROFESSOR","LÍNGUA PORTUGUESA","PROFESSOR PEDAGOGIA","PROFESSOR ARTES","PROFESSOR BILÍNGUE","MERENDEIRA","SECRETÁRIO ESCOLAR","PROFESSOR HISTÓRIA","PROFESSOR EDUCAÇÃO FÍSICA","PROFESSOR MATEMÁTICA","PROFESSOR","ESPANHOL","MOTORISTA","PROFISSIONAL DE APOIO ESCOLAR - CUIDADOR","ESPECIALISTA EM EDUCAÇÃO","PROFESSOR","GEOGRAFIA","VICE-DIRETOR","ZELADOR","PROFESSOR DE LIBRAS","PROFESSOR CIÊNCIAS","TECNÓLOGO EM INFORMÁTICA","VIGIA","PROFESSOR ENSINO RELIGIOSO","ADVOGADO","PROFESSOR INGLÊS","AUXILIAR DE ALMOXERIFE","COORDENADOR","PROFESSOR RESPONSÁVEL","PROFESSOR DE BRAILLE","PROFESSOR DE EDUCAÇAO ESPECIAL E INCLUSIVA","ESTAGIÁRIO - CIÊNCIAS NATURAIS","SECRETÁRIO MUNICIPAL","TRADUTOR E INTERPRETE DE LIBRAS","AUXILIAR DE COORDENADOR","ENCANADOR","MECÂNICO I","ELETRICISTA","NUTRICIONISTA"
    ];
    var destinosDisponiveis = [
        "SECRETARIA MUNICIPAL DE EDUCAÇÃO","NÚCLEO TECNOLÓGICO MUNICIPAL","ERC MARCO LIVA","CEI PEQUENO SAMUEL","CEI SEMEADOR JOSE CORREA PINTO","ESCOLA SESI CASTANHAL","E. M. E. F. JOSE ALVES DE MORAES","LUIS VIEIRA VALE","E M E I E F MARIA PERPETUA LISBOA","E M E I E F MARIA DE NAZARE GOMES TORRES","E M E I E F MONSENHOR JOSE MARIA DO LAGO","E.M.E.I.E.F DOMINGOS BARROS DA SILVA","E M E F ANA PAULA DOS SANTOS E SANTOS","E M E F JOSE MONTEIRO MAIA","E. M. E. F. LUIZA CARNEIRO DE LIMA","EMEIEF MANOEL DEODORO ALFAIA DE ARAUJO","E M E F MARIA INES COSTA","E M E F PEDRO DIAS TEIXEIRA","E.M.E.I. E F. PROF MARIA BANDEIRA BRAGA","EMEF SAO JOAO BOSCO","E. M. E. F. ANITA GARIBALDI","E.M.E.I.E.F LEANDRA PAULINO CORRÊA","DOM MILTON PEREIRA","E M E F DR JOSE JOAO DE MELO","E M E I E F ERNESTINA MARTINS DAS NEVES","E M E F FRANCISCO ELIAS DAS CHAGAS","E M E F FRANCISCO FERREIRA DE MATOS","EMEIEF FRANCISCO GOMES SAMPAIO","EMEF PROFª GRAZIELA GABRIEL","E M E F IRENE RODRIGUES TITAN","E M E F JOAQUIM ANGELO","MARIA ALVES DOS SANTOS","E.M.E.I.E.F. JOSE HENRIQUE DE ARAUJO","E M E F JOSE PEDRO DE ARAUJO","EMEF MADRE MARIA VIGANO","E M E I E F NOSSA SENHORA DE NAZARE","E M E F PROF MARIA DA ENCARNACAO CAMPOS DE ARAUJO","E M E I E F EMILIA GIMENNEZ","E M E I E F SANTA TEREZINHA","E M E F STO AGOSTINHO","EMEIEF TIAGO GUEDES DE OLIVEIRA","E M E I E F PROF GEORGINA ROCHA DO NASCIMENTO","E M E F ALFREDO HENRIQUE DA LUZ","E M E F IZABEL MARIA DA CONCEICAO","E.M.E.I.E.F.MARIA DAS DORES SIQUEIRA FREITAS","E M E F MANOEL DE OLIVEIRA PASTANA","E M E I E F NOSSA SENHORA DAS VITORIAS","CENTRO EDUCACIONAL SESC","E M E F ANTONIO MARQUES DE MORAES","E M E F MARIA FERREIRA NOBRE","EMEIEF AMERICA JOANA DA SILVA","EMEF RAIMUNDA IZABEL DE MATOS SOUZA","E M E I E F LUIZA DO NASCIMENTO VIANA","E M E F MANOEL PINTO DE SOUZA","E M E I F ANA JOAQUINA DA SILVA","EMEIF ERONILDES FARIAS DE CARVALHO","E M E F LATIF RONALD DE OLIVEIRA JATENE","E M E I E F JOSÉ ISAÍAS","ACAO NOVA VIDA","AMIGUINHOS DE JESUS","E M E I E F PEDRO COELHO DA MOTA","E M E I F QUILOMBOLA FERNANDO NUNES RODRIGUES","EMEIEF SONHO DE CRIANÇA","FLORES DO CASTANHEIRO","CIRANDA CIRANDINHA","CMEI CARROSSEL","CEI AQUARELA","EMEIF LUIZ AUGUSTO PAIVA DE OLIVEIRA","EMEIF TEREZINHA NASCIMENTO SILVA","EMEF MARIA JOSE DOS SANTOS","CRECHE MUNICIPAL MARIA RUTH DAS CHAGAS CRAVO","CRECHE BENEDITO RUFINO DA SILVA","CRECHE SARA DE SOUZA ARAUJO","CRECHE FRANCISCO BAHIA DE AGUIAR","CMEI CLEU MAXSON SILVA FREITAS","CENTRO DE EDUCACAO INFANTIL PROFESSORA JANE MEYRE","NERIS LAMEIRA","CMEI PEQUENO DAVI","EMEF MARCO LIVA","EMEF ENGª ALESSANDRA BONO","CEI SANTA RITA DE CASSIA","E. R. C. E. I. E. F. CRISTIANA ROSSI","CAMINHO DE LUZ","E M E I CRISTO REDENTOR","MARIA IRANEIDE SAMPAIO DA SILVA","C M E I MARIA DE LOURDES MARQUES MELO","E M E I CENTRO EDUCACIONAL CASTELO DO SABER","E M E I F PAULO FREIRE","E M E I","COMUNITARIA CRIANCA ESPERANCA","CENTRO MUNICIPAL DE EDUCACAO INFANTIL MENINO JESUS","E M E I E F ROBERTO REMIGI","E M E F PROF RAIMUNDA AMARAL DA SILVA","E M E I E F FRANCISCO ESPINHEIRO GOMES"
    ];

    $("#funcao").autocomplete({
        source: funcoesDisponiveis,
        change: function( event, ui ) {
            console.log("change " + event);
        },
        search: function( event, ui ) {
            console.log("search " + event);
        },
        select: function( event, ui ) {
            $(this).val(ui.item.label);
            console.log("ui.item.value " + ui.item.value);
        }
    });
    $("#cargo").autocomplete({
        source: cargosDisponiveis,
        change: function( event, ui ) {
            console.log("change " + event);
        },
        search: function( event, ui ) {
            console.log("search " + event);           
        },
        select: function( event, ui ) {
            $scope.cargo = ui.item.label;
            event.target.value = ($scope.cargo);
            
            console.log("$scope.cargo " + event.target.value);
        },
        response: function( event, ui ) { },
        focus: function( event, ui ) {            
            console.log("movido para " + ui.item.value);
        }
    });

    $("#destino").autocomplete({
        source: destinosDisponiveis,
        change: function( event, ui ) {
            console.log("change " + event);
        },
        search: function( event, ui ) {
            console.log("search " + event);
        },
        select: function( event, ui ) {
            console.log("select " + event);
        }
    });
    
});

/*  =================================== REPLICA A PÁGINA ============================= */
function replicar_memorando (){
    var html_para_replicar = document.getElementById('pagina_esquerda').innerHTML; 
    document.getElementById('pagina_direita').innerHTML = html_para_replicar;
}
document.addEventListener('keyup', function(){     
    replicar_memorando();
});

document.addEventListener('keydown', function(e){  
    //alert("Please use the Print PDF button below for a better rendering on the document");
    var num_mem = document.getElementById("numero").value;
    if((e.ctrlKey || e.metaKey) && (e.key == "p" || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80) ){
        //alert("Por favor, se deseja Imprimir use o botão!");
        replicar_memorando();
        if(num_mem == undefined || num_mem == ""){
            e.cancelBubble = true;
            e.preventDefault();
            e.stopImmediatePropagation();
            alert("Digite a numeração");
        }
    }  
});