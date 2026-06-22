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
        data: {"result": {"minY": 14776.0, "minX": 0.0, "maxY": 25199.0, "series": [{"data": [[0.0, 14776.0], [0.1, 14776.0], [0.2, 14776.0], [0.3, 14776.0], [0.4, 14776.0], [0.5, 14776.0], [0.6, 14776.0], [0.7, 14776.0], [0.8, 14776.0], [0.9, 14776.0], [1.0, 14776.0], [1.1, 14776.0], [1.2, 14776.0], [1.3, 14776.0], [1.4, 14776.0], [1.5, 14776.0], [1.6, 14776.0], [1.7, 14776.0], [1.8, 14776.0], [1.9, 14776.0], [2.0, 16335.0], [2.1, 16335.0], [2.2, 16335.0], [2.3, 16335.0], [2.4, 16335.0], [2.5, 16335.0], [2.6, 16335.0], [2.7, 16335.0], [2.8, 16335.0], [2.9, 16335.0], [3.0, 16335.0], [3.1, 16335.0], [3.2, 16335.0], [3.3, 16335.0], [3.4, 16335.0], [3.5, 16335.0], [3.6, 16335.0], [3.7, 16335.0], [3.8, 16335.0], [3.9, 16335.0], [4.0, 16552.0], [4.1, 16552.0], [4.2, 16552.0], [4.3, 16552.0], [4.4, 16552.0], [4.5, 16552.0], [4.6, 16552.0], [4.7, 16552.0], [4.8, 16552.0], [4.9, 16552.0], [5.0, 16552.0], [5.1, 16552.0], [5.2, 16552.0], [5.3, 16552.0], [5.4, 16552.0], [5.5, 16552.0], [5.6, 16552.0], [5.7, 16552.0], [5.8, 16552.0], [5.9, 16552.0], [6.0, 17288.0], [6.1, 17288.0], [6.2, 17288.0], [6.3, 17288.0], [6.4, 17288.0], [6.5, 17288.0], [6.6, 17288.0], [6.7, 17288.0], [6.8, 17288.0], [6.9, 17288.0], [7.0, 17288.0], [7.1, 17288.0], [7.2, 17288.0], [7.3, 17288.0], [7.4, 17288.0], [7.5, 17288.0], [7.6, 17288.0], [7.7, 17288.0], [7.8, 17288.0], [7.9, 17288.0], [8.0, 17549.0], [8.1, 17549.0], [8.2, 17549.0], [8.3, 17549.0], [8.4, 17549.0], [8.5, 17549.0], [8.6, 17549.0], [8.7, 17549.0], [8.8, 17549.0], [8.9, 17549.0], [9.0, 17549.0], [9.1, 17549.0], [9.2, 17549.0], [9.3, 17549.0], [9.4, 17549.0], [9.5, 17549.0], [9.6, 17549.0], [9.7, 17549.0], [9.8, 17549.0], [9.9, 17549.0], [10.0, 17560.0], [10.1, 17560.0], [10.2, 17560.0], [10.3, 17560.0], [10.4, 17560.0], [10.5, 17560.0], [10.6, 17560.0], [10.7, 17560.0], [10.8, 17560.0], [10.9, 17560.0], [11.0, 17560.0], [11.1, 17560.0], [11.2, 17560.0], [11.3, 17560.0], [11.4, 17560.0], [11.5, 17560.0], [11.6, 17560.0], [11.7, 17560.0], [11.8, 17560.0], [11.9, 17560.0], [12.0, 17905.0], [12.1, 17905.0], [12.2, 17905.0], [12.3, 17905.0], [12.4, 17905.0], [12.5, 17905.0], [12.6, 17905.0], [12.7, 17905.0], [12.8, 17905.0], [12.9, 17905.0], [13.0, 17905.0], [13.1, 17905.0], [13.2, 17905.0], [13.3, 17905.0], [13.4, 17905.0], [13.5, 17905.0], [13.6, 17905.0], [13.7, 17905.0], [13.8, 17905.0], [13.9, 17905.0], [14.0, 17973.0], [14.1, 17973.0], [14.2, 17973.0], [14.3, 17973.0], [14.4, 17973.0], [14.5, 17973.0], [14.6, 17973.0], [14.7, 17973.0], [14.8, 17973.0], [14.9, 17973.0], [15.0, 17973.0], [15.1, 17973.0], [15.2, 17973.0], [15.3, 17973.0], [15.4, 17973.0], [15.5, 17973.0], [15.6, 17973.0], [15.7, 17973.0], [15.8, 17973.0], [15.9, 17973.0], [16.0, 18052.0], [16.1, 18052.0], [16.2, 18052.0], [16.3, 18052.0], [16.4, 18052.0], [16.5, 18052.0], [16.6, 18052.0], [16.7, 18052.0], [16.8, 18052.0], [16.9, 18052.0], [17.0, 18052.0], [17.1, 18052.0], [17.2, 18052.0], [17.3, 18052.0], [17.4, 18052.0], [17.5, 18052.0], [17.6, 18052.0], [17.7, 18052.0], [17.8, 18052.0], [17.9, 18052.0], [18.0, 18191.0], [18.1, 18191.0], [18.2, 18191.0], [18.3, 18191.0], [18.4, 18191.0], [18.5, 18191.0], [18.6, 18191.0], [18.7, 18191.0], [18.8, 18191.0], [18.9, 18191.0], [19.0, 18191.0], [19.1, 18191.0], [19.2, 18191.0], [19.3, 18191.0], [19.4, 18191.0], [19.5, 18191.0], [19.6, 18191.0], [19.7, 18191.0], [19.8, 18191.0], [19.9, 18191.0], [20.0, 18249.0], [20.1, 18249.0], [20.2, 18249.0], [20.3, 18249.0], [20.4, 18249.0], [20.5, 18249.0], [20.6, 18249.0], [20.7, 18249.0], [20.8, 18249.0], [20.9, 18249.0], [21.0, 18249.0], [21.1, 18249.0], [21.2, 18249.0], [21.3, 18249.0], [21.4, 18249.0], [21.5, 18249.0], [21.6, 18249.0], [21.7, 18249.0], [21.8, 18249.0], [21.9, 18249.0], [22.0, 18294.0], [22.1, 18294.0], [22.2, 18294.0], [22.3, 18294.0], [22.4, 18294.0], [22.5, 18294.0], [22.6, 18294.0], [22.7, 18294.0], [22.8, 18294.0], [22.9, 18294.0], [23.0, 18294.0], [23.1, 18294.0], [23.2, 18294.0], [23.3, 18294.0], [23.4, 18294.0], [23.5, 18294.0], [23.6, 18294.0], [23.7, 18294.0], [23.8, 18294.0], [23.9, 18294.0], [24.0, 18341.0], [24.1, 18341.0], [24.2, 18341.0], [24.3, 18341.0], [24.4, 18341.0], [24.5, 18341.0], [24.6, 18341.0], [24.7, 18341.0], [24.8, 18341.0], [24.9, 18341.0], [25.0, 18341.0], [25.1, 18341.0], [25.2, 18341.0], [25.3, 18341.0], [25.4, 18341.0], [25.5, 18341.0], [25.6, 18341.0], [25.7, 18341.0], [25.8, 18341.0], [25.9, 18341.0], [26.0, 18408.0], [26.1, 18408.0], [26.2, 18408.0], [26.3, 18408.0], [26.4, 18408.0], [26.5, 18408.0], [26.6, 18408.0], [26.7, 18408.0], [26.8, 18408.0], [26.9, 18408.0], [27.0, 18408.0], [27.1, 18408.0], [27.2, 18408.0], [27.3, 18408.0], [27.4, 18408.0], [27.5, 18408.0], [27.6, 18408.0], [27.7, 18408.0], [27.8, 18408.0], [27.9, 18408.0], [28.0, 18501.0], [28.1, 18501.0], [28.2, 18501.0], [28.3, 18501.0], [28.4, 18501.0], [28.5, 18501.0], [28.6, 18501.0], [28.7, 18501.0], [28.8, 18501.0], [28.9, 18501.0], [29.0, 18501.0], [29.1, 18501.0], [29.2, 18501.0], [29.3, 18501.0], [29.4, 18501.0], [29.5, 18501.0], [29.6, 18501.0], [29.7, 18501.0], [29.8, 18501.0], [29.9, 18501.0], [30.0, 18680.0], [30.1, 18680.0], [30.2, 18680.0], [30.3, 18680.0], [30.4, 18680.0], [30.5, 18680.0], [30.6, 18680.0], [30.7, 18680.0], [30.8, 18680.0], [30.9, 18680.0], [31.0, 18680.0], [31.1, 18680.0], [31.2, 18680.0], [31.3, 18680.0], [31.4, 18680.0], [31.5, 18680.0], [31.6, 18680.0], [31.7, 18680.0], [31.8, 18680.0], [31.9, 18680.0], [32.0, 18833.0], [32.1, 18833.0], [32.2, 18833.0], [32.3, 18833.0], [32.4, 18833.0], [32.5, 18833.0], [32.6, 18833.0], [32.7, 18833.0], [32.8, 18833.0], [32.9, 18833.0], [33.0, 18833.0], [33.1, 18833.0], [33.2, 18833.0], [33.3, 18833.0], [33.4, 18833.0], [33.5, 18833.0], [33.6, 18833.0], [33.7, 18833.0], [33.8, 18833.0], [33.9, 18833.0], [34.0, 19015.0], [34.1, 19015.0], [34.2, 19015.0], [34.3, 19015.0], [34.4, 19015.0], [34.5, 19015.0], [34.6, 19015.0], [34.7, 19015.0], [34.8, 19015.0], [34.9, 19015.0], [35.0, 19015.0], [35.1, 19015.0], [35.2, 19015.0], [35.3, 19015.0], [35.4, 19015.0], [35.5, 19015.0], [35.6, 19015.0], [35.7, 19015.0], [35.8, 19015.0], [35.9, 19015.0], [36.0, 19606.0], [36.1, 19606.0], [36.2, 19606.0], [36.3, 19606.0], [36.4, 19606.0], [36.5, 19606.0], [36.6, 19606.0], [36.7, 19606.0], [36.8, 19606.0], [36.9, 19606.0], [37.0, 19606.0], [37.1, 19606.0], [37.2, 19606.0], [37.3, 19606.0], [37.4, 19606.0], [37.5, 19606.0], [37.6, 19606.0], [37.7, 19606.0], [37.8, 19606.0], [37.9, 19606.0], [38.0, 20988.0], [38.1, 20988.0], [38.2, 20988.0], [38.3, 20988.0], [38.4, 20988.0], [38.5, 20988.0], [38.6, 20988.0], [38.7, 20988.0], [38.8, 20988.0], [38.9, 20988.0], [39.0, 20988.0], [39.1, 20988.0], [39.2, 20988.0], [39.3, 20988.0], [39.4, 20988.0], [39.5, 20988.0], [39.6, 20988.0], [39.7, 20988.0], [39.8, 20988.0], [39.9, 20988.0], [40.0, 21091.0], [40.1, 21091.0], [40.2, 21091.0], [40.3, 21091.0], [40.4, 21091.0], [40.5, 21091.0], [40.6, 21091.0], [40.7, 21091.0], [40.8, 21091.0], [40.9, 21091.0], [41.0, 21091.0], [41.1, 21091.0], [41.2, 21091.0], [41.3, 21091.0], [41.4, 21091.0], [41.5, 21091.0], [41.6, 21091.0], [41.7, 21091.0], [41.8, 21091.0], [41.9, 21091.0], [42.0, 21114.0], [42.1, 21114.0], [42.2, 21114.0], [42.3, 21114.0], [42.4, 21114.0], [42.5, 21114.0], [42.6, 21114.0], [42.7, 21114.0], [42.8, 21114.0], [42.9, 21114.0], [43.0, 21114.0], [43.1, 21114.0], [43.2, 21114.0], [43.3, 21114.0], [43.4, 21114.0], [43.5, 21114.0], [43.6, 21114.0], [43.7, 21114.0], [43.8, 21114.0], [43.9, 21114.0], [44.0, 21280.0], [44.1, 21280.0], [44.2, 21280.0], [44.3, 21280.0], [44.4, 21280.0], [44.5, 21280.0], [44.6, 21280.0], [44.7, 21280.0], [44.8, 21280.0], [44.9, 21280.0], [45.0, 21280.0], [45.1, 21280.0], [45.2, 21280.0], [45.3, 21280.0], [45.4, 21280.0], [45.5, 21280.0], [45.6, 21280.0], [45.7, 21280.0], [45.8, 21280.0], [45.9, 21280.0], [46.0, 21500.0], [46.1, 21500.0], [46.2, 21500.0], [46.3, 21500.0], [46.4, 21500.0], [46.5, 21500.0], [46.6, 21500.0], [46.7, 21500.0], [46.8, 21500.0], [46.9, 21500.0], [47.0, 21500.0], [47.1, 21500.0], [47.2, 21500.0], [47.3, 21500.0], [47.4, 21500.0], [47.5, 21500.0], [47.6, 21500.0], [47.7, 21500.0], [47.8, 21500.0], [47.9, 21500.0], [48.0, 21671.0], [48.1, 21671.0], [48.2, 21671.0], [48.3, 21671.0], [48.4, 21671.0], [48.5, 21671.0], [48.6, 21671.0], [48.7, 21671.0], [48.8, 21671.0], [48.9, 21671.0], [49.0, 21671.0], [49.1, 21671.0], [49.2, 21671.0], [49.3, 21671.0], [49.4, 21671.0], [49.5, 21671.0], [49.6, 21671.0], [49.7, 21671.0], [49.8, 21671.0], [49.9, 21671.0], [50.0, 21712.0], [50.1, 21712.0], [50.2, 21712.0], [50.3, 21712.0], [50.4, 21712.0], [50.5, 21712.0], [50.6, 21712.0], [50.7, 21712.0], [50.8, 21712.0], [50.9, 21712.0], [51.0, 21712.0], [51.1, 21712.0], [51.2, 21712.0], [51.3, 21712.0], [51.4, 21712.0], [51.5, 21712.0], [51.6, 21712.0], [51.7, 21712.0], [51.8, 21712.0], [51.9, 21712.0], [52.0, 22094.0], [52.1, 22094.0], [52.2, 22094.0], [52.3, 22094.0], [52.4, 22094.0], [52.5, 22094.0], [52.6, 22094.0], [52.7, 22094.0], [52.8, 22094.0], [52.9, 22094.0], [53.0, 22094.0], [53.1, 22094.0], [53.2, 22094.0], [53.3, 22094.0], [53.4, 22094.0], [53.5, 22094.0], [53.6, 22094.0], [53.7, 22094.0], [53.8, 22094.0], [53.9, 22094.0], [54.0, 22198.0], [54.1, 22198.0], [54.2, 22198.0], [54.3, 22198.0], [54.4, 22198.0], [54.5, 22198.0], [54.6, 22198.0], [54.7, 22198.0], [54.8, 22198.0], [54.9, 22198.0], [55.0, 22198.0], [55.1, 22198.0], [55.2, 22198.0], [55.3, 22198.0], [55.4, 22198.0], [55.5, 22198.0], [55.6, 22198.0], [55.7, 22198.0], [55.8, 22198.0], [55.9, 22198.0], [56.0, 22246.0], [56.1, 22246.0], [56.2, 22246.0], [56.3, 22246.0], [56.4, 22246.0], [56.5, 22246.0], [56.6, 22246.0], [56.7, 22246.0], [56.8, 22246.0], [56.9, 22246.0], [57.0, 22246.0], [57.1, 22246.0], [57.2, 22246.0], [57.3, 22246.0], [57.4, 22246.0], [57.5, 22246.0], [57.6, 22246.0], [57.7, 22246.0], [57.8, 22246.0], [57.9, 22246.0], [58.0, 22283.0], [58.1, 22283.0], [58.2, 22283.0], [58.3, 22283.0], [58.4, 22283.0], [58.5, 22283.0], [58.6, 22283.0], [58.7, 22283.0], [58.8, 22283.0], [58.9, 22283.0], [59.0, 22283.0], [59.1, 22283.0], [59.2, 22283.0], [59.3, 22283.0], [59.4, 22283.0], [59.5, 22283.0], [59.6, 22283.0], [59.7, 22283.0], [59.8, 22283.0], [59.9, 22283.0], [60.0, 22454.0], [60.1, 22454.0], [60.2, 22454.0], [60.3, 22454.0], [60.4, 22454.0], [60.5, 22454.0], [60.6, 22454.0], [60.7, 22454.0], [60.8, 22454.0], [60.9, 22454.0], [61.0, 22454.0], [61.1, 22454.0], [61.2, 22454.0], [61.3, 22454.0], [61.4, 22454.0], [61.5, 22454.0], [61.6, 22454.0], [61.7, 22454.0], [61.8, 22454.0], [61.9, 22454.0], [62.0, 22836.0], [62.1, 22836.0], [62.2, 22836.0], [62.3, 22836.0], [62.4, 22836.0], [62.5, 22836.0], [62.6, 22836.0], [62.7, 22836.0], [62.8, 22836.0], [62.9, 22836.0], [63.0, 22836.0], [63.1, 22836.0], [63.2, 22836.0], [63.3, 22836.0], [63.4, 22836.0], [63.5, 22836.0], [63.6, 22836.0], [63.7, 22836.0], [63.8, 22836.0], [63.9, 22836.0], [64.0, 22885.0], [64.1, 22885.0], [64.2, 22885.0], [64.3, 22885.0], [64.4, 22885.0], [64.5, 22885.0], [64.6, 22885.0], [64.7, 22885.0], [64.8, 22885.0], [64.9, 22885.0], [65.0, 22885.0], [65.1, 22885.0], [65.2, 22885.0], [65.3, 22885.0], [65.4, 22885.0], [65.5, 22885.0], [65.6, 22885.0], [65.7, 22885.0], [65.8, 22885.0], [65.9, 22885.0], [66.0, 22930.0], [66.1, 22930.0], [66.2, 22930.0], [66.3, 22930.0], [66.4, 22930.0], [66.5, 22930.0], [66.6, 22930.0], [66.7, 22930.0], [66.8, 22930.0], [66.9, 22930.0], [67.0, 22930.0], [67.1, 22930.0], [67.2, 22930.0], [67.3, 22930.0], [67.4, 22930.0], [67.5, 22930.0], [67.6, 22930.0], [67.7, 22930.0], [67.8, 22930.0], [67.9, 22930.0], [68.0, 23038.0], [68.1, 23038.0], [68.2, 23038.0], [68.3, 23038.0], [68.4, 23038.0], [68.5, 23038.0], [68.6, 23038.0], [68.7, 23038.0], [68.8, 23038.0], [68.9, 23038.0], [69.0, 23038.0], [69.1, 23038.0], [69.2, 23038.0], [69.3, 23038.0], [69.4, 23038.0], [69.5, 23038.0], [69.6, 23038.0], [69.7, 23038.0], [69.8, 23038.0], [69.9, 23038.0], [70.0, 23096.0], [70.1, 23096.0], [70.2, 23096.0], [70.3, 23096.0], [70.4, 23096.0], [70.5, 23096.0], [70.6, 23096.0], [70.7, 23096.0], [70.8, 23096.0], [70.9, 23096.0], [71.0, 23096.0], [71.1, 23096.0], [71.2, 23096.0], [71.3, 23096.0], [71.4, 23096.0], [71.5, 23096.0], [71.6, 23096.0], [71.7, 23096.0], [71.8, 23096.0], [71.9, 23096.0], [72.0, 23114.0], [72.1, 23114.0], [72.2, 23114.0], [72.3, 23114.0], [72.4, 23114.0], [72.5, 23114.0], [72.6, 23114.0], [72.7, 23114.0], [72.8, 23114.0], [72.9, 23114.0], [73.0, 23114.0], [73.1, 23114.0], [73.2, 23114.0], [73.3, 23114.0], [73.4, 23114.0], [73.5, 23114.0], [73.6, 23114.0], [73.7, 23114.0], [73.8, 23114.0], [73.9, 23114.0], [74.0, 23192.0], [74.1, 23192.0], [74.2, 23192.0], [74.3, 23192.0], [74.4, 23192.0], [74.5, 23192.0], [74.6, 23192.0], [74.7, 23192.0], [74.8, 23192.0], [74.9, 23192.0], [75.0, 23192.0], [75.1, 23192.0], [75.2, 23192.0], [75.3, 23192.0], [75.4, 23192.0], [75.5, 23192.0], [75.6, 23192.0], [75.7, 23192.0], [75.8, 23192.0], [75.9, 23192.0], [76.0, 23332.0], [76.1, 23332.0], [76.2, 23332.0], [76.3, 23332.0], [76.4, 23332.0], [76.5, 23332.0], [76.6, 23332.0], [76.7, 23332.0], [76.8, 23332.0], [76.9, 23332.0], [77.0, 23332.0], [77.1, 23332.0], [77.2, 23332.0], [77.3, 23332.0], [77.4, 23332.0], [77.5, 23332.0], [77.6, 23332.0], [77.7, 23332.0], [77.8, 23332.0], [77.9, 23332.0], [78.0, 23415.0], [78.1, 23415.0], [78.2, 23415.0], [78.3, 23415.0], [78.4, 23415.0], [78.5, 23415.0], [78.6, 23415.0], [78.7, 23415.0], [78.8, 23415.0], [78.9, 23415.0], [79.0, 23415.0], [79.1, 23415.0], [79.2, 23415.0], [79.3, 23415.0], [79.4, 23415.0], [79.5, 23415.0], [79.6, 23415.0], [79.7, 23415.0], [79.8, 23415.0], [79.9, 23415.0], [80.0, 23447.0], [80.1, 23447.0], [80.2, 23447.0], [80.3, 23447.0], [80.4, 23447.0], [80.5, 23447.0], [80.6, 23447.0], [80.7, 23447.0], [80.8, 23447.0], [80.9, 23447.0], [81.0, 23447.0], [81.1, 23447.0], [81.2, 23447.0], [81.3, 23447.0], [81.4, 23447.0], [81.5, 23447.0], [81.6, 23447.0], [81.7, 23447.0], [81.8, 23447.0], [81.9, 23447.0], [82.0, 23596.0], [82.1, 23596.0], [82.2, 23596.0], [82.3, 23596.0], [82.4, 23596.0], [82.5, 23596.0], [82.6, 23596.0], [82.7, 23596.0], [82.8, 23596.0], [82.9, 23596.0], [83.0, 23596.0], [83.1, 23596.0], [83.2, 23596.0], [83.3, 23596.0], [83.4, 23596.0], [83.5, 23596.0], [83.6, 23596.0], [83.7, 23596.0], [83.8, 23596.0], [83.9, 23596.0], [84.0, 23629.0], [84.1, 23629.0], [84.2, 23629.0], [84.3, 23629.0], [84.4, 23629.0], [84.5, 23629.0], [84.6, 23629.0], [84.7, 23629.0], [84.8, 23629.0], [84.9, 23629.0], [85.0, 23629.0], [85.1, 23629.0], [85.2, 23629.0], [85.3, 23629.0], [85.4, 23629.0], [85.5, 23629.0], [85.6, 23629.0], [85.7, 23629.0], [85.8, 23629.0], [85.9, 23629.0], [86.0, 23910.0], [86.1, 23910.0], [86.2, 23910.0], [86.3, 23910.0], [86.4, 23910.0], [86.5, 23910.0], [86.6, 23910.0], [86.7, 23910.0], [86.8, 23910.0], [86.9, 23910.0], [87.0, 23910.0], [87.1, 23910.0], [87.2, 23910.0], [87.3, 23910.0], [87.4, 23910.0], [87.5, 23910.0], [87.6, 23910.0], [87.7, 23910.0], [87.8, 23910.0], [87.9, 23910.0], [88.0, 24528.0], [88.1, 24528.0], [88.2, 24528.0], [88.3, 24528.0], [88.4, 24528.0], [88.5, 24528.0], [88.6, 24528.0], [88.7, 24528.0], [88.8, 24528.0], [88.9, 24528.0], [89.0, 24528.0], [89.1, 24528.0], [89.2, 24528.0], [89.3, 24528.0], [89.4, 24528.0], [89.5, 24528.0], [89.6, 24528.0], [89.7, 24528.0], [89.8, 24528.0], [89.9, 24528.0], [90.0, 24761.0], [90.1, 24761.0], [90.2, 24761.0], [90.3, 24761.0], [90.4, 24761.0], [90.5, 24761.0], [90.6, 24761.0], [90.7, 24761.0], [90.8, 24761.0], [90.9, 24761.0], [91.0, 24761.0], [91.1, 24761.0], [91.2, 24761.0], [91.3, 24761.0], [91.4, 24761.0], [91.5, 24761.0], [91.6, 24761.0], [91.7, 24761.0], [91.8, 24761.0], [91.9, 24761.0], [92.0, 24855.0], [92.1, 24855.0], [92.2, 24855.0], [92.3, 24855.0], [92.4, 24855.0], [92.5, 24855.0], [92.6, 24855.0], [92.7, 24855.0], [92.8, 24855.0], [92.9, 24855.0], [93.0, 24855.0], [93.1, 24855.0], [93.2, 24855.0], [93.3, 24855.0], [93.4, 24855.0], [93.5, 24855.0], [93.6, 24855.0], [93.7, 24855.0], [93.8, 24855.0], [93.9, 24855.0], [94.0, 24935.0], [94.1, 24935.0], [94.2, 24935.0], [94.3, 24935.0], [94.4, 24935.0], [94.5, 24935.0], [94.6, 24935.0], [94.7, 24935.0], [94.8, 24935.0], [94.9, 24935.0], [95.0, 24935.0], [95.1, 24935.0], [95.2, 24935.0], [95.3, 24935.0], [95.4, 24935.0], [95.5, 24935.0], [95.6, 24935.0], [95.7, 24935.0], [95.8, 24935.0], [95.9, 24935.0], [96.0, 25187.0], [96.1, 25187.0], [96.2, 25187.0], [96.3, 25187.0], [96.4, 25187.0], [96.5, 25187.0], [96.6, 25187.0], [96.7, 25187.0], [96.8, 25187.0], [96.9, 25187.0], [97.0, 25187.0], [97.1, 25187.0], [97.2, 25187.0], [97.3, 25187.0], [97.4, 25187.0], [97.5, 25187.0], [97.6, 25187.0], [97.7, 25187.0], [97.8, 25187.0], [97.9, 25187.0], [98.0, 25199.0], [98.1, 25199.0], [98.2, 25199.0], [98.3, 25199.0], [98.4, 25199.0], [98.5, 25199.0], [98.6, 25199.0], [98.7, 25199.0], [98.8, 25199.0], [98.9, 25199.0], [99.0, 25199.0], [99.1, 25199.0], [99.2, 25199.0], [99.3, 25199.0], [99.4, 25199.0], [99.5, 25199.0], [99.6, 25199.0], [99.7, 25199.0], [99.8, 25199.0], [99.9, 25199.0]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 14700.0, "maxY": 2.0, "series": [{"data": [[14700.0, 1.0], [16300.0, 1.0], [17200.0, 1.0], [16500.0, 1.0], [17900.0, 2.0], [18300.0, 1.0], [17500.0, 2.0], [18400.0, 1.0], [18100.0, 1.0], [18000.0, 1.0], [18200.0, 2.0], [18600.0, 1.0], [19000.0, 1.0], [18500.0, 1.0], [18800.0, 1.0], [19600.0, 1.0], [21200.0, 1.0], [20900.0, 1.0], [21100.0, 1.0], [21000.0, 1.0], [21500.0, 1.0], [22000.0, 1.0], [21600.0, 1.0], [22100.0, 1.0], [22200.0, 2.0], [21700.0, 1.0], [22400.0, 1.0], [23500.0, 1.0], [23000.0, 2.0], [23400.0, 2.0], [23100.0, 2.0], [22800.0, 2.0], [23300.0, 1.0], [22900.0, 1.0], [23900.0, 1.0], [23600.0, 1.0], [24500.0, 1.0], [25100.0, 2.0], [24900.0, 1.0], [24800.0, 1.0], [24700.0, 1.0]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 25100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.230769230769231, "minX": 1.78169346E12, "maxY": 5.0, "series": [{"data": [[1.78169352E12, 5.0], [1.78169358E12, 5.0], [1.78169346E12, 5.0], [1.78169364E12, 4.230769230769231]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78169364E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 16335.0, "minX": 1.0, "maxY": 22930.0, "series": [{"data": [[4.0, 22930.0], [2.0, 18294.0], [1.0, 16335.0], [5.0, 21147.434782608696], [3.0, 22283.0]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM", "isController": false}, {"data": [[4.800000000000001, 21052.479999999996]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.78169346E12, "maxY": 4.9E-324, "series": [{"data": [[1.78169352E12, 0.0], [1.78169358E12, 0.0], [1.78169346E12, 0.0], [1.78169364E12, 0.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78169352E12, 0.0], [1.78169358E12, 0.0], [1.78169346E12, 0.0], [1.78169364E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78169364E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 17811.999999999996, "minX": 1.78169346E12, "maxY": 22984.500000000004, "series": [{"data": [[1.78169352E12, 19977.30769230769], [1.78169358E12, 22984.500000000004], [1.78169346E12, 17811.999999999996], [1.78169364E12, 22539.692307692312]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78169364E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78169346E12, "maxY": 4.9E-324, "series": [{"data": [[1.78169352E12, 0.0], [1.78169358E12, 0.0], [1.78169346E12, 0.0], [1.78169364E12, 0.0]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78169364E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78169346E12, "maxY": 4.9E-324, "series": [{"data": [[1.78169352E12, 0.0], [1.78169358E12, 0.0], [1.78169346E12, 0.0], [1.78169364E12, 0.0]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78169364E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 14776.0, "minX": 1.78169346E12, "maxY": 25199.0, "series": [{"data": [[1.78169352E12, 25199.0], [1.78169358E12, 24935.0], [1.78169346E12, 19606.0], [1.78169364E12, 25187.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78169352E12, 17560.0], [1.78169358E12, 21091.0], [1.78169346E12, 14776.0], [1.78169364E12, 16335.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78169352E12, 23957.0], [1.78169358E12, 24895.0], [1.78169346E12, 19546.9], [1.78169364E12, 25016.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78169352E12, 25199.0], [1.78169358E12, 24935.0], [1.78169346E12, 19606.0], [1.78169364E12, 25187.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78169352E12, 18833.0], [1.78169358E12, 23105.0], [1.78169346E12, 18123.0], [1.78169364E12, 23038.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78169352E12, 25199.0], [1.78169358E12, 24935.0], [1.78169346E12, 19606.0], [1.78169364E12, 25187.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78169364E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 18341.0, "minX": 1.0, "maxY": 22454.0, "series": [{"data": [[1.0, 22454.0], [2.0, 18375.0], [3.0, 18341.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4.9E-324, "series": [{"data": [[1.0, 0.0], [2.0, 0.0], [3.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.78169346E12, "maxY": 0.25, "series": [{"data": [[1.78169352E12, 0.21666666666666667], [1.78169358E12, 0.23333333333333334], [1.78169346E12, 0.25], [1.78169364E12, 0.13333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78169364E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.78169346E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.78169352E12, 0.21666666666666667], [1.78169358E12, 0.23333333333333334], [1.78169346E12, 0.16666666666666666], [1.78169364E12, 0.21666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78169364E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.78169346E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.78169352E12, 0.21666666666666667], [1.78169358E12, 0.23333333333333334], [1.78169346E12, 0.16666666666666666], [1.78169364E12, 0.21666666666666667]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78169364E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.78169346E12, "maxY": 0.23333333333333334, "series": [{"data": [[1.78169352E12, 0.21666666666666667], [1.78169358E12, 0.23333333333333334], [1.78169346E12, 0.16666666666666666], [1.78169364E12, 0.21666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78169364E12, "title": "Total Transactions Per Second"}},
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

