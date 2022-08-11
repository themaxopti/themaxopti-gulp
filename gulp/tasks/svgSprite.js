import gulp from 'gulp'
import svgSprite from 'gulp-svg-sprite'
import { path } from '../config/path.js'
import { plugins } from '../config/plugins.js'


export const svgSpriteTask = () => {
    return gulp.src(`${path.src.svgIcons}`, {})
        .pipe(plugins.plumber(
            plugins.notify.onError({
                title: "FONTS",
                message: "Error <%= error.message %>"
            })
        ))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../icons/icons.svg',
                    example: true
                }
            }
        }))
        .pipe(gulp.dest(`${path.build.images}`))
}