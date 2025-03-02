var isMatch = function(s, p) {
    if (s.match( `^${p}$` )) return true
	else return false
};




console.log( isMatch('aa', 'a') )
console.log( isMatch('aa', 'a*') )
console.log( isMatch('aa', '.*') )



