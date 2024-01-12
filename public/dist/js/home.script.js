(function ($) {
    "use strict";
    var primarycolor = getComputedStyle(document.body).getPropertyValue('--primarycolor');
    var bordercolor = getComputedStyle(document.body).getPropertyValue('--bordercolor');
    var bodycolor = getComputedStyle(document.body).getPropertyValue('--bodycolor');
    var theme = 'light';
    if ($('body').hasClass('dark')) {
        theme = 'dark';
    }
    if ($('body').hasClass('dark-alt')) {
        theme = 'dark';
    }
     if ($('body').hasClass('gradient')) {
        theme = 'dark';
    }
////////////////////////////////// LIne Chart /////////////////////////////
    if ($("#apex_today_order").length > 0)
    {
        var options = {
            chart: {
                type: 'line',
                height: 80,
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    color: '#1e3d73',
                    opacity: 0.7,
                }
            },
            series: [{
                    data: [18, 7, 32, 14, 42, 28, 62, 43, 68, 27]
                }],
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            markers: {
                size: 0
            },
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0
                }
            },
            colors: ['#1e3d73'],
            tooltip: {
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter(val) {
                            return '';
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 80,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 40
                            }
                        },
                    },
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                }

            ]
        }


        var chart = new ApexCharts(
                document.querySelector("#apex_today_order"),
                options
                );
        chart.render();
    }

    if ($("#apex_today_visitors").length > 0)
    {
        options = {
            chart: {
                type: 'line',
                height: 80,
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    color: '#28a745',
                    opacity: 0.7,
                }
            },
            series: [{
                    data: [41, 9, 36, 12, 44, 25, 59, 41, 66, 25]
                }],
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            markers: {
                size: 0
            },
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0
                }
            },
            colors: ['#28a745'],
            tooltip: {
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter(val) {
                            return '';
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 80,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 40
                            }
                        },
                    },
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                }

            ]
        }


        var chart = new ApexCharts(
                document.querySelector("#apex_today_visitors"),
                options
                );
        chart.render();
    }
    if ($("#apex_today_sale").length > 0)
    {
        options = {
            chart: {
                type: 'line',
                height: 80,
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    color: '#17a2b8',
                    opacity: 0.7,
                }
            },
            series: [{
                    data: [7, 9, 36, 12, 44, 25, 59, 41, 12, 25]
                }],
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            markers: {
                size: 0
            },
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0
                }
            },
            colors: ['#17a2b8'],
            tooltip: {
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter(val) {
                            return '';
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 80,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 40
                            }
                        },
                    },
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                }

            ]
        }


        var chart = new ApexCharts(
                document.querySelector("#apex_today_sale"),
                options
                );
        chart.render();
    }
    if ($("#apex_today_profit").length > 0)
    {
        options = {
            chart: {
                type: 'line',
                height: 80,
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    color: '#ffc107',
                    opacity: 0.7,
                }
            },
            series: [{
                    data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
                }],
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            markers: {
                size: 0
            },
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0
                }
            },
            colors: ['#ffc107'],
            tooltip: {
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter(val) {
                            return '';
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 80,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 40
                            }
                        },
                    },
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                }

            ]
        }


        var chart = new ApexCharts(
                document.querySelector("#apex_today_profit"),
                options
                );
        chart.render();
    }

/////////////////////////////////// Mixed Chart /////////////////////
    if ($("#apex_mixed_chart").length > 0)
    {
        options = {
            theme: {
                mode: theme
            },
            chart: {
                height: 462,
                type: 'area',
                stacked: false,
            },
            responsive: [
                {
                    breakpoint: 767,
                    options: {
                        chart: {
                            height: 262
                        }
                    }
                }
            ],
            stroke: {
                width: [1, 1, 1],
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%'
                }
            },
            colors: ['#1e3d73', '#17a2b8'],
            series: [{
                    name: 'Orders',
                    type: 'area',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
                }, {
                    name: 'Sale',
                    type: 'area',
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
                }],
            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: false,
                    shade: 'light',
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: [0, 100, 100, 100]
                }
            },
            labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
            markers: {
                size: 0
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                min: 0
            },
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return  y.toFixed(0) + " views";
                        }
                        return y;
                    }
                }
            },
            legend: {
                labels: {
                    useSeriesColors: true
                }
            }
        }

        var chart = new ApexCharts(
                document.querySelector("#apex_mixed_chart"),
                options
                );
        chart.render();
    }
