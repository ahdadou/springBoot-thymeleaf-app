$('document').ready(function(){
	
	
	 $('.table #editButton').on('click',function(event){
		  
		  event.preventDefault();
		  $('#editModal').modal();
		  
		  var href=$(this).attr('href');
		  
		  
		  $.get(href,function(location,locations){
			  $('#idEdit').val(location.id);
			  $('#ddlCountryEdit').val(location.countryid);
			  $('#ddlStateEdit').val(location.stateid);
			  $('#detailsEdit').val(location.details);
			  $('#descriptionEdit').val(location.description);
			  $('#cityEdit').val(location.city);
			  $('#addressEdit').val(location.address);
			 		  
		  });  
	  });
	  
	 
	 $('.table #detailsButton').on('click',function(event){
		  
		  event.preventDefault();
		  
		  var href=$(this).attr('href');
		  
		  
		  $.get(href,function(state,status){
			  $('#idDetails').val(state.id);
			  $('#ddlCountryDetails').val(state.countryid);
			  $('#detailsDetails').val(state.details);
			  $('#nameDetails').val(state.name);
			  
			  $('#lastModifiedByDetails').val(state.code);
			  $('#lastModifiedDetails').val(state.capital);
			 		  
		  });  
		  $('#detailsModal').modal();
	  });
	  
	  
 $('table #deleteButton').on('click',function(event){
		  
		  event.preventDefault();
		  var href=$(this).attr('href');
		  
		  $('#confirmationDeleteButton').attr('href',href);
		  $('#deleteModal').modal();
		  
		
		  
		 
		  
	    
	  });
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
});


