function toggleScreenMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const imagem = document.querySelector('.profile img')
    if(html.classList.contains('light')) {
        imagem.setAttribute('src','./assets/avatar-light.png')
        imagem.setAttribute('alt','Foto de Victor Monterisi com barba, sorrindo, de óculos e usando uma camisa azul. O fundo da imagem há bastante luzes dando um tom de azul misturado com verde.')
    } else {
        imagem.setAttribute('src','./assets/avatar-dark.png')
        imagem.setAttribute('alt','Foto de Victor Monterisi, sorrindo, de braços cruzados e usando uma camisa azul. No fundo da imagem, podemos ver parte de um espelho e três quadros de gatos.')
    }
}