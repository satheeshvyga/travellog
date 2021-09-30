var url = "https://script.google.com/macros/s/AKfycbzyb0haZBYu6NzZ8Nj_5l6s-NuJbnRdVNHue_BGsnHwZFygHzo/exec";
var gx= new Date();
var m = gx.getMonth();
var y= gx.getFullYear();
var dd=gx.getDate();
var sData;
var month;
var year;
m++;

  $("#monthSelect").val(m);
  $("#yearSelect").html(y);
 //-----------------------------------------------------------------document ready-------------------------
  $(document).ready(function(){  
    document.getElementById("printRep").style.display="none";
    document.getElementById("itemTable").style.display="none";

month =$( "#monthSelect option:selected" ).text();
year = $("#yearSelect").text();
gRefresh();

});
//--------------------------------------------------------------document ready End here-----------------------

//--------------------------------------------------------------multi dates submit-------------------------
    $("#btn_add_dates").click(function(){

      var dates =$("#monitor").val();
       month=$( "#monthSelect option:selected" ).text();
      year= $("#yearSelect").text();
if(dates==""){alert("Nothing to add")}

else{
  $('#myCalender').modal('toggle');
  $body.addClass("loading"); 
  $("#monitor").val("");
  $.post(url,
    {
      action: "multiDate",
      dates:dates,
      month:month,
      year:year,
	myKey:readKey(),
    },
    function(data,status){
      alert(data);
      $body.removeClass("loading");
    check(data);
       
    
    
  });
}
    })
//-------------------------------------------------------------multi Date submit End-------------------------




  /*---------------------------------------------------------- Add Item submit --------------------------*/
   $("#addItemform").submit(function(event) {
      event.preventDefault();
                /* stop form from submitting normally */
      var date = $("#date").val();
      var timea = $("#timea").val();
      var timeb = $("#timeb").val();
      var from = $("#from").val();
      var to = $("#to").val();
      var purpose = $("#purpose").val();
      var km = $("#km").val();
      //var month=$( "#monthSelect option:selected" ).text();
      //var year= $("#yearSelect").text();
      if ($('#mode').is(":checked")){var mode="Bus"}
    else{var mode="Dept:Jeep"}
     

      //alert(itemName);
      $('#addItemModal').modal('toggle');

      $body.addClass("loading"); 

      $.post(url,
      {
        action: "addItem",
        date:date,
        month:month,
        year:year,
        timea:timea+" to "+timeb,
        
        from:from,
        to:to,
        mode:mode,
        km:km,
        purpose:purpose,
	myKey:readKey(),
      },
      function(data,status){
        alert(data);
        $body.removeClass("loading");
       check(data);
      
    });
  });
  
  /* ---------------------------------------------------------Add item submit End---------------------- */
  
 
  

//-------------------------------------------------------------mobile edit starts -------------------

$(document).on('click', '.meditItem', function(){  


  var tds = $(this).closest('div').children('p');
  //alert(tds[0].innerHTML) 
  
  var no  = tds[0].innerHTML;
  var date = tds[1].innerHTML;
 var timeatoB = tds[2].innerHTML; 
 var x= timeatoB.split(" to ");
var timea= x[0];
 var timeb= x[1];
  var from  = tds[3].innerHTML;
  var to = tds[4].innerHTML;
  var mode = tds[6].innerHTML; 
  var km= tds[7].innerHTML;
  var purpose= tds[5].innerHTML;
  

  $('#no').val(no);
  $('#editdate').val(date);
  $('#edittimea').val(timea);
  $('#edittimeb').val(timeb);
  $('#editfrom').val(from);
  $('#editto').val(to);
  
  $('#editkm').val(km);
  $('#editpurpose').val(purpose);
  if (mode=="Bus"){$('#eMode').prop('checked', true);}
  else { $('#eMode').prop('checked', false);};

  $('#editItemModal').modal('show');




});
//-------------------------------------------------------------mobile edit End ---------------------


//-------------------------------------------------------------mobile Deletec starts-----------------------

$(document).on('click', '.mdeleteItem', function(){  
           


    var tds = $(this).closest('div').children('p');

     
     var no  = tds[0].innerHTML;
     //var date = tds[1].innerHTML;
     
     
     $('#deleteno').html(no);
     
     $('#deleteItemModal').modal('show');
    

  });

