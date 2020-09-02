const mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {
grunt.initConfig({
    imagemin: {
        static: {
            options: {
                optimizationLevel: 7,
                svgoPlugins: [{removeViewBox: false}],
            },
            files: {
                'dist/images/profile-small.jpg': 'src/images/profile-small.jpg',
            }
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
