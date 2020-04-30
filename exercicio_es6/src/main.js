import api from './api'

class App{
    constructor(){
        this.repositories = []
        this.formEl = document.getElementById('repo-form')
        this.lisEl = document.getElementById('repo-list')
        this.inputEl = document.querySelector('input[name=repository]')

        this.registerHandlers();
    }

    setLoading(loading=true){
        if(loading === true){
            let loadingEl = document.createElement('span')
            loadingEl.setAttribute('id','loading')
            loadingEl.appendChild(document.createTextNode("Carregando..."))
            this.formEl.appendChild(loadingEl)
        }else{
            document.getElementById('loading').remove()
        }
       

    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event)
    }

    async addRepository(event){
        event.preventDefault()

        const inputRepo = this.inputEl.value

        if(inputRepo.length === 0)
            return

        this.setLoading()    
        
        try {
            const response = await api.get(`/repos/raislansilva/${inputRepo}`)    
            //desetruturação do es5
            const {name,description,html_url,owner:{avatar_url} } = response.data

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            })
            this.inputEl.value = ''
            this.render()
        } catch (error) {
            this.inputEl.value = ''
            alert("Repositório não existe")
        }

        this.setLoading(false)


    }

    render(){
        this.lisEl.innerHTML = ''

        this.repositories.forEach(repo =>{
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src',repo.avatar_url)

            let titleEL = document.createElement('strong')
            titleEL.appendChild(document.createTextNode(repo.name))

            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target','_blank')
            linkEl.setAttribute('href',repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listeItemEl = document.createElement('li')
            listeItemEl.appendChild(imgEl)
            listeItemEl.appendChild(titleEL)
            listeItemEl.appendChild(descriptionEl)
            listeItemEl.appendChild(linkEl)

            this.lisEl.appendChild(listeItemEl)


        })
    }
}

new App()




/*class Api{
    static async getInfoUser(username){
       try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response)
       } catch (error) {
           console.warn("erros na api")
       } 
      
          
    }
}

Api.getInfoUser("raislansilva")*/








/*const minhaPromise = () => new Promise((resolve,reject)=>{
    setTimeout(()=> { resolve("OK")},2000);
})

/*async function executaPromise() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}*/

/*const executaPromise =  async () =>{
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise()

*/






//alert("quero")
/*import { soma } from'./function'

console.log(soma(5,10))*/






/*class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends List{

    constructor(){
        super();

        this.usuario = "Raislan"
    }

    mostrarUsuario(){
        console.log(this.usuario);
    }

    /*constructor(){
        this.todos = [];
    }
    
    addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }*/
/*}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    //MinhaLista.addTodo();
    MinhaLista.add('novo todo');

}*/

//MinhaLista.mostrarUsuario()


/*class matematica{
    static soma(a,b){
        return a+b;
    }
}

console.log(matematica.soma(10,5));*/






/* array  es6*/
/*const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

/*const idades =  usuarios.map(item => item.idade)
console.log(idades)*/

/*const func = usuarios.filter(item => {
    return item.empresa === "Rocketseat" && item.idade > 18
})
console.log(func)*/

/*const empresa = usuarios.find(item => item.empresa ==='Google')
console.log(empresa)*/

/*const operation = usuarios.map(item => {
    item.idade = item.idade*2
    return item
})
console.log(operation.filter(item => item.idade < 50))*/