//------------------------------------------------------------mobile Delete End-------------------------

  
  /* ----------------------------------------------------------- Edit start--------------------------------*/ 

   $(document).on('click', '.editItem', function(){  
           
    //alert('test');
      var tds = $(this).closest('tr').children('td');
       //alert(tds[0].innerHTML) 
       
       var no  = tds[0].innerHTML;
       var date = tds[1].innerHTML;
       var timeatoB = tds[2].innerHTML; 
       var x= timeatoB.split(" to ");
      var timea= x[0];
       var timeb= x[1];
       var from  = tds[3].innerHTML;
       var to = tds[4].innerHTML;
       var mode = tds[5].innerHTML; 
       var km= tds[6].innerHTML;
       var purpose= tds[7].innerHTML;
       

       $('#no').val(no);
       $('#editdate').val(date);
       $('#edittimea').val(timea);
       $('#edittimeb').val(timeb);
       $('#editfrom').val(from);
       $('#editto').val(to);
      
       $('#editkm').val(km);
       $('#editpurpose').val(purpose);
       if (mode=="Bus"){$('#eMode').prop('checked', true);}
       else { $('#eMode').prop('checked', false);};

       $('#editItemModal').modal('show');
      
  
  });
  //-------------------------------------------------------------Endit End------------------------------
  
  //-------------------------------------------------------------edit Submit ---------------------------
   $("#editItemForm").submit(function(event) {
               event.preventDefault();

      var no = $("#no").val();
      var date = $("#editdate").val();
      var timea  = $("#edittimea").val();
      var timeb = $("#edittimeb").val();
      var from = $("#editfrom").val();
      var to = $("#editto").val();
      
      var km = $("#editkm").val();
      var purpose = $("#editpurpose").val();
      //var month =$( "#monthSelect option:selected" ).text();
      //var year = $("#yearSelect").text();
      if ($('#eMode').is(":checked")){var mode="Bus"}
    else{var mode="Dept:Jeep"}



    //  alert(itemName);

    $('#editItemModal').modal('toggle');
    $body.addClass("loading"); 


      $.post(url,
      {
        action: "updateItem",
       no:no,
        date:date,
       timea:timea+" to "+timeb,
       from:from,
        to:to,
        mode:mode,
        km:km,
        purpose:purpose,
        month:month,
        year:year,
	myKey:readKey(),
      },
      function(data,status){
        
      $body.removeClass("loading");
     alert(data); 
     check(data);
    });
  });
  //-------------------------------------------------------------edit Submit End---------------------------

	/*------------------------------------------------------------table Delete operation -----------------*/

   $(document).on('click', '.deleteItem', function(){  
           
    //alert('test');

      var tds = $(this).closest('tr').children('td');
       //alert(tds[0].innerHTML) 
       
       var no  = tds[0].innerHTML;
       var date = tds[1].innerHTML;
       
       
       $('#deleteno').html(no);
       $('#deletedate').html("Travel Details");
       $('#deleteItemModal').modal('show');
      
  
		});
//---------------------------------------------------------------table Delete End----------------------------
//--------------------------------------------------------------table delete Submit Stars-------------------
   $("#deleteItemForm").submit(function(event) {
               event.preventDefault();
      
      var no = $("#deleteno").html();
      
      //var month =$( "#monthSelect option:selected" ).text();
  

    //  alert(itemName);

      $('#deleteItemModal').modal('toggle');
      $body.addClass("loading"); 

      $.post(url,
      {
        action: "deleteItem",
        no:no,
        month:month,
       myKey:readKey(),
       
      },
      function(data,status){
       $body.removeClass("loading");
        alert(data);
        check(data);
        
      
    });
  });
  //-----------------------------------------------------------table Delete submit End here--------------
  

  
  $(document).on('click', '#prev', function(){ 


    y--;
$("#yearSelect").html(y);
year=y;
gRefresh();

  })

  $(document).on('click', '#next', function(){ 


    y++;
$("#yearSelect").html(y);
year=y;
gRefresh();
  })
//-------------------------------------------------------------gRefresh------------------------------------

function gRefresh(){
$("#disMonth").html($( "#monthSelect option:selected" ).text());
$("#disYear").html($("#yearSelect").text());
$("#edisMonth").html($( "#monthSelect option:selected" ).text());
$("#edisYear").html($("#yearSelect").text());
 $("#date").val(dd);
 $( "#mobileViewArea" ).load(window.location.href + " #mobileViewArea" );
 $( "#itemTable" ).load(window.location.href + " #itemTable" );  
$("#calenderTitle").html(month+" "+year);
  
  $body = $("body");

  
  if(localStorage.getItem(year+month)){
    console.log(month+year+" Data is here");
    var gPassD = JSON.parse(localStorage.getItem(year+month));
setTimeout(function() {
      drawTables(gPassD); 
    }, 600);
  
  }
  else{
$body.addClass("loading"); 
    fetchData();
  }
  
  $("#monitor").val("");
 
    }
