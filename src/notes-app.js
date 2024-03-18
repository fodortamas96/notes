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
    await writeFile(fileName, JSON.stringify(notes), 'utf-8', () => { });
}

export async function ListNotes() {
    await ReadFromFile();
    for (let i = 0; i < notes.length; i++) {
        console.log(notes[i]?.title);
    }
}

export async function ReadNote(note) {
    await ReadFromFile();

    const readNote = notes.filter((element) => element.title === note.title);
    if (readNote.length >= 1) {
        console.log("----------");
        console.log(readNote[0]?.body);
        console.log("----------");
    } else {
        console.log("Can't find note with the given title!");
    }
}

export async function DeleteNote(note) {
    await ReadFromFile();

    const deleteItemIndex = notes.map(element => element.title).indexOf(note.title);
    if (deleteItemIndex >= 0) {
        notes.splice(deleteItemIndex, 1);
        await writeFile(fileName, JSON.stringify(notes), 'utf-8', () => { });
        console.log("Note deleted.");
    } else {
        console.log("Can't find note with the given title!");
    }
}