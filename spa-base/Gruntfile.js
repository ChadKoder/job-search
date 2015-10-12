module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        //src: ['public/js/*.js'],
		//src: ['public/libs/**/*.js', 'public/js/**/*.js', 'public/libs/angular-route/*.js', 'public/libs/bootstrap/*.js'],			 
		src: ['public/libs/angular/*.js', 'public/libs/angular-route/*.js', 'public/js/**/*.js', 'public/libs/angular-route/*.js', 'public/libs/bootstrap/*.js'],			 
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    //qunit: {
//      files: ['public/**/*.html']
  //  },
    jshint: {
      //files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
	  files: ['Gruntfile.js', 'public/js/**/*.js'],//, 'public/js/controllers/*.js', 'public/js/services/*.js'],	  
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
	//jasmine: {
		 // Your project's source files
      //src : ['public/libs/angular/*.js', 'public/libs/angular-route/*.js', 'public/js/**/*.js'],
	//  src : ['public/libs/angular/*.js'],
      // Your Jasmine spec files
  //    specs : 'src/tests/**/*spec.js',
	  //vendor: [
                //'public//dist/jquery.js'                
            //]
      // Your spec helper files
    //  helpers : 'specs/helpers/*.js'	  
	//},
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']//, 'qunit']
    }	
  });

  //if (grunt.option('debug')){
	//  console.log(grunt.config('jshint.files'));
  //}

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
 // grunt.loadNpmTasks('grunt-contrib-qunit');
 //grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat'); 
  
   //grunt.registerTask('default', 'jasmine');

 // grunt.registerTask('test', ['jshint']);//, 'qunit']);

  //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
  //grunt.registerTask('default', ['jshint', 'concat', 'jasmine', 'uglify']);
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};