import { Usuarios } from './arrays.js'


function buscar() {

    let Nuevousuario = document.getElementById('user').value.trim()

    return new Promise((resolve, reject) => {
        if (Usuarios == 0) {
            reject(new Error('❗ Api no Encontrada'));
        }

        const busqueda = Usuarios.find(i => i.Usuario.toLowerCase() === Nuevousuario.toLowerCase())

        // --> Luego de 3s mostramos el arrays
        setTimeout(() => {
            busqueda ? resolve(busqueda) : reject('Usuario No Encontrado')
        }, 3000);
    })
}


document.getElementById('btnbuscar').addEventListener('click',()=> {
    console.log('🔎 Buscando...')
    buscar()
    .then((response) => {
            console.clear()
            console.log("✔ Arrays Encontrado: ", response)
        })
    .catch((Error) => {
            console.log("Error en:", Error)
    })
})

