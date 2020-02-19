

// puerto
process.env.PORT = process.env.PORT || 3000;

//entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// vencimoento del token
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// seed de autenticacion
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


//base de datos
let urlDb

if( process.env.NODE_ENV == 'dev') {
    urlDb = 'mongodb://localhost:27017/cafe2';
} else {
    urlDb = process.env.MONGO_URI;
    // 'mongodb+srv://cafe-user:wpWSEI8PTUY0FZ95@cluster0-wuemn.mongodb.net/test?retryWrites=true&w=majority'
}

process.env.URLDB = urlDb;