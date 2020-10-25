var contentDiv = document.querySelector('#rowCustomer');
let customers = [];

function populatecustomers()
{
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      customers = JSON.parse(this.responseText);
		  getCustomers();
    }
  };
	
  xhttp.open("GET", "http://localhost:51478/api/values", true);
  //xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
	 //xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET');
	//xhttp.setRequestHeader('Access-Control-Allow-Headers', 'Origin');
  xhttp.send();
}
populatecustomers();
/*
let customers = [
  {
    "id": 1,
    "Name": 'James',
    "Dob": '01/01/2000',
    "Address": 'New Jersey'
  },
  {
    "id": 2,
    "Name": 'John',
    "Dob": '01/02/2000',
    "Address": 'New York'
  },
  {
    "id": 3,
    "Name": 'Robert',
    "Dob": '01/03/2000',
    "Address": 'Pennsylvania'
  },
   {
    "id": 4,
    "Name": 'William',
    "Dob": '01/04/2000',
    "Address": 'Washington'
  },
   {
    "id": 5,
    "Name": 'David',
    "Dob": '01/05/2000',
    "Address": 'Texas'
  },
   {
    "id": 6,
    "Name": 'Richard',
    "Dob": '01/06/2000',
    "Address": 'Florida'
  },
   {
    "id": 7,
    "Name": 'Joseph',
    "Dob": '01/07/2000',
    "Address": 'Ohio'
  },
   {
    "id": 8,
    "Name": 'Charles',
    "Dob": '01/08/2000',
    "Address": 'Utah'
  },
   {
    "id": 9,
    "Name": 'Christopher',
    "Dob": '01/09/2000',
    "Address": 'Minnesota'
  },
   {
    "id": 10,
    "Name": 'Daniel',
    "Dob": '01/10/2000',
    "Address": 'North Carolina'
  }
];
*/
function getCustomers()
{
  
    var hdrRow = document.createElement("div");
    hdrRow.classList.add('Heading');
    
    var hdrCheck = document.createElement("div");
    hdrCheck.classList.add('Cell');
		hdrCheck.innerHTML = '<p>' + '</p>';

		var hdrId = document.createElement("div");
		hdrId.classList.add('Cell');
		hdrId.innerHTML = '<p id="ID">' + 'ID' + ' ' + '</p>';
	
		var hdrName = document.createElement("div");
		hdrName.classList.add('Cell');
		hdrName.innerHTML = '<p id="cname">' + 'Customer Name' + ' ' + '</p>';
	
		var hdrDob = document.createElement("div");
		hdrDob.classList.add('Cell');
		hdrDob.innerHTML = '<p id="dob">' + 'Date Of Birth' + ' ' + '</p>';
	
		var hdrAddress = document.createElement("div");
		hdrAddress.classList.add('Cell');
    hdrAddress.innerHTML = '<p id="caddress">' + 'Address' + ' ' + '</p>';
    
    var hdrCheck2 = document.createElement("div");
    hdrCheck2.classList.add('Cell');
		hdrCheck2.innerHTML = '<p>' + '</p>';
  
    hdrRow.appendChild(hdrCheck);
		hdrRow.appendChild(hdrId);
		hdrRow.appendChild(hdrName);
		hdrRow.appendChild(hdrDob);
    hdrRow.appendChild(hdrAddress);
    hdrRow.appendChild(hdrCheck2);
			
    contentDiv.appendChild(hdrRow);
   
	
	
	// for(i = 0; i < 1; i++)
	// 	{
	// 	var newDiv = document.createElement("div");
	// 	newDiv.classList.add('Row');
			
	// 	var idDiv = document.createElement("div");
	// 	idDiv.classList.add('Cell');
	// 	idDiv.innerHTML = '<p>' + customers[i].id + ' ' + '</p>';
			
	// 	var nameDiv = document.createElement("div");
	// 	nameDiv.classList.add('Cell');
	// 	nameDiv.innerHTML = '<p>' + customers[i].name + ' ' + '</p>';
			
	// 	var dobDiv = document.createElement("div");
	// 	dobDiv.classList.add('Cell');
	// 	dobDiv.innerHTML = '<p>' + customers[i].dob + ' ' + '</p>';
			
	// 	var addressDiv = document.createElement("div");
  //   addressDiv.classList.add('Cell');
  //   addressDiv.innerHTML = '<p>' + customers[i].address +  ', USA' + '</p>';
    
   
			
	// 	//newDiv.innerHTML = idDiv + ' ' + nameDiv + ' ' + dobDiv + ' ' + addressDiv + ' ';
	// 	newDiv.appendChild(idDiv);
	// 	newDiv.appendChild(nameDiv);
	// 	newDiv.appendChild(dobDiv);
	// 	newDiv.appendChild(addressDiv);
			
	// 	contentDiv.appendChild(newDiv);
  //   }
    
    for(i = 0; i < customers.length; i++)
		{
     
		var newDiv = document.createElement("div");
		newDiv.classList.add('Row');
      
    var checkDiv = document.createElement("div");
		checkDiv.classList.add('Cell');
		checkDiv.innerHTML = '<input type="checkbox"    id="' + customers[i].id + '"' +'>';

		var idDiv = document.createElement("div");
		idDiv.classList.add('Cell');
		idDiv.innerHTML = '<p>' + customers[i].id + ' ' + '</p>';
			
		var nameDiv = document.createElement("div");
		nameDiv.classList.add('Cell');
		nameDiv.innerHTML = '<p>' + customers[i].name + ' ' + '</p>';
			
		var dobDiv = document.createElement("div");
		dobDiv.classList.add('Cell');
		dobDiv.innerHTML = '<p>' + customers[i].dob + ' ' + '</p>';
			
		var addressDiv = document.createElement("div");
    addressDiv.classList.add('Cell');
    addressDiv.innerHTML = '<p>' + customers[i].address +  '' + '</p>';

    var checkDiv2 = document.createElement("div");
		checkDiv2.classList.add('Cell');
		checkDiv2.innerHTML = '<a href="#" onclick="return editCustomer(' + customers[i].id+ ');">' + "edit" + '</a>';
   
			
    //newDiv.innerHTML = idDiv + ' ' + nameDiv + ' ' + dobDiv + ' ' + addressDiv + ' ';
    newDiv.appendChild(checkDiv);
		newDiv.appendChild(idDiv);
		newDiv.appendChild(nameDiv);
		newDiv.appendChild(dobDiv);
    newDiv.appendChild(addressDiv);
    newDiv.appendChild(checkDiv2);
			
    contentDiv.appendChild(newDiv);
    }

    //if (iscreateclicked == true)
    //{
      
      //iscreateclicked = false;
    //}
    
   
}

