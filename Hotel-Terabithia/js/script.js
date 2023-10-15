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

// Sempre que o usuário acessar o sistema, diga "Bem vindo ao Hotel {Hotel}, {Nome}. É um imenso prazer ter você por aqui!". Completo
validar_acesso();        
alert("Bem vindo ao Hotel " + hotel + ", senhor(a) " + nome_usuario + ". É um imenso prazer ter você por aqui!");

// Ao encerrar qualquer programa abaixo, sempre retorne ao menu inicial.
// Na função "inicio", utilize escolha/caso (switch/case) para validar a opção escolhida pelo do usuário. Completo
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

    // 1) Receba o valor de uma diária no hotel e a quantidade de dias de hospedagem. Valide as informações, ou seja, impeça que o usuário informe dados inválidos, de maneira que o valor da diária não seja negativo e que a quantidade de dias não seja negativa, nem maior que 30. Em caso de informação inválida escreva na tela “Valor Inválido” e volte ao menu inicial. Completo
    diarias = parseFloat(prompt("Informe o valor padrão da diária do hotel:"));
    var quantidade_de_dias = parseInt(prompt("Informe a quantidade de dias de hospedagem. A quantidade máxima de dias é 30:"));

    if (diarias <= 0 || quantidade_de_dias <= 0) {
        erro_valor();
    } else if (quantidade_de_dias > 30) {
        erro_valor();
    } else {

        calculo_das_diarias = diarias * quantidade_de_dias;
        alert("O valor de " + quantidade_de_dias + " dias de hospedagem é de R$ " + calculo_das_diarias);

        // 2) Em seguida, caso o usuário tenha informado um valor correto, pergunte o nome do hóspede. Completo
        hospede = prompt("Informe o nome do hóspede");

        // 3) O próximo passo é perguntar se o usuário confirma a reserva. Caso não aceite, volte ao menu inicial. Completo
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

    // Aqui vamos tratar do cadastro de hóspedes, mas de uma forma diferente. 
    // Como no programa anterior, imagine que uma família acaba de chegar ao balcão do hotel e quer se hospedar. 

    // Monte um programa em que o usuário poderá cadastrar e pesquisar hóspedes. 
    // O programa deve oferecer um menu com algumas opções ao usuário: 1- cadastrar; 2- pesquisar; 3-listar; 4- sair.

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
        // A opção “cadastrar” deve permitir que o usuário informe um nome de hóspede, gravando-o em memória (máximo de 15 cadastros; caso atinja essa quantidade, mostre “Máximo de cadastros atingido”).
        hospede = prompt("Informe o nome do Hóspede:");
        lista_de_hospedes.push(hospede);
        alert("Hóspede " + hospede + " foi cadastrado com sucesso!");
        tratamentoDeHospedes();
    }

    function pesquisarHospedes() {
        // A opção “pesquisar” deve permitir que o usuário informe um nome e, caso seja encontrado um nome exatamente igual, mostre a mensagem “Hospede (nome) foi encontrado". Se o nome não foi encontrado mostre “Hóspede não encontrado”. 
        hospede = prompt("Qual o nome do Hóspede?");
        if (lista_de_hospedes.includes(hospede)) {
            alert("Hóspede " + hospede + " foi encontrado(a)!");
        } else {
            alert("Hóspede " +  hospede + " não foi encontrado!");
        }
        tratamentoDeHospedes();
    }

    function listarHospedes() {
        // A opção “listar” exibe todos os hóspedes do hotel um a um.
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
        // O programa deve permitir que o usuário realize essas operações repetidas várias vezes, até que use a opção “4”, que retorna ao menu principal.
        inicio();
    }

}

