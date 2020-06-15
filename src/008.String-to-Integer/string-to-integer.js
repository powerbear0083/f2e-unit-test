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
    if(  isNaN( Number(str) )  ) {
        let result
        str.split(' ').forEach( (element, index) => {

            if (index === 0 && Number(element) ) {
                result = Number(element)
            }
            if ( index === 0 && isNaN( Number(element) )  ) {
                result = 0
            }
        });
        return result
    }
};
export default myAtoi;