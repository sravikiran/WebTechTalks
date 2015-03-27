module.exports = function(grunt){

    grunt.initConfig({
        html2js: {
            main: {
                options: {
                    base: '',
                    module: 'myTemplates'
                },
                src: ['public/templates/*.html'],
                dest: "public/app/templates.js"
            }
        },
        concat:{
            options: {
                separator: ';'
            },
            dist: {
                src: ['public/app/*.js', 'public/app/**/*.js'],
                dest: 'dist/app.js'
            }
        },
        express: {
            api: {
                options: {
                    port: 3000,
                    server: './server.js'
                }
            }
        },
        karma:{
            local:{
                configFile:'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('server', ['express:api', 'express-keepalive']);
};
