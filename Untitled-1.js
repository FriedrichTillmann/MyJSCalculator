(function() {
    
    var el = function(element) {
        if (element.charAt(0) === "#") {
            return document.querySelector(element);
        }
        return document.querySelectorAll(element);
    };

    var viewer = el("#viewer"), //туда выводится выбранное число и результат операции
    equals = el("#equals"),
    num = el(".num"), //сюда прилетает число
    ops = el(".ops"), //сюда прилетает операция
    curNum = "", //сюда пишем первое выбранное число
    oldNum = "", //сюда пишем следуещее выбранное число
    resultNum, //сюда пишем результат выполнения операции
    operator; //сюда пишем операцию для switch

    var setNum = function() { //запоминаем выбранное число
        if(resultNum) {
            curNum = this.getAttribute("data-num"); 
            resultNum = "";
        }
        else {
            curNum += this.getAttribute("data-num");
        }

        viewer.innerHTML = curNum; //показываем выбранное число в поле viewer
    };

    var moveNum = function() { //запоминаем выбранную операцию
        oldNum = curNum;
        curNum = "";
        operator = this.getAttribute("data-ops");
    }

    var displayNum = function() {  //узнаем операцию и совершаем вычисления
        curNum = parseFloat(curNum); //преобразуем в число
        oldNum = parseFloat(oldNum);

        switch (operator) {  //операторы и операция с числами
            case "plus" :
            resultNum = oldNum + curNum; //curNum последнее введенное число
            break;

            case "minus" :
            resultNum = oldNum - curNum;
            break;

            case "times" :
            resultNum = oldNum * curNum;
            break;

            case "divide":
            resultNum = oldNum / curNum;
            break;
        
        default: resultNum = curNum;
        }

        viewer.innerHTML = resultNum; //толкаем в поле viewer результат вычислений
        //equals.setAttribute("data-result", resultNum); //работет без этой строки почему не знаю

        oldNum = 0;
        curNum = resultNum;
    }

    for (var i = 0, l = num.length; i < l; i++) { //делаем так чтоб при нажатии прилетало число 
        num[i].onclick = setNum;
    }
    for (var i = 0, l = ops.length; i < l; i++) { //делаем так чтоб при нажатии приелетало название операции
        ops[i].onclick = moveNum;
    }
    
    equals.onclick = displayNum; //при нажатии на = выводим результат displayNum

}());