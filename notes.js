import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
    .command({
        command: 'add',
        description: 'add new note',
        builder: {
            title: {
                alias: 't',
                description: 'note title',
                demand: true,
                type: 'string'
            },
            body: {
                alias: 'b',
                description: 'note body',
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
        description:  'list all notes by title',
        handler: () => {
            console.log('Notes listed...');
        }
    })
    .parse()