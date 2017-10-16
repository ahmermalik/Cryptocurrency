/**
 * Created by ahmermalik on 10/16/17.
 */

var d1 = []

function basic_bars(horizontal) {

    var
        horizontal = (horizontal ? true : false), // Show horizontal bars
        // d1 = [],                                  // First data series
        d2 = [],                                  // Second data series
        point,                                    // Data point variable declaration
        i;

    // for (i = 0; i < 100000; i++) {

        // if (horizontal) {
        //     point = [Math.ceil(Math.random()*100), i];
        // } else {
        //     point = [i, Math.ceil(Math.random()*1)];
        // }

        //d1.push(point);
    // };

    //console.table(d1);
    console.log(d1)
    return [d1];
    // Draw the graph
    // Flotr.draw(
    //     container,
    //     [d1, d2],
    // );
}



$(document).ready(function(){


    var data = $.get('/api', null, (data)=>{
        d1.push(data.current_price.baseVolume);
        console.log(d1)
        var widgetDefinitions =[
            {
                widgetTitle : "Widget 1", //Title of the widget
                widgetId: "Widget1", //unique id for the widget
                widgetContent: "Some Random Content" //content for the widget
            },
            {
                widgetId : "id123",
                widgetTitle: "BTC Volume",
                widgetType : "chart",
                widgetContent : {
                    data : d1,
                    options : {
                        bars : {
                            show : true,
                            horizontal : true,
                            shadowSize : 0,
                            barWidth : 0.5
                        },
                        mouse : {
                            track : true,
                            relative : true
                        },
                        yaxis : {
                            min : 0,
                            autoscaleMargin : 1
                        }
                    }
                }
            }
        ];
        $("#myDashboard").sDashboard({
            dashboardData : widgetDefinitions,
            disableSelection : false // enables text selection on the dashboard
        });
    })
    setTimeout(() => {}, 1000)
})
