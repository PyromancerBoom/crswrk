import {make_sound, consecutively, play, cello, piano, voilin, letter_name_to_midi_note, midi_note_to_frequency} from "sound";

function playInstrument(letterNote, instrument, duration){
    const midi_note = letter_name_to_midi_note(letterNote);
    return instrument(midi_note, duration);
}

const notes = list("C4", "E4", "G4");

function convertToSound(note){
    return midi_note_to_frequency(letter_name_to_midi_note(note));
}

function playSong(listOfNotes, instrument, duration){
    return consecutively(map( t => 
        playInstrument(t, instrument, duration)
        , listOfNotes));
}

play(playSong(notes, piano, 1/2));
//play(C_maj);
play(playInstrument("A4", piano, 1));

// Notes
// const wave = (f) => math_sin(2*math_PI*f);

// const freqs = list(261.63, 440, 329.63, 392.00);

// //const C4 = t => math_sin(2 * math_PI * 261.63 * t);
// const A4 = t => math_sin(2 * math_PI * 440 * t);
// const E4 = t => math_sin(2 * math_PI * 329.63 * t);
// const G4 = t => math_sin(2 * math_PI * 392.00 * t);
// const D4 = t => math_sin(2 * math_PI * 293.66 * t);

// // Chords
// const C_maj_wave = t => 1/3 * C4(t) + 1/3*E4(t) + 1/3*G4(t);
// const C_maj = make_sound(C_maj_wave, 1);

// function maps_freq_to_wave(frequency){
//     return (t) => math_sin(2 * math_PI * frequency * t);
// }

// const C4 = maps_freq_to_wave(261.43);

// display(C4);
// play(C_maj);
// play(make_sound(C4, 1));