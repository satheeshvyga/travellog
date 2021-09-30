var gData = decodeURIComponent(window.location.search);

var months = ['x',
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ];
gData =gData.substring(1);
console.log(gData);
var oData = JSON.parse(gData);
var jData = oData.items;
var myName = "Satheesh CA"
var desig ="Field Assistant Grade-2"
var place ="Thrissur"

var month=jData[0].month
var MM=months.indexOf(month);
var year = jData[0].year;

$.each(jData, function (i, item) { 
      
      console.log("The I is= "+ ++i);

    $(
      "<tr>"+
      
      
      "<td>"+item.date+"-"+MM+"-"+year+"</td>"+
      "<td>"+item.timea+"</td>"+
     "<td>"+item.from+"</td>"+
      "<td>"+item.to+"</td>"+
      "<td>"+item.mode+"</td>"+
      "<td>"+item.km+"</td>"+
      '<td >'+item.purpose+"</td>"+
      
    "</tr>").appendTo('#printTable')})
$("#monthYear").html("for the month of  "+month+" "+year)
 $("#headding").html("Tour particulars of "+myName+" ("+desig+")"+", Office of Assistant Director (Soil Survey),"+place);
$("#place").html(place);
$("#fName").html(myName);
$("#fDesig").html(desig);
 /*queryString = .substring(1);
var queries = queryString.split("&");
for (var i = 0; i < queries.length; i++)
{
  document.write(queries[i] + "<br>");
}*/
