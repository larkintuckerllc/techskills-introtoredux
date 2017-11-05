----------------------------------

filename: techskills-introtoredux-4-wrapping_up

title: Wrapping Up

subtitle: Intro to Redux

----------------------------------

Outline:

  - [_Question_:]
    - Having done lists, I am not sure what else we could cover?
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
    - Definition: function that return a function
    - [_Cue_:]
      - Edit: ./lessons/thunk-definition.txt
    - Action creators that return functions
    - Learn by example
