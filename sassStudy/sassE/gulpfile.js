var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

var dist = 'dist/css',
    publicCss = './public/sass/*.scss';

gulp.task('sass', function() {
    gulp.src(publicCss)
        .pipe(sass({outputStyle: 'expanded'})) // 此配置使文件编译并输出压缩过的文件
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});

gulp.task('watch', ['sass'], function() {
    gulp.watch(publicCss, ['sass']);
});

// 开启本地服务器
gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        port: 8080
    });
});

gulp.task('default',['sass', 'watch', 'webserver']);