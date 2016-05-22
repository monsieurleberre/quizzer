var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync')
var babel = require("gulp-babel");
var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
var reactify = require("reactify");

gulp.task('live-server', function(){
    var server = new LiveServer('server/main.js');
    server.start();
})

browserify("app/main.jsx")
  .transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .on("error", function (err) { console.log("Error: " + err.message); })
  .pipe(fs.createWriteStream("app.js"));


gulp.task('bundle', function(){
    browserify("app/main.jsx")
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .on("error", function (err) { console.log("Error: " + err.message); })
    .pipe(fs.createWriteStream("./.tmp/app.js"));

})

gulp.task('serve', ['bundle', 'live-server'], function(){
    browserSync.init(null, {
        proxy: "http://localhost:7777",
        port: 9001
    })
})