/////////////////////////////////// Corona Chart /////////////////////
    if ($("#chartjs_corona").length > 0)
    {

        var config = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                        label: 'Coronavirus Cases',
                        borderColor: primarycolor,
                        backgroundColor: 'rgba(30, 61, 115, 0.2)',
                        data: [10, 20, 39, 20, 54, 46, 79],
                        borderWidth: 1
                    }, {
                        label: 'Recovered',
                        borderColor: '#17a2b8',
                        backgroundColor: 'rgba(23, 162, 184, 0.2)',
                        data: [27, 69, 22, 55, 31, 50, 30],
                        borderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                tooltips: {
                    mode: 'index',
                },
                hover: {
                    mode: 'index'
                },
                legend: {
                    position: 'top',
                    display: false,
                    labels: {
                        fontColor: bodycolor
                    }
                },
                scales: {
                    xAxes: [{
                            gridLines: {
                                display: true,
                                color: bordercolor,
                                zeroLineColor: bordercolor
                            },
                            ticks: {
                                fontColor: bodycolor,
                            },
                        }],
                    yAxes: [{

                            gridLines: {
                                display: true,
                                color: bordercolor,
                                zeroLineColor: bordercolor
                            },
                            ticks: {
                                fontColor: bodycolor,
                            }
                        }]
                }
            }
        };
        var chartjs_area_stacked = document.getElementById("chartjs_corona");
        if (chartjs_area_stacked) {
            var ctx = document.getElementById('chartjs_corona').getContext('2d');
            window.myLine = new Chart(ctx, config);
        }

    }

/////////////////////// Map ///////////////////////
    if ($("#world-map-gdp").length > 0)
    {
        var map,
                markers = [
                    {latLng: [52.50, 13.39], name: 'Berlin'},
                    {latLng: [53.56, 10.00], name: 'Hamburg'},
                    {latLng: [48.13, 11.56], name: 'Munich'},
                    {latLng: [50.95, 6.96], name: 'Cologne'},
                    {latLng: [50.11, 8.68], name: 'Frankfurt am Main'},
                    {latLng: [48.77, 9.17], name: 'Stuttgart'},
                    {latLng: [51.23, 6.78], name: 'Düsseldorf'},
                    {latLng: [51.51, 7.46], name: 'Dortmund'},
                    {latLng: [51.45, 7.01], name: 'Essen'},
                    {latLng: [53.07, 8.80], name: 'Bremen'}
                ],
                cityAreaData = [
                    887.70,
                    755.16,
                    310.69,
                    405.17,
                    248.31,
                    207.35,
                    217.22,
                    280.71,
                    210.32,
                    325.42
                ];
        map = new jvm.Map({
            container: $('#world-map-gdp'),
            backgroundColor: 'transparent',
            map: 'us_aea',
            regionsSelectable: true,
            markersSelectable: true,
            markers: markers,
            markerStyle: {
                initial: {
                    fill: primarycolor
                },
                selected: {
                    fill: primarycolor
                }
            },
            regionStyle: {
                initial: {
                    fill: primarycolor
                },
                selected: {
                    fill: primarycolor
                }
            },
            series: {
                markers: [{
                        attribute: 'r',
                        scale: [5, 15],
                        values: cityAreaData
                    }]
            },
            onRegionSelected: function () {
                if (window.localStorage) {
                    window.localStorage.setItem(
                            'jvectormap-selected-regions',
                            JSON.stringify(map.getSelectedRegions())
                            );
                }
            },
            onMarkerSelected: function () {
                if (window.localStorage) {
                    window.localStorage.setItem(
                            'jvectormap-selected-markers',
                            JSON.stringify(map.getSelectedMarkers())
                            );
                }
            }
        });
    }
