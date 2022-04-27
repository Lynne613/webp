var dataUrl = "https://cors-anywhere.herokuapp.com/https://wic.heo.taipei/OpenData/API/Rain/Get?stationNo=&loginId=open_rain&dataKey=85452C1D";
var data = $.getJSON(dataUrl);
var stationNo;

// data.done(functin(result) {
//     $.each(result, function(stationNo, index) {

//     });

// });