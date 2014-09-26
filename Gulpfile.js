var fs         = require('fs')
var gulp       = require('gulp')
var browserify = require('browserify')
var reactify   = require('reactify')
var es6ify     = require('es6ify')
var Spawn      = require('child_process').spawn

reactify.isJSXExtensionRe = /^.+\.js$/

gulp.task('bundle.js', function(){
  browserify()
    .transform(reactify)
    .add(es6ify.runtime)
    .transform(es6ify.configure(/^(?!.*node_modules)+.+\.js$/))
    .require(require.resolve('./browser.js'), { entry: true })
    .bundle()
    .pipe(fs.createWriteStream('dist/bundle.js'))
})

var proc
gulp.task('server', function(){
  if (proc) proc.kill('SIGKILL')

  proc = Spawn('node', ['server.js'], {stdio: 'inherit'})
})

gulp.task('watch', ['bundle.js'], function(){
  gulp.watch(['server.js', 'app.js', 'lib/**/*.*'], ['server'])
  gulp.watch(['browser.js', 'lib/**/*.*', 'app/**/*.*'], ['bundle.js'])
})

gulp.task('default', ['watch', 'server'])

process.on('uncaughtException', function(e){
  if (proc) proc.kill('SIGKILL')

  throw e
})
