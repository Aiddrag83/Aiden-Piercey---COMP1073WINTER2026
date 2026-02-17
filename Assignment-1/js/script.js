"use strict";

/*
    Word banks for each part of the story
*/
const who = ["The dragon", "A robot", "The pirate", "A princess", "The alien"];
const what = ["found", "lost", "built", "destroyed", "discovered"];
const where = ["in the forest", "on the moon", "under the sea", "at school", "in a castle"];
const when = ["yesterday", "last night", "this morning", "a long time ago", "right now"];
const why = ["for fun", "by accident", "to save the day", "because it was bored", "for no reason"];

/*
    Index trackers
*/
let indexes = {
    who: 0,
    what: 0,
    where: 0,
    when: 0,
    why: 0
};

/*
    Button references
*/
const whoBtn = document.getElementById("whoBtn");
const whatBtn = document.getElementById("whatBtn");
const whereBtn = document.getElementById("whereBtn");
const whenBtn = document.getElementById("whenBtn");
const whyBtn = document.getElementById("whyBtn");

const output = document.getElementById("storyOutput");

/*
    Cycling function
*/
function cycleWord(category, words, button) {
    indexes[category]++;
    if (indexes[category] >= words.length) {
        indexes[category] = 0;
    }
    button.textContent = words[indexes[category]];
}

/*
    Button events
*/
whoBtn.addEventListener("click", () => cycleWord("who", who, whoBtn));
whatBtn.addEventListener("click", () => cycleWord("what", what, whatBtn));
whereBtn.addEventListener("click", () => cycleWord("where", where, whereBtn));
whenBtn.addEventListener("click", () => cycleWord("when", when, whenBtn));
whyBtn.addEventListener("click", () => cycleWord("why", why, whyBtn));

/*
    Tell story
*/
document.getElementById("tellStoryBtn").addEventListener("click", () => {
    const story = `${who[indexes.who]} ${what[indexes.what]} something ${where[indexes.where]} ${when[indexes.when]} ${why[indexes.why]}.`;
    output.textContent = story;
});

/*
    Random story
*/
document.getElementById("randomStoryBtn").addEventListener("click", () => {
    indexes.who = Math.floor(Math.random() * who.length);
    indexes.what = Math.floor(Math.random() * what.length);
    indexes.where = Math.floor(Math.random() * where.length);
    indexes.when = Math.floor(Math.random() * when.length);
    indexes.why = Math.floor(Math.random() * why.length);

    whoBtn.textContent = who[indexes.who];
    whatBtn.textContent = what[indexes.what];
    whereBtn.textContent = where[indexes.where];
    whenBtn.textContent = when[indexes.when];
    whyBtn.textContent = why[indexes.why];

    output.textContent = `${who[indexes.who]} ${what[indexes.what]} something ${where[indexes.where]} ${when[indexes.when]} ${why[indexes.why]}.`;
});

/*
    Reset
*/
document.getElementById("resetBtn").addEventListener("click", () => {
    indexes = { who: 0, what: 0, where: 0, when: 0, why: 0 };

    whoBtn.textContent = "Who?";
    whatBtn.textContent = "Did What?";
    whereBtn.textContent = "Where?";
    whenBtn.textContent = "When?";
    whyBtn.textContent = "Why?";

    output.textContent = "";
});
