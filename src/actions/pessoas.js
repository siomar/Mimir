export function addPessoa(nome){
    return {
        type: "ADD_PESSOA",
        nome,
    }
}

export function removePessoa(){
    return {
        type: "REMOVE_PESSOA"
    }
}