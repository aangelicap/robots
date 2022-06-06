const generateMars = (upperLimit, rightLimit) => {
    //verify limits to coordinate
    if (upperLimit > 50 || rightLimit > 50) throw Error('The maximum value for any coordinate is 50')

    const map = {};
    for (let i = 0; i <= rightLimit; i++) {
        map[i] = {}
        for (let j = 0; j <= upperLimit; j++) {
            map[i][j] = ''
        }
    }
    console.log('>>>>> Planet Mars <<<<<<')
    console.log(map)
    return map
}

export {generateMars}
