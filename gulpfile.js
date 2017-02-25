'use strict'
const gulp = require('gulp');
const ts = require('gulp-typescript');
const source = require('vinyl-source-stream');
const tsBrows = require('gulp-typescript-browserify');
const browserify = require('gulp-browserify');
// let browserify = require('browserify');
const TSCONFIG = require('./tsconfig.json');
const SRC_PATH = {
    typescript: ['snakegame/ts/**/*.ts'],
    browserify: ['snakegame/midjs/*.js']
}
const TAR_PATH = {
    midjs: 'snakegame/midjs/',
    destjs: 'snakegame/js/'
}
const WATCH_PATH = {
    ts: 'snakegame/ts/**',
    midjs: 'snakegame/midjs/**'
}
const OPTIONS = {
}

let typescriptTimer = null;
gulp.task('typescript',function(){
    clearTimeout(typescriptTimer);
    function tsFunc(){
        gulp.src(SRC_PATH.typescript)
        .pipe(ts(TSCONFIG))
        .pipe(gulp.dest(TAR_PATH.midjs))
    }
    typescriptTimer = setTimeout(tsFunc,200);
    
});
let browserTimer = null;
gulp.task('browserify',function(){
    clearTimeout(browserTimer);
    function browserFunc(){
        console.time('browserify');
        gulp.src(SRC_PATH.browserify)
        .pipe(browserify())
        .pipe(gulp.dest(TAR_PATH.destjs))
        console.timeEnd('browserify');
    }
    browserTimer = setTimeout(browserFunc,800);
});
gulp.task('watch',function(){
    gulp.watch(WATCH_PATH.ts,['typescript']);
    gulp.watch(WATCH_PATH.midjs,['browserify']);
});

process.on('uncaughtException', (err) => {
  console.log('process error',err);
});