var escolha;
var hospede;
var idade_hospede;
var diarias;
var gratuidades = 0;
var meia_diaria = 0;
var calculo_das_diarias = 0;
var lista_de_hospedes_ilimitada = [];
var lista_de_hospedes = ["Alexsander", "Gabriel", "Alex", "Ingrid", "Ana", "Camille", "João"];

// <<<<<=====dados hotel=====>>>>
var hotel = prompt("Informe o nome do hotel:");
alert("O nome do hotel é " + hotel);

// Ao acessar o sistema, pergunte o nome do usuário e uma senha. O nome do usuário não precisa de validação. A senha deve ser 2678. Não finalizado
var nome_usuario = prompt("Informe o seu nome:");

validar_acesso();        
alert("Bem vindo ao Hotel " + hotel + ", senhor(a) " + nome_usuario + ". É um imenso prazer ter você por aqui!");


function inicio() {

    escolha = parseInt(prompt("Escolha uma opção: 1.Reservar quarto 2.Cadastrar hóspedes 3.Fazer o tratamento dos dados dos hóspedes 4.Cadastrar eventos 5. Buffet do hotel 6.Auditório 7.Reservar restaurante 8.Calcular valor do combustível 9.Orçamento do ar condicionado 10.Sair"));

    switch(escolha) {
        
        case 1:
            quartos();
            break;
        case 2:
            cadastro();
            break;
        case 3:
            tratamentoDeHospedes();
            break;
        case 4:
            cadastrarEventos();
            break;
        case 5:
            buffetDoHotel();
            break;
        case 6:
            auditorio();
            break;
        case 7:
            reserva();
            break;
        case 8:
            abastecimento();
            break;
        case 9:
            arCondicionado();
            break;
        case 10:
            sair();
            break;
        default:
            erro_valor();

    }

}

// <<<<<<<==========Reserva de quartos========>>>>
function quartos() {

    diarias = parseFloat(prompt("Informe o valor padrão da diária do hotel:"));
    var quantidade_de_dias = parseInt(prompt("Informe a quantidade de dias de hospedagem. A quantidade máxima de dias é 30:"));

    if (diarias <= 0 || quantidade_de_dias <= 0) {
        erro_valor();
    } else if (quantidade_de_dias > 30) {
        erro_valor();
    } else {

        calculo_das_diarias = diarias * quantidade_de_dias;
        alert("O valor de " + quantidade_de_dias + " dias de hospedagem é de R$ " + calculo_das_diarias);

        hospede = prompt("Informe o nome do hóspede");

        var confirmar = confirm("Você deseja confirmar a reserva do hóspede " + hospede + " no valor de R$ " + calculo_das_diarias + " para " + quantidade_de_dias + " dias de hospedagem?");

        if (confirmar) {
            alert(nome_usuario + ", reserva efetuada para Carlos Moreira. O valor total é de R$ " + calculo_das_diarias);
            inicio();
        } else {
            alert(nome_usuario + ", reserva não efetuada!");
            inicio();
        }

        inicio();
    }

}

function cadastro() {
    diarias = parseFloat(prompt("Informe o valor padrão da diária do hotel:"));

    function calcularHospedagem(idade_hospede) {
        if (idade_hospede <= 6) {
            gratuidades++;
            return "possui gratuidade.";
        } else if (idade_hospede >= 60) {
            meia_diaria++;
            calculo_das_diarias += diarias / 2;
            return "paga meia diária.";
        } else {
            calculo_das_diarias += diarias;
            return "pagou diária completa.";
        }
    }

    do {
        hospede = prompt("Informe o nome do hóspede. Caso tenha cadastrado todos os hóspedes, digite 'pare'");
        if (hospede.toUpperCase() === "PARE") {
            break;
        }
        idade_hospede = parseInt(prompt("Informe a idade do hóspede:"));

        var resultado = calcularHospedagem(idade_hospede);
        alert(hospede + " cadastrado(a) com sucesso! " + hospede + " " + resultado);
        lista_de_hospedes_ilimitada.push(hospede);
    } while (hospede.toUpperCase() !== "PARE");

    alert(nome_usuario + ", o valor total das hospedagens é: R$" + calculo_das_diarias + "; " + gratuidades + " gratuidade(s); " + meia_diaria + " meia(s)");
    inicio();
}