//////////////////////////// Stacking /////////////////////////////////
    if ($("#flot-stacking").length > 0)
    {
        var data1 = [[0, 12], [1, 10], [2, 7], [3, 11], [4, 15], [5, 20], [6, 22], [7, 19], [8, 18], [9, 20], [10, 17], [11, 19], [12, 18], [13, 14], [14, 9]];
        var data2 = [[0, 2], [1, 1], [2, 2], [3, 4], [4, 2], [5, 1], [6, 0], [7, 0], [8, 5], [9, 2], [10, 8], [11, 6], [12, 9], [13, 2], [14, 0]];
        var flotChartOption = {
            series: {
                shadowSize: 0,
                bars: {
                    show: true,
                    lineWidth: 0,
                    barWidth: .5,
                    fill: 1
                }
            },
            grid: {
                aboveData: true,
                color: '#17a2b8',
                borderWidth: 0,
                labelMargin: 0
            },
            yaxis: {
                show: false,
                min: 0,
                max: 25
            },
            xaxis: {
                show: false
            }
        };
        $.plot('#flot-stacking', [{
                data: data1,
                color: '#17a2b8'
            }, {
                data: data2,
                color: primarycolor
            }], flotChartOption);
    }

    if ($('.barfiller').length > 0)
    {
        $(".barfiller").each(function () {
            $(this).barfiller({barColor: $(this).data('color')});
        });
    }


/////////////////////////////////// Analytic Chart /////////////////////
    if ($("#apex_analytic_chart").length > 0)
    {
        options = {
            theme: {
                mode: theme
            },
            chart: {
                height: 350,
                type: 'bar',
            },
            responsive: [
                {
                    breakpoint: 767,
                    options: {
                        chart: {
                            height: 220
                        }
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            colors: ['#1e3d73', '#17a2b8', '#1ee0ac'],
            series: [{
                    name: 'Total Visits',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                }, {
                    name: 'Total Sessions',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                }, {
                    name: 'Page View',
                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
                }],
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '(thousands)'
                }
            },
            fill: {
                opacity: 1

            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " thousands"
                    }
                }
            }
        }

        var chart = new ApexCharts(
                document.querySelector("#apex_analytic_chart"),
                options
                );
        chart.render();
    }