// <<<<<<<======eventos==========>>>>>>>
function cadastrarEventos() {

    // Neste cenário, o hotel receberá não hóspedes, mas eventos. 
    // Quando uma empresa contrata o hotel para eventos, são oferecidos garçons para servir os convidados. Considerando que cada garçom custa R$ 10,50 por hora, escreva um programa que receba o número de garçons necessários e o total de horas do evento.
    var valor_do_garcom = 10.50;

    // Depois calcule o custo total que o hotel terá com a contratação desses profissionais e exiba o resultado em tela.
    var hora_evento = parseInt(prompt("Informe o total de horas do evento:"));
    var quantidade_de_garcons = parseInt(prompt("Informe a quantidade de garçons:"));
    var valor_total = valor_do_garcom * quantidade_de_garcons * hora_evento;
    escolha = confirm("Custo total: R$ " + valor_total + ". Gostaria de efetuar a reserva?");

    // Por último, pergunte se o usuário aceita os valores. Se "S", exiba a mensagem "Reserva efetuada com sucesso". Caso contrário, exiba a mensagem "Reserva não efetuada."
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

    // Neste cenário vamos tratar do Buffet do hotel.
    // O hotel oferece café, água e salgados para cada um dos convidados de um evento alocado em seus salões. A quantidade de café, em litros, é calculada como 0,2 litro para cada convidado; a quantidade de água é calculada como 0,5 litro para cada convidado; são oferecidos 7 salgados por pessoa. 

    // Faça um programa que: 
    var convidados = parseInt(prompt("Qual o número de convidados para o evento?"));
    
    // Receba a quantidade de convidados e valide se o número de pessoas excede 350 (a capacidade máxima do salão), mostrando, nesse caso, a mensagem “quantidade de convidados superior à capacidade máxima”.
    if (convidados > 350) {
        alert("Quantidade de convidados superior à capacidade máxima!");
        inicio();
        
    } else { // Caso a quantidade de convidados seja válida, calcule a quantidade de água, café e salgados para o evento, mostrando em tela esses valores.
        // Sabendo que cada litro de café custa, 0,80 centavos, cada litro de água custa 0,40 centavos e o cento de salgados custa 34 reais, calcule o custo total com comida do evento. 
        // var valor_total = ((0.2*convidados)*0.80)+((0.5*convidados)*0.40)+((7*convidados)*34);
        var cafe = 0.2*convidados;
        var agua = 0.5*convidados;
        var salgados = 7*convidados;
        var valor_total = (cafe*0.80)+(agua*0.40)+((salgados/100)*34);
        var confirmar = confirm("O evento precisará de "+ cafe + " litros de café, " + agua + " litros de água, " + salgados + " salgados. O custo total do evento será de R$ " + valor_total + ". Gostaria de efetuar a reserva?");
        if (confirmar) { // Por último, pergunte se o usuário aceita os valores. Se "SIM", exiba a mensagem "Reserva efetuada com sucesso". Caso contrário, exiba a mensagem "Reserva não efetuada."
            alert(nome_usuario + " reserva efetuada com sucesso!");
            inicio();
        } else {
            alert("Reserva não efetuada!");
            inicio();
        }
    }

}

function auditorio() {
    // Define a capacidade dos auditórios
    var capacidadeLaranja = 150;
    var capacidadeColorado = 350;

    // Solicita o número de convidados para o evento
    var convidados = parseInt(prompt("Quantos convidados estarão presentes no seu evento?"));

    // Verifica se o número de convidados é válido
    if (convidados <= 0) {
        alert("Número de convidados inválido.");
        inicio();
        return;
    }

    // Verifica qual auditório é mais adequado
    if (convidados <= capacidadeLaranja + 70) {
        var cadeirasExtras = convidados - capacidadeLaranja;
        alert("Use o Auditório Laranja. Adicione " + cadeirasExtras + " cadeiras extras.");
    } else if (convidados <= capacidadeColorado) {
        alert("Use o Auditório Colorado.");
    } else {
        alert("Número de convidados excede a capacidade máxima.");
    }

    // Confirmação da reserva
    var confirmar = confirm("Gostaria de efetuar a reserva?");
    if (confirmar) {
        alert(nome_usuario + ", reserva efetuada com sucesso!");
    } else {
        alert(nome_usuario + ", reserva não efetuada.");
    }

    inicio();
}

function reserva() {
    // Receber o dia da semana e a hora do evento.
    var dia_evento = prompt("Qual o dia do seu evento?").toLowerCase();
    var hora_evento = parseInt(prompt("Qual a hora do seu evento?"));

    // Verificar disponibilidade do restaurante.
    var disponibilidade = false;

    if ((dia_evento !== "sabado" && dia_evento !== "domingo") && (hora_evento >= 7 && hora_evento <= 23)) {
        disponibilidade = true;
    } else if (hora_evento >= 7 && hora_evento <= 15) {
        disponibilidade = true;
    }

    // Reservar o restaurante se estiver disponível.
    if (disponibilidade) {
        var nome_empresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para ${nome_empresa}: ${dia_evento} às ${hora_evento}hs.`);
    } else {
        alert("Restaurante indisponível!");
    }

    inicio();
}

function abastecimento() { // O hotel tem um carro para levar seus hóspedes a passeios. O carro é sempre abastecido pelo hotel que tem convênios com dois postos de Gasolina: o Wayne Oil e o Stark Petrol. Os carros podem ser abastecidos tanto com álcool quanto gasolina, mas os preços têm flutuado bastante, então é necessário que que um funcionário cheque qual o posto mais em conta para abastecimento.

    var alcool;
    var gasolina;
    var gasolina_alcool;
    var nome_posto;

    // Para isso, é necessário desenvolver um programa em que o usuário informe os valores de álcool e gasolina dos dois postos e depois calcule qual o combustível mais atraente e o posto mais barato. Considere que o tanque do carro comporta 42 litros de combústivel e esse sempre será o volume a ser abastecido.
    var alcool_wayne = prompt("Qual o valor do álcool no posto Wayne Oil?");
    var gasolina_wayne = prompt("Qual o valor da gasolina no posto Wayne Oil?");

    var alcool_stark = prompt("Qual o valor do álcool no posto Stark Petrol?");
    var gasolina_stark = prompt("Qual o valor da gasolina no posto Stark Petrol?");

    // Considere que quando o álcool estiver 30% mais barato que a gasolina, é mais barato abastecer com álcool.
    // Dica: Regra de três.
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

// Sempre que o usuário sair do sistema, exiba a mensagem "Muito obrigado e até logo, {Nome}."
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