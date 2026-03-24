document.addEventListener('DOMContentLoaded', () => {
    const entradaDataNascimento = document.getElementById('data-nascimento');
    const botaoElevarCosmo = document.getElementById('botao-elevar');
    const botaoVoltarOraculo = document.getElementById('botao-voltar');
    const secaoEntradaOraculo = document.querySelector('.entrada-oraculo');
    const secaoSaidaOraculo = document.querySelector('.saida-oraculo');
    const elementoImagemCavaleiro = document.getElementById('imagem-cavaleiro');
    const elementoNomeCavaleiro = document.getElementById('nome-cavaleiro');
    const elementoDescricaoCavaleiro = document.getElementById('descricao-cavaleiro');
    const containerEfeitoRaioOraculo = document.querySelector('.container-efeito-raio');

    const raiosRelampagoOraculo = document.createElement('div');
    raiosRelampagoOraculo.classList.add('raios-relampago');
    for (let i = 0; i < 4; i++) {
        const raioIndividual = document.createElement('div');
        raioIndividual.classList.add('raio');
        raiosRelampagoOraculo.appendChild(raioIndividual);
    }
    containerEfeitoRaioOraculo.appendChild(raiosRelampagoOraculo);

    botaoElevarCosmo.addEventListener('click', () => {
        const valorDataNascimento = entradaDataNascimento.value;
        if (!valorDataNascimento) {
            alert('Por favor, digite a sua data de nascimento.');
            return;
        }

        const dataNascimentoObj = new Date(valorDataNascimento);
        const diaNascimento = dataNascimentoObj.getDate();
        const mesNascimento = dataNascimentoObj.getMonth() + 1;

        let resultadoConsulta = obterCavaleiro(mesNascimento, diaNascimento);
        atualizarSaidaOraculo(resultadoConsulta);
    });

    botaoVoltarOraculo.addEventListener('click', () => {
        secaoSaidaOraculo.classList.add('oculto');
        secaoEntradaOraculo.classList.remove('oculto');
        entradaDataNascimento.value = '';
    });

    function obterCavaleiro(mes, dia) {
        if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
            return {
                nome: "MU DE ÁRIES",
                descricao: "Especialista em telecinese e restauração de armaduras. O seu cosmo brilha calmo e poderoso.",
                imagem: "img/cavaleiro.png"
            };
        } else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
            return {
                nome: "ALDEBARAN DE TOURO",
                descricao: "Dono de uma força física imensurável e coração nobre. Sinta a fúria do Grande Chifre!",
                imagem: "img/cavaleiro.png"
            };
        } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
            return {
                nome: "SAGA DE GÉMEOS",
                descricao: "O guerreiro das duas faces, dotado do poder de destruir estrelas. Renda-se à Explosão Galáctica!",
                imagem: "img/cavaleiro.png"
            };
        } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
            return {
                nome: "MÁSCARA DA MORTE DE CARANGUEJO",
                descricao: "Um combatente implacável que caminha entre a vida e a morte. Temido pelas Ondas do Inferno.",
                imagem: "img/cavaleiro.png"
            };
        } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
            return {
                nome: "AIOLIA DE LEÃO",
                descricao: "Orgulhoso e veloz como a luz. Os seus punhos disparam as temíveis garras do Relâmpago de Plasma.",
                imagem: "img/cavaleiro.png"
            };
        } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
            return {
                nome: "SHAKA DE VIRGEM",
                descricao: "O homem mais próximo de Deus. Remove os sentidos dos seus adversários através do Tesouro do Céu.",
                imagem: "img/cavaleiro.png"
            };
        } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
            return {
                nome: "DOHKO DE BALANÇA",
                descricao: "O mestre ancião, equilibrado e sábio. Detentor das armas celestiais e da Cólera dos Cem Dragões.",
                imagem: "img/cavaleiro.png"
            };
        } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
            return {
                nome: "MILO DE ESCORPIÃO",
                descricao: "Ataques rápidos, precisos e letais. A Agulha Escarlate traz julgamento e dor inevitável.",
                imagem: "img/cavaleiro.png"
            };
        } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
            return {
                nome: "AIOLOS DE SAGITÁRIO",
                descricao: "O herói leal e verdadeiro. A sua Flecha da Justiça foi feita para perfurar qualquer mal.",
                imagem: "img/cavaleiro.png"
            };
        } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
            return {
                nome: "SHURA DE CAPRICÓRNIO",
                descricao: "Possui braços e pernas tão afiados quanto aço. Ele corta tudo no seu caminho com a sagrada Excalibur.",
                imagem: "img/cavaleiro.png"
            };
        } else if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
            return {
                nome: "CAMUS DE AQUÁRIO",
                descricao: "O mago da água e do gelo. A sua mente fria executa a mais pura Execução Aurora no zero absoluto.",
                imagem: "img/cavaleiro.png"
            };
        } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
            return {
                nome: "AFRODITE DE PEIXES",
                descricao: "A beleza fatal que esconde um veneno mortal. O caminho é adornado pelas Rosas Diabólicas Reais.",
                imagem: "img/cavaleiro.png"
            };
        } else {
            return {
                nome: "ERRO DE CÁLCULO",
                descricao: "O seu cosmo não foi reconhecido. Tente novamente.",
                imagem: ""
            };
        }
    }

    function atualizarSaidaOraculo(dadosCavaleiro) {
        secaoEntradaOraculo.classList.add('oculto');
        secaoSaidaOraculo.classList.remove('oculto');

        elementoNomeCavaleiro.innerText = dadosCavaleiro.nome;
        elementoDescricaoCavaleiro.innerText = dadosCavaleiro.descricao;
        
        if (dadosCavaleiro.imagem) {
            elementoImagemCavaleiro.src = dadosCavaleiro.imagem;
            elementoImagemCavaleiro.alt = "Silhueta de " + dadosCavaleiro.nome;
            elementoImagemCavaleiro.classList.remove('oculto');
        } else {
            elementoImagemCavaleiro.classList.add('oculto');
            alert("Não foi possível carregar a imagem do cavaleiro.");
        }
    }
});