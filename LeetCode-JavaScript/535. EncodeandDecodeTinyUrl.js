/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const urlMap = new Map();

const encode = function (longUrl) {
    const hashUrl = `http://tinyurl.com/${Date.now().toString(36)}`;
    urlMap.set(hashUrl, longUrl);
    return hashUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function (shortUrl) {
    return urlMap.get(shortUrl);
};
console.log(encode('https://leetcode.com/problems/design-tinyurl'));
console.log(decode('http://tinyurl.com/k2o89iip'));


/**
 * Your functions will be called as such:
 * decode(encode(url));
 */