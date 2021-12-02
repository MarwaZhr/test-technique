/**
 * utils to detect safari browser
 
 */
 export const isSafariBrowser = function () {
    let sUsrAg = navigator.userAgent;
    if (sUsrAg.indexOf("Safari") !== -1 && sUsrAg.indexOf("Chrome") === -1)
        return true;
    return false;
};

/**
 * utils to detect Edge browser
 */
export const isEdgeBrowser = function () {
    let sUsrAg = navigator.userAgent;
    if (sUsrAg.indexOf("Edge") > -1) return true;
    return false;
};