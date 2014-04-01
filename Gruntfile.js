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
      cruft: ['.DS_Store','public/**/.DS_Store','./Thumbs.db','public/**/Thumbs.db'],
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
        cwd: 'public/component_library',
        src: ['**/*.hbs'],
        flatten: false,
        extDot: 'last',
        ext: '.hbs.js',
        dest: 'public/component_library/'
      }
    },

    watch: {
      static_assets: {
        files: [
          'public/**/*',
          '!public/**/*.less',
          '!public/component_library/**/*_test.js'
        ],
        options: {
          debounceDelay: 1000,
          livereload: 9000
        },
      },
      tests: {
        files: ['public/component_library/**/*.js'],
        tasks: ['karma:background:run']
      },
      handlebars: {
        files: ['public/component_library/**/*.hbs'],
        tasks: ['handlebars']
      }
    },

    karma: {
      singlerun: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['Chrome']
      },
      background: {
        configFile: 'karma.conf.js',
        background: true,
        browsers: ['Chrome']
      }
    },

    requirejs: {
      mainjs: {
        options: {
          baseUrl: "public/component_library/",
          mainConfigFile: 'public/js/main.js',
          name: "../js/main",
          out: "public/js/main-optimized.js"
        }
      }
    }

  });


	grunt.registerTask('server', 'Start the web server.', function() {
		require('./server');
	});

  grunt.registerTask('test', ['karma:singlerun']);
  grunt.registerTask('optimize', ['requirejs']);
  grunt.registerTask('build', ['handlebars','less']);

	grunt.registerTask('default', [ 'clean', 'build', 'server', 'karma', 'watch' ]);
};
