class Produto {

    constructor () {
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;
    }

    Salvar() {

    let produto = this.lerDados();

    if(this.validaCampos(produto))  {
        if(this.editId == null) {
            this.adicionar(produto);
            
        } else {
            this.atualizar(this.editId, produto);
        }

        
    }

    this.listaTabela();
    this.Cancelar();
       
    }

    listaTabela()  {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayProdutos.length; i++ )  {


            let tr = tbody.insertRow();


            let td_id = tr.insertCell();
            let td_cliente = tr.insertCell();
            let td_telefone = tr.insertCell();
            let td_relogio = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_data = tr.insertCell();
            let td_açoes = tr.insertCell();
            
            
            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_telefone.innerText = this.arrayProdutos[i].telefone;
            td_valor.innerText = this.arrayProdutos[i].preço;
            td_cliente.innerText = this.arrayProdutos[i].cliente;
            td_relogio.innerText = this.arrayProdutos[i].relogio;
            td_data.innerText = this.arrayProdutos[i].data;

            td_id.classList.add('center');
            td_produto.classList.add('center');
            td_telefone.classList.add('center');
            td_valor.classList.add('center');
            td_açoes.classList.add('center');
            td_cliente.classList.add('center');
            td_relogio.classList.add('center');
            td_data.classList.add('center');




            let  imgEdit = document.createElement('img');
            imgEdit.src = 'img/img.pen.png';
            imgEdit.setAttribute("onclick","produto.preparaEdicao("+ JSON.stringify(this.arrayProdutos[i]) +")");

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/botao-de-deletar.png';
            imgDelete.setAttribute("onclick","produto.deletar("+ this.arrayProdutos[i].id +")");
            

            td_açoes.appendChild(imgEdit)
            td_açoes.appendChild(imgDelete);

            console.log(this.arrayProdutos)
        }
    }

    adicionar(produto)  {
        produto.preço = parseFloat(produto.preço)
        this.arrayProdutos.push(produto);
        this.id++;
    }

    atualizar(id, produto) {
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].preço = produto.preço;
                this.arrayProdutos[i].cliente = produto.cliente;
                this.arrayProdutos[i].relogio = produto.relogio;
                this.arrayProdutos[i].telefone = produto.telefone;
                this.arrayProdutos[i].data = produto.data;
            }
        }
    }
    

    preparaEdicao(dados) {
        this.editId = dados.id;

        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('preço').value = dados.preço;
        document.getElementById('cliente').value = dados.cliente;
        document.getElementById('relogio').value = dados.relogio;
        document.getElementById('telefone').value = dados.telefone;
        document.getElementById('data').value = dados.data;

        document.getElementById('btn1').innerText = 'atualizar';
    }

    lerDados()  {
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.telefone = document.getElementById('telefone').value;
        produto.preço = document.getElementById('preço').value;
        produto.cliente = document.getElementById('cliente').value;
        produto.relogio = document.getElementById('relogio').value;
        produto.data = document.getElementById('data').value;
       



        return produto;
    }

    validaCampos(produto)  {
        let msg = '';

        if(produto.cliente == '') {
            msg += 'Informe o nome do cliente nessa porra \n';
        }

        if(produto.telefone == '') {
            msg += 'Informe o telefone do cliente nessa porra \n';
        }

        if(produto.nomeProduto == '') {
            msg += 'Informe o nome do serviço porra \n';
        }

        if(produto.preço == '') {
            msg += 'Informe o preço dessa porra \n';
        }

        if(produto.data == '') {
            msg += 'Informe a data nessa porra \n';
        }

        if(produto.relogio == '') {
            msg += 'Informe o nome da porra do relogio \n';
        }

        

        if(msg != '') {
            alert(msg);
            return false
          }
  
        return true;
    }

    Cancelar()  {
       document.getElementById('cliente').value = '';
       document.getElementById('telefone').value = '';
       document.getElementById('produto').value = '';
       document.getElementById('preço').value = '';
       document.getElementById('relogio').value = '';
       document.getElementById('data').value = '';

       document.getElementById('btn1').innerText = 'Salvar';
       this.editId = null;
    }

    deletar(id) {
        if(confirm('Deseja deletar essa Porra mesmo ?? O produto do ID ' + id))  {
            let tbody = document.getElementById('tbody');
        

            for (let i = 0; i < this.arrayProdutos.length; i++) {
               if(this.arrayProdutos[i].id == id) {
                    this.arrayProdutos.splice(i,1);
                    tbody.deleteRow(i);
               } 
            }
        }
        
        
        console.log(this.arrayProdutos);
    }
}


var produto = new Produto();
