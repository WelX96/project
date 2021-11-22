//show slider value
var slider = document.getElementById("range");
var output = document.getElementById("age");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}

//set form hight as img hight
var imgH;
var imgH2;
jQuery(document).ready(function($) {
  var modifForm = function() {
    var ww2 = document.body.clientWidth;
    if (ww2 >= 767) 
    {
      var imgH=$("#leftImg").height();
      var imgH2=$("#leftImg2").height();
      if(imgH==imgH2){
        $("#form2").height(imgH);
      }
      else {
        $("#form2").height(imgH2);  
      }
    } 
    else {   
      $("#form2").height("auto");
    };
  };
  $(window).resize(function(){
    modifForm();
  });
//initial function call
  modifForm();
});


//form validation and json conversion (for further use) + show user
var obj;
$("#form2").submit(function(event){
  var numPren=$("#numPren").val();
  var age=$("#age").val();
  var mail=$("#mail").val();
  if ($("#permit").is(":checked")){
    var permit=true;
  }
  else{
    var permit=false;
  };
  var topic=$("#topic").val();
  var msg=$("#msg").val();
  if (numPren.indexOf(" ") != -1){
    if (topic !== "0"){
      $("#form3").hide();
      $("#submit").text("Dear "+ numPren + " we thank you for considering to get in touch with us regarding your " + topic + " problem. Please wait patiently for one of our staff members to answer on the e-mail address: "+ mail );
      var contact= new Object();
      contact._fullname=numPren;
      contact._age=age;
      contact._mail=mail;
      contact._permit=permit;
      contact._topic=topic;
      contact._msg=msg;
      obj=JSON.stringify(contact);
      console.log(obj);
    }
    else {
      alert("Please make sure you selected one of the topics from our provided list!");
    }
  }
  else {
    alert("Please check to see if the full name is corect.Make sure you put both your surname and your first name")
  }
  event.preventDefault();
});