function tratamentoDeHospedes() {

    // <<<<<<<==========cadastrar,pesquisar,listar============>>>>>>>>>
    escolha = parseInt(prompt("Selecione uma opção: 1-Cadastrar; 2-Pesquisar; 3-listar; 4-sair"));

    switch (escolha) {
        case 1:
            if (lista_de_hospedes.length < 15) {
                cadastroDeHospede();
            } else {
                alert("Limite de hóspedes atingido!");
                tratamentoDeHospedes();
            }
            break;
        case 2:
            pesquisarHospedes();
            break;
        case 3:
            listarHospedes();
            break;
        case 4:
            sairDoMenu();
            break;
        default:
            erro_valor;
    }

    function cadastroDeHospede() {
        
        lista_de_hospedes.push(hospede);
        alert("Hóspede " + hospede + " foi cadastrado com sucesso!");
        tratamentoDeHospedes();
    }

    function pesquisarHospedes() {
        
        hospede = prompt("Qual o nome do Hóspede?");
        if (lista_de_hospedes.includes(hospede)) {
            alert("Hóspede " + hospede + " foi encontrado(a)!");
        } else {
            alert("Hóspede " +  hospede + " não foi encontrado!");
        }
        tratamentoDeHospedes();
    }

    function listarHospedes() {
        
        var cont = 0;
        var i;
        while (cont < lista_de_hospedes.length) {
            i = cont + 1;
            alert("O hóspede " + lista_de_hospedes[cont] + " ocupa a posição " + i);
            cont++;
        }
        tratamentoDeHospedes();
    }

    function sairDoMenu() {
    
        inicio();
    }

}

// <<<<<<<======eventos==========>>>>>>>
function cadastrarEventos() {

    var valor_do_garcom = 10.50;

    var hora_evento = parseInt(prompt("Informe o total de horas do evento:"));
    var quantidade_de_garcons = parseInt(prompt("Informe a quantidade de garçons:"));
    var valor_total = valor_do_garcom * quantidade_de_garcons * hora_evento;
    escolha = confirm("Custo total: R$ " + valor_total + ". Gostaria de efetuar a reserva?");

    if (escolha) {
        alert("Reserva efetuada com sucesso!");
        reserva = "O evento terá duração de " + hora_evento + " horas e " + quantidade_de_garcons + ", tendo um custo total de " + valor_total;
        inicio();
    } else {
        alert("Reserva não efetuada!");
        inicio();
    }
    
}

function buffetDoHotel() {


    var convidados = parseInt(prompt("Qual o número de convidados para o evento?"));
    
   
    if (convidados > 350) {
        alert("Quantidade de convidados superior à capacidade máxima!");
        inicio();
        
    } else { 
        var cafe = 0.2*convidados;
        var agua = 0.5*convidados;
        var salgados = 7*convidados;
        var valor_total = (cafe*0.80)+(agua*0.40)+((salgados/100)*34);
        var confirmar = confirm("O evento precisará de "+ cafe + " litros de café, " + agua + " litros de água, " + salgados + " salgados. O custo total do evento será de R$ " + valor_total + ". Gostaria de efetuar a reserva?");
        if (confirmar) {
            alert(nome_usuario + " reserva efetuada com sucesso!");
            inicio();
        } else {
            alert("Reserva não efetuada!");
            inicio();
        }
    }

}

function auditorio() {
    
    var capacidadeLaranja = 150;
    var capacidadeColorado = 350;

    var convidados = parseInt(prompt("Quantos convidados estarão presentes no seu evento?"));

    if (convidados <= 0) {
        alert("Número de convidados inválido.");
        inicio();
        return;
    }

    if (convidados <= capacidadeLaranja + 70) {
        var cadeirasExtras = convidados - capacidadeLaranja;
        alert("Use o Auditório Laranja. Adicione " + cadeirasExtras + " cadeiras extras.");
    } else if (convidados <= capacidadeColorado) {
        alert("Use o Auditório Colorado.");
    } else {
        alert("Número de convidados excede a capacidade máxima.");
    }

    var confirmar = confirm("Gostaria de efetuar a reserva?");
    if (confirmar) {
        alert(nome_usuario + ", reserva efetuada com sucesso!");
    } else {
        alert(nome_usuario + ", reserva não efetuada.");
    }

    inicio();
}

