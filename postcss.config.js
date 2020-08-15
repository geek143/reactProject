const plugins = [require("tailwindcss"), require("autoprefixer")];

console.log(process.env.NODE_ENV);
module.exports = {
    plugins : plugins
}