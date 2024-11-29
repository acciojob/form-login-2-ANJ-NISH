//your JS code here. If required.

let f1=document.getElementById("form1");

f1.addEventListener("submit",
				   function(e)
					{
						e.preventDefault();
						let fn=document.getElementById("fn").value;
						let ln=document.getElementById("ln").value;
						let pn=document.getElementById("pn").value;
						let ei=document.getElementById("ei").value;

						alert(`First Name: ${fn} Last Name: ${ln} Phone Number: ${pn} Email ID: ${ei}`);
					})