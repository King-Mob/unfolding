const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const t = urlParams.get('t');

/*
const unencodedText = atob(t)
*/

const text = document.getElementById("text");
text.innerHTML = t;