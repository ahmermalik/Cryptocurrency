/**
 * Created by ahmermalik on 10/16/17.
 */
var widgetDefinitions =[
    {
        widgetTitle : "Widget 1", //Title of the widget
        widgetId: "Widget1", //unique id for the widget
        widgetContent: "Some Random Content" //content for the widget
    },
    {
        widgetTitle : "Widget 2", //Title of the widget
        widgetId: "Widget2", //unique id for the widget
        widgetContent: "Some Random Content" //content for the widget
    }
];

$("#myDashboard").sDashboard({
    dashboardData : widgetDefinitions,
    disableSelection : false // enables text selection on the dashboard
});


(function basic_bars(container, horizontal) {

    var
        horizontal = (horizontal ? true : false), // Show horizontal bars
        d1 = [],                                  // First data series
        d2 = [],                                  // Second data series
        point,                                    // Data point variable declaration
        i;

    for (i = 0; i < 4; i++) {

        if (horizontal) {
            point = [Math.ceil(Math.random()*10), i];
        } else {
            point = [i, Math.ceil(Math.random()*10)];
        }

        d1.push(point);

        if (horizontal) {
            point = [Math.ceil(Math.random()*10), i+0.5];
        } else {
            point = [i+0.5, Math.ceil(Math.random()*10)];
        }

        d2.push(point);
    };

    // Draw the graph
    Flotr.draw(
        container,
        [d1, d2],
        {
            bars : {
                show : true,
                horizontal : horizontal,
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
    );
})(document.getElementById("editor-render-0"));


$("#myGraph").sDashboard({
    dashboardData : basic_bars
});