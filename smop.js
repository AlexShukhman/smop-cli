#!/usr/bin/env node
const program = require('commander');
const cookies = require('browser-cookies')
const { auth, pull, push } = require('./logic');
const { prompt } = require('inquirer');

const usernamePrompt = [
    {
        type: 'input',
        name: 'username', 
        message: 'input your username!'
    },
    {
        type: 'password',
        name: 'password',
        message: 'input your password!'
    }
]

const passwordPrompt = {
    name: 'password',
    type: 'password',
    message: 'input your password!'
}

program
    .version('0.0.1')
    .description('A command-line interface for Smop (smop.io)');

// -u and -p flags are optional, works with and without
// prompts user for user and pass when undefined 
program
    .command('auth [username]')
    .option('-u, --username', "Your smop.io login username (remember, not email)")
    .action((username) => {
        if (username === undefined) {
            prompt(usernamePrompt).then(answers => {
                auth(answers.username, answers.password)
            });
        } else {
            prompt(passwordPrompt).then(answers => {
                auth(username, answers.password)
            });
        }
    });

program
    .command('pull')
    .option('-a, --all', 'Pull Task names, numbers and descriptions')
    .option('-l, --languages <langs>', 'Takes list of languages, not required. List must be in the format "HTML/CSS, PHP, JavaScript" or any combination of them')
    .option('-t, --task-id <taskId>', 'ID (not name) of task, e.g. smop pull -t 5b384cbe578cad568d9baf8d')
    .action(() => {
        // console.log(program.args[0])
        if (program.args[0].all) {
            pull('a', undefined)
        } else if (program.args[0].languages !== undefined) {
            pull('l', program.args[0].languages)
        } else if (program.args[0].taskId !== undefined) {
            pull('t', program.args[0].taskId)
        } else {
            pull('none', undefined)
        }
    });

program.command('push <taskID>')
    .action((taskId) => {
    push(taskId)
}).on('--help', () => {
    console.log();
    console.log('   Push:');
    console.log('   Pushes current directory to Smop.');
    console.log();
});

program.parse(process.argv);