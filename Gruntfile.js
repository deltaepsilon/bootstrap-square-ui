module.exports = function(grunt) {
	grunt.initConfig({
        less: {
            core: {
                options: {
//                    paths: ['less']
                },
                files: {
                    'dist/css/bootstrap.css': 'less/bootstrap.less'
                }
            }
        },
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'dist/js/bootstrap-square-ui.js'
            }
        },
        uglify: {
            js: {
                files: {
                    'dist/js/bootstrap-square-ui.min.js': ['dist/js/bootstrap-square-ui.js']
                }
            }
        },
        watch: {
            less: {
                files: 'less/.less',
                tasks: ['less']
            },
            js: {
                files: 'js/*.js',
                tasks: ['concat:js', 'uglify']
            }
        }
    });
    grunt.registerTask('default', ['less', 'concat', 'uglify']);

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
}
