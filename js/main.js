$(function() {
  setInterval(function() {
    var maxNumData = 20,
        numData = Math.round(Math.random()*maxNumData),
        data = d3.range(numData).map(function(d) { return { "a": Math.random(), "b": Math.random() }; });
    $("#grid").html('<pre>'+JSON.stringify(data,null,'\t')+'</pre>');
  },1000);
});
