//npm imports
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

//Uses Yargs to simplify our command line arguments
yargs.version("1.1.0");

// This is the add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// This is the remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// This is the list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes();
  },
});

// This is the read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// This is the edit command
yargs.command({
  command: "edit",
  describe: "Edit a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    newBody: {
      describe: "New body text",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.editNote(argv.title, argv.newBody);
  },
});

yargs.parse();

//This exports the objects to be accessed by the other files
module.exports = {};
