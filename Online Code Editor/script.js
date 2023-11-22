

const htmlTextarea = document.querySelector('.html-code textarea');
const cssTextarea = document.querySelector('.css-code textarea');
const jsTextarea = document.querySelector('.js-code textarea');
const resultFrame = document.querySelector('#result');

run = () => {
    localStorage.setItem('html_code', htmlTextarea.value);
    localStorage.setItem('css_code', cssTextarea.value);
    localStorage.setItem('js_code', jsTextarea.value);
    resultFrame.contentDocument.body.innerHTML = `<style>${localStorage.getItem('css_code')}</style>` + localStorage.getItem('html_code');
    resultFrame.contentWindow.eval(localStorage.getItem('js_code'));
}

htmlTextarea.onkeyup = () => run();
cssTextarea.onkeyup = () => run();
jsTextarea.onkeyup = () => run();

// Retrieving values from localStorage
const storedHTMLCode = localStorage.getItem('html_code');
const storedCSSCode = localStorage.getItem('css_code');
const storedJSCode = localStorage.getItem('js_code');

// Assigning retrieved values to the textareas if they exist in localStorage
if (storedHTMLCode) {
    htmlTextarea.value = storedHTMLCode;
}
if (storedCSSCode) {
    cssTextarea.value = storedCSSCode;
}
if (storedJSCode) {
    jsTextarea.value = storedJSCode;
}
