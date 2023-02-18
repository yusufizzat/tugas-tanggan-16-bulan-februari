for (let x = 1; x <= 8; x+=2) {
    for (let y = 1; y <= 17; y+=2) {
        if (x == y || x + y == 18) {
            document.write(x);
        }else if (x >= y || x + y >= 17) {
            document.write(" a &nbsp");
        }else {
            document.write("- &nbsp ");
        }
    }
    document.write("<br>");
}
for (let x = 9; x <= 17; x+=2) {
    for (let y = 1; y <= 17; y+=2) {
        if (x == y || x + y == 18) {
            document.write(x);
        }else if (x <= y || x + y <= 17) {
            document.write(" a  &nbsp");
        }else {
            document.write("- &nbsp ");
        }
    }
    document.write("<br>");
}

