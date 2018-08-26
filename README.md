# Smop CLI

A command-line interface for Smop (smop.io)

## To Install

Download this repository and run:
```sh
npm install -g
```

## To Use

To sign in, use: 
```
smop auth [username]
```
To pull all active tasks, run: 
```
smop pull -a 
```

To pull all actives tasks that use certain languages, run: 
```
smop pull -l <languages>
```
For example: 
```
smop pull -l HTML/CSS
smop pull -l HTML/CSS,JavaScript
```

To pull a task and create a local working directory, run:
```
smop pull -t "<TaskID number>"
```

To submit your code, run: 
```
smop push
```
