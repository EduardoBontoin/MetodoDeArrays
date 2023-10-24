const elementoLivrosTela = document.getElementById('livros')

async function exibirLivrosNaTela(livros) {
    elementoLivrosTela.innerHTML= ''

    await livros.forEach(livro => {
        console.log(livro)      
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
      elementoLivrosTela.innerHTML += `
      <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
      ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
          <span class="tag">${livro.categoria}</span>
          </div>
          </div>
      `
  }
  );
  }

  