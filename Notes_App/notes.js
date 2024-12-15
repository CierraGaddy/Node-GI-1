// npm and filesystem Imports
const fs = require("fs");
const chalk = require("chalk");

// This function is to add a new note
const addNote = (title, body) => {
  const notes = loadNotes(); // This Loads notes
  const duplicateNote = notes.find((note) => note.title === title); // Checks for duplicate title

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes); // Saves updated notes
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

// This function removes a note
const removeNote = (title) => {
  const notes = loadNotes(); // Load notes
  const notesToKeep = notes.filter((note) => note.title !== title); // This filters out the note to remove

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep); // This saves remaining notes
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

// This function is to list all notes
const listNotes = () => {
  const notes = loadNotes(); // This is to load notes

  console.log(chalk.inverse("Your notes"));

  notes.forEach((note) => {
    console.log(note.title); // Will display each note's title
  });
};

// This function is to read a specific note
const readNote = (title) => {
  const notes = loadNotes(); // This loads notes
  const note = notes.find((note) => note.title === title); // This finds note by title

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body); // This shows the note content
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

// This function to save notes to a file
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes); // Convert notes to JSON
  fs.writeFileSync("notes.json", dataJSON); // Write to file
};

// This function loads notes from a file
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json"); // Read notes file
    const dataJSON = dataBuffer.toString(); // Will convert data buffer to string
    return JSON.parse(dataJSON); // Parse and return JSON data
  } catch (e) {
    return []; // will return empty array if file doesn't exist or an error occurs
  }
};

// This function will edit an existing note
const editNote = (title, newBody) => {
  const notes = loadNotes(); // Loads notes
  const noteIndex = notes.findIndex((note) => note.title === title); // This find note by title

  if (noteIndex !== -1) {
    notes[noteIndex].body = newBody; // Will update note body
    saveNotes(notes); // Will save updated notes
    console.log(chalk.green.inverse("Note updated!"));
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

//This exports the functions to be accessed by the other files
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
  editNote: editNote,
};
