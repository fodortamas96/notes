import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { AddNote, DeleteNote, ListNotes, ReadNote } from './src/notes-app.js';
import { Note } from './src/note.js'

yargs(hideBin(process.argv))
    .command({
        command: 'add',
        description: 'Add new note',
        builder: {
            title: {
                alias: 't',
                description: 'Note title',
                demand: true,
                type: 'string'
            },
            body: {
                alias: 'b',
                description: 'Note body',
                demand: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            AddNote(new Note(argv.title, argv.body));
        }
    })
    .command({
        command: 'list',
        description:  'List all notes',
        handler: () => {
            ListNotes();
        }
    })
    .command({
        command: 'read',
        description: 'Read one note by title',
        builder: {
            title: {
                alias: 't',
                description: 'note title',
                demand: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            ReadNote(argv);
        }
    })
    .command({
        command: 'delete',
        description: 'Delete one note by title',
        builder: {
            title: {
                alias: 't',
                description: 'note title',
                demand: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            DeleteNote(argv);
        }
    })
    .parse()