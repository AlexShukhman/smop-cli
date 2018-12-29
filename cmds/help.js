const menus = {
    main: `
      parth [command] <options>
  
      test ............... run test
      version ............ show package version
      help ............... show help menu for a command`,
  
    test: `
      parth test <options>

        Tests the git repo you request
  
      --repo, -r ......... the git repo to pull
                           (eg "-r https://github.com/smop-technologies/parth.git") 
                           {must include}

      --entry_point, -e .. the name of the file to serve, please use folder 
                           structure notation 
                           (eg "-e ./views/index.html") 
                           {assumes ./index.html or ./index.php if not included}

      --type, -t ......... the type of project, accepts "html" and "php" 
                           (eg "-t html") 
                           {must include}

      --parth, -p ........ the name and location of your parth test file, 
                           please use folder structure notation 
                           (eg "-p ./ci/tests.parth") 
                           {assumes ./tests.parth if not included)`,
  }
  
  module.exports = (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
  
    console.log(menus[subCmd] || menus.main)
  }