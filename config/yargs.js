const opts = {
    completado: {
        default: true,
        descripcion: 'd'
    },
    descripcion: {
        descripcion: 'd',
    }
}

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado la tarea'
};


const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}