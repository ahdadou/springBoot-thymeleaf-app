$('document').ready(function(){
	
	
	 $('table #editButton').on('click',function(event){
		  
		  event.preventDefault();
		  $('#editModal').modal();
		  
		  var href=$(this).attr('href');
		  
		  
		  $.get(href,function(country,status){
			  $('#idEdit').val(country.id);
			  $('#descriptionEdit').val(country.description);
			  $('#capitalEdit').val(country.capital);
			  $('#codeEdit').val(country.code);
			  $('#continentEdit').val(country.continent);
			  $('#nationaliteEdit').val(country.nationality);			  
		  });  
	  });
	  
	  
	  
 $('table #deleteButton').on('click',function(event){
		  
		  event.preventDefault();
		  var href=$(this).attr('href');
		  
		  $('#confirmationDeleteButton').attr('href',href);
		  $('#deleteModal').modal();
		  
		
		  
		 
		  
	    
	  });
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
});


