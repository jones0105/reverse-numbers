var a=parseInt(prompt("Enthr The Value"));
result=0;
var b
 document.write("Enter the value"+a);
 document.write("<br>");
  while(a>0)
   {
    b=a%10;
	result= result*10+b;
	a=parseInt(a/10);
   }
  document.write("This is reverse Numbers"+result);
  