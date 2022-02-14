//script for filtering the items list

$(document).ready()
{ 
    var list=$(".card");
}
function filter()
{
    let nato, fn, sov;
    nato=fn=sov=false;
    if ($("#556").is(":checked")){
        nato=true;
      }
    if ($("#570").is(":checked")){
        fn=true;
      }
    if ($("#762").is(":checked")){
        sov=true;
      }
    if(nato==false && fn==false && sov==false) {
          return alert("Please select one type of ammunition to filter the firearms!")
      }
      let index=list.length;
      for( let i=0; i < index;i++)
      {
        list[i].hidden=false;
        search(i);
      }


/*
      //console.log(list);//price
      var span=list[0].lastElementChild.lastElementChild.lastElementChild.innerHTML;
      //console.log(span);//ammu
     var span2=list[0].lastElementChild.lastElementChild.previousElementSibling.lastElementChild.innerHTML;
*/
      function search(x)
      {
        let removeable=true;
        if(nato==true)
        {
            if(list[x].lastElementChild.lastElementChild.previousElementSibling.lastElementChild.innerHTML=="5,56x45mm")
            {
                removeable=false;
            }
        }
        if(fn==true)
        {
            if(list[x].lastElementChild.lastElementChild.previousElementSibling.lastElementChild.innerHTML=="5,70x28mm")
            {
                removeable=false; 
            }
        }
        if(sov==true) 
        {
            if(list[x].lastElementChild.lastElementChild.previousElementSibling.lastElementChild.innerHTML=="7,62x39mm")
            {
                removeable=false; 
            }
        }
        if(removeable==true)
        {
            list[x].hidden=true;
            //console.log(list[x].hidden);
        }
      }

      // alert("Your list have been filtered")
}

function reset()
{
    //show all items
    let index2=list.length;
    for( var i=0; i < index2;i++)
      {
        list[i].hidden=false;
      }
    //reset checked box  
    let reset=$(".forClick");
    let index3=reset.length;
    for( let i=0; i < index3;i++)
      {
        reset[i].previousElementSibling.checked=false;
        //console.log(reset[i].previousElementSibling.defaultChecked);
      }
}

//script for checking the boxes if user click on p

$(".forClick").click(function(){
  let click=$(this);
  //console.log(click[0]);
  if (click[0].previousElementSibling.checked==true)
  {
    click[0].previousElementSibling.checked=false;
  }
  else{
    click[0].previousElementSibling.checked=true;
  }

  //console.log(click[0].previousElementSibling);

});
