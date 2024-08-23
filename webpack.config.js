const path = require('path');

module.exports = {
    entry: './src/index.js', // punto de entrada de tu aplicación
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve (__dirname,'dist' ), //Carpeta de salida  
    },
    module: {
        rules: [
            {
                 test: /\.css$/,
                 use: [ 'style-loader', 'css-loader'], // Loaders para procesar archivos
            },
            {
                test: /\.js$/, //Regex para identificar archivos js
                exclude: /node_modules/, //Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', //Este es un loader para transpilar JS moderno a js compatiblecon mas navegadores
                    options: {
                        presets: [ '@babel/preset-env'], //preset de babel para convertir JS moderno a versiones mas antiguas
                    }
                }
            }
        ]
    }, 
    desvtool: 'source-map', // Generar source map para facilitar la depuración
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //carpeta desde donde obtenemos los archivos que mostramos al usuario
        compress: true, // Habilitamos compresion gzip
        port: 9000, //Puerto de servidor de desarrollo
    }
}