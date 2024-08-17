

function AppendToDisplay(input)
{
    document.getElementById("display").value = document.getElementById("display").value + input;
}

function clearDisplay()
    {
        display.value = "";
    }

function calculate()
{

    display.value = eval(display.value);
    
}