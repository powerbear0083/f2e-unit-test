/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
    const isNumber = Number(str) 
    const maxValue = Math.pow(2, 32)
    if( isNumber > 0 ) {
        if( Number(str) > maxValue ) {
            return Math.pow(2, 31)
        }
        return Number(str)
    }
    if( isNumber < 0 ) {
        if( Number(str) * -1 > maxValue ) {
            return Math.pow(-2, 31)
        }
        return Number(str)
    }
    if(  isNaN( isNumber )  ) {
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