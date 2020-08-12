$('document').ready(function(){
	
	
	 $('table #editButton').on('click',function(event){
		  
		  event.preventDefault();
		  $('#editModal').modal();
		  
		  var href=$(this).attr('href');
		  
		  
		  $.get(href,function(client,clients){
			  $('#idEdit').val(client.id);
			  $('#nameEdit').val(client.name);
			  $('#detailsEdit').val(client.details);
			  $('#websiteEdit').val(client.website);
			  $('#addressEdit').val(client.address);
			  $('#emailEdit').val(client.email);	
			  $('#countryEdit').val(client.country);
			  $('#cityEdit').val(client.city);
			  $('#stateEdit').val(client.state);	
			  $('#phoneEdit').val(client.phone);	
			  $('#mobileEdit').val(client.mobile);	
		  });  
	  });
	  
	  
	  
 $('table #deleteButton').on('click',function(event){
		  
		  event.preventDefault();
		  var href=$(this).attr('href');
		  
		  $('#confirmationDeleteButton').attr('href',href);
		  $('#deleteModal').modal();
		  
		
		  
		 
		  
	    
	  });
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
});


