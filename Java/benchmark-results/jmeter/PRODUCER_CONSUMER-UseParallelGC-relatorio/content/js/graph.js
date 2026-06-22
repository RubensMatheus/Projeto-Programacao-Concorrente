/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 16408.0, "minX": 0.0, "maxY": 22834.0, "series": [{"data": [[0.0, 16408.0], [0.1, 16408.0], [0.2, 16408.0], [0.3, 16408.0], [0.4, 16408.0], [0.5, 16408.0], [0.6, 16408.0], [0.7, 16408.0], [0.8, 16408.0], [0.9, 16408.0], [1.0, 16408.0], [1.1, 16408.0], [1.2, 16408.0], [1.3, 16408.0], [1.4, 16408.0], [1.5, 16408.0], [1.6, 16408.0], [1.7, 16408.0], [1.8, 16408.0], [1.9, 16408.0], [2.0, 16409.0], [2.1, 16409.0], [2.2, 16409.0], [2.3, 16409.0], [2.4, 16409.0], [2.5, 16409.0], [2.6, 16409.0], [2.7, 16409.0], [2.8, 16409.0], [2.9, 16409.0], [3.0, 16409.0], [3.1, 16409.0], [3.2, 16409.0], [3.3, 16409.0], [3.4, 16409.0], [3.5, 16409.0], [3.6, 16409.0], [3.7, 16409.0], [3.8, 16409.0], [3.9, 16409.0], [4.0, 16559.0], [4.1, 16559.0], [4.2, 16559.0], [4.3, 16559.0], [4.4, 16559.0], [4.5, 16559.0], [4.6, 16559.0], [4.7, 16559.0], [4.8, 16559.0], [4.9, 16559.0], [5.0, 16559.0], [5.1, 16559.0], [5.2, 16559.0], [5.3, 16559.0], [5.4, 16559.0], [5.5, 16559.0], [5.6, 16559.0], [5.7, 16559.0], [5.8, 16559.0], [5.9, 16559.0], [6.0, 16565.0], [6.1, 16565.0], [6.2, 16565.0], [6.3, 16565.0], [6.4, 16565.0], [6.5, 16565.0], [6.6, 16565.0], [6.7, 16565.0], [6.8, 16565.0], [6.9, 16565.0], [7.0, 16565.0], [7.1, 16565.0], [7.2, 16565.0], [7.3, 16565.0], [7.4, 16565.0], [7.5, 16565.0], [7.6, 16565.0], [7.7, 16565.0], [7.8, 16565.0], [7.9, 16565.0], [8.0, 16661.0], [8.1, 16661.0], [8.2, 16661.0], [8.3, 16661.0], [8.4, 16661.0], [8.5, 16661.0], [8.6, 16661.0], [8.7, 16661.0], [8.8, 16661.0], [8.9, 16661.0], [9.0, 16661.0], [9.1, 16661.0], [9.2, 16661.0], [9.3, 16661.0], [9.4, 16661.0], [9.5, 16661.0], [9.6, 16661.0], [9.7, 16661.0], [9.8, 16661.0], [9.9, 16661.0], [10.0, 16928.0], [10.1, 16928.0], [10.2, 16928.0], [10.3, 16928.0], [10.4, 16928.0], [10.5, 16928.0], [10.6, 16928.0], [10.7, 16928.0], [10.8, 16928.0], [10.9, 16928.0], [11.0, 16928.0], [11.1, 16928.0], [11.2, 16928.0], [11.3, 16928.0], [11.4, 16928.0], [11.5, 16928.0], [11.6, 16928.0], [11.7, 16928.0], [11.8, 16928.0], [11.9, 16928.0], [12.0, 17241.0], [12.1, 17241.0], [12.2, 17241.0], [12.3, 17241.0], [12.4, 17241.0], [12.5, 17241.0], [12.6, 17241.0], [12.7, 17241.0], [12.8, 17241.0], [12.9, 17241.0], [13.0, 17241.0], [13.1, 17241.0], [13.2, 17241.0], [13.3, 17241.0], [13.4, 17241.0], [13.5, 17241.0], [13.6, 17241.0], [13.7, 17241.0], [13.8, 17241.0], [13.9, 17241.0], [14.0, 17395.0], [14.1, 17395.0], [14.2, 17395.0], [14.3, 17395.0], [14.4, 17395.0], [14.5, 17395.0], [14.6, 17395.0], [14.7, 17395.0], [14.8, 17395.0], [14.9, 17395.0], [15.0, 17395.0], [15.1, 17395.0], [15.2, 17395.0], [15.3, 17395.0], [15.4, 17395.0], [15.5, 17395.0], [15.6, 17395.0], [15.7, 17395.0], [15.8, 17395.0], [15.9, 17395.0], [16.0, 17430.0], [16.1, 17430.0], [16.2, 17430.0], [16.3, 17430.0], [16.4, 17430.0], [16.5, 17430.0], [16.6, 17430.0], [16.7, 17430.0], [16.8, 17430.0], [16.9, 17430.0], [17.0, 17430.0], [17.1, 17430.0], [17.2, 17430.0], [17.3, 17430.0], [17.4, 17430.0], [17.5, 17430.0], [17.6, 17430.0], [17.7, 17430.0], [17.8, 17430.0], [17.9, 17430.0], [18.0, 17456.0], [18.1, 17456.0], [18.2, 17456.0], [18.3, 17456.0], [18.4, 17456.0], [18.5, 17456.0], [18.6, 17456.0], [18.7, 17456.0], [18.8, 17456.0], [18.9, 17456.0], [19.0, 17456.0], [19.1, 17456.0], [19.2, 17456.0], [19.3, 17456.0], [19.4, 17456.0], [19.5, 17456.0], [19.6, 17456.0], [19.7, 17456.0], [19.8, 17456.0], [19.9, 17456.0], [20.0, 17562.0], [20.1, 17562.0], [20.2, 17562.0], [20.3, 17562.0], [20.4, 17562.0], [20.5, 17562.0], [20.6, 17562.0], [20.7, 17562.0], [20.8, 17562.0], [20.9, 17562.0], [21.0, 17562.0], [21.1, 17562.0], [21.2, 17562.0], [21.3, 17562.0], [21.4, 17562.0], [21.5, 17562.0], [21.6, 17562.0], [21.7, 17562.0], [21.8, 17562.0], [21.9, 17562.0], [22.0, 17563.0], [22.1, 17563.0], [22.2, 17563.0], [22.3, 17563.0], [22.4, 17563.0], [22.5, 17563.0], [22.6, 17563.0], [22.7, 17563.0], [22.8, 17563.0], [22.9, 17563.0], [23.0, 17563.0], [23.1, 17563.0], [23.2, 17563.0], [23.3, 17563.0], [23.4, 17563.0], [23.5, 17563.0], [23.6, 17563.0], [23.7, 17563.0], [23.8, 17563.0], [23.9, 17563.0], [24.0, 17667.0], [24.1, 17667.0], [24.2, 17667.0], [24.3, 17667.0], [24.4, 17667.0], [24.5, 17667.0], [24.6, 17667.0], [24.7, 17667.0], [24.8, 17667.0], [24.9, 17667.0], [25.0, 17667.0], [25.1, 17667.0], [25.2, 17667.0], [25.3, 17667.0], [25.4, 17667.0], [25.5, 17667.0], [25.6, 17667.0], [25.7, 17667.0], [25.8, 17667.0], [25.9, 17667.0], [26.0, 17694.0], [26.1, 17694.0], [26.2, 17694.0], [26.3, 17694.0], [26.4, 17694.0], [26.5, 17694.0], [26.6, 17694.0], [26.7, 17694.0], [26.8, 17694.0], [26.9, 17694.0], [27.0, 17694.0], [27.1, 17694.0], [27.2, 17694.0], [27.3, 17694.0], [27.4, 17694.0], [27.5, 17694.0], [27.6, 17694.0], [27.7, 17694.0], [27.8, 17694.0], [27.9, 17694.0], [28.0, 17700.0], [28.1, 17700.0], [28.2, 17700.0], [28.3, 17700.0], [28.4, 17700.0], [28.5, 17700.0], [28.6, 17700.0], [28.7, 17700.0], [28.8, 17700.0], [28.9, 17700.0], [29.0, 17700.0], [29.1, 17700.0], [29.2, 17700.0], [29.3, 17700.0], [29.4, 17700.0], [29.5, 17700.0], [29.6, 17700.0], [29.7, 17700.0], [29.8, 17700.0], [29.9, 17700.0], [30.0, 17935.0], [30.1, 17935.0], [30.2, 17935.0], [30.3, 17935.0], [30.4, 17935.0], [30.5, 17935.0], [30.6, 17935.0], [30.7, 17935.0], [30.8, 17935.0], [30.9, 17935.0], [31.0, 17935.0], [31.1, 17935.0], [31.2, 17935.0], [31.3, 17935.0], [31.4, 17935.0], [31.5, 17935.0], [31.6, 17935.0], [31.7, 17935.0], [31.8, 17935.0], [31.9, 17935.0], [32.0, 18013.0], [32.1, 18013.0], [32.2, 18013.0], [32.3, 18013.0], [32.4, 18013.0], [32.5, 18013.0], [32.6, 18013.0], [32.7, 18013.0], [32.8, 18013.0], [32.9, 18013.0], [33.0, 18013.0], [33.1, 18013.0], [33.2, 18013.0], [33.3, 18013.0], [33.4, 18013.0], [33.5, 18013.0], [33.6, 18013.0], [33.7, 18013.0], [33.8, 18013.0], [33.9, 18013.0], [34.0, 18231.0], [34.1, 18231.0], [34.2, 18231.0], [34.3, 18231.0], [34.4, 18231.0], [34.5, 18231.0], [34.6, 18231.0], [34.7, 18231.0], [34.8, 18231.0], [34.9, 18231.0], [35.0, 18231.0], [35.1, 18231.0], [35.2, 18231.0], [35.3, 18231.0], [35.4, 18231.0], [35.5, 18231.0], [35.6, 18231.0], [35.7, 18231.0], [35.8, 18231.0], [35.9, 18231.0], [36.0, 18303.0], [36.1, 18303.0], [36.2, 18303.0], [36.3, 18303.0], [36.4, 18303.0], [36.5, 18303.0], [36.6, 18303.0], [36.7, 18303.0], [36.8, 18303.0], [36.9, 18303.0], [37.0, 18303.0], [37.1, 18303.0], [37.2, 18303.0], [37.3, 18303.0], [37.4, 18303.0], [37.5, 18303.0], [37.6, 18303.0], [37.7, 18303.0], [37.8, 18303.0], [37.9, 18303.0], [38.0, 18310.0], [38.1, 18310.0], [38.2, 18310.0], [38.3, 18310.0], [38.4, 18310.0], [38.5, 18310.0], [38.6, 18310.0], [38.7, 18310.0], [38.8, 18310.0], [38.9, 18310.0], [39.0, 18310.0], [39.1, 18310.0], [39.2, 18310.0], [39.3, 18310.0], [39.4, 18310.0], [39.5, 18310.0], [39.6, 18310.0], [39.7, 18310.0], [39.8, 18310.0], [39.9, 18310.0], [40.0, 18341.0], [40.1, 18341.0], [40.2, 18341.0], [40.3, 18341.0], [40.4, 18341.0], [40.5, 18341.0], [40.6, 18341.0], [40.7, 18341.0], [40.8, 18341.0], [40.9, 18341.0], [41.0, 18341.0], [41.1, 18341.0], [41.2, 18341.0], [41.3, 18341.0], [41.4, 18341.0], [41.5, 18341.0], [41.6, 18341.0], [41.7, 18341.0], [41.8, 18341.0], [41.9, 18341.0], [42.0, 18926.0], [42.1, 18926.0], [42.2, 18926.0], [42.3, 18926.0], [42.4, 18926.0], [42.5, 18926.0], [42.6, 18926.0], [42.7, 18926.0], [42.8, 18926.0], [42.9, 18926.0], [43.0, 18926.0], [43.1, 18926.0], [43.2, 18926.0], [43.3, 18926.0], [43.4, 18926.0], [43.5, 18926.0], [43.6, 18926.0], [43.7, 18926.0], [43.8, 18926.0], [43.9, 18926.0], [44.0, 19051.0], [44.1, 19051.0], [44.2, 19051.0], [44.3, 19051.0], [44.4, 19051.0], [44.5, 19051.0], [44.6, 19051.0], [44.7, 19051.0], [44.8, 19051.0], [44.9, 19051.0], [45.0, 19051.0], [45.1, 19051.0], [45.2, 19051.0], [45.3, 19051.0], [45.4, 19051.0], [45.5, 19051.0], [45.6, 19051.0], [45.7, 19051.0], [45.8, 19051.0], [45.9, 19051.0], [46.0, 19242.0], [46.1, 19242.0], [46.2, 19242.0], [46.3, 19242.0], [46.4, 19242.0], [46.5, 19242.0], [46.6, 19242.0], [46.7, 19242.0], [46.8, 19242.0], [46.9, 19242.0], [47.0, 19242.0], [47.1, 19242.0], [47.2, 19242.0], [47.3, 19242.0], [47.4, 19242.0], [47.5, 19242.0], [47.6, 19242.0], [47.7, 19242.0], [47.8, 19242.0], [47.9, 19242.0], [48.0, 19249.0], [48.1, 19249.0], [48.2, 19249.0], [48.3, 19249.0], [48.4, 19249.0], [48.5, 19249.0], [48.6, 19249.0], [48.7, 19249.0], [48.8, 19249.0], [48.9, 19249.0], [49.0, 19249.0], [49.1, 19249.0], [49.2, 19249.0], [49.3, 19249.0], [49.4, 19249.0], [49.5, 19249.0], [49.6, 19249.0], [49.7, 19249.0], [49.8, 19249.0], [49.9, 19249.0], [50.0, 19419.0], [50.1, 19419.0], [50.2, 19419.0], [50.3, 19419.0], [50.4, 19419.0], [50.5, 19419.0], [50.6, 19419.0], [50.7, 19419.0], [50.8, 19419.0], [50.9, 19419.0], [51.0, 19419.0], [51.1, 19419.0], [51.2, 19419.0], [51.3, 19419.0], [51.4, 19419.0], [51.5, 19419.0], [51.6, 19419.0], [51.7, 19419.0], [51.8, 19419.0], [51.9, 19419.0], [52.0, 19759.0], [52.1, 19759.0], [52.2, 19759.0], [52.3, 19759.0], [52.4, 19759.0], [52.5, 19759.0], [52.6, 19759.0], [52.7, 19759.0], [52.8, 19759.0], [52.9, 19759.0], [53.0, 19759.0], [53.1, 19759.0], [53.2, 19759.0], [53.3, 19759.0], [53.4, 19759.0], [53.5, 19759.0], [53.6, 19759.0], [53.7, 19759.0], [53.8, 19759.0], [53.9, 19759.0], [54.0, 19894.0], [54.1, 19894.0], [54.2, 19894.0], [54.3, 19894.0], [54.4, 19894.0], [54.5, 19894.0], [54.6, 19894.0], [54.7, 19894.0], [54.8, 19894.0], [54.9, 19894.0], [55.0, 19894.0], [55.1, 19894.0], [55.2, 19894.0], [55.3, 19894.0], [55.4, 19894.0], [55.5, 19894.0], [55.6, 19894.0], [55.7, 19894.0], [55.8, 19894.0], [55.9, 19894.0], [56.0, 19907.0], [56.1, 19907.0], [56.2, 19907.0], [56.3, 19907.0], [56.4, 19907.0], [56.5, 19907.0], [56.6, 19907.0], [56.7, 19907.0], [56.8, 19907.0], [56.9, 19907.0], [57.0, 19907.0], [57.1, 19907.0], [57.2, 19907.0], [57.3, 19907.0], [57.4, 19907.0], [57.5, 19907.0], [57.6, 19907.0], [57.7, 19907.0], [57.8, 19907.0], [57.9, 19907.0], [58.0, 19943.0], [58.1, 19943.0], [58.2, 19943.0], [58.3, 19943.0], [58.4, 19943.0], [58.5, 19943.0], [58.6, 19943.0], [58.7, 19943.0], [58.8, 19943.0], [58.9, 19943.0], [59.0, 19943.0], [59.1, 19943.0], [59.2, 19943.0], [59.3, 19943.0], [59.4, 19943.0], [59.5, 19943.0], [59.6, 19943.0], [59.7, 19943.0], [59.8, 19943.0], [59.9, 19943.0], [60.0, 19981.0], [60.1, 19981.0], [60.2, 19981.0], [60.3, 19981.0], [60.4, 19981.0], [60.5, 19981.0], [60.6, 19981.0], [60.7, 19981.0], [60.8, 19981.0], [60.9, 19981.0], [61.0, 19981.0], [61.1, 19981.0], [61.2, 19981.0], [61.3, 19981.0], [61.4, 19981.0], [61.5, 19981.0], [61.6, 19981.0], [61.7, 19981.0], [61.8, 19981.0], [61.9, 19981.0], [62.0, 20040.0], [62.1, 20040.0], [62.2, 20040.0], [62.3, 20040.0], [62.4, 20040.0], [62.5, 20040.0], [62.6, 20040.0], [62.7, 20040.0], [62.8, 20040.0], [62.9, 20040.0], [63.0, 20040.0], [63.1, 20040.0], [63.2, 20040.0], [63.3, 20040.0], [63.4, 20040.0], [63.5, 20040.0], [63.6, 20040.0], [63.7, 20040.0], [63.8, 20040.0], [63.9, 20040.0], [64.0, 20083.0], [64.1, 20083.0], [64.2, 20083.0], [64.3, 20083.0], [64.4, 20083.0], [64.5, 20083.0], [64.6, 20083.0], [64.7, 20083.0], [64.8, 20083.0], [64.9, 20083.0], [65.0, 20083.0], [65.1, 20083.0], [65.2, 20083.0], [65.3, 20083.0], [65.4, 20083.0], [65.5, 20083.0], [65.6, 20083.0], [65.7, 20083.0], [65.8, 20083.0], [65.9, 20083.0], [66.0, 20220.0], [66.1, 20220.0], [66.2, 20220.0], [66.3, 20220.0], [66.4, 20220.0], [66.5, 20220.0], [66.6, 20220.0], [66.7, 20220.0], [66.8, 20220.0], [66.9, 20220.0], [67.0, 20220.0], [67.1, 20220.0], [67.2, 20220.0], [67.3, 20220.0], [67.4, 20220.0], [67.5, 20220.0], [67.6, 20220.0], [67.7, 20220.0], [67.8, 20220.0], [67.9, 20220.0], [68.0, 20400.0], [68.1, 20400.0], [68.2, 20400.0], [68.3, 20400.0], [68.4, 20400.0], [68.5, 20400.0], [68.6, 20400.0], [68.7, 20400.0], [68.8, 20400.0], [68.9, 20400.0], [69.0, 20400.0], [69.1, 20400.0], [69.2, 20400.0], [69.3, 20400.0], [69.4, 20400.0], [69.5, 20400.0], [69.6, 20400.0], [69.7, 20400.0], [69.8, 20400.0], [69.9, 20400.0], [70.0, 20414.0], [70.1, 20414.0], [70.2, 20414.0], [70.3, 20414.0], [70.4, 20414.0], [70.5, 20414.0], [70.6, 20414.0], [70.7, 20414.0], [70.8, 20414.0], [70.9, 20414.0], [71.0, 20414.0], [71.1, 20414.0], [71.2, 20414.0], [71.3, 20414.0], [71.4, 20414.0], [71.5, 20414.0], [71.6, 20414.0], [71.7, 20414.0], [71.8, 20414.0], [71.9, 20414.0], [72.0, 20661.0], [72.1, 20661.0], [72.2, 20661.0], [72.3, 20661.0], [72.4, 20661.0], [72.5, 20661.0], [72.6, 20661.0], [72.7, 20661.0], [72.8, 20661.0], [72.9, 20661.0], [73.0, 20661.0], [73.1, 20661.0], [73.2, 20661.0], [73.3, 20661.0], [73.4, 20661.0], [73.5, 20661.0], [73.6, 20661.0], [73.7, 20661.0], [73.8, 20661.0], [73.9, 20661.0], [74.0, 20804.0], [74.1, 20804.0], [74.2, 20804.0], [74.3, 20804.0], [74.4, 20804.0], [74.5, 20804.0], [74.6, 20804.0], [74.7, 20804.0], [74.8, 20804.0], [74.9, 20804.0], [75.0, 20804.0], [75.1, 20804.0], [75.2, 20804.0], [75.3, 20804.0], [75.4, 20804.0], [75.5, 20804.0], [75.6, 20804.0], [75.7, 20804.0], [75.8, 20804.0], [75.9, 20804.0], [76.0, 20807.0], [76.1, 20807.0], [76.2, 20807.0], [76.3, 20807.0], [76.4, 20807.0], [76.5, 20807.0], [76.6, 20807.0], [76.7, 20807.0], [76.8, 20807.0], [76.9, 20807.0], [77.0, 20807.0], [77.1, 20807.0], [77.2, 20807.0], [77.3, 20807.0], [77.4, 20807.0], [77.5, 20807.0], [77.6, 20807.0], [77.7, 20807.0], [77.8, 20807.0], [77.9, 20807.0], [78.0, 20928.0], [78.1, 20928.0], [78.2, 20928.0], [78.3, 20928.0], [78.4, 20928.0], [78.5, 20928.0], [78.6, 20928.0], [78.7, 20928.0], [78.8, 20928.0], [78.9, 20928.0], [79.0, 20928.0], [79.1, 20928.0], [79.2, 20928.0], [79.3, 20928.0], [79.4, 20928.0], [79.5, 20928.0], [79.6, 20928.0], [79.7, 20928.0], [79.8, 20928.0], [79.9, 20928.0], [80.0, 21181.0], [80.1, 21181.0], [80.2, 21181.0], [80.3, 21181.0], [80.4, 21181.0], [80.5, 21181.0], [80.6, 21181.0], [80.7, 21181.0], [80.8, 21181.0], [80.9, 21181.0], [81.0, 21181.0], [81.1, 21181.0], [81.2, 21181.0], [81.3, 21181.0], [81.4, 21181.0], [81.5, 21181.0], [81.6, 21181.0], [81.7, 21181.0], [81.8, 21181.0], [81.9, 21181.0], [82.0, 21233.0], [82.1, 21233.0], [82.2, 21233.0], [82.3, 21233.0], [82.4, 21233.0], [82.5, 21233.0], [82.6, 21233.0], [82.7, 21233.0], [82.8, 21233.0], [82.9, 21233.0], [83.0, 21233.0], [83.1, 21233.0], [83.2, 21233.0], [83.3, 21233.0], [83.4, 21233.0], [83.5, 21233.0], [83.6, 21233.0], [83.7, 21233.0], [83.8, 21233.0], [83.9, 21233.0], [84.0, 21324.0], [84.1, 21324.0], [84.2, 21324.0], [84.3, 21324.0], [84.4, 21324.0], [84.5, 21324.0], [84.6, 21324.0], [84.7, 21324.0], [84.8, 21324.0], [84.9, 21324.0], [85.0, 21324.0], [85.1, 21324.0], [85.2, 21324.0], [85.3, 21324.0], [85.4, 21324.0], [85.5, 21324.0], [85.6, 21324.0], [85.7, 21324.0], [85.8, 21324.0], [85.9, 21324.0], [86.0, 21394.0], [86.1, 21394.0], [86.2, 21394.0], [86.3, 21394.0], [86.4, 21394.0], [86.5, 21394.0], [86.6, 21394.0], [86.7, 21394.0], [86.8, 21394.0], [86.9, 21394.0], [87.0, 21394.0], [87.1, 21394.0], [87.2, 21394.0], [87.3, 21394.0], [87.4, 21394.0], [87.5, 21394.0], [87.6, 21394.0], [87.7, 21394.0], [87.8, 21394.0], [87.9, 21394.0], [88.0, 21882.0], [88.1, 21882.0], [88.2, 21882.0], [88.3, 21882.0], [88.4, 21882.0], [88.5, 21882.0], [88.6, 21882.0], [88.7, 21882.0], [88.8, 21882.0], [88.9, 21882.0], [89.0, 21882.0], [89.1, 21882.0], [89.2, 21882.0], [89.3, 21882.0], [89.4, 21882.0], [89.5, 21882.0], [89.6, 21882.0], [89.7, 21882.0], [89.8, 21882.0], [89.9, 21882.0], [90.0, 22019.0], [90.1, 22019.0], [90.2, 22019.0], [90.3, 22019.0], [90.4, 22019.0], [90.5, 22019.0], [90.6, 22019.0], [90.7, 22019.0], [90.8, 22019.0], [90.9, 22019.0], [91.0, 22019.0], [91.1, 22019.0], [91.2, 22019.0], [91.3, 22019.0], [91.4, 22019.0], [91.5, 22019.0], [91.6, 22019.0], [91.7, 22019.0], [91.8, 22019.0], [91.9, 22019.0], [92.0, 22526.0], [92.1, 22526.0], [92.2, 22526.0], [92.3, 22526.0], [92.4, 22526.0], [92.5, 22526.0], [92.6, 22526.0], [92.7, 22526.0], [92.8, 22526.0], [92.9, 22526.0], [93.0, 22526.0], [93.1, 22526.0], [93.2, 22526.0], [93.3, 22526.0], [93.4, 22526.0], [93.5, 22526.0], [93.6, 22526.0], [93.7, 22526.0], [93.8, 22526.0], [93.9, 22526.0], [94.0, 22750.0], [94.1, 22750.0], [94.2, 22750.0], [94.3, 22750.0], [94.4, 22750.0], [94.5, 22750.0], [94.6, 22750.0], [94.7, 22750.0], [94.8, 22750.0], [94.9, 22750.0], [95.0, 22750.0], [95.1, 22750.0], [95.2, 22750.0], [95.3, 22750.0], [95.4, 22750.0], [95.5, 22750.0], [95.6, 22750.0], [95.7, 22750.0], [95.8, 22750.0], [95.9, 22750.0], [96.0, 22760.0], [96.1, 22760.0], [96.2, 22760.0], [96.3, 22760.0], [96.4, 22760.0], [96.5, 22760.0], [96.6, 22760.0], [96.7, 22760.0], [96.8, 22760.0], [96.9, 22760.0], [97.0, 22760.0], [97.1, 22760.0], [97.2, 22760.0], [97.3, 22760.0], [97.4, 22760.0], [97.5, 22760.0], [97.6, 22760.0], [97.7, 22760.0], [97.8, 22760.0], [97.9, 22760.0], [98.0, 22834.0], [98.1, 22834.0], [98.2, 22834.0], [98.3, 22834.0], [98.4, 22834.0], [98.5, 22834.0], [98.6, 22834.0], [98.7, 22834.0], [98.8, 22834.0], [98.9, 22834.0], [99.0, 22834.0], [99.1, 22834.0], [99.2, 22834.0], [99.3, 22834.0], [99.4, 22834.0], [99.5, 22834.0], [99.6, 22834.0], [99.7, 22834.0], [99.8, 22834.0], [99.9, 22834.0]], "isOverall": false, "label": "PRODUCER_CONSUMER", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 16400.0, "maxY": 3.0, "series": [{"data": [[16400.0, 2.0], [16500.0, 2.0], [16600.0, 1.0], [17200.0, 1.0], [17300.0, 1.0], [17400.0, 2.0], [16900.0, 1.0], [17500.0, 2.0], [18000.0, 1.0], [18200.0, 1.0], [18300.0, 3.0], [17600.0, 2.0], [17700.0, 1.0], [17900.0, 1.0], [19400.0, 1.0], [18900.0, 1.0], [19000.0, 1.0], [19200.0, 2.0], [20000.0, 2.0], [20200.0, 1.0], [19700.0, 1.0], [19900.0, 3.0], [20400.0, 2.0], [19800.0, 1.0], [20900.0, 1.0], [21300.0, 2.0], [20600.0, 1.0], [20800.0, 2.0], [21200.0, 1.0], [21100.0, 1.0], [22500.0, 1.0], [21800.0, 1.0], [22000.0, 1.0], [22700.0, 2.0], [22800.0, 1.0]], "isOverall": false, "label": "PRODUCER_CONSUMER", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 22800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 50.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 50.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 50.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.333333333333333, "minX": 1.78169502E12, "maxY": 5.0, "series": [{"data": [[1.78169502E12, 5.0], [1.78169514E12, 5.0], [1.78169508E12, 5.0], [1.7816952E12, 4.333333333333333]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816952E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 19172.326086956524, "minX": 1.0, "maxY": 22834.0, "series": [{"data": [[4.0, 22750.0], [2.0, 19249.0], [1.0, 19242.0], [5.0, 19172.326086956524], [3.0, 22834.0]], "isOverall": false, "label": "PRODUCER_CONSUMER", "isController": false}, {"data": [[4.800000000000001, 19320.040000000005]], "isOverall": false, "label": "PRODUCER_CONSUMER-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.78169502E12, "maxY": 4.9E-324, "series": [{"data": [[1.78169502E12, 0.0], [1.78169514E12, 0.0], [1.78169508E12, 0.0], [1.7816952E12, 0.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78169502E12, 0.0], [1.78169514E12, 0.0], [1.78169508E12, 0.0], [1.7816952E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816952E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 16520.4, "minX": 1.78169502E12, "maxY": 20978.533333333336, "series": [{"data": [[1.78169502E12, 16520.4], [1.78169514E12, 19843.466666666667], [1.78169508E12, 18071.333333333332], [1.7816952E12, 20978.533333333336]], "isOverall": false, "label": "PRODUCER_CONSUMER", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816952E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.78169502E12, "maxY": 4.9E-324, "series": [{"data": [[1.78169502E12, 0.0], [1.78169514E12, 0.0], [1.78169508E12, 0.0], [1.7816952E12, 0.0]], "isOverall": false, "label": "PRODUCER_CONSUMER", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816952E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.78169502E12, "maxY": 4.9E-324, "series": [{"data": [[1.78169502E12, 0.0], [1.78169514E12, 0.0], [1.78169508E12, 0.0], [1.7816952E12, 0.0]], "isOverall": false, "label": "PRODUCER_CONSUMER", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816952E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 16408.0, "minX": 1.78169502E12, "maxY": 22834.0, "series": [{"data": [[1.78169502E12, 16661.0], [1.78169514E12, 22526.0], [1.78169508E12, 20040.0], [1.7816952E12, 22834.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78169502E12, 16408.0], [1.78169514E12, 16928.0], [1.78169508E12, 17241.0], [1.7816952E12, 19242.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78169502E12, 16661.0], [1.78169514E12, 22139.6], [1.78169508E12, 19667.4], [1.7816952E12, 22789.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78169502E12, 16661.0], [1.78169514E12, 22526.0], [1.78169508E12, 20040.0], [1.7816952E12, 22834.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78169502E12, 16559.0], [1.78169514E12, 20083.0], [1.78169508E12, 17935.0], [1.7816952E12, 20807.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78169502E12, 16661.0], [1.78169514E12, 22526.0], [1.78169508E12, 20040.0], [1.7816952E12, 22834.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816952E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 16559.0, "minX": 1.0, "maxY": 21054.5, "series": [{"data": [[4.0, 17412.5], [1.0, 21054.5], [2.0, 19589.0], [5.0, 16559.0], [3.0, 18310.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4.9E-324, "series": [{"data": [[4.0, 0.0], [1.0, 0.0], [2.0, 0.0], [5.0, 0.0], [3.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.78169502E12, "maxY": 0.25, "series": [{"data": [[1.78169502E12, 0.16666666666666666], [1.78169514E12, 0.25], [1.78169508E12, 0.25], [1.7816952E12, 0.16666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816952E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.78169502E12, "maxY": 0.25, "series": [{"data": [[1.78169502E12, 0.08333333333333333], [1.78169514E12, 0.25], [1.78169508E12, 0.25], [1.7816952E12, 0.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816952E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.78169502E12, "maxY": 0.25, "series": [{"data": [[1.78169502E12, 0.08333333333333333], [1.78169514E12, 0.25], [1.78169508E12, 0.25], [1.7816952E12, 0.25]], "isOverall": false, "label": "PRODUCER_CONSUMER-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816952E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.78169502E12, "maxY": 0.25, "series": [{"data": [[1.78169502E12, 0.08333333333333333], [1.78169514E12, 0.25], [1.78169508E12, 0.25], [1.7816952E12, 0.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816952E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

