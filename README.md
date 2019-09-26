# react-redux-taskboard
Task manager build in React+Redux+MaterialUI

## Requirement
- An task dashboard that enables vertically nested Tasks as indented bulleted lists.
- A Task can contain text (as the title) and nested Tasks.
- Each Task has its own URL/route that you can navigate into.
- Ability to cross-link/replicate Tasks (where a Task can be nested under multiple Tasks and updated synchronously).
- Ability to store history (to undo/redo) and persist the data in the browser's localStorage.

## Advanced
- search
- The basic premise is pretty simple, but as the functionality expands, your solution ideally would be able to abstract away a lot of complexity! Think about it this way -- ultimately, the goal is to build a dense (rather than sparse like the Internet) graph of knowledge, where every object is related in some way to another.
- Additionally, every modification should be in theory recorded and saved in a commutative way such that we can enable real-time collaboration at every level. (Note: you don't need to implement this fully, but it's worth thinking about.)
