import { writeFile, readFile } from 'node:fs/promises'

let notes = [];
const fileName = 'notes.txt';

async function ReadFromFile() {
    let fileContent = "";
    try {
        fileContent = await readFile(fileName, 'utf8');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await writeFile(fileName, '', 'utf-8', () => { });
            fileContent = await readFile(fileName, 'utf8');
        }
    }
    if (fileContent === "") {
        notes === "";
    } else {
        notes = JSON.parse(fileContent);
    }
    
}

export async function AddNote(note) {
    await ReadFromFile();
    notes.push(note);
    console.log(notes);
    await writeFile(fileName, JSON.stringify(notes), 'utf-8', () => { });
}

export async function ListNotes() {
    await ReadFromFile();
    for (let i = 0; i < notes.length; i++) {
        console.log(notes[i]?.title);
    }
}