/**
 * Creates a random alphanumerica string of num length
 *
 * @author Shane A. Stillwell
 * @example
 * var randomestring = randomeGenerator(20);
 *
 * @param {Number} num Length of the string you desire
 * @param {Boolean} includeNumeric Toggle to include numbers or not
 * 
 * @return {String}
 */
exports.randomGenerator = function(num, includeNumeric) {
    var text = "",
        possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        possibleNums = '0123456789';

    // Set defaults
    num = num || 20;
    includeNumeric = typeof includeNumeric !== 'undefined' ? includeNumeric : 'true';

    // Add numbers onto the possibles if desired
    if (includeNumeric) {
        possible = possible + possibleNums;
    }

    for( var i=0; i < num; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

/**
 * Get's the extension of a file purely by looking the ending. To get this work
 * with fileuploads you need to enable bodyParse({ keepExtensions:true }) in
 * Express
 *
 * @author Shane A. Stillwell
 *
 * @param {String} filename
 *
 * @return {String} The extension
 */
exports.getExtension = function(filename) {
    var i = filename.lastIndexOf('.');
    return (i < 0) ? '' : filename.substr(i);
}

