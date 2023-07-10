const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/*Esta línea importa el módulo de Node.js llamado path, que
proporciona utilidades para trabajar con rutas de archivos y directorios.*/
const path = require("path");
/*Esta línea importa el
plugin html-webpack-plugin, que genera un archivo HTML para tu aplicación.*/
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  /*Aquí se define el punto de entrada de la aplicación. Webpack
    comenzará a empaquetar el código desde este archivo.*/
  entry: "./src/index.js",
  /*Este objeto define cómo y dónde webpack emitirá los paquetes.*/
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development", //Esta línea especifica el modo en el que Webpack debe ejecutarse.
  /*Esta sección le dice a Webpack qué extensiones de
    archivo debe manejar automáticamente sin tener que especificarlas en las importaciones*/
  resolve: {
    extensions: [".js", ".jsx"],
  },
  /*Aquí definimos reglas para cómo webpack debe manejar ciertos
    tipos de archivos.*/
  module: {
    rules: [
      {
        /*En este caso, estamos diciendo a webpack que use babel-loader para
        todos los archivos .js y .jsx*/
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        //y que use html-loader para todos los archivos .html.
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    /*estamos utilizando HtmlWebpackPlugin para generar un archivo HTML que incluye
    todas nuestras dependencias webpack.*/
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3005,
  },
};
