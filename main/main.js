module.exports = function main(num) {
    let topPart = ['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.']
    let centerPart = ['|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|']
    let bottomPart = ['|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|']
    let topRes = []
    let centerRes = []
    let bottomRes = []
    num.split('').map(num => {
        topRes.push(topPart[Number(num)])
        centerRes.push(centerPart[Number(num)])
        bottomRes.push(bottomPart[Number(num)])
    })
    return `${topRes.join(' ')}\n${centerRes.join(' ')}\n${bottomRes.join(' ')}\n`;
}