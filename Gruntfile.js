module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-karma');


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			cruft: ['**/.DS_Store','**/Thumbs.db']
		},

    less: {
      main: {
        files: {'public/css/main.css':'public/less/main.less'}
      }
    },

    handlebars: {
      options: {
        namespace: false,
        amd: true
      },
      library: {
        expand: true,
        cwd: 'component_library',
        src: ['**/*.hbs'],
        flatten: false,
        extDot: 'last',
        ext: '.hbs.js',
        dest: 'component_library/'
      }
    },

    watch: {
      static_assets: {
        files: [
          'public/**/*',
          '!public/**/*.less',
          'component_library/**/*.js',
          '!component_library/**/*_test.js'
        ],
        options: {
          debounceDelay: 1000,
          livereload: 9000
        },
      },
      tests: {
        files: ['component_library/**/*.js'],
        tasks: ['karma:library:run']
      },
      handlebars: {
        files: ['component_library/**/*.hbs'],
        tasks: ['handlebars']
      }
    },

    karma: {
      library: {
        configFile: 'karma.conf.js',
        background: true,
        browsers: ['Chrome']
      }
    }

  });


	grunt.registerTask('server', 'Start the web server.', function() {
		require('./server');
	});

  grunt.registerTask('build', ['handlebars','less']);

	grunt.registerTask('default', [ 'clean', 'build', 'server', 'karma', 'watch' ]);
};