function reserva() {
   
    var dia_evento = prompt("Qual o dia do seu evento?").toLowerCase();
    var hora_evento = parseInt(prompt("Qual a hora do seu evento?"));

    var disponibilidade = false;

    if ((dia_evento !== "sabado" && dia_evento !== "domingo") && (hora_evento >= 7 && hora_evento <= 23)) {
        disponibilidade = true;
    } else if (hora_evento >= 7 && hora_evento <= 15) {
        disponibilidade = true;
    }

    if (disponibilidade) {
        var nome_empresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para ${nome_empresa}: ${dia_evento} às ${hora_evento}hs.`);
    } else {
        alert("Restaurante indisponível!");
    }

    inicio();
}

function abastecimento() { 

    var alcool;
    var gasolina;
    var gasolina_alcool;
    var nome_posto;

    var alcool_wayne = prompt("Qual o valor do álcool no posto Wayne Oil?");
    var gasolina_wayne = prompt("Qual o valor da gasolina no posto Wayne Oil?");

    var alcool_stark = prompt("Qual o valor do álcool no posto Stark Petrol?");
    var gasolina_stark = prompt("Qual o valor da gasolina no posto Stark Petrol?");

    if (alcool_wayne < alcool_stark) {
        alcool = alcool_wayne;
        nome_posto = "Wayne Oil";
    } else {
        alcool = alcool_stark;
        nome_posto = "Stark Petrol";
    }
    if (gasolina_wayne < gasolina_stark) {
        gasolina = gasolina_wayne;
        nome_posto = "Wayne Oil";
    } else {
        gasolina = gasolina_stark;
        nome_posto = "Stark Petrol";
    }

    if (gasolina*0.7 < alcool) {
        gasolina_alcool = "gasolina";
    } else {
        gasolina_alcool = "alcool";
    }

    alert(`${nome_usuario}, é mais barato abastecer com ${gasolina_alcool} no posto ${nome_posto}`);

    inicio();

}

function arCondicionado() {
    var empresas = [];

    do {
        var nome_empresa = prompt("Qual o nome da empresa?");
        var valor_aparelho = parseFloat(prompt("Qual o valor por aparelho?"));
        var qtde_aparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"));
        var qtde_desconto = parseFloat(prompt("Qual a porcentagem de desconto?"));
        var qtde_minimo = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));

        var valor_total = valor_aparelho * qtde_aparelhos;

        if (qtde_aparelhos > qtde_minimo) {
            var desconto = valor_total - ((valor_total * qtde_desconto) / 100);
            empresas.push({ nome: nome_empresa, valorTotal: desconto });
            alert(`O serviço da ${nome_empresa} custará R$ ${desconto}`);
        } else {
            empresas.push({ nome: nome_empresa, valorTotal: valor_total });
            alert(`O serviço da ${nome_empresa} custará R$ ${valor_total}`);
        }

        var escolha = confirm("Deseja informar novos dados?");

    } while (escolha);

    var menor_empresa = null;
    var menor_valor = Infinity;
    for (var i = 0; i < empresas.length; i++) {
        if (empresas[i].valorTotal < menor_valor) {
            menor_empresa = empresas[i].nome;
            menor_valor = empresas[i].valorTotal;
        }
    }

    alert(`O orçamento de menor valor é o da ${menor_empresa} por R$ ${menor_valor}`);
    inicio();
}

function sair() {
    
    var confirmar = confirm("Você deseja sair?");

    if (confirmar) {
        alert("Muito obrigado e até logo, " + nome_usuario);

        window.close();
    } else {
        inicio();
    }
    
}

function erro_valor() {

    alert("Valor inválido!");
    inicio();

}

function validar_acesso() {
        var senha_usuario = parseInt(prompt("Digite a senha:"));

        if (senha_usuario !== 2678) {
            alert("Senha incorreta!");
            validar_acesso();
        }
    }

inicio();
