if (process.argv[2] === 'add') {
    return console.log("Resposta: " + (Number(process.argv[3]) + Number(process.argv[4])))
} else if (process.argv[2] === 'sub') {
    return console.log("Resposta: " + (Number(process.argv[3]) - Number(process.argv[4])))
} else if (process.argv[2] === 'mult') {
    return console.log("Resposta: " + Number(process.argv[3]) * Number(process.argv[4]))
} else if (process.argv[2] === 'div') {
    return console.log("Resposta: " + (Number(process.argv[3])/Number(process.argv[4])))
}

