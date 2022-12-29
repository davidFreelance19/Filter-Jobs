
function filtrarLevel(obj){
    console.log(obj);
}
function filtrado(data){
    const resultado =  data.filter(filtrarLevel)
    if(resultado.length){
        console.log(resultado)
    }
}
export{
    filtrarLevel,
    filtrado
}