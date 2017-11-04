----------------------------------

filename: techskills-introtoredux-2-principles

title: Principles

subtitle: Intro to Redux

----------------------------------

Outline:

  - [_Question_:]
    - Principles sounds like more theory?
      - Yes, but there is not much.
      - Thinking of our office example we have been exposed to the first two already.
        - (1) The state of your whole application is stored in an object tree within a single store.
        - (2) The only way to change the state is to emit an action, an object describing what happened.
      - We will explore the third one by example: To specify how the state tree is transformed by actions, you write pure reducers. This is about the desk robot.
  - Array
    - [_Cue:_]
      - Edit: ./src/array.js
      - Review updated subscribe; now robots are checking if there has been a change.
      - Review array spread
    - [_Cue_:]
      - Execute: ./node_modules/.bin/babel src -d dist
    - [_Cue_:]
      - Execute: node dist/array.js
    - [_Cue:_]
      - Edit: ./src/array.js
      - Replace with broken
    - [_Cue_:]
      - Execute: ./node_modules/.bin/babel src -d dist
    - [_Cue_:]
      - Execute: node dist/array.js
    - A pure function is a function where the return value is only determined by its input values, without observable side effects.
    - The key point is that state input is to be unchanged; treat state as immutable.
    - Immutable.js mention
  - Array-Delete
    - [_Cue:_]
      - Edit: ./src/array-delete.js
    - [_Cue_:]
      - Execute: ./node_modules/.bin/babel src -d dist
    - [_Cue_:]
      - Execute: node dist/array.js
  - Array-Ducks
    - [_Cue:_]
      - URL: https://github.com/erikras/ducks-modular-redux
    - [_Cue:_]
      - Edit: ./src/ducks/array.js
      - Action Creators
      - Reducers
      - Selectors
    - [_Cue:_]
      - Edit: ./src/array-ducks.js
    - [_Cue_:]
      - Execute: ./node_modules/.bin/babel src -d dist
    - [_Cue_:]
      - Execute: node dist/array-ducks.js
