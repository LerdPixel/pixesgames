var n = 0, giveClick = 1, sec = 1000, flag1 = 0, giveInSec = 0, percent = 0, mult = 1, cost9 = 100, cost10 = 100
var xs = [[1, 100, "cost1", 100], [5, 1000, "cost3", 300], [20, 4500, "cost4", 700], [100, 30000, "cost5", 3000], [500, 200000, "cost8", 10000]]
var xt = [[1, 250, "cost2", 150], [10, 2000, "cost6", 400], [100, 10000, "cost7", 1000], [1000, 100000, "cost12", 6000]]
var cost11 = [1250, 125]
$(function() {
    $('#demo').text(n)
    $('#cost1').text(xs[0][1])
    $('#cost3').text(xs[1][1])
    $('#cost4').text(xs[2][1])
    $('#cost5').text(xs[3][1])
    $('#cost8').text(xs[4][1])
    $('#cost2').text(xt[0][1])
    $('#cost6').text(xt[1][1])
    $('#cost7').text(xt[2][1])
    $('#cost12').text(xt[3][1])
})
function addd(giveClick) {
    var rand = Math.floor(Math.random() * 100)
    if (rand < percent)
        n += giveClick * mult
    else
        n += giveClick
    document.getElementById("demo").innerHTML=n
}
function stronger(plusik) {
    var r = xs.find(function(x) {return x[0] == plusik})
    if(n >= r[1]) {
        giveClick += plusik
        n -= r[1]
        r[1] += r[3]
        document.getElementById("demo").innerHTML=n
        document.getElementById(r[2]).innerHTML=r[1]
    }
}
function timer(timusik) {
    var t = xt.find(function(x) {return x[0] == timusik})
    if (n >= t[1]) {
        n -= t[1]
        t[1] += t[3]
        document.getElementById(t[2]).innerHTML=t[1]
        giveInSec += t[0]
        if (flag1 == 0) {
            plus()
            ++flag1
        }
    }
}
function plus() {
    n += giveInSec
    document.getElementById("demo").innerHTML=n
    setTimeout(plus, sec)
}
function plusf(addent) {
    if (n >= cost9) {
        n -= cost9
        document.getElementById("demo").innerHTML=n
        cost9 += 100
        document.getElementById("cost9").innerHTML=cost9
        percent += addent
    }
}
function plust(addent) {
    if (n >= cost10) {
        n -= cost10
        document.getElementById("demo").innerHTML=n
        cost10 += 100
        document.getElementById("cost10").innerHTML=cost10
        mult += addent
    }
}
/*function fall(coin, position) {
    setTimeout(function () {
        coin.style.top = position + "%"
        fall(coin, position + 5)
    }, 1000)
}*/
function goldRain() {
    if (n >= cost11[0]) {
        var part = 0
        n -= cost11[0]
        cost11[0] *= 2
        cost11[1] *= 2
        document.getElementById("demo").innerHTML=n
        var circles = 10
        var coins = []
        var timerCoin = 0
        for (var j = 0; j < circles; ++j) {
            var coin = document.createElement("div")
            coin.style.height = '60px'
            coin.style.width = '60px'
            coin.style.backgroundColor = 'gold'
            coin.style.position = 'absolute'
            coin.style.top = '0%'
            coin.style.borderRadius = '50%'
            coin.style.borderStyle = 'double'
            coin.style.borderWidth = '7px'
            coin.style.borderColor = '#ffa500'
            coin.style.display = "table-cell"
            coin.style.verticalAlign = "middle"
            coin.style.color = '#8b0000'
            coin.style.fontSize = '18px'
            coin.style.fontWeight = '800'
            coin.innerHTML = cost11[1]

            coin.style.textAlign = 'center'
            if (j % 2 == 0)
                coin.style.left = '25%'
            else
                coin.style.left = '75%'
            coins.push(coin)
       //     fall(coin, 0)
            document.getElementById("yy").appendChild(coin)
        }
        toFall()
        function toFall() {
            fall(coins[timerCoin], 0)
            ++timerCoin
            if (timerCoin < circles)
                setTimeout(toFall, 800)
        }
        function fall(boin, position) {
            setTimeout(function () {
                boin.style.top = position + "%"
                fall(boin, position + 1)
                if (position >= 70)
                    boin.remove()
            }, 30)
        }
        $("div").click(function() {
            var el = $(this)
            el.remove()
            n += cost11[1]
            document.getElementById("demo").innerHTML=n
        })
    }
}
$('#code').keyup(function() {
    var vAlue = $(this).val()
    if (vAlue == "give please") {
        n += 100
        $('#demo').text(n)
    }
    if (vAlue == "please give me") {
        n += 1000
        $('#demo').text(n)
    }
    if (vAlue == "pro pix's cheat c") {
        n += 5000
        $('#demo').text(n)
    }
    if (vAlue == "pro pix's cheat b") {
        n += 10000
        $('#demo').text(n)
    }
    if (vAlue == "pro pix's cheat a") {
        n += 50000
        $('#demo').text(n)
    }
    if (vAlue == "cheat 13r18b") {
        n += 100000
        $('#demo').text(n)
    }
    if (vAlue == "pix's cheat aff55") {
        n += 500000
        $('#demo').text(n)
    }
    if (vAlue == "give super puper pix's cheat!") {
        n += 1000000
        $('#demo').text(n)
    }
})
/*
*/
