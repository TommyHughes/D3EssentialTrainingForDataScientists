var dataArray = [5,11,18];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
            .attr("height",function(d,i){return d*15;})
            .attr("width","50")
            .attr("x",function(d,i){return 60*i;})
            .attr("y",function(d,i){return 300-(d*15);})
            .attr("fill","pink");

var newX = 300;            
svg.selectAll("circle.first")
    .data(dataArray)
    .enter().append("circle")
            .attr("class","first")
            .attr("cx",function(d,i){newX+=(d*3)+(i*20); return newX;})
            .attr("cy","100")
            .attr("r",function(d,i){return d*3;});

var newX = 600;            
svg.selectAll("ellipse")
    .data(dataArray)
    .enter().append("ellipse")
            .attr("class","second")
            .attr("cx",function(d,i){newX+=(d*3)+(i*20); return newX;})
            .attr("cy","100")
            .attr("rx",function(d,i){return d*3;})
            .attr("ry",function(d,i){return 30;});

var newX = 900
svg.selectAll("line")
    .data(dataArray)
    .enter().append("line")
            .attr("x1",newX)
            .attr("y1",function(d,i){return 80+(i*20);})
            .attr("x2",function(d,i){return newX+(d*15);})
            .attr("y2",function(d,i){return 80+(i*20);})
            .attr("stroke","blue")
            .attr("stroke-width","2");

/**
You can adjust properties with
.attr("stroke","blue")
    as we did in the example(s) above

.style("stroke","green")
    which has the highest precedence

or simply adding line{stroke: red;} to style.css
    which has the second highest precedence

The course author mentions that the .css method should
be the preferred method. When that isn't sufficient, to use
the .attr(), and as a last resort to use .style(). She mentions
one of the creators of D3 also advises this approach.
**/

var textArray = ["start","middle","end"]
svg.append("text").selectAll("tspan")
    .data(textArray)
    .enter().append("tspan")
        .attr("x",newX)
        .attr("y",function(d,i){return 150+(i*30);})
        .attr("font-size","30")
        .attr("fill","none")
        .attr("stroke","blue")
        .attr("stroke-width","2")
        .attr("text-anchor","start")
        .attr("dominant-baseline","middle")
        .text(function(d){return d;});