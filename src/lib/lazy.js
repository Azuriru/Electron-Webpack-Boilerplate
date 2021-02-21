const queryEl = (el) => {
    return document.querySelector(el);
}

export const queryAll = (el) => {
    return Array.from(document.querySelectorAll(el));
}

export default queryEl;