module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          my_target: {
            files: {
              'dest/index.min.js': ['src/index.js'],
              'dest/main.min.js': ['src/main.js']
            }
          }
        },
        concat: {
            options: {
              // define a string to put between each file in the concatenated output
              separator: ';'
            },
            dist: {
              // the files to concatenate
              src: ['dest/*.js'],
              // the location of the resulting JS file
              dest: 'dist/<%= pkg.name %>.js'
            }
          }
      });
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-watch');
      // 默认被执行的任务列表。
      grunt.registerTask('default', ['uglify','concat']);
}