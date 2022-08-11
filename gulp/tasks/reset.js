import gulp from 'gulp'
import { path } from '../config/path.js'
import del from 'del'

export const reset = () => {
    return del(path.clean)
}
