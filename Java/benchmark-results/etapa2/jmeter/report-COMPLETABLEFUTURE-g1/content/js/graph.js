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
        data: {"result": {"minY": 9078.0, "minX": 0.0, "maxY": 12719.0, "series": [{"data": [[0.0, 9078.0], [0.1, 9078.0], [0.2, 9078.0], [0.3, 9078.0], [0.4, 9078.0], [0.5, 9078.0], [0.6, 9078.0], [0.7, 9078.0], [0.8, 9078.0], [0.9, 9078.0], [1.0, 9078.0], [1.1, 9078.0], [1.2, 9078.0], [1.3, 9078.0], [1.4, 9078.0], [1.5, 9078.0], [1.6, 9078.0], [1.7, 9078.0], [1.8, 9078.0], [1.9, 9078.0], [2.0, 9291.0], [2.1, 9291.0], [2.2, 9291.0], [2.3, 9291.0], [2.4, 9291.0], [2.5, 9291.0], [2.6, 9291.0], [2.7, 9291.0], [2.8, 9291.0], [2.9, 9291.0], [3.0, 9291.0], [3.1, 9291.0], [3.2, 9291.0], [3.3, 9291.0], [3.4, 9291.0], [3.5, 9291.0], [3.6, 9291.0], [3.7, 9291.0], [3.8, 9291.0], [3.9, 9291.0], [4.0, 9966.0], [4.1, 9966.0], [4.2, 9966.0], [4.3, 9966.0], [4.4, 9966.0], [4.5, 9966.0], [4.6, 9966.0], [4.7, 9966.0], [4.8, 9966.0], [4.9, 9966.0], [5.0, 9966.0], [5.1, 9966.0], [5.2, 9966.0], [5.3, 9966.0], [5.4, 9966.0], [5.5, 9966.0], [5.6, 9966.0], [5.7, 9966.0], [5.8, 9966.0], [5.9, 9966.0], [6.0, 10063.0], [6.1, 10063.0], [6.2, 10063.0], [6.3, 10063.0], [6.4, 10063.0], [6.5, 10063.0], [6.6, 10063.0], [6.7, 10063.0], [6.8, 10063.0], [6.9, 10063.0], [7.0, 10063.0], [7.1, 10063.0], [7.2, 10063.0], [7.3, 10063.0], [7.4, 10063.0], [7.5, 10063.0], [7.6, 10063.0], [7.7, 10063.0], [7.8, 10063.0], [7.9, 10063.0], [8.0, 10140.0], [8.1, 10140.0], [8.2, 10140.0], [8.3, 10140.0], [8.4, 10140.0], [8.5, 10140.0], [8.6, 10140.0], [8.7, 10140.0], [8.8, 10140.0], [8.9, 10140.0], [9.0, 10140.0], [9.1, 10140.0], [9.2, 10140.0], [9.3, 10140.0], [9.4, 10140.0], [9.5, 10140.0], [9.6, 10140.0], [9.7, 10140.0], [9.8, 10140.0], [9.9, 10140.0], [10.0, 10189.0], [10.1, 10189.0], [10.2, 10189.0], [10.3, 10189.0], [10.4, 10189.0], [10.5, 10189.0], [10.6, 10189.0], [10.7, 10189.0], [10.8, 10189.0], [10.9, 10189.0], [11.0, 10189.0], [11.1, 10189.0], [11.2, 10189.0], [11.3, 10189.0], [11.4, 10189.0], [11.5, 10189.0], [11.6, 10189.0], [11.7, 10189.0], [11.8, 10189.0], [11.9, 10189.0], [12.0, 10235.0], [12.1, 10235.0], [12.2, 10235.0], [12.3, 10235.0], [12.4, 10235.0], [12.5, 10235.0], [12.6, 10235.0], [12.7, 10235.0], [12.8, 10235.0], [12.9, 10235.0], [13.0, 10235.0], [13.1, 10235.0], [13.2, 10235.0], [13.3, 10235.0], [13.4, 10235.0], [13.5, 10235.0], [13.6, 10235.0], [13.7, 10235.0], [13.8, 10235.0], [13.9, 10235.0], [14.0, 10326.0], [14.1, 10326.0], [14.2, 10326.0], [14.3, 10326.0], [14.4, 10326.0], [14.5, 10326.0], [14.6, 10326.0], [14.7, 10326.0], [14.8, 10326.0], [14.9, 10326.0], [15.0, 10326.0], [15.1, 10326.0], [15.2, 10326.0], [15.3, 10326.0], [15.4, 10326.0], [15.5, 10326.0], [15.6, 10326.0], [15.7, 10326.0], [15.8, 10326.0], [15.9, 10326.0], [16.0, 10414.0], [16.1, 10414.0], [16.2, 10414.0], [16.3, 10414.0], [16.4, 10414.0], [16.5, 10414.0], [16.6, 10414.0], [16.7, 10414.0], [16.8, 10414.0], [16.9, 10414.0], [17.0, 10414.0], [17.1, 10414.0], [17.2, 10414.0], [17.3, 10414.0], [17.4, 10414.0], [17.5, 10414.0], [17.6, 10414.0], [17.7, 10414.0], [17.8, 10414.0], [17.9, 10414.0], [18.0, 10414.0], [18.1, 10414.0], [18.2, 10414.0], [18.3, 10414.0], [18.4, 10414.0], [18.5, 10414.0], [18.6, 10414.0], [18.7, 10414.0], [18.8, 10414.0], [18.9, 10414.0], [19.0, 10414.0], [19.1, 10414.0], [19.2, 10414.0], [19.3, 10414.0], [19.4, 10414.0], [19.5, 10414.0], [19.6, 10414.0], [19.7, 10414.0], [19.8, 10414.0], [19.9, 10414.0], [20.0, 10419.0], [20.1, 10419.0], [20.2, 10419.0], [20.3, 10419.0], [20.4, 10419.0], [20.5, 10419.0], [20.6, 10419.0], [20.7, 10419.0], [20.8, 10419.0], [20.9, 10419.0], [21.0, 10419.0], [21.1, 10419.0], [21.2, 10419.0], [21.3, 10419.0], [21.4, 10419.0], [21.5, 10419.0], [21.6, 10419.0], [21.7, 10419.0], [21.8, 10419.0], [21.9, 10419.0], [22.0, 10435.0], [22.1, 10435.0], [22.2, 10435.0], [22.3, 10435.0], [22.4, 10435.0], [22.5, 10435.0], [22.6, 10435.0], [22.7, 10435.0], [22.8, 10435.0], [22.9, 10435.0], [23.0, 10435.0], [23.1, 10435.0], [23.2, 10435.0], [23.3, 10435.0], [23.4, 10435.0], [23.5, 10435.0], [23.6, 10435.0], [23.7, 10435.0], [23.8, 10435.0], [23.9, 10435.0], [24.0, 10436.0], [24.1, 10436.0], [24.2, 10436.0], [24.3, 10436.0], [24.4, 10436.0], [24.5, 10436.0], [24.6, 10436.0], [24.7, 10436.0], [24.8, 10436.0], [24.9, 10436.0], [25.0, 10436.0], [25.1, 10436.0], [25.2, 10436.0], [25.3, 10436.0], [25.4, 10436.0], [25.5, 10436.0], [25.6, 10436.0], [25.7, 10436.0], [25.8, 10436.0], [25.9, 10436.0], [26.0, 10446.0], [26.1, 10446.0], [26.2, 10446.0], [26.3, 10446.0], [26.4, 10446.0], [26.5, 10446.0], [26.6, 10446.0], [26.7, 10446.0], [26.8, 10446.0], [26.9, 10446.0], [27.0, 10446.0], [27.1, 10446.0], [27.2, 10446.0], [27.3, 10446.0], [27.4, 10446.0], [27.5, 10446.0], [27.6, 10446.0], [27.7, 10446.0], [27.8, 10446.0], [27.9, 10446.0], [28.0, 10460.0], [28.1, 10460.0], [28.2, 10460.0], [28.3, 10460.0], [28.4, 10460.0], [28.5, 10460.0], [28.6, 10460.0], [28.7, 10460.0], [28.8, 10460.0], [28.9, 10460.0], [29.0, 10460.0], [29.1, 10460.0], [29.2, 10460.0], [29.3, 10460.0], [29.4, 10460.0], [29.5, 10460.0], [29.6, 10460.0], [29.7, 10460.0], [29.8, 10460.0], [29.9, 10460.0], [30.0, 10467.0], [30.1, 10467.0], [30.2, 10467.0], [30.3, 10467.0], [30.4, 10467.0], [30.5, 10467.0], [30.6, 10467.0], [30.7, 10467.0], [30.8, 10467.0], [30.9, 10467.0], [31.0, 10467.0], [31.1, 10467.0], [31.2, 10467.0], [31.3, 10467.0], [31.4, 10467.0], [31.5, 10467.0], [31.6, 10467.0], [31.7, 10467.0], [31.8, 10467.0], [31.9, 10467.0], [32.0, 10475.0], [32.1, 10475.0], [32.2, 10475.0], [32.3, 10475.0], [32.4, 10475.0], [32.5, 10475.0], [32.6, 10475.0], [32.7, 10475.0], [32.8, 10475.0], [32.9, 10475.0], [33.0, 10475.0], [33.1, 10475.0], [33.2, 10475.0], [33.3, 10475.0], [33.4, 10475.0], [33.5, 10475.0], [33.6, 10475.0], [33.7, 10475.0], [33.8, 10475.0], [33.9, 10475.0], [34.0, 10478.0], [34.1, 10478.0], [34.2, 10478.0], [34.3, 10478.0], [34.4, 10478.0], [34.5, 10478.0], [34.6, 10478.0], [34.7, 10478.0], [34.8, 10478.0], [34.9, 10478.0], [35.0, 10478.0], [35.1, 10478.0], [35.2, 10478.0], [35.3, 10478.0], [35.4, 10478.0], [35.5, 10478.0], [35.6, 10478.0], [35.7, 10478.0], [35.8, 10478.0], [35.9, 10478.0], [36.0, 10479.0], [36.1, 10479.0], [36.2, 10479.0], [36.3, 10479.0], [36.4, 10479.0], [36.5, 10479.0], [36.6, 10479.0], [36.7, 10479.0], [36.8, 10479.0], [36.9, 10479.0], [37.0, 10479.0], [37.1, 10479.0], [37.2, 10479.0], [37.3, 10479.0], [37.4, 10479.0], [37.5, 10479.0], [37.6, 10479.0], [37.7, 10479.0], [37.8, 10479.0], [37.9, 10479.0], [38.0, 10484.0], [38.1, 10484.0], [38.2, 10484.0], [38.3, 10484.0], [38.4, 10484.0], [38.5, 10484.0], [38.6, 10484.0], [38.7, 10484.0], [38.8, 10484.0], [38.9, 10484.0], [39.0, 10484.0], [39.1, 10484.0], [39.2, 10484.0], [39.3, 10484.0], [39.4, 10484.0], [39.5, 10484.0], [39.6, 10484.0], [39.7, 10484.0], [39.8, 10484.0], [39.9, 10484.0], [40.0, 10495.0], [40.1, 10495.0], [40.2, 10495.0], [40.3, 10495.0], [40.4, 10495.0], [40.5, 10495.0], [40.6, 10495.0], [40.7, 10495.0], [40.8, 10495.0], [40.9, 10495.0], [41.0, 10495.0], [41.1, 10495.0], [41.2, 10495.0], [41.3, 10495.0], [41.4, 10495.0], [41.5, 10495.0], [41.6, 10495.0], [41.7, 10495.0], [41.8, 10495.0], [41.9, 10495.0], [42.0, 10512.0], [42.1, 10512.0], [42.2, 10512.0], [42.3, 10512.0], [42.4, 10512.0], [42.5, 10512.0], [42.6, 10512.0], [42.7, 10512.0], [42.8, 10512.0], [42.9, 10512.0], [43.0, 10512.0], [43.1, 10512.0], [43.2, 10512.0], [43.3, 10512.0], [43.4, 10512.0], [43.5, 10512.0], [43.6, 10512.0], [43.7, 10512.0], [43.8, 10512.0], [43.9, 10512.0], [44.0, 10519.0], [44.1, 10519.0], [44.2, 10519.0], [44.3, 10519.0], [44.4, 10519.0], [44.5, 10519.0], [44.6, 10519.0], [44.7, 10519.0], [44.8, 10519.0], [44.9, 10519.0], [45.0, 10519.0], [45.1, 10519.0], [45.2, 10519.0], [45.3, 10519.0], [45.4, 10519.0], [45.5, 10519.0], [45.6, 10519.0], [45.7, 10519.0], [45.8, 10519.0], [45.9, 10519.0], [46.0, 10529.0], [46.1, 10529.0], [46.2, 10529.0], [46.3, 10529.0], [46.4, 10529.0], [46.5, 10529.0], [46.6, 10529.0], [46.7, 10529.0], [46.8, 10529.0], [46.9, 10529.0], [47.0, 10529.0], [47.1, 10529.0], [47.2, 10529.0], [47.3, 10529.0], [47.4, 10529.0], [47.5, 10529.0], [47.6, 10529.0], [47.7, 10529.0], [47.8, 10529.0], [47.9, 10529.0], [48.0, 10532.0], [48.1, 10532.0], [48.2, 10532.0], [48.3, 10532.0], [48.4, 10532.0], [48.5, 10532.0], [48.6, 10532.0], [48.7, 10532.0], [48.8, 10532.0], [48.9, 10532.0], [49.0, 10532.0], [49.1, 10532.0], [49.2, 10532.0], [49.3, 10532.0], [49.4, 10532.0], [49.5, 10532.0], [49.6, 10532.0], [49.7, 10532.0], [49.8, 10532.0], [49.9, 10532.0], [50.0, 10553.0], [50.1, 10553.0], [50.2, 10553.0], [50.3, 10553.0], [50.4, 10553.0], [50.5, 10553.0], [50.6, 10553.0], [50.7, 10553.0], [50.8, 10553.0], [50.9, 10553.0], [51.0, 10553.0], [51.1, 10553.0], [51.2, 10553.0], [51.3, 10553.0], [51.4, 10553.0], [51.5, 10553.0], [51.6, 10553.0], [51.7, 10553.0], [51.8, 10553.0], [51.9, 10553.0], [52.0, 10556.0], [52.1, 10556.0], [52.2, 10556.0], [52.3, 10556.0], [52.4, 10556.0], [52.5, 10556.0], [52.6, 10556.0], [52.7, 10556.0], [52.8, 10556.0], [52.9, 10556.0], [53.0, 10556.0], [53.1, 10556.0], [53.2, 10556.0], [53.3, 10556.0], [53.4, 10556.0], [53.5, 10556.0], [53.6, 10556.0], [53.7, 10556.0], [53.8, 10556.0], [53.9, 10556.0], [54.0, 10605.0], [54.1, 10605.0], [54.2, 10605.0], [54.3, 10605.0], [54.4, 10605.0], [54.5, 10605.0], [54.6, 10605.0], [54.7, 10605.0], [54.8, 10605.0], [54.9, 10605.0], [55.0, 10605.0], [55.1, 10605.0], [55.2, 10605.0], [55.3, 10605.0], [55.4, 10605.0], [55.5, 10605.0], [55.6, 10605.0], [55.7, 10605.0], [55.8, 10605.0], [55.9, 10605.0], [56.0, 10611.0], [56.1, 10611.0], [56.2, 10611.0], [56.3, 10611.0], [56.4, 10611.0], [56.5, 10611.0], [56.6, 10611.0], [56.7, 10611.0], [56.8, 10611.0], [56.9, 10611.0], [57.0, 10611.0], [57.1, 10611.0], [57.2, 10611.0], [57.3, 10611.0], [57.4, 10611.0], [57.5, 10611.0], [57.6, 10611.0], [57.7, 10611.0], [57.8, 10611.0], [57.9, 10611.0], [58.0, 10615.0], [58.1, 10615.0], [58.2, 10615.0], [58.3, 10615.0], [58.4, 10615.0], [58.5, 10615.0], [58.6, 10615.0], [58.7, 10615.0], [58.8, 10615.0], [58.9, 10615.0], [59.0, 10615.0], [59.1, 10615.0], [59.2, 10615.0], [59.3, 10615.0], [59.4, 10615.0], [59.5, 10615.0], [59.6, 10615.0], [59.7, 10615.0], [59.8, 10615.0], [59.9, 10615.0], [60.0, 10618.0], [60.1, 10618.0], [60.2, 10618.0], [60.3, 10618.0], [60.4, 10618.0], [60.5, 10618.0], [60.6, 10618.0], [60.7, 10618.0], [60.8, 10618.0], [60.9, 10618.0], [61.0, 10618.0], [61.1, 10618.0], [61.2, 10618.0], [61.3, 10618.0], [61.4, 10618.0], [61.5, 10618.0], [61.6, 10618.0], [61.7, 10618.0], [61.8, 10618.0], [61.9, 10618.0], [62.0, 10628.0], [62.1, 10628.0], [62.2, 10628.0], [62.3, 10628.0], [62.4, 10628.0], [62.5, 10628.0], [62.6, 10628.0], [62.7, 10628.0], [62.8, 10628.0], [62.9, 10628.0], [63.0, 10628.0], [63.1, 10628.0], [63.2, 10628.0], [63.3, 10628.0], [63.4, 10628.0], [63.5, 10628.0], [63.6, 10628.0], [63.7, 10628.0], [63.8, 10628.0], [63.9, 10628.0], [64.0, 10631.0], [64.1, 10631.0], [64.2, 10631.0], [64.3, 10631.0], [64.4, 10631.0], [64.5, 10631.0], [64.6, 10631.0], [64.7, 10631.0], [64.8, 10631.0], [64.9, 10631.0], [65.0, 10631.0], [65.1, 10631.0], [65.2, 10631.0], [65.3, 10631.0], [65.4, 10631.0], [65.5, 10631.0], [65.6, 10631.0], [65.7, 10631.0], [65.8, 10631.0], [65.9, 10631.0], [66.0, 10634.0], [66.1, 10634.0], [66.2, 10634.0], [66.3, 10634.0], [66.4, 10634.0], [66.5, 10634.0], [66.6, 10634.0], [66.7, 10634.0], [66.8, 10634.0], [66.9, 10634.0], [67.0, 10634.0], [67.1, 10634.0], [67.2, 10634.0], [67.3, 10634.0], [67.4, 10634.0], [67.5, 10634.0], [67.6, 10634.0], [67.7, 10634.0], [67.8, 10634.0], [67.9, 10634.0], [68.0, 10641.0], [68.1, 10641.0], [68.2, 10641.0], [68.3, 10641.0], [68.4, 10641.0], [68.5, 10641.0], [68.6, 10641.0], [68.7, 10641.0], [68.8, 10641.0], [68.9, 10641.0], [69.0, 10641.0], [69.1, 10641.0], [69.2, 10641.0], [69.3, 10641.0], [69.4, 10641.0], [69.5, 10641.0], [69.6, 10641.0], [69.7, 10641.0], [69.8, 10641.0], [69.9, 10641.0], [70.0, 10655.0], [70.1, 10655.0], [70.2, 10655.0], [70.3, 10655.0], [70.4, 10655.0], [70.5, 10655.0], [70.6, 10655.0], [70.7, 10655.0], [70.8, 10655.0], [70.9, 10655.0], [71.0, 10655.0], [71.1, 10655.0], [71.2, 10655.0], [71.3, 10655.0], [71.4, 10655.0], [71.5, 10655.0], [71.6, 10655.0], [71.7, 10655.0], [71.8, 10655.0], [71.9, 10655.0], [72.0, 10670.0], [72.1, 10670.0], [72.2, 10670.0], [72.3, 10670.0], [72.4, 10670.0], [72.5, 10670.0], [72.6, 10670.0], [72.7, 10670.0], [72.8, 10670.0], [72.9, 10670.0], [73.0, 10670.0], [73.1, 10670.0], [73.2, 10670.0], [73.3, 10670.0], [73.4, 10670.0], [73.5, 10670.0], [73.6, 10670.0], [73.7, 10670.0], [73.8, 10670.0], [73.9, 10670.0], [74.0, 10672.0], [74.1, 10672.0], [74.2, 10672.0], [74.3, 10672.0], [74.4, 10672.0], [74.5, 10672.0], [74.6, 10672.0], [74.7, 10672.0], [74.8, 10672.0], [74.9, 10672.0], [75.0, 10672.0], [75.1, 10672.0], [75.2, 10672.0], [75.3, 10672.0], [75.4, 10672.0], [75.5, 10672.0], [75.6, 10672.0], [75.7, 10672.0], [75.8, 10672.0], [75.9, 10672.0], [76.0, 10682.0], [76.1, 10682.0], [76.2, 10682.0], [76.3, 10682.0], [76.4, 10682.0], [76.5, 10682.0], [76.6, 10682.0], [76.7, 10682.0], [76.8, 10682.0], [76.9, 10682.0], [77.0, 10682.0], [77.1, 10682.0], [77.2, 10682.0], [77.3, 10682.0], [77.4, 10682.0], [77.5, 10682.0], [77.6, 10682.0], [77.7, 10682.0], [77.8, 10682.0], [77.9, 10682.0], [78.0, 10691.0], [78.1, 10691.0], [78.2, 10691.0], [78.3, 10691.0], [78.4, 10691.0], [78.5, 10691.0], [78.6, 10691.0], [78.7, 10691.0], [78.8, 10691.0], [78.9, 10691.0], [79.0, 10691.0], [79.1, 10691.0], [79.2, 10691.0], [79.3, 10691.0], [79.4, 10691.0], [79.5, 10691.0], [79.6, 10691.0], [79.7, 10691.0], [79.8, 10691.0], [79.9, 10691.0], [80.0, 10755.0], [80.1, 10755.0], [80.2, 10755.0], [80.3, 10755.0], [80.4, 10755.0], [80.5, 10755.0], [80.6, 10755.0], [80.7, 10755.0], [80.8, 10755.0], [80.9, 10755.0], [81.0, 10755.0], [81.1, 10755.0], [81.2, 10755.0], [81.3, 10755.0], [81.4, 10755.0], [81.5, 10755.0], [81.6, 10755.0], [81.7, 10755.0], [81.8, 10755.0], [81.9, 10755.0], [82.0, 10768.0], [82.1, 10768.0], [82.2, 10768.0], [82.3, 10768.0], [82.4, 10768.0], [82.5, 10768.0], [82.6, 10768.0], [82.7, 10768.0], [82.8, 10768.0], [82.9, 10768.0], [83.0, 10768.0], [83.1, 10768.0], [83.2, 10768.0], [83.3, 10768.0], [83.4, 10768.0], [83.5, 10768.0], [83.6, 10768.0], [83.7, 10768.0], [83.8, 10768.0], [83.9, 10768.0], [84.0, 10803.0], [84.1, 10803.0], [84.2, 10803.0], [84.3, 10803.0], [84.4, 10803.0], [84.5, 10803.0], [84.6, 10803.0], [84.7, 10803.0], [84.8, 10803.0], [84.9, 10803.0], [85.0, 10803.0], [85.1, 10803.0], [85.2, 10803.0], [85.3, 10803.0], [85.4, 10803.0], [85.5, 10803.0], [85.6, 10803.0], [85.7, 10803.0], [85.8, 10803.0], [85.9, 10803.0], [86.0, 10861.0], [86.1, 10861.0], [86.2, 10861.0], [86.3, 10861.0], [86.4, 10861.0], [86.5, 10861.0], [86.6, 10861.0], [86.7, 10861.0], [86.8, 10861.0], [86.9, 10861.0], [87.0, 10861.0], [87.1, 10861.0], [87.2, 10861.0], [87.3, 10861.0], [87.4, 10861.0], [87.5, 10861.0], [87.6, 10861.0], [87.7, 10861.0], [87.8, 10861.0], [87.9, 10861.0], [88.0, 10933.0], [88.1, 10933.0], [88.2, 10933.0], [88.3, 10933.0], [88.4, 10933.0], [88.5, 10933.0], [88.6, 10933.0], [88.7, 10933.0], [88.8, 10933.0], [88.9, 10933.0], [89.0, 10933.0], [89.1, 10933.0], [89.2, 10933.0], [89.3, 10933.0], [89.4, 10933.0], [89.5, 10933.0], [89.6, 10933.0], [89.7, 10933.0], [89.8, 10933.0], [89.9, 10933.0], [90.0, 12255.0], [90.1, 12255.0], [90.2, 12255.0], [90.3, 12255.0], [90.4, 12255.0], [90.5, 12255.0], [90.6, 12255.0], [90.7, 12255.0], [90.8, 12255.0], [90.9, 12255.0], [91.0, 12255.0], [91.1, 12255.0], [91.2, 12255.0], [91.3, 12255.0], [91.4, 12255.0], [91.5, 12255.0], [91.6, 12255.0], [91.7, 12255.0], [91.8, 12255.0], [91.9, 12255.0], [92.0, 12474.0], [92.1, 12474.0], [92.2, 12474.0], [92.3, 12474.0], [92.4, 12474.0], [92.5, 12474.0], [92.6, 12474.0], [92.7, 12474.0], [92.8, 12474.0], [92.9, 12474.0], [93.0, 12474.0], [93.1, 12474.0], [93.2, 12474.0], [93.3, 12474.0], [93.4, 12474.0], [93.5, 12474.0], [93.6, 12474.0], [93.7, 12474.0], [93.8, 12474.0], [93.9, 12474.0], [94.0, 12476.0], [94.1, 12476.0], [94.2, 12476.0], [94.3, 12476.0], [94.4, 12476.0], [94.5, 12476.0], [94.6, 12476.0], [94.7, 12476.0], [94.8, 12476.0], [94.9, 12476.0], [95.0, 12476.0], [95.1, 12476.0], [95.2, 12476.0], [95.3, 12476.0], [95.4, 12476.0], [95.5, 12476.0], [95.6, 12476.0], [95.7, 12476.0], [95.8, 12476.0], [95.9, 12476.0], [96.0, 12489.0], [96.1, 12489.0], [96.2, 12489.0], [96.3, 12489.0], [96.4, 12489.0], [96.5, 12489.0], [96.6, 12489.0], [96.7, 12489.0], [96.8, 12489.0], [96.9, 12489.0], [97.0, 12489.0], [97.1, 12489.0], [97.2, 12489.0], [97.3, 12489.0], [97.4, 12489.0], [97.5, 12489.0], [97.6, 12489.0], [97.7, 12489.0], [97.8, 12489.0], [97.9, 12489.0], [98.0, 12719.0], [98.1, 12719.0], [98.2, 12719.0], [98.3, 12719.0], [98.4, 12719.0], [98.5, 12719.0], [98.6, 12719.0], [98.7, 12719.0], [98.8, 12719.0], [98.9, 12719.0], [99.0, 12719.0], [99.1, 12719.0], [99.2, 12719.0], [99.3, 12719.0], [99.4, 12719.0], [99.5, 12719.0], [99.6, 12719.0], [99.7, 12719.0], [99.8, 12719.0], [99.9, 12719.0]], "isOverall": false, "label": "COMPLETABLEFUTURE", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 9000.0, "maxY": 13.0, "series": [{"data": [[9000.0, 1.0], [9200.0, 1.0], [9900.0, 1.0], [10200.0, 1.0], [10100.0, 2.0], [10000.0, 1.0], [10500.0, 6.0], [10700.0, 2.0], [10600.0, 13.0], [10400.0, 13.0], [10300.0, 1.0], [10800.0, 2.0], [10900.0, 1.0], [12200.0, 1.0], [12400.0, 3.0], [12700.0, 1.0]], "isOverall": false, "label": "COMPLETABLEFUTURE", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.583333333333334, "minX": 1.78345932E12, "maxY": 5.0, "series": [{"data": [[1.78345932E12, 5.0], [1.78345938E12, 4.583333333333334]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78345938E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 9291.0, "minX": 1.0, "maxY": 10730.304347826084, "series": [{"data": [[4.0, 10140.0], [2.0, 10063.0], [1.0, 9291.0], [5.0, 10730.304347826084], [3.0, 10189.0]], "isOverall": false, "label": "COMPLETABLEFUTURE", "isController": false}, {"data": [[4.800000000000001, 10665.539999999997]], "isOverall": false, "label": "COMPLETABLEFUTURE-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.78345932E12, "maxY": 4.9E-324, "series": [{"data": [[1.78345932E12, 0.0], [1.78345938E12, 0.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78345932E12, 0.0], [1.78345938E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78345938E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 10498.375, "minX": 1.78345932E12, "maxY": 10819.84615384615, "series": [{"data": [[1.78345932E12, 10819.84615384615], [1.78345938E12, 10498.375]], "isOverall": false, "label": "COMPLETABLEFUTURE", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78345938E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78345932E12, "maxY": 4.9E-324, "series": [{"data": [[1.78345932E12, 0.0], [1.78345938E12, 0.0]], "isOverall": false, "label": "COMPLETABLEFUTURE", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78345938E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78345932E12, "maxY": 4.9E-324, "series": [{"data": [[1.78345932E12, 0.0], [1.78345938E12, 0.0]], "isOverall": false, "label": "COMPLETABLEFUTURE", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78345938E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9078.0, "minX": 1.78345932E12, "maxY": 12719.0, "series": [{"data": [[1.78345932E12, 12489.0], [1.78345938E12, 12719.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78345932E12, 9078.0], [1.78345938E12, 9291.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78345932E12, 12474.6], [1.78345938E12, 10897.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78345932E12, 12489.0], [1.78345938E12, 12719.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78345932E12, 10629.5], [1.78345938E12, 10457.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78345932E12, 12484.45], [1.78345938E12, 12272.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78345938E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 10257.5, "minX": 1.0, "maxY": 10712.5, "series": [{"data": [[1.0, 10463.5], [4.0, 10712.5], [2.0, 10257.5], [3.0, 10583.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4.9E-324, "series": [{"data": [[1.0, 0.0], [4.0, 0.0], [2.0, 0.0], [3.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.78345926E12, "maxY": 0.43333333333333335, "series": [{"data": [[1.78345932E12, 0.43333333333333335], [1.78345926E12, 0.08333333333333333], [1.78345938E12, 0.31666666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78345938E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.78345932E12, "maxY": 0.43333333333333335, "series": [{"data": [[1.78345932E12, 0.43333333333333335], [1.78345938E12, 0.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78345938E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.78345932E12, "maxY": 0.43333333333333335, "series": [{"data": [[1.78345932E12, 0.43333333333333335], [1.78345938E12, 0.4]], "isOverall": false, "label": "COMPLETABLEFUTURE-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78345938E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.78345932E12, "maxY": 0.43333333333333335, "series": [{"data": [[1.78345932E12, 0.43333333333333335], [1.78345938E12, 0.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78345938E12, "title": "Total Transactions Per Second"}},
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

