var state = { parity : 0 }
var rows = 15, cols = 15 //rows & cols
var field = Array.from({length : (rows * cols)}).map(x => 0)
function main(x) {
    if (field[x] != 0)
        return
    if(state.parity % 2 == 1) {
//        console.log("The second player move")
        document.getElementById("228").innerHtml = "state parity % 2"
        field[x] = 2
        document.getElementById(x).innerHTML = getCircle()
    }
    else {
//        console.log("The first player move")
        document.getElementById("228").innerHtml = "1 move"
        field[x] = 1
        document.getElementById(x).innerHTML = getCross()
    }
    for(var i = 0; i < rows; ++i) {
        if((checkEqualPositiveRow(i) != 0) || (checkEqualPositiveCol(i) != 0) || (checkEqualPositiveDiagonal(i) != 0)) {
            if(state.parity % 2 == 1)
                alert("Impossible! O win.\n")
            else
                alert("X win!\n")
            cleaner()
            return
        }
    }
    ++state.parity
    if (state.parity >= rows * cols) {
        alert("draw!")
        cleaner()
    }
}
function checkEqualPositiveRow(row) {
    var ch5 = 0
    for (var i = 0; i < cols - 1; ++i) {
        if (field[row * cols + i] == field[row * cols + i + 1])
            ++ch5
        else
            ch5 = 0
        if ((ch5 == 4) && (field[row * cols + i] != 0))
            return 1
    }
    return 0
}
function checkEqualPositiveCol(col) {
    var ch6 = 0
    for (var i = 0; i < cols - 1; ++i) {
        if (field[i * cols + col] == field[(i+1) * cols + col])
            ++ch6
        else
            ch6 = 0
        if ((ch6 == 4) && (field[i * cols + col] != 0))
            return 1
    }
    return 0
}
function checkEqualPositiveDiagonal(j) {
    var ch1 = 0, ch2 = 0, ch3 = 0, ch4 = 0
    for (var i = 0; i < rows - j - 1; ++i) {
        if (field[(i + j) * rows + i] == field[(i + j + 1) * rows + i + 1])
            ++ch1
        else
            ch1 = 0
        if ((ch1 == 4) && (field[(i + j) * rows + i] != 0))
            return 1
        if (field[i * rows + i + j] == field[(i + 1) * rows + i + j + 1])
            ++ch2
        else
            ch2 = 0
        if ((ch2 == 4) && (field[i * rows + i + j] != 0))
            return 1
    }
    for (var i = 1; i < rows - j - 1; ++i) {
        if (field[i * (rows - 1) + rows * j] == field[(i + 1) * (rows - 1) + rows * j])
            ++ch3
        else
            ch3 = 0
        if ((ch3 == 4) && (field[i * (rows - 1) + rows * j] != 0))
            return 1
        if (field[i * (rows - 1) - j] == field[(i + 1) * (rows - 1) - j])
            ++ch4
        else
            ch4 = 0
        if ((ch4 == 4) && (field[i * (rows - 1) - j] != 0))
            return 1
    }
    return 0
}
function getCircle() {
    return '<svg class="circle" viewBox="0 0 20 20">' +
    '<circle cx="10" cy="10" r="8" /></svg>'
}
function getCross() {
    return '<div class="squarediv"><svg class="square" viewBox="0 0 20 20">' +
    '<polygon points="4,0 10,6 16,0 20,4 14,10 20,16 16,20 10,14 4,20 0,16 6,10 0,4"' +
    '/></svg></div>'
}
function cleaner() {
    state.parity = 0
    for (var j = 0; j < rows * cols; ++j) {
        field[j] = 0
        document.getElementById(j).innerHTML = ""
    }
}
