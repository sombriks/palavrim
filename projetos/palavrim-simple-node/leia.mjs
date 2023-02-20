import readline from "readline"

export const leia = async (message) => {
    console.log()
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.question(message + "\n", res => {
            resolve(res)
            rl.close()
        })
    })
}