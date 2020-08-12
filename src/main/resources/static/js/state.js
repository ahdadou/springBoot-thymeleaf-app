$('document').ready(function(){
	
	
	 $('.table #editButton').on('click',function(event){
		  
		  event.preventDefault();
		  $('#editModal').modal();
		  
		  var href=$(this).attr('href');
		  
		  
		  $.get(href,function(state,status){
			  $('#idEdit').val(state.id);
			  $('#ddlCountryEdit').val(state.countryid);
			  $('#detailsEdit').val(state.details);
			  $('#nameEdit').val(state.name);
			  $('#codeEdit').val(state.code);
			  $('#capitalEdit').val(state.capital);
			 		  
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


