/**
 * Dependencies! 
 */
var request = require('request');
var ConfigStore = require('configstore')

/**
 * Where the auth token is stored, manipulate by using conf.get or conf.set
 */
var conf = new ConfigStore("hello", {token: undefined});

/**
 * Authenticates the user
 * Routes to smop.io/login 
 * if no user found, then they should sign up
 * @param {string} u username to be authenticated 
 * @param {string} p password to be authenticated
 * 
 * @todo just change from localhost to smop.io
 */
function auth(u, p) {
    request.post({
        url: 'http://localhost:3000/login',
        json: true,
        body: {user: u, pass: p, cli: true},
    }, function(err,res,body) {
        if (body !== undefined) {
            console.log('authentication succcess!');
            // console.log(body)
            conf.set('token', body);
        } else {
            console.log('authentication failure!');
            // console.log(err);
        }
    });
}

/**
 * Pulls tasks, requires a user to be logged in first though
 * -a pulls a high level view of all active tasks with their ids (this is done)
 * -l <langs> pulls a high level view of all active tasks with the specified languages and their ids (this is done)
 * -t <taskid> pulls a single task and its long description
 * @param {string} flag flag that tells the function which case it's in
 * @param {string} taskOrLanguages taskid or a string of languages separated by commas
 * 
 * @todo configure -t to create a local working directory on the users machine
 */
function pull(flag, taskOrLanguages) {
    request.post({
        url: 'http://localhost:3000/cli_pull',
        json: true,
        body: {
            token: conf.get('token'),
            flag: flag !== undefined ? flag : "none",
            taskOrlang: taskOrLanguages !== undefined ? taskOrLanguages : "none"
        },
    }, function(err,res,body) {
        console.log(body);
    });
}

/**
 * Runs the working directory code through codeCheck
 * @param {string} taskID id of the task to push to
 * 
 * Right now this api call works 
 * @todo call production post_codeCheck route instead of dev
 * @todo push working directory code up to s3
 * @todo make sure codeCheck is called with the right params when running because 
 *       the python will check the submission in s3 for the user
 */
function push(taskID) {
    // console.log('pushing ' + taskID);
    // var token = conf.get('token')
    // request.post({
    //     url: 'http://localhost:3000/post_CodeCheck',
    //     json: true,
    //     body: {
    //         id: taskID,
    //         token: conf.get('token')
    //     },
    // }, function(err,res,body) {
    //     console.log(body)
    // });
    console.log('hi alex make sure you take a look at codecheck because its turned on before you test this');
}
 
module.exports = {
    auth,
    pull,
    push,
}