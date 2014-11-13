module.exports = function(grunt) {

  // PROJECT CONFIGURATION
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // COPY TASKS /////////////
    copy: {
      dist: {
        files: {
          '../dist/flesh.css': '../src/flesh.css'
        }
      }
    },
    // CSSMIN TASKS ///////////
    cssmin: {
      minify: {
        files: {
          '../dist/flesh.min.css': '../dist/flesh.css'
        }        
      },
      combine: {
        files: {
          '../dist/flesh-demo.min.css': ['../src/bones.min.css','../src/flesh.css','../src/custom.css']
        }
      }
    },
    // PROCESSHTML TASKS //////
    processhtml: {
      dist: {
        files: { 
          '../dist/index.html': '../src/index.html'
        }
      }
    },
  });

  // LOAD PLUGINS
  //grunt.loadNpmTasks('');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-processhtml');

  // DEFAULT TASKS
  grunt.registerTask('default', ['copy','cssmin:minify','cssmin:combine','processhtml']);
};