myApp.onPageInit('home', function (page) {
    
    
    var ptrContent = $$(page.container).find('.pull-to-refresh-content');
       ptrContent.on('refresh', function (e) {
        // Emulate 2s loading
        setTimeout(function () {
     
            fetchNews();
    memberInfo();
    familyBenefits();
    dependantsBenefits();
            
            
            myApp.pullToRefreshDone();
        }, 2000);
    });
  
    synchUserData();
    
    fetchNews();
    memberInfo();
    familyBenefits();
    dependantsBenefits();
    
      var calendarDateFormat = myApp.calendar({
        input: '#ks-calendar-date-format',
        dateFormat: 'yyyy-mm-dd'
    });
    
    $('.owl-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
    
    
    

    
    
});



function fetchNews(){
  $('.newsPoint').text("");  
    
var data = new FormData();
data.append("member_no", window.localStorage.getItem("memberNo"));
data.append("api_token", window.localStorage.getItem("tokken"));

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    var obj = JSON.parse(this.responseText);
      
      $.each(obj.data, function(index, value){
          
          
          
          var temp ='<div class="timeline-item">'+
          '<div class="timeline-item-date custom-color-red"><span class="custom-color-red">21 <small>DEC</small></span></div>'+
        '<div class="timeline-item-divider"></div>'+
        '<div class="timeline-item-content">'+
          '<div class="timeline-item-inner">'+
            '<div class="timeline-item-time">12:56</div>'+
              '<div class="timeline-item-title"><span class="custom-color osvaldo-bold">'+value.title+'</span></div>'+
              '<div style="display:none;" class="timeline-item-subtitle"><i>Item Subtitle</i></div>'+
            '<div class="timeline-item-text">'+value.summary+'</div>'+
          '</div>'+
        '</div>'+
      '</div>';
          
          
          
          $('.newsPoint').append(temp);
          
      })
      
      
  }
});

xhr.open("POST", "https://bankmednamibia.com.na/api/app/news");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("api_token", window.localStorage.getItem("tokken"));
xhr.setRequestHeader("cache-control", "no-cache");
//xhr.setRequestHeader("postman-token", "ad9543f0-7869-7a28-925f-775981cb4b05");

xhr.send(data);

    
}










function memberInfo(){

   // alert(window.localStorage.getItem("memberNo"));
    
var data = new FormData();
data.append("member_no", window.localStorage.getItem("memberNo"));
data.append("api_token",  window.localStorage.getItem("tokken"));

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
      $('.memberInfoPoint').text(""); 
    var obj = JSON.parse(this.responseText);
      
      $.each(obj.data, function(index, value){
          
          
          
          var temp ='<tr>'+
            '<td class="label-cell">'+value.d_first_name+'</td>'+
            '<td class="numeric-cell">'+value.d_surname+'</td>'+
            '<td class="numeric-cell">'+value.d_dt_birth+'</td>'+
       
          '</tr>';
          
          
          
          $('.memberInfoPoint').append(temp);
          
      })
      
      
  }
});

xhr.open("POST", "https://bankmednamibia.com.na/api/app/member-info");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("api_token", window.localStorage.getItem("tokken"));
xhr.setRequestHeader("cache-control", "no-cache");
//xhr.setRequestHeader("postman-token", "ad9543f0-7869-7a28-925f-775981cb4b05");

xhr.send(data);

    
}











function familyBenefits(){
    
    
var data = new FormData();
data.append("member_no", window.localStorage.getItem("memberNo"));
data.append("api_token", window.localStorage.getItem("tokken"));

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
      $('.familyBenefitPoint').text("");
    var obj = JSON.parse(this.responseText);
      
      $.each(obj.data, function(index, value){
          
          
          var temp ='<tr>'+
            '<td class="label-cell">'+value.dscptn+'</td>'+
            '<td class="numeric-cell">'+value.ben_max+'</td>'+
            '<td class="numeric-cell">'+value.ben_use+'</td>'+
            '<td class="numeric-cell">'+value.ben_bal+'</td>'+
       
          '</tr>';
          
          
          
          $('.familyBenefitPoint').append(temp); 
   
          
     })
      
      
  }
});

xhr.open("POST", "https://bankmednamibia.com.na/api/app/family-benefits");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("api_token", window.localStorage.getItem("tokken"));
xhr.setRequestHeader("cache-control", "no-cache");
//xhr.setRequestHeader("postman-token", "ad9543f0-7869-7a28-925f-775981cb4b05");

xhr.send(data);

    
}












