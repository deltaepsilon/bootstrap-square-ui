var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
    return connect.static(path.resolve(point));
};

module.exports = function(grunt) {
	grunt.initConfig({
        less: {
            core: {
                options: {
//                    paths: ['less']
                },
                files: {
                    'dist/css/bootstrap.css': 'less/bootstrap.less',
                    'dist/css/square-ui.css': 'dist/less/square-ui.less'
                }
            }
        },
        concat: {
            js: {
                src: [
                    'js/bootstrap-tooltip.js',
                    'js/*.js'
                ],
                dest: 'dist/js/bootstrap.js'
            }
        },
        uglify: {
            js: {
                files: {
                    'dist/js/bootstrap.min.js': ['dist/js/bootstrap.js']
                }
            }
        },
        connect: {
            livereload: {
                options: {
                    port: 9001,
                    middleware: function(connect, options) {
                        return [lrSnippet, folderMount(connect, options.base)]
                    }
                }
            }
        },
        livereload: {
            port: 35729
        },
        watch: {
            less: {
                files: ['less/*.less', 'dist/less/*.less'],
                tasks: ['less', 'livereload']
            },
            js: {
                files: 'js/*.js',
                tasks: ['concat:js', 'uglify', 'livereload']
            },
            html: {
                files: ['dist/index.html'],
                tasks: ['livereload']
            }
        }
    });
    grunt.registerTask('default', ['less', 'concat', 'uglify']);

    grunt.registerTask('reload', ['livereload-start', 'connect', 'watch']);

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-livereload');
}
