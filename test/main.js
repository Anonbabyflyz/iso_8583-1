'use strict'

let isoPack = require('../lib/8583');
let { validateFields,getLenType,getHex } = require('../lib/tools');

let test1 = {
    "0": "0100",
    "2": "5413330",
    "3": "000000",
    "4": "000000002000",
    "7": "0210160607",
    "11": "148893",
    "12": "160607",
    "13": "0210",
    "14": "2512",
    "18": "4111",
    "22": "141",
    "23": "003",
    "25": "00",
    "26": "12",
    "35": "5413330089020011D2512601079360805F",
    "41": "31327676",
    "42": "4D4F424954494C4",
    "43": "4D6F6269746C6C204D65726368616E7420312030",
    "49": "404",
    "45": "0303030204E4149524F4249204B452dataString04B45",
    "123": "09010001000105010103040C010001"
}

let test2 = {}

let iso1 = new isoPack(test1)

let x = iso1.getBufferMessage(iso1.getBmpPack())
console.log(x)
console.log(parseInt(getHex(x.slice(0, 1).toString('hex')), 2))
console.log(parseInt(getHex(x.slice(1, 2).toString('hex')), 2))
let thisMti = x.slice(2, 6).toString()
let thisBitmaps = getHex(x.slice(6, 22).toString('hex'))
let thisData = x.slice(22, x.length).toString()

let y = new isoPack().getIsoJSON(thisBitmaps,thisData,thisMti)

console.log(y)
