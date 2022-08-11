import gulp from 'gulp'
import { path } from '../config/path.js'
import fileinclude from 'gulp-file-include'
import { plugins } from '../config/plugins.js'
import webHtmlNoSvg from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'

export const html = () => {
    return gulp.src(path.src.html)
        .pipe(plugins.plumber(
            plugins.notify.onError({
                title: "HTML",
                message: "Error <%= error.message %>"
            })
        ))

        .pipe(fileinclude())
        .pipe(plugins.replace(/@img\//g, 'img/'))
        .pipe(webHtmlNoSvg())
        .pipe(
            versionNumber({
                "value": "%DT%",
                "append": {
                    "key": "_v",
                    "cover": 0,
                    "to": [
                        'css',
                        'js'
                    ],
                },
                'output': {
                    "file": "gulp/version.json"
                }
            })
        )
        .pipe(plugins.browserSync.stream())
        .pipe(gulp.dest(path.build.html))
}