function editCustomer(id)
{
  alert(id);

  // name
  let editId = document.getElementById(id).parentElement.nextSibling.nextSibling;
  let name = editId.getElementsByTagName('p')[0].innerHTML;
  alert(name);
  
  var nameDiv = document.createElement("div");
		nameDiv.classList.add('Cell');
		nameDiv.innerHTML = '<input type="text" id="idName' + id +'"  value="' + name +'">';    
    editId.parentNode.replaceChild(nameDiv, editId);

 //date of birth
 let editDob = document.getElementById(id).parentElement.nextSibling.nextSibling.nextSibling;
 let dob = editDob.getElementsByTagName('p')[0].innerHTML;
 alert(dob);

 var dobDiv = document.createElement("div");
		dobDiv.classList.add('Cell');
		dobDiv.innerHTML = '<input type="text" id="iddob' + id +'"  value="' + dob +'">';    
    editDob.parentNode.replaceChild(dobDiv, editDob);

//address

    let editAddress = document.getElementById(id).parentElement.nextSibling.nextSibling.nextSibling.nextSibling;
    let address = editAddress.getElementsByTagName('p')[0].innerHTML;
    alert(address);

    var addressDiv = document.createElement("div");
		addressDiv.classList.add('Cell');
		addressDiv.innerHTML = '<input type="text" id="idaddress' + id +'"  value="' + address +'">';    
    editAddress.parentNode.replaceChild(addressDiv, editAddress);

  return false;
}
function myFunction()
{
  //iscreateclicked = true;
  myFunction1();
  return false;
}
function myFunction1()
{

  var eleTab = document.getElementById('rowCustomer');

  var newDiv = document.createElement("div");
  newDiv.classList.add('Row');


  var checkDiv = document.createElement("div");
  checkDiv.classList.add('Cell');
  checkDiv.innerHTML = '';

  var idDiv = document.createElement("div");
  idDiv.classList.add('Cell');
  idDiv.innerHTML = '';



    var nameDiv = document.createElement("div");
		nameDiv.classList.add('Cell');
		nameDiv.innerHTML = '<input type="text" id="idName" value="">';
    
		var dobDiv = document.createElement("div");
		dobDiv.classList.add('Cell');
		dobDiv.innerHTML = '<input type="text" id="idDob" value="">';
			
		var addressDiv = document.createElement("div");
    addressDiv.classList.add('Cell');
    addressDiv.innerHTML = '<input type="text" id="idAddress" value="">';

    newDiv.appendChild(checkDiv);
    newDiv.appendChild(idDiv);
    newDiv.appendChild(nameDiv);
		newDiv.appendChild(dobDiv);
    newDiv.appendChild(addressDiv);
    eleTab.appendChild(newDiv);
  
}
function ModifyCustomer() 
{
  var ele = document.getElementById('delete');
  var ele2 = document.getElementById('update');
  var ele3 = document.getElementById('create');
  if(ele.checked == true)
  {
    alert('delete checked');
    DeleteCustomer();
  }
  else if(ele2.checked == true)
  {
    alert('update checked');
     UpdateCustomer();
    

  }
  else if(ele3.checked == true)
  {
    alert('create checked');
    CreateCustomer();
  }
}
function CreateCustomer()
{
  alert("Create Customer Called");
  var data = {};

  var inpname = document.getElementById('idName');

  data.Name = inpname.value;

  var inpdob = document.getElementById('idDob');

  data.Dob = inpdob.value;

  var inpAddress = document.getElementById('idAddress');

  data.Address = inpAddress.value;

  var json = JSON.stringify(data);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    
        alert('Create Succesful');
    
    }
  };
  xhttp.onerror= function(e) {
    alert("Error fetching " + e);
    console.log("Error fetching " + e);
  };
  xhttp.open("POST", "http://localhost:51478/api/values/" , true);
  xhttp.setRequestHeader('Content-type','application/json');
  //xhttp.setRequestHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  xhttp.setRequestHeader('Access-Control-Allow-Methods', 'POST');
  //xhttp.setRequestHeader('Access-Control-Allow-Headers', 'Origin');
  xhttp.send(json);
}
function UpdateCustomer()
{
  alert("Update Customer called");
  for(i = 0; i < customers.length; i++)
  {
    var ele = document.getElementById(customers[i].id);
    if(ele.checked == true)
    {
        alert(ele.id);
        var data = {};

        var inpname = document.getElementById('idName' + ele.id);
        data.Name = inpname.value;

        var inpdob = document.getElementById('iddob' + ele.id);
        data.Dob = inpdob.value;

        var inpAddress = document.getElementById('idaddress' + ele.id);
        data.Address = inpAddress.value;
        
        var json = JSON.stringify(data);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          
              alert('Update Succesful');
              window.location.reload();
          }
        };
        xhttp.onerror= function(e) {
          alert("Error fetching " + e);
          console.log("Error fetching " + e);
        };
        xhttp.open("PUT", "http://localhost:51478/api/values/" + ele.id, true);
        xhttp.setRequestHeader('Content-type','application/json');
        //xhttp.setRequestHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
        xhttp.setRequestHeader('Access-Control-Allow-Methods', 'PUT');
        //xhttp.setRequestHeader('Access-Control-Allow-Headers', 'Origin');
        xhttp.send(json);
    }
  }
}
function DeleteCustomer()
{
  alert("Delete Customer Called");
  for(i = 0; i < customers.length; i++)
  {
    var ele = document.getElementById(customers[i].id);
    if(ele.checked == true)
    {
        alert(ele.id);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          
              alert('Delete Succesful');
          
          }
        };
        xhttp.onerror= function(e) {
          alert("Error fetching " + e);
          console.log("Error fetching " + e);
        };
        xhttp.open("DELETE", "http://localhost:51478/api/values/" + ele.id, true);
        //xhttp.setRequestHeader('Content-type','application/json');
        //xhttp.setRequestHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
        //xhttp.setRequestHeader('Access-Control-Allow-Methods', 'DELETE');
        //xhttp.setRequestHeader('Access-Control-Allow-Headers', 'Origin');
        xhttp.send();
    }
  }
}