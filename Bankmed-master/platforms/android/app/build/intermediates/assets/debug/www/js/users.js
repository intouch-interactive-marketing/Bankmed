myApp.onPageInit('register', function(page){
    
    function validateEmail(e) {
          var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          return emailReg.test(e);
      }

  var calendarDateFormat = myApp.calendar({
        input: '#ks-calendar-date-format',
        dateFormat: 'yyyy-mm-dd'
    });
    
    
    
    
    
    $$('.addMember').on('click', function(){






var a,b,c,d,e,f,g;

        a = $('.reg_member_firstname').val();
        b = $('.reg_member_lastname').val();
        c = $('.reg_member_number').val();
        d = $('.reg_member_dob').val();
        e = $('.reg_member_mail').val();
        f = $('.reg_member_pass').val();
        g = $('.passConfirm').val();

alert(d);
        if(0==a.length || 0==b.length || 0==c.length || 0==d.length || 0==e.length){
            myApp.alert("Please enter all fields");
        }else{


        if(!validateEmail(e)){

        myApp.alert("Please enter a valid email address");

        }else if(f !== g){

        myApp.alert("Password should match!");

        }else{

       myApp.showPreloader('Just a moment...');

var data = new FormData();
data.append("firstname", a);
data.append("lastname", b);
data.append("email", e);
data.append("member_no", c);
data.append("born_at", d);
data.append("password", f);
data.append("password_confirmation", g);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
//alert(this.readyState);
  if (this.readyState === 4) {

      myApp.hidePreloader();
      
      //alert(this.responseText);
      
      var obj = JSON.parse(this.responseText);
      
      //$.each(obj.data, function(index, value){
          
          
         // myApp.alert(obj.data.firstname);
          
          if(obj.success=="1"){
         
          setTimeout(function(){
              
              window.localStorage.setItem("isBankmedUserLogged", 0);
     
            mainView.router.back();
              myApp.alert("Your account has been created successfully. Please click on the link sent to email " + e + " to fully activate your account.");
          },2000);
          
      }else{

      myApp.alert("Your member number or date of birth did not match our records. Please ensure all fields are filled out correctly.");

      }
          
      //})
  }
});

xhr.open("POST", "https://bankmednamibia.com.na/api/app/register");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("cache-control", "no-cache");
//xhr.setRequestHeader("postman-token", "32c3bb1c-5bb7-6d51-0241-283907dbb427");

xhr.send(data);



        }
}
})
    
    
    
    
})














myApp.onPageInit('login', function(page){
    
function validateEmail(a) {
          var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          return emailReg.test(a);
      }
    
    
    
    $$('.logMe').on('click', function(){






var a,b;

        a = $('.memberno').val();
        b = $('.password').val();


        if(0==a.length || 0==b.length){
            myApp.alert("Please enter all fields");
        }else if(!validateEmail(a)){
            
          myApp.alert("Enter a valid email address"); 
            
        }else{

       myApp.showPreloader('Just a moment...');

          
var form = new FormData();
            
form.append("email", a);
form.append("password", b);

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://bankmednamibia.com.na/api/app/login",
  "method": "POST",
  "headers": {
    "cache-control": "no-cache"
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
myApp.hidePreloader();
    var obj = JSON.parse(response);
    

    
    $.each(obj.data, function(index,value){
          
        
          
          if(obj.success=="1"){
         
          setTimeout(function(){
              
              window.localStorage.setItem("isBankmedUserLogged", 1);
              window.localStorage.setItem("memberFirstname", obj.data.firstname);
              window.localStorage.setItem("memberLastname", obj.data.lastname);
              window.localStorage.setItem("memberEmail", obj.data.email);
              window.localStorage.setItem("memberNo", obj.data.member_no);
              window.localStorage.setItem("memberDob", obj.data.born_at);
              window.localStorage.setItem("tokken", obj.data.api_token);
              window.localStorage.setItem("memberFullname", obj.data.fullname);
            mainView.router.loadPage("home.html");
          },1000);
          
      }
          
      })
    
    if(obj.success==0){
       
        myApp.alert("The credentials does not match our records.");
        
    }
    
  
});
            


        }

})
    
    
    
    
})






function checkEmail(a) {
          var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          return emailReg.test(a);
      }
    




 function forgotStepOne(){
              myApp.prompt("Enter your email address", function(dataemail){
                
                  
                  if(0==dataemail.length){
                     
                      
                  }else if(!checkEmail(dataemail)){
                      
                    myApp.alert("Enter a valid email address");  
                      
                  }else{
                      
                      
                      
                  }
                  
                  
              })
          }




