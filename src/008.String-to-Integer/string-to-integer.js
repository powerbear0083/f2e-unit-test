/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
    if( Number(str) > 0 ) {
        return Number(str)
    }
    if( Number(str) < 0 ) {
        return Number(str)
    }
};
export default myAtoi;