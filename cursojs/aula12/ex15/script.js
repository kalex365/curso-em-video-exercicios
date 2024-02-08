function verificar() {
   var data = new Date() 
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || fano.value > ano) {
    window.alert('ERRO....tente novamente')
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bebenino.png')
        } else  if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'menino.png')
        } else  if (idade < 50) {
            //adulto
            img.setAttribute('src', 'homem.png')
        } else {
            //IDOSO
            img.setAttribute('src', 'idoso.png')
        }
        } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bebenina.png')
        } else  if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'menina.png')
        } else  if (idade < 50) {
            //adulto
            img.setAttribute('src', 'mulher.png')
        } else {
            //IDOSO
            img.setAttribute('src', 'idosa.png')
        }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
   


}