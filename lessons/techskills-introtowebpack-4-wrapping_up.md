----------------------------------

filename: techskills-introtoredux-4-wrapping_up

title: Wrapping Up

subtitle: Intro to Redux

----------------------------------

Outline:

  - [_Question_:]
    - Having done lists (pretty much the most complex thing), I am not sure what else we could cover?
      - The lists example points to one complaint of Redux; there is a lot of boilerplate code; we will address this.
      - And we saved "thunk" for last.
  - Standard Actions
    - [_Cue:_]
    - URL: https://github.com/acdlite/flux-standard-action
  - List-Actions
    - [_Cue:_]
      - Execute: npm install redux-actions --save
    - [_Cue:_]
      - Edit: ./src/ducks/list-actions.js
      - Replace imperative with declarative
    - [_Cue_:]
      - Execute: ./node_modules/.bin/babel src -d dist
    - [_Cue_:]
      - Execute: node dist/list-ducks-actions.js
  - Thunk
    - [_Question_:]
      - So what is a thunk anyway?
      - Definition: function that returns a function
      - [_Cue_:]
        - Edit: ./lessons/thunk-definition.txt
       - Action creators that return functions (Redux calls them)
    - Learn by example
    - [_Cue_:]
      - Execute: npm install redux-thunk --save
    - [_Cue_:]
      - Execute: ./node_modules/.bin/babel src -d dist
    - [_Cue_:]
      - Execute: node dist/random-ducks.js
      - Fetches a random number 1-10 asynchronously (API) displaying if fething or not and number
    - [_Cue_:]
      - Edit: ./src/random-ducks.js
      - Store configuration
      - Usage of random
    - [_Cue_:]
      - Edit: ./src/ducks/random.js
      - Look at everything but fetch
      - Look at fetch
      - randomApi might some remote call to server
  - Wrap Up  
    - Front end frameworks can integrate with Redux, e.g., react-redux
    - [_Cue_:]
      - URL: https://github.com/reactjs/react-redux