function dependantsBenefits(){
    
    
var data = new FormData();
data.append("member_no", window.localStorage.getItem("memberNo"));
data.append("api_token", window.localStorage.getItem("tokken"));

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
      $('.dependantsBenefitsPoint').text("");
    var obj = JSON.parse(this.responseText);
      
      $.each(obj.data, function(index, value){
          
          
          var temp ='<tr>'+
            '<td class="label-cell">'+value.dscptn+'</td>'+
            '<td class="numeric-cell">'+value.ben_max+'</td>'+
            '<td class="numeric-cell">'+value.ben_use+'</td>'+
            '<td class="numeric-cell">'+value.ben_bal+'</td>'+
       
          '</tr>';
          
          
          
          $('.dependantsBenefitsPoint').append(temp); 
   
          
     })
      
      
  }
});

xhr.open("POST", "https://bankmednamibia.com.na/api/app/dependants-benefits");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("api_token", window.localStorage.getItem("tokken"));
xhr.setRequestHeader("cache-control", "no-cache");
//xhr.setRequestHeader("postman-token", "ad9543f0-7869-7a28-925f-775981cb4b05");

xhr.send(data);

    
}








myApp.onPageInit('services', function(page){
    
    getBranches();
})







function getBranches(){

 var container = $$('body');
     if (container.children('.progressbar, .progressbar-infinite').length) return; 
        myApp.showProgressbar(container, 'multi');   
    
    myApp.showPreloader("Loading...");
    
var data = new FormData();
data.append("member_no", window.localStorage.getItem("memberNo"));
data.append("api_token", window.localStorage.getItem("tokken"));

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
      
      myApp.hideProgressbar();
       myApp.hidePreloader();
      
    var obj = JSON.parse(this.responseText);
      
      $.each(obj.data, function(index, value){
          
          
          
          var temp ='<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner"> '+
              '<div class="item-title">'+value.name+'</div>'+
           ' </div></a>'+
          '<div class="accordion-item-content">'+
            '<div class="content-block">'+
 
                
        '<div class="list-block media-list">'+
         ' <ul>'+
              
              
          '  <li><span href="#" class="item-content">'+
                '<div class="item-media"><img src="img/servicesuser.png" width="44"></div>'+
                '<div class="item-inner">'+
                 ' <div class="item-title-row">'+
                    '<div class="item-title">'+value.contact_person+'</div>'+
                  '</div>'+
                '  <div class="item-subtitle">Contact Person</div>'+
                '</div></span></li>'+
              
              
              
            '<li><span href="#" class="item-content">'+
                '<div class="item-media"><img src="img/send.png" width="44"></div>'+
                '<div class="item-inner">'+
                 ' <div class="item-title-row">'+
                    '<div class="item-title">'+value.email+'</div>'+
                  '</div>'+
                  '<div class="item-subtitle">Email Address</div>'+
            '    </div></span></li>'+
              
              
              
              
              
            '<li><span href="#" class="item-content">'+
                '<div class="item-media"><img src="img/phonecall.png" width="44"></div>'+
                '<div class="item-inner">'+
                 ' <div class="item-title-row">'+
                    '<div class="item-title">'+value.telephone+'</div>'+
                  '</div>'+
                  '<div class="item-subtitle">Telephone</div>'+
                '</div></span></li>'+
                    
              
              
              
            '<li><span class="item-content">'+
                '<div class="item-media"><img src="img/fax.png" width="44"></div>'+
                '<div class="item-inner">'+
                 ' <div class="item-title-row">'+
                    '<div class="item-title">'+value.fax+'</div>'+
                  '</div>'+
                  '<div class="item-subtitle">Fax</div>'+
                '</div></span></li>'+        
              
              
              
            '<li><span href="#" class="item-content">'+
                '<div class="item-media"><img src="img/route.png" width="44"></div>'+
                '<div class="item-inner">'+
                 ' <div class="item-title-row">'+
                    '<div class="item-title">'+value.address+'</div>'+
                  '</div>'+
                  '<div class="item-subtitle">Address</div>'+
                '</div></span></li>'+
              
              
          '</ul>'+
        '</div>'+
       
                
           ' </div>'+
          '</div>'+
        '</li>';
          
          
          
          $('.servicesPoint').append(temp);
          
      })
      
      
  }
});

xhr.open("POST", "https://bankmednamibia.com.na/api/app/branches");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("api_token", window.localStorage.getItem("tokken"));
xhr.setRequestHeader("cache-control", "no-cache");
//xhr.setRequestHeader("postman-token", "ad9543f0-7869-7a28-925f-775981cb4b05");

xhr.send(data);

    
}




