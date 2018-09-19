(function() {
    for (var i = 0, l = nums.length; i < l; i++) {
        nums[i].onclick = setNum;
    }
    for (var i = 0, l = ops.length; i < l; i++) {
        ops[i].onclick = moveNum;
    
    }

    equals.onclick = displayNum;
    
    var el = function(element) {
        if (element.charAt(0) === "#") {
            return document.querySelector(element);
        }
        return document.querySelectorAll(element);
    };

    var viewer = el("#viewer"),
    equals = el("#equals"),
    num = el(".num"),
    ops = el(".ops"),
    curNum = "",
    oldNum = "",
    resultNum,
    operator;

    var setNum = function() {
        if(resultNum) {
            curNum = this.getAttribute("data-num");
            resultNum = "";
        }
        else {
            curNum += this.getAttribute("data-num");
        }
        viewer.innerHTML = curNum;
    };

}());