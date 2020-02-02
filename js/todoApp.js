/**
 * App for making a simple todo list
 * Author: 
 *
 * @requires jQuery
 * @version 0.0.1
 */
var TodoApp = ( function() {
    // Properties
    var i;    
    var inputText;
 
    

    // Methods
    
    function addListItem() {        
       
        $("#toDoList").append("<li contenteditable='true'>"+$("#inputText").val()+"</li>");
        $("#inputText").val("");          
        removeListItem();
    }
    
    function removeListItem() {  
      
         $("ul li").click(function(i){
         this.remove(); })
              
    }
    
    function saveList(){
        
        let listItems = [];
        $("ul").each(function(){
            listItems.push(this.innerHTML);
        });        
        localStorage.setItem('todoList', JSON.stringify(listItems));  
               
    }
    
    function rinseList(){
        $("#toDoList").empty();  
        localStorage.clear();        
    }
    
    function getSavedListItems(){
        
        var listItems = JSON.parse(localStorage.getItem('todoList'));
        $("ul").each(function(i){
            console.dir(this);
          this.innerHTML = listItems[i];
            
        })
        
        removeListItem();          
        
    }    
    
    
    function init() {
        // Application init code
         
        $("#addBtn").click(function(){
           addListItem(); 
        });
         $("#rinseBtn").click(function(){
           rinseList();
        });
         $("#saveBtn").click(function(){
           saveList();
        });
          $("#saveBtn").click(function(){
           saveList();
        });
        if (localStorage.getItem('todoList')){
            
            getSavedListItems();            
        }
      
    }

    return {
        init : init
    };
  
} )();

TodoApp.init(); // Run application