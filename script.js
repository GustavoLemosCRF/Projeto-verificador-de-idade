function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('inas')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano)
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    else{
        var fsex = document.getElementsByName('Sexo')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src' , 'imagens/criança-m.jpg')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src' , 'imagens/adolescente-m.jpg')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src' , 'imagens/adulto-m.jpg')
        } else {
            //idoso
            img.setAttribute('src' , 'imagens/velho-m.jpg')
        }
       } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src' , 'imagens/criança-f.jpg')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src' , 'imagens/adolescente-f.jpg')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src' , 'imagens/adulto-f.jpg')
        } else {
            //idoso
            img.setAttribute('src' , 'imagens/velho-f.jpg')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
       res.appendChild(img)
    }
} 