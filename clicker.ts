import { mouseClick } from 'robotjs'

async function sleep(ms: number) {
    return new Promise(res => setTimeout(res, ms))
}

async function main() {
    while (true) {
        mouseClick()
        await sleep(100)
    }
}

main()
