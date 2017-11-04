----------------------------------

filename: techskills-introtoredux-1-why_redux

title: Why Redux?

subtitle: Intro to Redux

----------------------------------

Outline:

  - [_Question_:]
    - Redux seems really confusing to me, what is it and why would I use it.
      - Redux is the defacto standard JavaScript library that more-or-less implements the Flux pattern
      - It often used in conjunction with React
      - Let Use an Analogy to understand the Flux pattern and Redux in particular
        - [_Cue_:]
          - Why Redux in Four Drawings
          - URL
            -https://codeburst.io/why-redux-in-four-drawings-511b54788ec7
          - Details
            - Break Room
            - Building Lobby Counter
            - Second Robot
            - Tube System
  - Prerequisite:
    - Windows, OSX, or Linux
    - Text Editor
    - Node.js
      - [_Cue_:]
        - Installing
        - URL
          - https://nodejs.org
    - Code available in video notes
  - Environment
    - Redux normally used in conjunction with a front end framework, React for web (browser) applications
    - Rather will run a Node.js applications; thus avoiding web application complexities
  - Setup
    - [_Cue:_]
      - Create project folder
    - [_Cue_:]
      - Initialize Node Project
      - Windows users; use *Node.js command prompt*
      - Execute
        - Working directory
          - hello-world
        - Command
          - npm int
    - [_Cue:_]
      - Create ./src folder
    - [_Cue_:]
      - Create ./dist folder
    - [_Cue_:]
      - Execute: npm install babel-cli --save-dev
      - Execute: npm install babel-preset-env --save-dev
      - Execute: npm install babel-plugin-transform-object-rest-spread --save-dev
    - [_Cue_:]
      - Edit ./.babelrc
    - [_Cue_:]
      - Execute: npm install redux --save
    - Project also includes eslint libraries and configuration; not needed, not covered
  - Hello-World
    - [_Cue_:]
      - Edit: ./src/hello-world.js
      - Reducer = Desk Robot
      - Subscribe parameter = Room Robot by Subscribe Tube (in web application would render)
      - Dispatch calls = Room Robot by Dispatch Tube (in web applications would be an event callback)
      - Flow: Dispatch -> Reducer -> Subcribe
    - [_Cue_:]
      - Execute: ./node_modules/.bin/babel src -d dist
    - [_Cue_:]
      - Execute: node dist/hello-world.js