////////////////////////////////// Analytic Stats Chart /////////////////////////////
    if ($("#analitic_state1").length > 0)
    {
        var options = {
            chart: {
                type: 'line',
                height: 20,
                width: 60,
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    color: '#1e3d73',
                    opacity: 0.7,
                }
            },
            series: [{
                    data: [18, 7, 32, 14, 42, 28, 62, 43, 68, 27]
                }],
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            markers: {
                size: 0
            },
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0
                }
            },
            colors: ['#1e3d73'],
            tooltip: {
                enabled: false,
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter(val) {
                            return '';
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 40
                            }
                        },
                    },
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                }

            ]
        }


        var chart = new ApexCharts(
                document.querySelector("#analitic_state1"),
                options
                );
        chart.render();
    }

    if ($("#analitic_state2").length > 0)
    {
        var options = {
            chart: {
                type: 'line',
                height: 20,
                width: 60,
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    color: '#1ee0ac',
                    opacity: 0.7,
                }
            },
            series: [{
                    data: [18, 7, 32, 14, 42, 28, 62, 43, 68, 27]
                }],
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            markers: {
                size: 0
            },
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0
                }
            },
            colors: ['#1ee0ac'],
            tooltip: {
                enabled: false,
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter(val) {
                            return '';
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 40
                            }
                        },
                    },
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                }

            ]
        }


        var chart = new ApexCharts(
                document.querySelector("#analitic_state2"),
                options
                );
        chart.render();
    }

    if ($("#analitic_state3").length > 0)
    {
        var options = {
            chart: {
                type: 'line',
                height: 20,
                width: 60,
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    color: '#17a2b8',
                    opacity: 0.7,
                }
            },
            series: [{
                    data: [18, 7, 32, 14, 42, 28, 62, 43, 68, 27]
                }],
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            markers: {
                size: 0
            },
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0
                }
            },
            colors: ['#17a2b8'],
            tooltip: {
                enabled: false,
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter(val) {
                            return '';
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 40
                            }
                        },
                    },
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                }

            ]
        }


        var chart = new ApexCharts(
                document.querySelector("#analitic_state3"),
                options
                );
        chart.render();
    }

    if ($("#analitic_state4").length > 0)
    {
        var options = {
            chart: {
                type: 'line',
                height: 20,
                width: 60,
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    color: '#ffc107',
                    opacity: 0.7,
                }
            },
            series: [{
                    data: [18, 7, 32, 14, 42, 28, 62, 43, 68, 27]
                }],
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            markers: {
                size: 0
            },
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0
                }
            },
            colors: ['#ffc107'],
            tooltip: {
                enabled: false,
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter(val) {
                            return '';
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 40
                            }
                        },
                    },
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                }

            ]
        }


        var chart = new ApexCharts(
                document.querySelector("#analitic_state4"),
                options
                );
        chart.render();
    }

    if ($("#analitic_state5").length > 0)
    {
        var options = {
            chart: {
                type: 'line',
                height: 20,
                width: 60,
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    color: '#dc3545',
                    opacity: 0.7,
                }
            },
            series: [{
                    data: [18, 7, 32, 14, 42, 28, 62, 43, 68, 27]
                }],
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            markers: {
                size: 0
            },
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0
                }
            },
            colors: ['#dc3545'],
            tooltip: {
                enabled: false,
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter(val) {
                            return '';
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 40
                            }
                        },
                    },
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                }

            ]
        }


        var chart = new ApexCharts(
                document.querySelector("#analitic_state5"),
                options
                );
        chart.render();
    }

    if ($("#analitic_state6").length > 0)
    {
        var options = {
            chart: {
                type: 'line',
                height: 20,
                width: 60,
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    color: '#343a40',
                    opacity: 0.7,
                }
            },
            series: [{
                    data: [18, 7, 32, 14, 42, 28, 62, 43, 68, 27]
                }],
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            markers: {
                size: 0
            },
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0
                }
            },
            colors: ['#343a40'],
            tooltip: {
                enabled: false,
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter(val) {
                            return '';
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 40
                            }
                        },
                    },
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                }

            ]
        }


        var chart = new ApexCharts(
                document.querySelector("#analitic_state6"),
                options
                );
        chart.render();
    }

    if ($("#analitic_state7").length > 0)
    {
        var options = {
            chart: {
                type: 'line',
                height: 20,
                width: 60,
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    color: '#6c757d',
                    opacity: 0.7,
                }
            },
            series: [{
                    data: [18, 7, 32, 14, 42, 28, 62, 43, 68, 27]
                }],
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            markers: {
                size: 0
            },
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0
                }
            },
            colors: ['#6c757d'],
            tooltip: {
                enabled: false,
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter(val) {
                            return '';
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 40
                            }
                        },
                    },
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 20,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                }

            ]
        }


        var chart = new ApexCharts(
                document.querySelector("#analitic_state7"),
                options
                );
        chart.render();
    }


/////////////////////// Index 4 Script /////////////////////////


    if ($("#apex_primary_chart").length > 0)
    {
        options = {
            chart: {
                type: 'line',
                height: 80,
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    color: '#000',
                    opacity: 0.7,
                }
            },
            series: [{
                    data: [41, 9, 36, 12, 44, 25, 59, 41, 66, 25]
                }],
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            markers: {
                size: 0
            },
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0
                }
            },
            colors: ['#1e3d73'],
            tooltip: {
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter(val) {
                            return '';
                        }
                    }
                }
            },
            responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 80,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 40
                            }
                        },
                    },
                },
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                }

            ]
        }


        var chart = new ApexCharts(
                document.querySelector("#apex_primary_chart"),
                options
                );
        chart.render();
    }


    if ($("#apex_main_chart").length > 0)
    {
        options = {
            theme: {
                mode: theme
            },
            chart: {
                height: 380,
                type: 'area',
                stacked: false,
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [1, 1, 1],
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%'
                }
            },
            colors: ['#1e3d73', '#17a2b8'],
            series: [{
                    name: 'Orders',
                    type: 'area',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
                }, {
                    name: 'Sale',
                    type: 'area',
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
                }],
            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: false,
                    shade: 'light',
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: [0, 100, 100, 100]
                }
            },
            labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
            markers: {
                size: 0
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                min: 0
            },
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return  y.toFixed(0) + " views";
                        }
                        return y;
                    }
                }
            },
            legend: {
                show: false,
                labels: {
                    useSeriesColors: true
                }
            }
        }

        var chart = new ApexCharts(
                document.querySelector("#apex_main_chart"),
                options
                );
        chart.render();
    }
