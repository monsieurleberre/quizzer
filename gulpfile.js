var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync')
var babel = require("gulp-babel");
var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");

// gulp.task("default", function () {
//   return gulp.src("src/app.js")
//     .pipe(babel())
//     .pipe(gulp.dest("dist"));
// });

gulp.task('live-server', function(){
    var server = new LiveServer('server/main.js');
    server.start();
})

browserify("app/main.jsx")
  .transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .pipe(fs.createWriteStream("app.js"));


gulp.task('bundle', function(){
    browserify("app/main.jsx")
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(fs.createWriteStream("./.tmp/app.js"));

})


// gulp.task('bundle', function(){
//     return browserify({
//         entries: "app/main.jsx",
//         debug: true,
//     })
//     .transform(babelify)
//     .bundle()
//     .pipe(source("app.js"))
//     .pipe(gulp.dest("./.tmp"))
// })

gulp.task('serve', ['bundle', 'live-server'], function(){
    browserSync.init(null, {
        proxy: "http://localhost:7777",
        port: 9001
    })
})

// gulp.task('bundle', function(){
//     return browserify({ 
//         entries: "app/main.js",
//         debug: true
//      })
//   .transform(babelify)
//   .require("app/main.jsx", { entry: true })
//   .bundle()
//   .on("error", function (err) { console.log("Error: " + err.message); })
//   .pipe(fs.createWriteStream("app.js"))
//   .pipe(gulp.dest("./.tmp"));
// })