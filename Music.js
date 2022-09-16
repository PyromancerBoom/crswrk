import {make_sound, play} from "sound";

// Notes
const wave = t = (f) => math_sin(2*math_PI*f*t);

const freqs = list(261.63, 440, 329.63, 392.00);

const C4 = t => math_sin(2 * math_PI * 261.63 * t);
const A4 = t => math_sin(2 * math_PI * 440 * t);
const E4 = t => math_sin(2 * math_PI * 329.63 * t);
const G4 = t => math_sin(2 * math_PI * 392.00 * t);
const D4 = t => math_sin(2 * math_PI * 293.66 * t);

// Chords
const C_maj_wave = t => 1/3 * C4(t) + 1/3*E4(t) + 1/3*G4(t);
const C_maj = make_sound(C_maj_wave, 1);

play(C_maj);