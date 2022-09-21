

var answer = document.querySelector('#answer');
var button = document.querySelectorAll('.btn');

for (i of button) 
{
    i.addEventListener('click', (e) => {
        
        buttontext = e.target.innerText;
        answer.value += buttontext;
    });
}

function clrscreen()
{
    document.getElementById("answer").value = "";
}

function factorial() 
{
    let i, x, fact;
    fact = 1;
    x = answer.value;
    for (i = 1; i <= x; i++) 
    {
        fact = fact * i;
    }

    i = i - 1;

    answer.value = fact;
}

function fact(num)
 {
    let fact = 1;
    for (var i = 2; i <= num; i++)
        fact= fact * i;
        return fact;
    
}
function permutation()
{

    
    
    var input = answer.value;
    var field = input.split('P');
    var n = field[0];
    var r = field[1];
    var num1 = fact(n);
    var num2= fact(n-r);
    var ans = num1/num2;
    answer.value = ans;


}

function combination()
{
    var input = answer.value;
    var field = input.split('C');
    var n = field[0];
    var r = field[1];
    var num1 = fact(n);
    var num2= fact(n-r);
    var num3 = fact(r);
    var ans = num1/(num3*num2);
    answer.value = ans;

}

