let ay = Number(prompt("Ayın nömrəsini daxil edin:"));

let fesil;

switch (ay) {
    case 12:
    case 1:
    case 2:
        fesil = "Qış";
        break;
    case 3:
    case 4:
    case 5:
        fesil = "Yaz";
        break;
    case 6:
    case 7:
    case 8:
        fesil = "Yay";
        break;
    case 9:
    case 10:
    case 11:
        fesil = "Payız";
        break;
    default:
        fesil = "Yanlış ay daxil etdiniz!";
}

alert(`Seçdiyiniz ayın fəsli: ${fesil}`);
