const btnFiltrarLivrosFront = document.querySelectorAll('.btn')


btnFiltrarLivrosFront.forEach(btn => btn.addEventListener('click',filtrarLivros))

//btnFiltrarLivrosFront.addEventListener('click', filtrarLivrosDeFront)

function filtrarLivros(){
    let livrosFiltrados = []
    const elementobtn = document.getElementById(this.id)
    if(this.id=="btnOrdenarPorPreco"){

         livrosFiltrados= livros.sort((a,b)=> a.preco - b.preco) 

    } else if(this.id=="btnLivrosDisponiveis"){

        livrosFiltrados = livros.filter(livro => livro.quantidade > 0) 
        console.log('estive aqui')

    }else{
        const categoria = elementobtn.value
        livrosFiltrados = livros.filter(livro => livro.categoria ==categoria)
    }
    console.log(livrosFiltrados)
    exibirLivrosNaTela(livrosFiltrados)
    
     
}

