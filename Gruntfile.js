module.exports = function(grunt) {
  var path = require('path');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.initConfig({
      jshint: {
        all: ['Gruntfile.js', '**/*.js']
      },
      watch: {
        files: ['Gruntfile.js', '**/*.js'],
        tasks: ['jshint']
    }
  });

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/config'),
    jitGrunt: {
      customTasksDir: 'grunt/tasks'
    }
  });


};
