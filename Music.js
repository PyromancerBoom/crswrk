

// Chords
const C_maj_chord_wave =
    t => 0.33 * math_sin(2 * math_PI * 261.63 * t) + // C4
    0.33 * math_sin(2 * math_PI * 329.63 * t) + // E4
    0.33 * math_sin(2 * math_PI * 392.00 * t); // G4
    
const C_maj_chord = make_sound(C_maj_chord_wave, 1.5);