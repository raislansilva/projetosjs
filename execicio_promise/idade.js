function checarIdade(idade){
    return new Promise(function(resolve,reject){
        if(idade > 18){
            setTimeout(resolve,5000)
        }else{
            setTimeout(reject,5000)
        }

    })
}


checarIdade(15)
.then(function(){
    console.log("Maior que 18");
})
.catch(()=>{
    console.log("Menor que 18");
})



