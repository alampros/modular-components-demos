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
			cruft: ['**/.DS_Store','**/Thumbs.db'],
      postoptimize: ['bin/optimized/*.html','!bin/optimized/demo_requirejs.html']
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
        files: ['bin/**/*'],
        options: {
          debounceDelay: 1000,
          livereload: 9000
        },
      },
      html: {
        files: ['src/*.html'],
        tasks: ['copy:html']
      },
      js: {
        files: ['src/**/*.js'],
        tasks: ['karma:library:run', 'copy:js','copy:component_library']
      },
      handlebars: {
        files: ['src/component_library/ui/*.hbs'],
        tasks: ['handlebars']
      }
    },

    requirejs: {
      optimized: {
        options: {
          appDir: 'bin/',
          dir: 'bin/optimized',
          mainConfigFile: 'bin/js/main.js',
          removeCombined: true,
          optimize: 'none',
          optimize: 'uglify2',
          uglify2: {
            mangle: true,
            compress: {
              sequences: true,
            }
          },
          modules: [{ name: '../js/main' }]
        }
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

  grunt.registerTask('post-build', ['clean:postoptimize','clean:nonminifiedVendorJS']);

  grunt.registerTask('build', ['handlebars','less','copy','requirejs','post-build']);
  //grunt.registerTask('build', ['handlebars','less','copy']);

	grunt.registerTask('default', [ 'clean', 'build', 'server', 'karma', 'watch' ]);
};
