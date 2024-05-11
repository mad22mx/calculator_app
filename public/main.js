var evaluate = ""

document.getElementById("calc-screen").textContent = evaluate.length > 0? evaluate:'0';

function btnClicked(btnValue) {
    switch(btnValue) {
        case 'clear':
            evaluate = ""
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case 'parenthesis':
            var openParenCount = (evaluate.match(/\(/g) || []).length;
            var closeParenCount = (evaluate.match(/\)/g) || []).length;
            
            if (openParenCount > closeParenCount) {
                if(evaluate[evaluate.length-1].match(/[-+*(/]$/) !== null) {
                    evaluate += '(';
                }
                else
                    evaluate += ')';
            } 
            else {
                if(evaluate.length === 0 || evaluate[evaluate.length-1].match(/[-+*/]$/) !== null) {
                    evaluate += '('
                }
                else {
                    evaluate += '*(';
                }
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case 'percent':
            var regex = /[-+*/%()]/;
            var parts = evaluate.split(regex);
            var lastPart = parts[parts.length - 1];
            if(evaluate.length === 0) 
                break;
            else if (!lastPart.includes('%') && evaluate[evaluate.length-1].match(/[-+*(/%.]$/) === null) {
                evaluate += "%";
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case 'backspace':
            if (evaluate.length > 0) {
                evaluate = evaluate.slice(0, -1);
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
            
        case 'division':
            if(evaluate.length > 0 && evaluate[evaluate.length-1].match(/[-+*/(.]$/) === null) {
                evaluate = evaluate + "/";
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case 'multiplication':
            if(evaluate.length > 0 && evaluate[evaluate.length-1].match(/[-+*/(.]$/) === null) {
                evaluate = evaluate + "*";
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case 'subtraction':
            if(evaluate.length > 0 && evaluate[evaluate.length-1].match(/[-+*/(.]$/) === null) {
                evaluate = evaluate + "-";
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case 'addition':
            if(evaluate.length > 0 && evaluate[evaluate.length-1].match(/[-+*/(.]$/) === null) {
                evaluate = evaluate + "+";
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case 'point':
            var regex = /[-+*/%()]/;
            var parts = evaluate.split(regex);
            var lastPart = parts[parts.length - 1];
            if (!lastPart.includes('.') && evaluate[evaluate.length - 1] !== ')') {
                evaluate += ".";
            }
            else if(evaluate[evaluate.length - 1] === ')') {
                evaluate += "*0."
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case 'equal':
            var i = 0;
            var calculate = ""
            while(i < evaluate.length) {
                if(evaluate[i] === "%") 
                    calculate += "/100";
                else
                    calculate += evaluate[i];
                i++;
            }
            if(eval(calculate)) {
                evaluate = eval(calculate).toString();
                evaluate = evaluate.length > 12? evaluate.slice(0, 13): evaluate;
                document.getElementById("calc-screen").style.color = 'green';
            }
            break;
        case '9':
            if(evaluate[evaluate.length - 1] === ')') {
                evaluate += "*9";
            }
            else {
                evaluate = evaluate + '9';
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case '8':
            if(evaluate[evaluate.length - 1] === ')') {
                evaluate += "*8";
            }
            else {
                evaluate = evaluate + '8';
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case '7':
            if(evaluate[evaluate.length - 1] === ')') {
                evaluate += "*7";
            }
            else {
                evaluate = evaluate + '7';
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case '6':
            if(evaluate[evaluate.length - 1] === ')') {
                evaluate += "*6";
            }
            else {
                evaluate = evaluate + '6';
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case '5':
            if(evaluate[evaluate.length - 1] === ')') {
                evaluate += "*5";
            }
            else {
                evaluate = evaluate + '5';
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case '4':
            if(evaluate[evaluate.length - 1] === ')') {
                evaluate += "*4";
            }
            else {
                evaluate = evaluate + '4';
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case '3':
            if(evaluate[evaluate.length - 1] === ')') {
                evaluate += "*3";
            }
            else {
                evaluate = evaluate + '3';
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case '2':
            if(evaluate[evaluate.length - 1] === ')') {
                evaluate += "*2";
            }
            else {
                evaluate = evaluate + '2';
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case '1':
            if(evaluate[evaluate.length - 1] === ')') {
                evaluate += "*1";
            }
            else {
                evaluate = evaluate + '1';
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        case '0':
            if(evaluate[evaluate.length - 1] === ')') {
                evaluate += "*0";
            }
            else {
                evaluate = evaluate + '0';
            }
            document.getElementById("calc-screen").style.color = 'white';
            break;
        
    }
    evaluate = evaluate.length > 12? evaluate.slice(0, 13): evaluate;
    document.getElementById("calc-screen").textContent = evaluate;
    if(evaluate.length === 0) {
        document.getElementById("calc-screen").textContent = 0;
    }
}