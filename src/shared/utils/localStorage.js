export const saveToLocalStorage = (key, value) => {
    return localStorage.setItem(`image-search-${key}`, JSON.stringify(value));
}

export const getFromLocalStorage = (key) => {
    const a = localStorage.getItem(`image-search-${key}`);

    if (a) {
        try {
            return JSON.parse(a);
        } catch (e) {
            return null
        }
    }

    return null
}
