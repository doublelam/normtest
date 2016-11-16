'use strict'
let gulp = require('gulp');
let ts = require('gulp-typescript');
let tsBrows = require('gulp-typescript-browserify');
let browserify = require('gulp-browserify');
const TSCONFIG = require('./tsconfig.json');
const SRC_PATH = {
    typescript: ['snakegame/ts/**'],
    browserify: ['snakegame/midjs/*.js','snakegame/midjs/**/*.js']
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


gulp.task('typescript',function(){
    try{
        gulp.src(SRC_PATH.typescript)
        .pipe(ts(TSCONFIG))
        .pipe(gulp.dest(TAR_PATH.midjs))
    }catch(err){
        console.log('typescript error',err);
    }
    
});
gulp.task('browserify',function(){
    try{
        gulp.src(SRC_PATH.browserify)
        .pipe(browserify())
        .pipe(gulp.dest(TAR_PATH.destjs))
    }catch(err){
        console.log('browserify err',err);
    }
    
});
gulp.task('watch',function(){
    gulp.watch(WATCH_PATH.ts,['typescript']);
    gulp.watch(WATCH_PATH.midjs,['browserify']);
});

process.on('uncaughtException', (err) => {
  console.log('process error',err);
});