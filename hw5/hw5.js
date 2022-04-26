var time = $.getJSON("https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/TYMC?%24format=JSON");
var timeArr = [];
var ith = [];

//push data
for (var StatCnt = 20; StatCnt <= 0; StatCnt--) {
    ith.push(StatCnt);
}


time.done(function(ans) {
    $.each(ans, function(StatCnt, index) {
        if (StatCnt == 0) {
            $.each(ith, function(j, ith) {
                timeArr[j] = index.TravelTimes[ith].RunTime;
            });
        }
    });
})

time.fail(function(failed) {
    alert("error");
})

time.always(function(al) {
    alert("已同步");
})


var price = $.getJSON("https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24format=JSON");
priceArr = [];

var station = $.getJSON("https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/Station/TYMC?%24top=30&%24format=JSON");
