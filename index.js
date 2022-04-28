// 1  array for referance = const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (driver, name) => {
    let result = driver.filter((element) => element.toLowerCase() === name.toLowerCase() );
    return result
}
    //return driver.toLowerCase().indexOf(query.toLowerCase()) !== -1


function fuzzyMatch (drivers, string){
    return drivers.filter((element) => element.charAt(0) === string.charAt(0))
}
    function matchName( drivers, cat) {
        return drivers.filter((element) => element.name === cat)
    }


  