/////////////////////////////////// Bar Chart /////////////////////
    if ($("#apex_bar_chart").length > 0)
    {
        options = {
            theme: {
                mode: theme
            },
            grid: {

                yaxis: {
                    lines: {
                        show: false
                    }
                }
            },
            chart: {
                height: 318,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    columnWidth: '10',
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#1e3d73'],
            series: [{
                    data: [400, 430, 448, 470, 540, 580]
                }],
            xaxis: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France']

            }
        }

        var chart = new ApexCharts(
                document.querySelector("#apex_bar_chart"),
                options
                );
        chart.render();
    }

    if ($("#flot-report").length > 0)
    {
        var data1 = [[0, 12], [1, 10], [2, 7], [3, 11], [4, 15], [5, 20], [6, 22], [7, 19], [8, 18], [9, 20], [10, 17], [11, 19], [12, 18], [13, 14], [14, 9]];
        var data2 = [[0, 2], [1, 1], [2, 2], [3, 4], [4, 2], [5, 1], [6, 0], [7, 0], [8, 5], [9, 2], [10, 8], [11, 6], [12, 9], [13, 2], [14, 0]];
        var flotChartOption = {
            series: {
                shadowSize: 0,
                bars: {
                    show: true,
                    lineWidth: 0,
                    barWidth: .5,
                    fill: 1
                }
            },
            grid: {
                aboveData: true,
                color: '#17a2b8',
                borderWidth: 0,
                labelMargin: 0
            },
            yaxis: {
                show: false,
                min: 0,
                max: 25
            },
            xaxis: {
                show: false
            }
        };
        $.plot('#flot-report', [{
                data: data1,
                color: '#ffc107'
            }, {
                data: data2,
                color: primarycolor
            }], flotChartOption);
    }

    var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                    data: [3, 28, 67],
                    backgroundColor: [
                        '#1e3d73',
                        '#17a2b8',
                        '#ffc107'
                    ],
                    label: 'Dataset 1'
                }],
            labels: [
                'Mobile',
                'Desktop',
                'Laptop'
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontColor: bodycolor
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true
            },
        }
    };
    var chartjs_other_pie = document.getElementById("chartjs-other-pie");
    if (chartjs_other_pie) {
        var ctx = document.getElementById('chartjs-other-pie').getContext('2d');
        window.myDoughnut = new Chart(ctx, config);
    }


/////////////////////////////////// Analytic Chart /////////////////////
    if ($("#apex_crypto_chart").length > 0)
    {
        options = {
            theme: {
                mode: theme
            },
            chart: {
                height: 320,
                type: 'bar',
            },
            responsive: [
                {
                    breakpoint: 767,
                    options: {
                        chart: {
                            height: 220
                        }
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            colors: ['#1e3d73', '#17a2b8'],
            series: [{
                    name: 'Bitcoin',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                }, {
                    name: 'Ethereum',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                }],
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '(dollar)'
                }
            },
            fill: {
                opacity: 1

            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " dollar"
                    }
                }
            }
        }

        var chart = new ApexCharts(
                document.querySelector("#apex_crypto_chart"),
                options
                );
        chart.render();
    }

