//Sorting cards by price

function sort()
{
    var list=$(".card");
    $(".card").remove();
    if($("#pret").val()=="up")
    {
        bubbleSortUp(list);
    }
    else if($("#pret").val()=="down")
    {
        bubbleSortDown(list);
    }
    else
    {
        alert("Something went wrong, please reload the page. If the error still shows up, please contact us!");
    }
    var index=list.length;
    for( var i=0; i < index;i++)
      {
        $(".row").append(list[i]);  
      }
}
//low to high sort
function bubbleSortUp(card)
{
    for (var i = 0, arrayLenght=card.length; i <arrayLenght;i++)
    {
        for (var j =0; j<=i;j++)
        {
            if (card[i].lastElementChild.lastElementChild.lastElementChild.innerHTML<card[j].lastElementChild.lastElementChild.lastElementChild.innerHTML)
            {
                let temp=card[i];
                card[i]=card[j];
                card[j]=temp;
                
               // swap(arr,i,j);
            }
        }
    }
    return card;
}
//high to low sort
function bubbleSortDown(card)
{
    for (var i = 0, arrayLenght=card.length; i <arrayLenght;i++)
    {
        for (var j =0; j<=i;j++)
        {
            if (card[i].lastElementChild.lastElementChild.lastElementChild.innerHTML>card[j].lastElementChild.lastElementChild.lastElementChild.innerHTML)
            {
                let temp=card[i];
                card[i]=card[j];
                card[j]=temp;
                
               // swap(arr,i,j);
            }
        }
    }
    return card;
}