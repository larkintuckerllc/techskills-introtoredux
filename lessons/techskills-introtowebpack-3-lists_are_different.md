----------------------------------

filename: techskills-introtoredux-2-lists_are_different

title: Lists are Different

subtitle: Intro to Redux

----------------------------------

Outline:

  - [_Question_:]
    - We have seen how to use primatives (integers) and arrays with Redux, what else is there?
      - Lists; Think of a database table.
      - Key features are want to both return the whole list, but also find an individual one.
      - Also introduces a need to update.
      - Also including fetch (read)
  - List
    - Store with tree structure: byId and Ids
    - [_Cue:_]
      - Edit './lessons/list.json'
    - [_Cue:_]
      - Edit: ./src/ducks/list.js
      - Action Creators
        - Fetch
        - Add
        - Update
        - Remove
      - Reducers
        - Fetch
        - Add
        - Update
        - Remove
        - Mention: normalizer
      - Selectors
       - Singular
       - Plural
    - [_Cue:_]
      - Edit: ./src/list-ducks.js
    - [_Cue_:]
      - Execute: ./node_modules/.bin/babel src -d dist
    - [_Cue_:]
      - Execute: node dist/list-ducks.js
