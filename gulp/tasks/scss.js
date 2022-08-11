import gulp from 'gulp'
import { path } from '../config/path.js'
import { plugins } from '../config/plugins.js'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'


import cleanCss from 'gulp-clean-css'
import webpcss from 'gulp-webpcss'
import autoPrefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'



const sass = gulpSass(dartSass)



export const scss = () => {
    return gulp.src(path.src.scss, { sourcemaps: true })
        .pipe(plugins.plumber(
            plugins.notify.onError({
                title: "Scss",
                message: "ERROR <%= error.message %>"
            })
        ))
        .pipe(plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: "expanded"
        }))
        .pipe(groupCssMediaQueries())
        .pipe(webpcss(
            {
                webpClass:".webp",
                noWebpClass:".mo-webp"
            }
        ))
        .pipe(autoPrefixer({
            grid:true,
            overrideBrowsersList:["last 3 versions"],
            cascade:true
        }))
        .pipe(gulp.dest(path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname:".min.css"
        }))
        .pipe(gulp.dest(path.build.css))
        .pipe(plugins.browserSync.stream())
}