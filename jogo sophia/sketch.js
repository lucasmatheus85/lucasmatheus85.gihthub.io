var tela = 1;
var nivel=1;
var larguraBotao = 200
var alturaBotao = 60
var xMinBotao = 210
var xMaxBotao = xMinBotao + larguraBotao
var yMinBotao1 = 100
var yMaxBotao1 = yMinBotao1 + alturaBotao

var yMinBotao2 = 200
var yMaxBotao2 = yMinBotao2 +alturaBotao

var yMinBotao3 = 300
var yMaxBotao3 = yMinBotao3 +alturaBotao

var fontep;
var educadoraImagem;
var programadorImagem;
var tela = 1;

// tela 1: menu
// tela 2: jogo
// tela 3: instruções
// tela 4: créditos

function fase1(){
image(imgfase1, 0,0,500,500)
  escolhaFase = 0;
  
    opcaoBotao(10, 440, 150, 40, 1)
    fill(0);
    text("4, 8, 6", 45, 470)

    opcaoBotao(172, 440, 150, 40, 2)
    fill(0)
    text("4, 6, 3",210, 470)

    opcaoBotao(330, 440, 150, 40, 3)
    fill(0)
    text("4, 4, 7",380, 470);
}
function fase2(){
 image(imgfase2, 0,0,500,500)
  escolhaFase = 0;
  
    opcaoBotao(10, 440, 150, 40, 1)
    fill(0);
    text("17, 1, 13", 45, 470)

    opcaoBotao(172, 440, 150, 40, 2)
    fill(0)
    text("3, 5, 13",210, 470)

    opcaoBotao(330, 440, 150, 40, 3)
    fill(0)
    text("3, 1, 5",380, 470);

}
function fase3(){
  image(imgfase3, 0,0,500,500)
 escolhaFase = 0;
  
    opcaoBotao(10, 440, 150, 40, 1)
    fill(0);
    text("17", 45, 470)

    opcaoBotao(172, 440, 150, 40, 2)
    fill(0)
    text("24",210, 470)

    opcaoBotao(330, 440, 150, 40, 3)
    fill(0)
    text("10",380, 470);
}
function fase4(){
 image(imgfase4, 0,0,500,500)
 escolhaFase = 0;
  
    opcaoBotao(10, 440, 150, 40, 1)
    fill(0);
    text("20", 45, 470)

    opcaoBotao(172, 440, 150, 40, 2)
    fill(0)
    text("10",210, 470)

    opcaoBotao(330, 440, 150, 40, 3)
    fill(0)
    text("12",380, 470);
}
function fase5(){
 image(imgfase5, 0,0,500,500)
 escolhaFase = 0;
  
    opcaoBotao(10, 440, 150, 40, 1)
    fill(0);
    text("9", 45, 470)

    opcaoBotao(172, 440, 150, 40, 2)
    fill(0)
    text("20",210, 470)

    opcaoBotao(330, 440, 150, 40, 3)
    fill(0)
    text("15",380, 470);
}
function fase6(){
 image(imgfase6, 0,0,500,500)
}

function opcaoBotao(xMin, yMin, largura, altura, opcao){
  yMax= yMin + altura;
  xMax= xMin + largura;
  if(mouseX>xMin && mouseX< xMax && mouseY > yMin && mouseY<yMax){
    fill(220);
    escolhaFase= opcao;
  }
  else{
    noFill();
  }
  stroke(255);
  rect(xMin, yMin, largura, altura, 15);
  textSize(25);
  fill(0);
}

function mouseClicked(){
  if(tela==2 && nivel==1){
    if(escolhaFase==2 || escolhaFase==3){
      tela= 5;
    }
    if(escolhaFase==1){
      nivel= 2;
    }
  }
  else if (tela == 2 && nivel == 2) {
        if (escolhaFase == 1 || escolhaFase == 2) {
            tela = 5;
        }
        if (escolhaFase == 3) {
            nivel = 3;
        }
    }
  else if (tela == 2 && nivel == 3) {
        if (escolhaFase == 1 || escolhaFase == 3) {
            tela = 5;
        }
        if (escolhaFase == 2) {
            nivel = 4;
        }
    }
  else if (tela == 2 && nivel == 4) {
        if (escolhaFase == 2 || escolhaFase == 3) {
            tela = 5;
        }
        if (escolhaFase == 1) {
            nivel = 5;
        }
    }
  else if (tela == 2 && nivel == 5) {
        if (escolhaFase == 1 || escolhaFase == 2) {
            tela = 5;
        }
        if (escolhaFase == 3) {
            nivel = 6;
        }
    }
}


