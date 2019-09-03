// IMPORTS

// import Remarkable from 'remarkable';

// EXPORTS

export const $ = (selector, context = document) => {
  return context.querySelector(selector)
}

export const $$ = (selector, context = document) => {
  return Array.from(context.querySelectorAll(selector))
}

export const dateLarge = date => {
  const dateRaw = new Date(date)
  const dateStr = dateRaw.toLocaleDateString("pe-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return dateStr
}

export const cleanHTML = html => {
  let s1 = html.replace(/\n/g, "") //remove breaklines
  let s2 = s1.replace(/<p>(<img.*?)<\/p>/g, "$1") //unwrap img tag
  let s3 = s2.replace(/(<iframe.*<\/iframe>)/g, "<div class='yt'>$1</div>") // wrap video iframe
  return s3
}

// export function createStyleTag(content) {
//   const style = document.createElement('style');
//   style.innerHTML = content;
//   document.head.appendChild(style);
// }

// export function createLinkTag(url) {
//   const link = document.createElement('link');
//   link.href = url;
//   link.rel = 'stylesheet';
//   document.head.appendChild(link);
// }

// // Fisher-Yates (aka Knuth) Shuffle
// export function shuffle(array) {
//   let currentIndex = array.length,
//     temporaryValue,
//     randomIndex;
//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }

// export function upFirst(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// export function stringToArray(str) {
//   return str.replace(/\s/g, '').split(',');
// }

// export function getData(request, fx) {
//   fetch(request)
//     .then(response => response.json())
//     .then(json => fx(json));
// }

// // MARKDOWN

// export const MD = new Remarkable();
// MD.set({
//   html: true,
//   typographer: true,
//   linkify: true,
//   quotes: '“”‘’'
// });
// MD.renderer.rules.footnote_ref = (tokens, idx) => {
//   var n = Number(tokens[idx].id + 1).toString();
//   return '<sup class="footnote-ref">' + n + '</sup>';
// };
// MD.renderer.rules.footnote_anchor = () => '';
