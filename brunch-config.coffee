exports.config =
  # See http://brunch.io/#documentation for docs.
  
  #Brunch will ignore files starting with an underscore by default.
  #But if you don't want to use that convention for your tests, then you can
  #uncomment the below.
  #conventions: ignored: /.+\.spec\.js/
  modules:
    definition: false
    wrapper: false

  #Only need to explicitly set the hint pattern if using auto-reload
  plugins:
      jshint:
        pattern: /^app\/.*\.js$/
    
  files:
    javascripts:
      joinTo:
        'javascript/app.js': /^app/
        'javascript/vendor.js': /^bower_components/
      order:
        before: [
            'app/**/*.module.js'
          ]        
    stylesheets:
      defaultExtension: 'scss'
      joinTo:
        'stylesheets/app.css': /^app/
        'stylesheets/vendor.css': /^bower_components/      
    templates:
      joinTo: 'javascript/templates.js'
