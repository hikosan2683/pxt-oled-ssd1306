function num (数値: number) {
    if (数値 == 8) {
        MuseOLED.drawRectangle(
        0,
        2,
        15,
        12
        )
        MuseOLED.drawRectangle(
        0,
        2,
        15,
        6
        )
    }
}
function tempnum (桁: number, 数: number) {
    if (桁 == 0) {
        MuseOLED.drawRectangle(
        64,
        10,
        66,
        12
        )
        MuseOLED.drawRectangle(
        100,
        2,
        102,
        4
        )
        MuseOLED.drawLine(
        105,
        6,
        120,
        6
        )
        MuseOLED.drawLine(
        105,
        12,
        120,
        12
        )
        MuseOLED.drawLine(
        105,
        6,
        105,
        12
        )
    } else {
    	
    }
}
BMP280.Address(BMP280_I2C_ADDRESS.ADDR_0x76)
BMP280.PowerOn()
MuseOLED.init()
tempnum(0, 1)
num(8)
