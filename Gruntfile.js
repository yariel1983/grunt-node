module.exports = function( grunt ) {
  "use strict";
  grunt.initConfig( {
      connect: {
          server: {
              options: {
                  base: "",
                  port: 8080
              }
          }
      },
      watch: {}
  } );
  grunt.loadNpmTasks( "grunt-contrib-connect" );
  grunt.loadNpmTasks( "grunt-contrib-watch" );
  grunt.registerTask( "dev", [ "connect", "watch" ] );
};