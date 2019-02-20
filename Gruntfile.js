'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // WATCH TASK - important
    watch: {
      sass: {
        files: ['src/sass/**/*.{scss,sass}', 'src/sass/**/*.html'],
        tasks: ['clean', 'sass', 'shell', 'copy:main']
      },
    },

    clean: ['styleguide/assets'],
    sass: {
      options: {
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'static/css/style.css': 'src/sass/app.sass'
        }
      }
    },
    shell: {
      kss: {
        command: './node_modules/.bin/kss-node src/sass styleguide/assets --template styleguide/template/custom'
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path and its sub-directories
          {expand: true, src: ['static/img/**'], dest: 'styleguide/assets/'},
          {expand: true, src: ['static/css/**'], dest: 'styleguide/assets/'},
          {expand: true, src: ['static/js/**'], dest: 'styleguide/assets/'},
        ]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['watch:sass']);
};
