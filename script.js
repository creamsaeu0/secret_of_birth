function hamsu() {
    var inputNumber = parseInt(document.getElementById("innum").value); //텍스트 박스에서 값을 가져옵니다. (입력)
    var outputText = document.getElementById("outtx"); //<p id="outtx"></p>로 결과 값을 보냅니다. (출력)

    if (isNaN(inputNumber)) {
        outputText.innerHTML = "응애 나 초전도체 아기";
    }
    else {
        if (inputNumber >= 0 && inputNumber <= 8) {
            eegi = "서울특별시";
        } else if (inputNumber >= 9 && inputNumber <= 12) {
            eegi = "부산광역시";
        } else if (inputNumber >= 13 && inputNumber <= 15) {
            eegi = "인천광역시";
        } else if (inputNumber >= 16 && inputNumber <= 25) {
            eegi = "경기도";
        } else if (inputNumber >= 26 && inputNumber <= 34) {
            eegi = "강원도";
        } else if (inputNumber >= 35 && inputNumber <= 39) {
            eegi = "충청북도";
        } else if (inputNumber >= 40 && inputNumber <= 41) {
            eegi = "대전광역시";
        } else if ((inputNumber >= 42 && inputNumber <= 43) || (inputNumber >= 45 && inputNumber <= 47)) {
            eegi = "충청남도";
        } else if (inputNumber == 44 || inputNumber == 96) {
            eegi = "세종특별자치시";
        } else if (inputNumber >= 48 && inputNumber <= 54) {
            eegi = "전라북도ㅠㅠ";
        } else if (inputNumber >= 55 && inputNumber <= 64) {
            eegi = "전라남도ㅠㅠ";
        } else if (inputNumber == 55 || inputNumber == 56 || inputNumber == 65 || inputNumber == 66) {
            eegi = "광주광역시ㅠㅠ";
        } else if (inputNumber >= 67 && inputNumber <= 69) {
            eegi = "대구광역시";
        } else if (inputNumber >= 70 && inputNumber <= 81) {
            eegi = "경상북도";
        } else if ((inputNumber >= 82 && inputNumber <= 84) || (inputNumber >= 86 && inputNumber <= 91)) {
            eegi = "경상남도";
        } else if (inputNumber == 85 || inputNumber == 90) {
            eegi = "울산광역시";
        } else if (inputNumber >= 92 && inputNumber <= 95) {
            eegi = "제주특별자치도";
        } else {
            outputText.innerHTML = "으앙 입력값이 잘못됐어요!";
            return;
        }

        outputText.innerHTML = "응애 나 " + eegi + " 아기";
    }
}