function Creditos(){
  background(220);
  textStyle(NORMAL);
  textSize(45)
  text("Créditos", 130,80)
  textSize(30)
  text("Carla Marçal",200, 130)
  textSize(20)
  fill(0)
  text("Função:Educador", 230,160)
  textSize(18)
  text("fazendo estagio como professora em colégios\n de ensino fundamental, cursando pedagogia na \nUniversidade Vale do Acaraú", 180,180,300)
  image(educadoraImagem, 30, 110, 130, 130)
  textSize(30)
  text("Lucas Matheus", 200,350)
  textSize(20)
  text("Função:programador", 230,375)
  textSize(18)
  text("bacharelando em ciências e tecnologias UFRN.", 180,390,300)
  image(programadorImagem, 30, 300, 130, 130)
  
}
function Instrucoes(){
  background(220);
  textStyle(NORMAL);
  textSize(35)
  text("Instruções", 140, 70)
  textSize(25);  
  text("1º: Será usado o mouse", 50, 140, 390)
  text("2º: Você terá que relacionar as respostas das\noperações anteriores para encontrar o valor correto", 50, 190)
}

function Menu(){
  textFont(fontep);
  //Tela de Menu
  background(220);
  image(imgmenu, 0, 0, 500,500)
// primeiro botão
  if(mouseX> xMinBotao && mouseX< xMaxBotao && mouseY> yMinBotao1 && mouseY< yMaxBotao1){
    fill(220)
    if(mouseIsPressed){
      tela= 2;
    }
  }
  else{
    fill(157, 147, 222);
  }
//Botões
   stroke(0)
  rect(xMinBotao,yMinBotao1,larguraBotao,alturaBotao,15);
  textSize(30);
  fill(0);
  text("Jogar",xMinBotao+70,yMinBotao1+40 )

// segundo botão
   if(mouseX> xMinBotao && mouseX< xMaxBotao && mouseY> yMinBotao2 && mouseY< yMaxBotao2){
    fill(220);
    if(mouseIsPressed){
      tela= 3;
    }
  }
  else{
    fill(157, 147, 222)
  }
  //Botões
   stroke(0)
  rect(xMinBotao,yMinBotao2,larguraBotao,alturaBotao,15);
  textSize(30);
  fill(0);
  text("Instruções",xMinBotao+50,yMinBotao2+40);
  
// terceiro botão
   if(mouseX> xMinBotao && mouseX< xMaxBotao && mouseY> yMinBotao3 && mouseY< yMaxBotao3){
    fill(220);
    if(mouseIsPressed){
      tela= 4;
    }
  }
  else{
    fill(157, 147, 222)
  }
  //Botões
  stroke(0)
  rect(xMinBotao,yMinBotao3,larguraBotao,alturaBotao,15);
  textSize(30);
  fill(0);
  text("Créditos",xMinBotao+50,yMinBotao3+37);
  
  fill(0)
  textSize(40)
  text("Help Sophia",180,60)
  }
function gameover(){
  background(157, 147, 222)
  textSize(30)
  text("Fim de jogo!", 220, 60)
}

function preload(){
  educadoraImagem = loadImage("educ.jpeg")
  programadorImagem = loadImage("prog.jpeg")
  imgmenu= loadImage("imgmenu.png")
  fontep= loadFont("fonteprincesa.ttf")
  imgfase1= loadImage("imgfase1.png")
   imgfase2= loadImage("imgfase2.png")
   imgfase3= loadImage(" imgfase3.png")
  imgfase4= loadImage(" imgfase4.png")
  imgfase5= loadImage(" imgfase5.png")
  imgfase6= loadImage(" imgfase6.png")
}

function setup() {
  createCanvas(500, 500);
}

function draw(){
  if (keyIsDown(LEFT_ARROW)) {
    tela=1;
  }
  if (tela == 1){
    Menu();
  }
  if(tela==2){
    if(nivel==1){
    fase1();
    }
    if(nivel==2){
    fase2();
    }
    if(nivel==3){
    fase3();
    }
    if(nivel==4){
    fase4();
  }
    if(nivel==5){
    fase5();
  }
  if(nivel==6){
    fase6();
  }
  }
  if(tela==3){
    Instrucoes()
  }
  if (tela == 4){
    Creditos();
  }
  if(tela==5){
    gameover();
  }
}