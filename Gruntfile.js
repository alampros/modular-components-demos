module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-requirejs');


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			cruft: ['**/.DS_Store','**/Thumbs.db'],
      bin: ['bin/*'],
      postoptimize: ['bin/optimized/demo1.html','bin/optimized/index.html']
		},

    copy: {
      js: { files: [ {expand: true, cwd: 'src/', src: ['js/*.js'], dest: 'bin/'} ] },
      html: { files: [
        {expand: true, cwd: 'src/', src: ['*.html'], dest: 'bin/' },
        {expand: true, cwd: 'lib/', src: ['**/*'], dest: 'bin/lib/' },
      ]}
    },

    less: {
      main: {
        files: {'bin/css/main.css':'src/less/main.less'}
      }
    },

    handlebars: {
      options: {
        namespace: false,
        amd: true
      },
      files: {
        expand: true,
        cwd: 'src/',
        src: ['tmpl/*.hbs'],
        flatten: true,
        extDot: 'last',
        ext: '.js',
        dest: 'bin/js/tmpl/'
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
        files: ['src/js/*.js'],
        tasks: ['copy:js']
      }
    },

    requirejs: {
      compile: {
        options: {
          appDir: 'bin/',
          baseUrl: 'js',
          dir: 'bin/optimized',
          mainConfigFile: 'bin/js/main.js',
          removeCombined: true,
          optimize: 'none',
          modules: [{ name: 'main' }]
        }
      }
    }



  });


	grunt.registerTask('server', 'Start the web server.', function() {
		require('./server');
	});

  grunt.registerTask('build', ['handlebars','less','copy','requirejs','clean:postoptimize']);
	
	grunt.registerTask('default', [ 'clean', 'build', 'server', 'watch' ]);
};
