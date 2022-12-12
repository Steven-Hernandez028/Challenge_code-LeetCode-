const uniqueMorseRepresentations = function(words){
    const morse = {
        a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", 
        g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", 
        m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.",
         s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-",
          y: "-.--", z: "--.." 
    }

    const num = new Set(words.map(word => word.split('').map(letter=>morse[letter]).join(''))).size;

    return num;
}