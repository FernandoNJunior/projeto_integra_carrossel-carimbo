//pegando valores dos inputs do formulário
const batt = document.querySelector("#codigo-ba-tt");
let codigoBaTt = "";
const servico = document.getElementsByName("servico");
let tipoServico = "";
const rede = document.querySelector("#tipo-rede");
let tipoRede = "";
const velocidade = document.querySelector("#velocidade");
let velocidadeCliente = "";
const gpon = document.querySelector("#serial-gpon");
let serialGpon = "";
const dAcesso = document.querySelector("#designador");
let designadorAcesso = "";
const tecnico = document.querySelector("#tecnico");
let nomeTecnico = "";
const contato = document.querySelector("#contato");
let contatoTecnico = "";
const comentario = document.querySelector("#comentario");
let comentarioOperador = "";
const servContratados = document.getElementsByName("servico-contratado");
let tipoServContratado = [];

const carimbo = document.querySelector("#carimbo-text")
let textCarimbo = carimbo

//validação se todos campos de imputs estão preenchidos
function validaBaTt(){
    if(batt.value.length != 0) {
        codigoBaTt = batt.value;
        return true
    }else{
        return false
    }
}

function validaServico(){
    if( servico[0].checked) {
        tipoServico = servico[0].value
        return true
    } else if (servico[1].checked) {
        tipoServico = servico[1].value
        return true
    }else{
        return false
    }
}

function validaRede(){
    if(rede.value.length != 0) {
        tipoRede = rede.value;
        return true
    }else{
        return false
    }
}

function validaVelocidade(){
    if(velocidade.value.length != 0) {
        velocidadeCliente = velocidade.value;
        return true
    }else{
        return false
    }
}

function validaGpon(){
    if(gpon.value.length != 0) {
        serialGpon = gpon.value;
        return true
    }else{
        return false
    }
}

function validadesignador(){
    if(dAcesso.value.length != 0) {
        designadorAcesso = dAcesso.value;
        return true
    }else{
        return false
    }
}

function validaTecnico(){
    if(tecnico.value.length != 0) {
        nomeTecnico = tecnico.value;
        return true
    }else{
        return false
    }
}

function validaContato(){
    if(contato.value.length != 0) {
        contatoTecnico = contato.value
        return true
    }else{
        return false
    }
}

function validaComentario(){
    if(comentario.value.length != 0) {
        comentarioOperador = comentario.value;
        return true
    }else{
        return false
    }
}

//conferência dos tipos de serviços que o cliente tem contratado
function valoresServ(){
    for(let i = 0; i < servContratados.length; i ++) {
        if(servContratados[i].checked) {
            tipoServContratado.push(servContratados[i].value)
        }
    }
    return tipoServContratado
}

//conferência do preenchimento completo do formulário, criação da mensagem com os valores dos inputs e criação do carimbo
function imprimir() {
    if(validaBaTt() && validaServico() && validaRede() && validaVelocidade() && validaGpon() && validadesignador() && validaTecnico() && validaContato() && validaComentario()) {
        tipoServContratado.splice(0, 4);
        valoresServ()
        let mensagem = (
            `CARIMBO CO - ${tipoRede}\n
            SERVIÇOS CONTRATADOS: ${tipoServContratado};\n
            Tipo de serviço: ${tipoServico};\n
            Velocidade da Banda Larga do Cliente: ${velocidadeCliente};\n
            Serial GPON da ONT: ${serialGpon};\n
            Designador de acesso: ${designadorAcesso};\n
            Observação/Detalhe da Falha: ${comentarioOperador}.` 
        );
        textCarimbo.innerHTML = mensagem;
        mostrarCarimbo()
    }else{
        alert("Preencha todos os campos!")
    }
}

const displayCarimbo = document.querySelector("#carimbo");
const formulario = document.querySelector("#formulario");

//Funções para Abrir/Fechar/Cancelar Formulário e funções para Fechar/copiar carimbo
function mostrarFormulario() {
    resetCarimbo()
    formulario.classList.remove('fechar__formulario');
    displayCarimbo.classList.remove('abrir__carimbo');
}

function cancelarFormulario() {
    formulario.classList.add('fechar__formulario');
    resetCarimbo()
    location.reload()
}

function mostrarCarimbo() {
    formulario.classList.add('fechar__formulario');
    displayCarimbo.classList.add('abrir__carimbo');
}

function fecharCarimbo () {
    displayCarimbo.classList.remove('abrir__carimbo');
    location.reload()
}

function resetCarimbo() {
    batt.value = "";
    velocidade.value= "";
    gpon.value = "";
    dAcesso.value = "";
    tecnico.value = "";
    contato.value = "";
    comentario.value = "";
    rede.value = "";
}

//função para mostrar e fechar carrossel de comunicados
let botaoSlide = document.querySelector(".mostrar__fechar-slide")
let comunicados = document.querySelector(".carrossel__slide")
    botaoSlide.addEventListener('click', () => {
        if(botaoSlide.innerHTML === "Fechar Comunicados") {
        botaoSlide.innerHTML = "Mostrar Comunicados";
        botaoSlide.style.backgroundColor = "green";
        comunicados.style.display = "none";
        }else{
            botaoSlide.innerHTML = "Fechar Comunicados"
            botaoSlide.style.backgroundColor = "red";
            comunicados.style.display = "inline-block";
        }
    })


const listaBotaoModal = document.querySelectorAll(".botao__modal");
//função para exibir o modal com imagem do comunicado
function mostrarModal(idModal) {
    document.querySelector(idModal).showModal();
}

const listaBotaoFecharModal = document.querySelectorAll(".ocultar");
//função para fechar o modal com imagem do comunicado   
function fecharModal(idModal) {
    document.querySelector(idModal).close();
}

//percorre lista de botões de comunicados, identifica o numero do comunicado e ao ser clicado exibe o comunicado refeente ao botão
for (let i = 0; i < listaBotaoModal.length; i++) {
    const botaoModal = listaBotaoModal[i];
    const codigoImagemModal = botaoModal.classList[1];
    const imagemModal = `#imagem_${codigoImagemModal}`;
    //abre imagem comunicado
    botaoModal.onclick = function () {
        mostrarModal(imagemModal)
    }
    //fecha imagem comunicado
    const botaoFechar = listaBotaoFecharModal[i];
    botaoFechar.onclick = function () {
        fecharModal(imagemModal)
    }
}
