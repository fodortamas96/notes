import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

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
            console.log(`Add note: ${argv.title} ${argv.body}`);
        }
    })
    .command({
        command: 'list',
        description:  'List all notes',
        handler: () => {
            console.log('Notes listed...');
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
            console.log(`Read note: ${argv.title}`);
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
            console.log(`Delete note: ${argv.title}`);
        }
    })
    .parse()