import gulp from 'gulp'
import webpack from 'webpack-stream'
import { path } from '../config/path.js'
import { plugins } from '../config/plugins.js'


export const js = () => {
    return gulp.src(path.src.js, { sourcemaps: true })
        .pipe(plugins.plumber(
            plugins.notify.onError({
                title: "JS",
                message: "Error <%= error.message %>"
            })
        ))
        .pipe(webpack({
            mode:'production',
            output:{
                filename:"index.js"
            }
        }))
        .pipe(gulp.dest(path.build.js))
        .pipe(plugins.browserSync.stream())
}