function synchUserData(){

    
            $('.memberFullnamePoint').text(window.localStorage.getItem("memberFullname"));
            $('.memberEmailPoint').text(window.localStorage.getItem("memberEmail"));
            $('.inputMemberFirstnamePoint').val(window.localStorage.getItem("memberFirstname"));
            $('.inputMemberLastnamePoint').val(window.localStorage.getItem("memberLastname"));
            $('.inputMemberMemberNumberPoint').val(window.localStorage.getItem("memberNo"));
            $('.inputMemberMemberDobPoint').val(window.localStorage.getItem("memberDob"));
            $('.inputMemberEmailDobPoint').val(window.localStorage.getItem("memberEmail"));
}

    function validateEmail(e) {
          var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          return emailReg.test(e);
      }


function hint(){
    
    if(window.localStorage.getItem("hintInit")=="" || window.localStorage.getItem("hintInit")==null || window.localStorage.getItem("hintInit")==0){
        window.localStorage.setItem("hintInit", 1);
         myApp.addNotification({
            message: 'Move your finger on table from left to right or vise-versa for more info.',
            button: {
                text: 'Close',
                color: 'lightgreen'
            },
            onClose: function () {
              
                
                myApp.confirm('Show this in future?', function(){
                
                    myApp.alert("Noted!");
                })
                
            }
        });
        
    }
}








myApp.onPageInit('faq', function(page){
    
    
    
    fetchFaq();
    
    
})




function fetchFaq(){

 myApp.showPreloader("Loading...");   
    var container = $$('body');
     if (container.children('.progressbar, .progressbar-infinite').length) return; 
        myApp.showProgressbar(container, 'multi'); 
    
var data = new FormData();
data.append("member_no", window.localStorage.getItem("memberNo"));
data.append("api_token", window.localStorage.getItem("tokken"));

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
      
      myApp.hidePreloader(); 
       myApp.hideProgressbar();
    var obj = JSON.parse(this.responseText);
      
      $.each(obj.data, function(index, value){ 
          
      
          
          
          
          var tempmember ='<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title">'+value.question+'</div>'+
            '</div></a>'+
          '<div class="accordion-item-content">'+
            '<div class="content-block">'+
              '<p>'+value.answer+'</p>'+
            '</div>'+
          '</div>'+
        '</li>';
            
          
          
          
          var tempaccount ='<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title">'+value.question+'</div>'+
            '</div></a>'+
          '<div class="accordion-item-content">'+
            '<div class="content-block">'+
              '<p>'+value.answer+'</p>'+
            '</div>'+
          '</div>'+
        '</li>';
          
          
          
          if(value.category.name=="Member questions"){
              
             $('.faqMemberPoint').append(tempmember);  
          }
           
          
          if(value.category.name=="Account"){
              
             $('.faqAccountPoint').append(tempaccount);  
          }
          
          
         
          
      })
      
      
  }
});

xhr.open("POST", "https://bankmednamibia.com.na/api/app/faq");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("api_token", window.localStorage.getItem("tokken"));
xhr.setRequestHeader("cache-control", "no-cache");
//xhr.setRequestHeader("postman-token", "ad9543f0-7869-7a28-925f-775981cb4b05");

xhr.send(data);

    
}







myApp.onPageInit('emergency', function(page){
   
    
    
    
    //setTimeout(function(){
    
        
       // window.localStorage.setItem("notedB", null);
    //},3000);
    
    
   
    
    fetchEmergency();
    
    
})



function noted(){
  
        if(window.localStorage.getItem("notedMessage")=="" || window.localStorage.getItem("notedMessage")==null || window.localStorage.getItem("notedMessage")==0){
        

        myApp.addNotification({
            message: "<b class=\"strong\">Note:</strong></b> All the above Service Providers charge emergency evacuation at NAMAF Tariffs <b class=\"strong\">except E-Med Rescue</b> who will treat Bankmed members as private clients with a rate of NAMAF plus 15% and they will require from Bankmed <b class=\"strong\">front up payments</b> before any evacuation are done for inter-hospital transfers"
        });
        
    }
}


function fetchEmergency(){

  myApp.showPreloader("Loading..."); 
    var container = $$('body');
     if (container.children('.progressbar, .progressbar-infinite').length) return; 
        myApp.showProgressbar(container, 'multi'); 
    
var data = new FormData();
data.append("member_no", window.localStorage.getItem("memberNo"));
data.append("api_token", window.localStorage.getItem("tokken"));

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
      window.localStorage.setItem("notedMessage", 1);
      myApp.hidePreloader();
       myApp.hideProgressbar();
      
    var obj = JSON.parse(this.responseText);
      
    $('.emergencyPoint').append(obj.data.content); 
      
      
  }
});

xhr.open("POST", "https://bankmednamibia.com.na/api/app/emergency-assistance");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("api_token", window.localStorage.getItem("tokken"));
xhr.setRequestHeader("cache-control", "no-cache");
//xhr.setRequestHeader("postman-token", "ad9543f0-7869-7a28-925f-775981cb4b05");

xhr.send(data);

    
}



