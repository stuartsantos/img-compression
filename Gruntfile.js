const mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {
grunt.initConfig({
    imagemin: {
        options: {
            optimizationLevel: 7,
            svgoPlugins: [{removeViewBox: false}],
            mozjpeg: [{quality: 50}]
        },
        dynamic: {
            files: [{
                expand: true,
                cwd: 'src/',
                src: ['**/*.{png,jpg,gif,jpeg,svg}'],
                dest: 'dist/'
            }]
        }
    }
});
 
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('default', ['imagemin']);
};
