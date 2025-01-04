console.log("start");
var state = { parity : 0 }
var field = [0,0,0,0,0,0,0,0,0]

function getCircle() {
    return '<svg width="110" height="110">' +
    '<circle cx="53" cy="53" r="40" stroke="black" stroke-width="25" fill="yellow" /></svg>'
}
function getCross() {
    return '<div style="display: inline-block;"><svg width="102" height="102">' +
    '<polygon points="20,0 50,30 80,0 100,20 70,50 100,80 80,100 50,70 20,100 0,80 30,50 0,20"' +
    'style="fill:black; stroke:black; stroke-width:1; fill-rule:evenodd;" /></svg></div>'
}

function win(n1, n2, n3, butt) {
    document.getElementById(n1).className = butt
    document.getElementById(n2).className = butt
    document.getElementById(n3).className = butt
    if(butt == "win") {
        setTimeout(function() {
            win(n1, n2, n3, "normal")
            cleaner()
        }, 1000)
    }
}
function cleaner() {
    state.parity = 0
    for (var j = 0; j < 9; ++j) {
        field[j] = 0
        document.getElementById(j).innerHTML = ""
    }
}
function checkEqualPositiveRow(matrix, rows, cols, row) {
    for (var i = 0; i < cols - 1; ++i)
        if (matrix[row * cols + i] != matrix[row * cols + i + 1])
            return 0
    if (matrix[row * cols] != 0) {
        win(row * rows, row * rows + 1, row * rows + 2, "win")
        return 1
    }
    else
      return 0
}
function checkEqualPositiveCol(matrix, rows, cols, col) {
    for (var i = 0; i < rows - 1; ++i)
        if (matrix[i * cols + col] != matrix[(i+1) * cols + col])
            return 0
    if (matrix[col] != 0) {
        win(col, cols + col, cols * 2 + col, "win")
        return 1
    }
    else
      return 0
}
function checkEqualPositiveDiagonal(matrix, n, back) {
    var b = back ? (n-1) : 0
    var k = back ? -1 : 1
    for (var i = 0; i<n-1; ++i)
        if (matrix[i * n + (b+k*i)] != matrix[(i+1) * n + b+k*(i+1)])
            return 0
    if (matrix[b] != 0) {
        win(b, 4, 8 - b, "win")
        return 1
    }
    else
      return 0
}
function main(x) {
    if (field[x] != 0) {
      console.log("HasComeToMain")
      return
    }
    if(state.parity % 2 == 1) {
        console.log("The second player move")
        field[x] = 2
        document.getElementById(x).innerHTML = getCircle()
    }
    else {
        console.log("The first player move")
        field[x] = 1
        document.getElementById(x).innerHTML = getCross()
    }
    ++state.parity
    console.log(state.parity);
    for(var i = 0; i < 3; ++i) {
        if((checkEqualPositiveRow(field, 3, 3, i) != 0) || (checkEqualPositiveCol(field, 3, 3, i) != 0) || (checkEqualPositiveDiagonal(field, 3, i) != 0)) {
          return
        }
    }
    if (state.parity > 8) {
        alert("dead heat!")
        cleaner()
    }
}
/*
function myclick() {
    document.getElementById("yyy").innerHTML = "yyyyyy"
}
function go() {
    alert("�� ��������� ���������� �����")
    alert(getAttribute(style))
}
function better() {
    var e = document.getElementById("footer")
    e.innerHTML = "Made in USA"
    e.classList.toggle("style1")
    e.classList.toggle("style2")
}
function del() {
    document.getElementById("bad").remove()
}
*/
