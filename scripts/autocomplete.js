/*$(function() {
    var funcoesDisponiveis = [
        "AGENTE ADMINISTRATIVO","PROFESSOR DE EDUCAÇÃO BÁSICA I","AUXILIAR DE ADMINISTRAÇÃO","DIRETOR","SERVENTE","BRAÇAL","PROFISSIONAL DE APOIO ESCOLAR - MEDIADOR","ESTAGIÁRIO - PEDAGOGIA","PROFESSOR","LÍNGUA PORTUGUESA","PROFESSOR PEDAGOGIA","PROFESSOR ARTES","PROFESSOR BILÍNGUE","MERENDEIRA","SECRETÁRIO ESCOLAR","PROFESSOR HISTÓRIA","PROFESSOR EDUCAÇÃO FÍSICA","PROFESSOR MATEMÁTICA","PROFESSOR","ESPANHOL","MOTORISTA","PROFISSIONAL DE APOIO ESCOLAR - CUIDADOR","ESPECIALISTA EM EDUCAÇÃO","PROFESSOR","GEOGRAFIA","VICE-DIRETOR","ZELADOR","PROFESSOR DE LIBRAS","PROFESSOR CIÊNCIAS","TECNÓLOGO EM INFORMÁTICA","VIGIA","PROFESSOR ENSINO RELIGIOSO","ADVOGADO","PROFESSOR INGLÊS","AUXILIAR DE ALMOXERIFE","COORDENADOR","PROFESSOR RESPONSÁVEL","PROFESSOR DE BRAILLE","PROFESSOR DE EDUCAÇAO ESPECIAL E INCLUSIVA","ESTAGIÁRIO - CIÊNCIAS NATURAIS","SECRETÁRIO MUNICIPAL","TRADUTOR E INTERPRETE DE LIBRAS","AUXILIAR DE COORDENADOR","ENCANADOR","MECÂNICO I","ELETRICISTA","NUTRICIONISTA"
    ];
    var cargosDisponiveis = [
        "AGENTE ADMINISTRATIVO","PROFESSOR DE EDUCAÇÃO BÁSICA I","AUXILIAR DE ADMINISTRAÇÃO","DIRETOR","SERVENTE","BRAÇAL","PROFISSIONAL DE APOIO ESCOLAR - MEDIADOR","ESTAGIÁRIO - PEDAGOGIA","PROFESSOR","LÍNGUA PORTUGUESA","PROFESSOR PEDAGOGIA","PROFESSOR ARTES","PROFESSOR BILÍNGUE","MERENDEIRA","SECRETÁRIO ESCOLAR","PROFESSOR HISTÓRIA","PROFESSOR EDUCAÇÃO FÍSICA","PROFESSOR MATEMÁTICA","PROFESSOR","ESPANHOL","MOTORISTA","PROFISSIONAL DE APOIO ESCOLAR - CUIDADOR","ESPECIALISTA EM EDUCAÇÃO","PROFESSOR","GEOGRAFIA","VICE-DIRETOR","ZELADOR","PROFESSOR DE LIBRAS","PROFESSOR CIÊNCIAS","TECNÓLOGO EM INFORMÁTICA","VIGIA","PROFESSOR ENSINO RELIGIOSO","ADVOGADO","PROFESSOR INGLÊS","AUXILIAR DE ALMOXERIFE","COORDENADOR","PROFESSOR RESPONSÁVEL","PROFESSOR DE BRAILLE","PROFESSOR DE EDUCAÇAO ESPECIAL E INCLUSIVA","ESTAGIÁRIO - CIÊNCIAS NATURAIS","SECRETÁRIO MUNICIPAL","TRADUTOR E INTERPRETE DE LIBRAS","AUXILIAR DE COORDENADOR","ENCANADOR","MECÂNICO I","ELETRICISTA","NUTRICIONISTA"
    ];
    var destinosDisponiveis = [
        "SECRETARIA MUNICIPAL DE EDUCAÇÃO","NÚCLEO TECNOLÓGICO MUNICIPAL"
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
            $(this).val(ui.item.value);
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
            $(this).val(ui.item.value);
            console.log("ui.item.value " + ui.item.value);
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
});*/