//------------------------------------------------------------gRefresh End here---------------------------

function fetchData(){
  
  jQuery.get(url+"?action=getItems&month="+month+"&year="+year, function(data, status){
    sData=JSON.stringify(data);
    localStorage.setItem(year+month,sData);
   drawTables(data);
    $body.removeClass("loading");

  });
};

  //-----------------------------------------------------------draw Tables function--------------------
  function drawTables(data) { 
   if(data.tableEmpty == 'N'){  
    document.getElementById("printRep").style.display="block";
       document.getElementById("itemTable").style.display="block"; 
       document.getElementById("noRImg").style.display="none"; 
     var response = data.items;
    
      $.each(response, function (i, item) { 
            $(
              "<tr>"+
              "<td>"+item.no+"</td>"+
              "<td>"+item.date+"</td>"+
              "<td>"+item.timea+"</td>"+
             "<td>"+item.from+"</td>"+
              "<td>"+item.to+"</td>"+
              "<td>"+item.mode+"</td>"+
              "<td>"+item.km+"</td>"+
              '<td >'+item.purpose+"</td>"+
              "<td>"+
                 '<a href = "" class="editItem" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">edit</i></a>'+
                 '<a href = "" class="deleteItem" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>'+
                "</td>"+
            "</tr>").appendTo('#itemTable');
var timeMix=item.timea;
var x =timeMix.split(" to ");

            $(
'<div class="mySlip"><div id="dDate">'+
        '<p id="pMonth">'+item.month+'</p><h2>'+item.date+'</h2><p id="pYear">'+item.year+'</p></div>'+
    '<div class=dData>'+                       
        '<p><b>Time:</b> '+x[0]+' <b>to:</b> '+x[1]+'</p>'+
        '<p><b>From: </b>'+item.from+' <b>To:</b> '+item.to+'</p>'+
         '<p><b>Purpose: </b>'+item.purpose+'</p>'+
         '<p><b>KM: </b>'+item.km+', <b>Mode: </b>'+item.mode+'</p></div>'+
      '</div>'+

 '<div class="dfoot">'+
 '<P >'+item.no+'</p>'+
 '<p hidden>'+item.date+'</p>'+
 '<p hidden>'+item.timea+'</p>'+
 '<p hidden>'+item.from+'</p>'+
 '<p hidden>'+item.to+'</p>'+
 '<p hidden>'+item.purpose+'</p>'+
 '<p hidden>'+item.mode+'</p>'+
 '<p hidden>'+item.km+'</p>'+
 '<a href = "" class="meditItem" data-toggle="modal"><i class="material-icons mEditbtn" data-toggle="tooltip" title="Edit">edit</i></a>'+
                 '<a href = "" class="mdeleteItem" data-toggle="modal"><i class="material-icons mDeletebtn" data-toggle="tooltip" title="Delete">&#xE872;</i></a>'+
  '</div>'
  ).appendTo('#mobileViewArea')});
 }
 else{
  // dates=[];
  console.log("no data for selected month"+month);
document.getElementById("printRep").style.display="none";
  document.getElementById("itemTable").style.display="none";
  document.getElementById("noRImg").style.display="block"; 
 $body.removeClass("loading"); 

 }



}// ------------------------------------------------------------end function draw Tables -----------------

$("#monthSelect").change(function(){
   month =$( "#monthSelect option:selected" ).text();
  
  alert("view entries in "+month+" only");
 gRefresh();
});

//---------------------------------------------------------------  

$("#fromI").click(function(){
$('#from').val("Thrissur HQ");});
//--------------------------------------------------------------
$("#toI").click(function(){
  $('#to').val("Thrissur HQ");});
//--------------------------------------------------------------
  $("#purI").click(function(){
    $('#purpose').val("Assisting SSO for");});
//-----------------------------------------------------------------
   
   
 //----------------------------------multi date  buten press starts--------------   
    function gpress(x) {
 
   var y =$("#monitor").val();
$("#monitor").val(y+x+"x");
 }//---------------------------------multi date  buten press End--------------------


//---------------------------------------Print press Starts----------------
function save(){
      window.location.href = "save.html" +"?" +localStorage.getItem(year+month);}
//----------------------------------------print press Ends-------------------------



//-------------------------------------Reading key- function starts---------------------
function readKey(){
      var gx =$("#myKey").val();
        return gx;
 } 
 //-------------------------------------Reading key- function End---------------------
 function check(data)
 {if(data!="Call Geevar"){
  console.log( "data is"+data);
  localStorage.removeItem(year+month);
  gRefresh();}}
 function sRemove(){
    localStorage.clear();
    gRefresh();
  }