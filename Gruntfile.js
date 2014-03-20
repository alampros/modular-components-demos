module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			cruft: ['**/.DS_Store','**/Thumbs.db'],
      bin: ['bin/*']
		},

    copy: {
      js: { files: [ {expand: true, cwd: 'src/', src: ['js/dt*.js'], dest: 'bin/'} ] },
      html: { files: [
        {expand: true, cwd: 'src/', src: ['*.html'], dest: 'bin/' },
        {expand: true, cwd: 'lib/', src: ['**/*'], dest: 'bin/lib/' },
      ]}
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
    }
  });


	grunt.registerTask('server', 'Start the web server.', function() {
		require('./server');
	});

  grunt.registerTask('build', ['copy']);
	
	grunt.registerTask('default', [ 'clean', 'build', 'server', 'watch' ]);
};
