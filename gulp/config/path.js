import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())


const buildFolder = './dist'
const srcFolder = './src'

export const path = {
    build: {
        js:`${buildFolder}/js/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        css: `${buildFolder}/css/`,
        fonts:`${buildFolder}/fonts/`,
        images:`${buildFolder}/img/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        scss: `${srcFolder}/scss/style.scss`,
        js:`${srcFolder}/js/app.js`,
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg:`${srcFolder}/img/**/*.svg`,
        svgIcons:`${srcFolder}/svgicons/*.svg`
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        scss: `${srcFolder}/**/*.scss`,
        js:`${srcFolder}/js/**/*.js`,
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder,
    ftp: ``
}