////////////// Account Page Chart //////////////////////
    var chartjs_multiaxis_bar = document.getElementById("chartjs-account-chart");
    if (chartjs_multiaxis_bar) {
        var barmultiaxisChartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                    label: 'Investment',
                    backgroundColor: [
                        primarycolor,
                        primarycolor,
                        primarycolor,
                        primarycolor,
                        primarycolor,
                        primarycolor,
                        primarycolor,
                        primarycolor,
                        primarycolor,
                        primarycolor,
                        primarycolor,
                        primarycolor
                    ],
                    yAxisID: 'y-axis-1',
                    data: [35, 55, 75, 95, 115, 135, 155, 175, 195, 215, 235, 250]
                }]

        };
        ctx = document.getElementById('chartjs-account-chart').getContext('2d');
        window.myBar = new Chart(ctx, {
            type: 'bar',
            data: barmultiaxisChartData,
            options: {
                responsive: true,
                legend: {
                    display: false,
                    position: 'top',
                    labels: {
                        fontColor: bodycolor
                    }
                },
                scales: {
                    xAxes: [{
                            display: true,
                            maxBarThickness: 10,
                            gridLines: {
                                display: true,
                                color: bordercolor,
                                zeroLineColor: bordercolor
                            },
                            ticks: {
                                fontColor: bodycolor,
                            },
                        }],
                    yAxes: [{
                            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                            display: false,
                            position: 'left',
                            id: 'y-axis-2',
                            gridLines: {
                                drawOnChartArea: false,
                                color: bordercolor,
                                zeroLineColor: bordercolor
                            },
                            ticks: {
                                fontColor: bodycolor,
                            }
                        }, {
                            display: true,
                            gridLines: {
                                display: true,
                                color: bordercolor,
                                zeroLineColor: bordercolor
                            },
                            ticks: {
                                fontColor: bodycolor,
                            }
                        }]
                }
            }
        });
    }

/////////////////////////////////// ETHEREUM Chart /////////////////////
    if ($("#eth_apex_area_chart").length > 0)
    {
        var series =
                {
                    "monthDataSeries1": {
                        "prices": [11, 32, 45, 32, 34, 52, 41]
                    }
                }
        var options = {
            theme: {
                mode: theme
            },
            chart: {

                type: 'area',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            colors: ['#1e3d73', '#6e63dc', '#635bb5', '#615b9a'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            series: [{
                    name: "STOCK ABC",
                    data: series.monthDataSeries1.prices
                }],
            xaxis: {
                show: !1, labels: {
                    show: !1
                }
                , axisBorder: {
                    show: !1
                }
            },
            yaxis: {
                show: !1
            },
            grid: {
                show: !1, padding: {
                    bottom: -40,
                    left: 0,
                    right: 0
                }
            },
            legend: {
                horizontalAlign: 'left'
            }
        }

        var chart = new ApexCharts(
                document.querySelector("#eth_apex_area_chart"),
                options
                );
        chart.render();
    }
/////////////////////////////////// Bitcoin Chart /////////////////////
    if ($("#bch_apex_area_chart").length > 0)
    {
        var series =
                {
                    "monthDataSeries1": {
                        "prices": [11, 32, 45, 32, 34, 52, 41]
                    }
                }
        var options = {
            theme: {
                mode: theme
            },
            chart: {

                type: 'area',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            colors: ['#28a745', '#37ad52', '#4ac165', '#5fca77', '#7ed492'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            series: [{
                    name: "STOCK ABC",
                    data: series.monthDataSeries1.prices
                }],
            xaxis: {
                show: !1, labels: {
                    show: !1
                }
                , axisBorder: {
                    show: !1
                }
            },
            yaxis: {
                show: !1
            },
            grid: {
                show: !1, padding: {
                    top: 0,
                    bottom: -40,
                    left: 0,
                    right: 0
                }
            },
            legend: {
                horizontalAlign: 'left'
            }
        }

        var chart = new ApexCharts(
                document.querySelector("#bch_apex_area_chart"),
                options
                );
        chart.render();
    }
/////////////////////////////////// Bitcoin Chart /////////////////////
    if ($("#stats_apex_area_chart").length > 0)
    {
        var series =
                {
                    "monthDataSeries1": {
                        "prices": [11, 32, 45, 32, 34, 52, 41]
                    }
                }
        var options = {
            theme: {
                mode: theme
            },
            chart: {

                type: 'area',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            colors: ['#17a2b8', '#d43f4d', '#da5965', '#de6f79', '#e88790'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            series: [{
                    name: "STOCK ABC",
                    data: series.monthDataSeries1.prices
                }],
            xaxis: {
                show: !1, labels: {
                    show: !1
                }
                , axisBorder: {
                    show: !1
                }
            },
            yaxis: {
                show: !1
            },
            grid: {
                show: !1, padding: {
                    top: 0,
                    bottom: -40,
                    left: 0,
                    right: 0
                }
            },
            legend: {
                horizontalAlign: 'left'
            }
        }

        var chart = new ApexCharts(
                document.querySelector("#stats_apex_area_chart"),
                options
                );
        chart.render();
    }

})(jQuery);
