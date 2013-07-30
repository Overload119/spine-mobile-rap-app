exports.config =
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/
        'test/javascripts/test.js': /^test(\/|\\)(?!vendor)/
        'test/javascripts/test-vendor.js': /^test(\/|\\)(?=vendor)/
      order:
        # Files in `vendor` directories are compiled before other files
        # even if they aren't specified in order.before.
        before: [
          'vendor/scripts/console-helper.js',
          'vendor/scripts/jquery.js',
          'vendor/scripts/jquery-migrate-1.2.1.js',
          'vendor/scripts/gfx.js',
          'vendor/scripts/underscore.js',
          'vendor/scripts/spine/spine.js',
          'vendor/scripts/spine/manager.js',
          'vendor/scripts/spine/stage.js',
          'vendor/scripts/spine/panel.js'
        ]

    stylesheets:
      joinTo:
        'stylesheets/global.css': /^(app\/styles)/
      order:
        before: ['vendor/styles/normalize.css']
        after: ['vendor/styles/helpers.css']

    templates:
      joinTo: 'javascripts/app.js'
