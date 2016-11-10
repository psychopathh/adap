module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
          build: {
              src: 'jstest/1.js',
              dest: 'jstest/production.min.js'
          }
        },

        concat: {
            dist: {
                src: [
                  'jstest/*.js' // Все JS в папке
              ],
              dest: 'jstest/production.js',
          }
      },

      browserSync: {
    bsFiles: {
        src : '/*.html',
        src :'css/*.css'
    },
    options: {
        server: {
            watchTask: true,
            baseDir: "./"
        }
    }
    } 

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat' ,'uglify','browserSync']);

};
