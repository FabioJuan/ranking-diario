var checar = document.getElementById("checar")

var dados = [document.querySelector("#exer_feito"),//0
            document.querySelector("#cardio_m"),//1
            
            document.querySelector("#pagnas_l"),//2
            document.querySelector("#H_estudo"),//3
            document.querySelector("#exe_estu"),//4
            
            document.querySelector("#cap_l"),//5
            checar.ora,//6
            document.querySelector("#ver_d"),//7

            checar.guita,//8
            checar.novo,//9

            checar.pecado,//10
            checar.dormiu,//11
            document.querySelector("#redes")//12
            ]

var valor_rank = 0
var resultado_rank = 0
var img_rank = document.getElementById("img_rank")
var text_rank=document.getElementById('tier')

checar.addEventListener('submit',function(event)
{
    event.preventDefault();
    rank();
    estatisticas();
})
window.onload = function (){
}

function calculo(val_t = 0, val_e = 0, val_esp = 0, val_ex = 0, val_n = 0){
    dados[0] = Number(dados[0].value) * 10
    dados[1] = Number(dados[1].value) * 2

    dados[2] = Number(dados[2].value) * 10
    dados[3] = Number(dados[3].value) * 100
    dados[4] = Number(dados[4].value) * 2

    dados[5] = Number(dados[5].value) * 20
    dados[6] = dados[6].value
    dados[7] = Number(dados[7].value) * 5

    dados[8] = dados[8].value 
    dados[9] = dados[9].value 

    dados[10] = dados[10].value 
    dados[11] = dados[11].value 
    dados[12] = Number(dados[12].value) * 5

    val_t = dados[0] + dados[1]
    val_e = dados[2] + dados[3] + dados[4]
    val_esp = dados[5] + dados[7]
    if(dados[6] == "sim"){
        val_esp += 100
    }

    if(dados[8] == "sim"){
        val_ex += Number(50)
    }
    if(dados[9] == "sim"){
        val_ex += Number(80)
    }
    if(dados[10] == "sim"){
        val_n+= Number(500)
    }
    if(dados[11] == "sim"){
        val_n += Number(200)
    }
    val_n += Number(dados[12]) 
    valor_rank = val_t + val_e + val_esp + val_ex - val_n
    console.log(valor_rank)
}

function rank(){
    for(i= 0;i<=12;i++){
        if(dados[i]){
          console.log((dados[i]).value)  
        }else{
            console.log("nenhum valor selecionado")
            alert("confirme")
        }
    }
    //console.log(document.querySelector("input[name='guita']:checked").value)
    document.querySelector(".rank").style.display = 'none'
    document.querySelector(".resultado").style.display = 'block'
    calculo();
    if(valor_rank >= 1400){
        //rank SS
        img_rank.src = 'src/img/SStier.jpg'
        text_rank.innerHTML = 'SS'
        text_rank.style.Color = "#E53D44"
        text_rank.style.textShadow = "1px 1px 12px rgba(255, 251, 0, 1)"
    }else if(valor_rank < 1400 && valor_rank >= 1100){
        //rank S
        img_rank.src = 'src/img/Stier.jpg'
        text_rank.innerHTML = 'S'
        text_rank.style.Color = "#FF9F1C"
        text_rank.style.textShadow = "1px 1px 12px rgba(255, 252, 94, 1)"
    }else if(valor_rank < 1100 && valor_rank >= 800){
        //rank A
        img_rank.src = 'src/img/Atier.jfif'
        text_rank.innerHTML = 'A'
        text_rank.style.color = "#6000E0"
        text_rank.style.textShadow = "1px 1px 12px rgba(248, 231, 82, 1)"
    }else if(valor_rank < 800 && valor_rank >= 500){
        //Rank B
        img_rank.src = 'src/img/Btier.jfif'
        text_rank.innerHTML = 'B'
        text_rank.style.color = "#0081D0"
        text_rank.style.textShadow = "1px 1px 12px rgba(245, 150, 245, 1)"
    }
    else if(valor_rank < 500 && valor_rank >= 200){
        //Rank c
        img_rank.src = 'src/img/Ctier.jpg'
        text_rank.innerHTML = 'C'
        text_rank.style.color = "#57D357"
        text_rank.style.textShadow = "1px 1px 12px rgba(150, 248, 255, 1)"
    }
    else if(valor_rank < 200 && valor_rank >= 0){
        //Rank d
        img_rank.src = 'src/img/Dtier.jfif'
        text_rank.innerHTML = 'D'
        text_rank.style.color = "#2a5724ff"
        text_rank.style.textShadow = "1px 1px 12px rgba(78, 78, 68, 1)"
    }else{
        //rank f
        img_rank.src = 'src/img/Ftier.jfif'
        text_rank.innerHTML = 'F'
        text_rank.style.color = "#1c251bff"
        text_rank.style.textShadow = "1px 1px 12px rgba(39, 39, 39, 1)"
    }
}
function estatisticas(){
    estatus = [document.getElementById("rqnt_exe")
            ,document.getElementById("rqnt_card"),

            document.getElementById("rqnt_pag")
            ,document.getElementById("rqnt_hestu")
            ,document.getElementById("rexer_estu"),

            document.getElementById("rcap_lidos")
            ,document.getElementById("rorou")
            ,document.getElementById("rv_dec"),

            document.getElementById("rguita")
            ,document.getElementById("rnovo"),

            document.getElementById("rpec_estim")
            ,document.getElementById("rqnt_dorm")
            ,document.getElementById("rqnt_redes")
    ]
    console.log(dados[1])
    for(i= 0;i<=12;i++){
        console.log(dados[i],typeof dados[i])
        if(dados[i] == "sim" || dados[i] == "não"){
            estatus[i].innerHTML = dados[i]
        }else{
            estatus[i].innerHTML = dados[i] + "pts."
        }
        if((dados[i]> 0 || dados[i] == "sim") &&(i <10)){
            estatus[i].style.color = '#09ff00'
        }
        else{
            estatus[i].style.color = '#fd0b0b'
        }
    }
}