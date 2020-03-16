$(function(){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault(); 
        $('shopping-list-entry').empty(); 
        const item = $(this).find('#shopping-list-entry').val();
        $('.shopping-list').append('<li><span class="shopping-item">'+item+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>')
        })

     $('ul').on('click','.shopping-item-toggle',function(event){
         $(this).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked")
        });

     $('ul').on('click','.shopping-item-delete', function(event){
         $(this).parent().parent().remove(); 
     })   

     });



// need to append entered value to .shopping list 
// <li>
// <span class="shopping-item">apples</span>
// <div class="shopping-item-controls">
//   <button class="shopping-item-toggle">
//     <span class="button-label">check</span>
//   </button>
//   <button class="shopping-item-delete">
//     <span class="button-label">delete</span>
//   </button>
// </div>
// </li>

// need to be able to switch classes between shopping-item-checked and null
// in shopping-item span

// need to be able to delete list item

//     -must use this
//     -need to be able to add using return 
//     -must use cdn hosted jquery
