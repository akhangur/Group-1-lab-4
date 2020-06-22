	var data=[];
  window.onload = function() {
  data.push({"firstname":"Monika","lastname":"Bodig","job":"Manager","salary":"9879","image":"background.jpg"},{"firstname":"Rupendhar","lastname":"Rp","job":"cashier","salary":"8729","image":"backr.jpg"})
displayTable();

};
function sendData()
{
	var firstname=document.getElementById("firstname").value;
	var lastname=document.getElementById("lastname").value;
	var job=document.getElementById("job").value;
	var salary=document.getElementById("salary").value;
	var image=document.getElementById("image").value;
	var image = image.substring(image.lastIndexOf('\\')+1);
	console.log(image);
	console.log(firstname+" "+lastname+" "+job+" "+salary+" "+image);
	data.push({firstname,lastname,job,salary,image});
	displayTable();
}
function displayTable()
{
var div=document.getElementById("mk");
var td= ""; td=td+"<table id=datatable>";
td=td+'<tr><th>Remove</th><th>First Name</th><th>Last Name</th><th>Job</th><th>Salary</th><th>Image</th>'
 for(i=0;i<data.length;i++)
  {
  	td= td+'<tr>';
  	td=td+'<td><img src="close.png" id="imagedc" onclick="remove('+i+')"  /></td>'
  	var j=0;
  	 while(j<4)
  	 {
  	 	var variable=0;
  	 	if(j == 0)
  	 	{
         variable= "firstname";
  	 	}
  	 	else if(j==1)
  	 	{
  	 		variable= "lastname";
  	 	}
  	 	else if(j==2)
  	 	{
  	 		variable="job"
  	 	}
  	 	else 
  	 	{
  	 		variable="salary"
  	 	}
  	td= td+'<td>'+data[i][variable]+'</td>';  
  	if(j==3)
  	{
  		td= td+'<td><img src='+data[i]["image"]+' id="imaged" /></td>'; 
  	}
  	j++;
    } 	
  	td= td+'</tr>';
  }
td=td+"</table>";
console.log(td);
div.innerHTML=td;
}
function remove(i)
{
	alert("Are you sure??");
	data.splice(i,1);
	displayTable();
}