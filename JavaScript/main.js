import {Usuarios} from './arrays.js'

let Nuevousuario=prompt("Ingrese Nombre del Usuario: ")

function buscar(){
    return new Promise((resolve,reject)=>{
        if(Usuarios==0){
            reject(new Error('❗ Api no Encontrada'));
        }
        
        const busqueda= Usuarios.find(i=> i.Usuario.toLowerCase() === Nuevousuario.toLowerCase())
        
        // --> Luego de 3s mostramos el arrays
        setTimeout(() => {
           busqueda ? resolve(busqueda) : reject('Usuario No Encontrado')
        }, 3000);
    })
}

console.log('🔎 Buscando...')
buscar()
.then((response)=>{
    console.clear()
    console.log("✔ Arrays Encontrado: ",response)
})
.catch((Error)=>{
    console.log("Error en:",Error)
})