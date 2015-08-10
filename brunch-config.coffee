exports.config =
  # See http://brunch.io/#documentation for docs.
  
  modules:
    definition: false
    wrapper: false
  
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
