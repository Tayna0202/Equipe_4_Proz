function abrirImagemModal(event) {
    event.preventDefault(); 
    const url = event.currentTarget.href;

    const overlay = document.createElement('div');
    overlay.id = 'imagemOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '1000';
    
    const container = document.createElement('div');
    container.style.position = 'relative';
    
    const imagem = document.createElement('img');
    imagem.src = url;
    imagem.style.maxWidth = '80vw'; 
    imagem.style.maxHeight = '80vh';
    imagem.style.borderRadius = '10px';
   
    const botaoFechar = document.createElement('span');
    botaoFechar.textContent = 'x';
    botaoFechar.style.position = 'absolute';
    botaoFechar.style.top = '-10px';
    botaoFechar.style.right = '-10px';
    botaoFechar.style.cursor = 'pointer';
    botaoFechar.style.backgroundColor = '#fff';
    botaoFechar.style.borderRadius = '50%';
    botaoFechar.style.padding = '5px';

    botaoFechar.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });

    container.appendChild(imagem);
    container.appendChild(botaoFechar);
    overlay.appendChild(container);

    document.body.appendChild(overlay);
}
document.addEventListener('DOMContentLoaded', function() {
    const linkImagem = document.getElementById('linkImagemModal');
    if (linkImagem) {
        linkImagem.addEventListener('click', abrirImagemModal);
    }
});
