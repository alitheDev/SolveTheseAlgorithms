<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Arrays</h1>

<p id="no1"></p>
<p id="no2"></p>
<p id="no3"></p>
<p id="output1"></p>
<p id="output2"></p>



<script>
const no1input = prompt("Please enter Number");
const no2input = prompt("Please enter 2nd no");
const no3input = prompt("Please enter 3rd no");

const success = "Success";
const fail = "Fail";

if(no1input && no2input >0 || no1input && no3input > 0 || no2input && no3input > 0)
{
document.getElementById("output1").innerHTML = success; 
}

else
{
document.getElementById("output2").innerHTML = fail; 
}


</script>

</body>
</html>

