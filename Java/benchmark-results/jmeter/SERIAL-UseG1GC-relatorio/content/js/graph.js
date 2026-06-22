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
        data: {"result": {"minY": 10412.0, "minX": 0.0, "maxY": 15846.0, "series": [{"data": [[0.0, 10412.0], [0.1, 10412.0], [0.2, 10412.0], [0.3, 10412.0], [0.4, 10412.0], [0.5, 10412.0], [0.6, 10412.0], [0.7, 10412.0], [0.8, 10412.0], [0.9, 10412.0], [1.0, 10412.0], [1.1, 10412.0], [1.2, 10412.0], [1.3, 10412.0], [1.4, 10412.0], [1.5, 10412.0], [1.6, 10412.0], [1.7, 10412.0], [1.8, 10412.0], [1.9, 10412.0], [2.0, 10435.0], [2.1, 10435.0], [2.2, 10435.0], [2.3, 10435.0], [2.4, 10435.0], [2.5, 10435.0], [2.6, 10435.0], [2.7, 10435.0], [2.8, 10435.0], [2.9, 10435.0], [3.0, 10435.0], [3.1, 10435.0], [3.2, 10435.0], [3.3, 10435.0], [3.4, 10435.0], [3.5, 10435.0], [3.6, 10435.0], [3.7, 10435.0], [3.8, 10435.0], [3.9, 10435.0], [4.0, 10439.0], [4.1, 10439.0], [4.2, 10439.0], [4.3, 10439.0], [4.4, 10439.0], [4.5, 10439.0], [4.6, 10439.0], [4.7, 10439.0], [4.8, 10439.0], [4.9, 10439.0], [5.0, 10439.0], [5.1, 10439.0], [5.2, 10439.0], [5.3, 10439.0], [5.4, 10439.0], [5.5, 10439.0], [5.6, 10439.0], [5.7, 10439.0], [5.8, 10439.0], [5.9, 10439.0], [6.0, 10521.0], [6.1, 10521.0], [6.2, 10521.0], [6.3, 10521.0], [6.4, 10521.0], [6.5, 10521.0], [6.6, 10521.0], [6.7, 10521.0], [6.8, 10521.0], [6.9, 10521.0], [7.0, 10521.0], [7.1, 10521.0], [7.2, 10521.0], [7.3, 10521.0], [7.4, 10521.0], [7.5, 10521.0], [7.6, 10521.0], [7.7, 10521.0], [7.8, 10521.0], [7.9, 10521.0], [8.0, 10546.0], [8.1, 10546.0], [8.2, 10546.0], [8.3, 10546.0], [8.4, 10546.0], [8.5, 10546.0], [8.6, 10546.0], [8.7, 10546.0], [8.8, 10546.0], [8.9, 10546.0], [9.0, 10546.0], [9.1, 10546.0], [9.2, 10546.0], [9.3, 10546.0], [9.4, 10546.0], [9.5, 10546.0], [9.6, 10546.0], [9.7, 10546.0], [9.8, 10546.0], [9.9, 10546.0], [10.0, 11246.0], [10.1, 11246.0], [10.2, 11246.0], [10.3, 11246.0], [10.4, 11246.0], [10.5, 11246.0], [10.6, 11246.0], [10.7, 11246.0], [10.8, 11246.0], [10.9, 11246.0], [11.0, 11246.0], [11.1, 11246.0], [11.2, 11246.0], [11.3, 11246.0], [11.4, 11246.0], [11.5, 11246.0], [11.6, 11246.0], [11.7, 11246.0], [11.8, 11246.0], [11.9, 11246.0], [12.0, 11267.0], [12.1, 11267.0], [12.2, 11267.0], [12.3, 11267.0], [12.4, 11267.0], [12.5, 11267.0], [12.6, 11267.0], [12.7, 11267.0], [12.8, 11267.0], [12.9, 11267.0], [13.0, 11267.0], [13.1, 11267.0], [13.2, 11267.0], [13.3, 11267.0], [13.4, 11267.0], [13.5, 11267.0], [13.6, 11267.0], [13.7, 11267.0], [13.8, 11267.0], [13.9, 11267.0], [14.0, 11283.0], [14.1, 11283.0], [14.2, 11283.0], [14.3, 11283.0], [14.4, 11283.0], [14.5, 11283.0], [14.6, 11283.0], [14.7, 11283.0], [14.8, 11283.0], [14.9, 11283.0], [15.0, 11283.0], [15.1, 11283.0], [15.2, 11283.0], [15.3, 11283.0], [15.4, 11283.0], [15.5, 11283.0], [15.6, 11283.0], [15.7, 11283.0], [15.8, 11283.0], [15.9, 11283.0], [16.0, 11288.0], [16.1, 11288.0], [16.2, 11288.0], [16.3, 11288.0], [16.4, 11288.0], [16.5, 11288.0], [16.6, 11288.0], [16.7, 11288.0], [16.8, 11288.0], [16.9, 11288.0], [17.0, 11288.0], [17.1, 11288.0], [17.2, 11288.0], [17.3, 11288.0], [17.4, 11288.0], [17.5, 11288.0], [17.6, 11288.0], [17.7, 11288.0], [17.8, 11288.0], [17.9, 11288.0], [18.0, 11304.0], [18.1, 11304.0], [18.2, 11304.0], [18.3, 11304.0], [18.4, 11304.0], [18.5, 11304.0], [18.6, 11304.0], [18.7, 11304.0], [18.8, 11304.0], [18.9, 11304.0], [19.0, 11304.0], [19.1, 11304.0], [19.2, 11304.0], [19.3, 11304.0], [19.4, 11304.0], [19.5, 11304.0], [19.6, 11304.0], [19.7, 11304.0], [19.8, 11304.0], [19.9, 11304.0], [20.0, 11318.0], [20.1, 11318.0], [20.2, 11318.0], [20.3, 11318.0], [20.4, 11318.0], [20.5, 11318.0], [20.6, 11318.0], [20.7, 11318.0], [20.8, 11318.0], [20.9, 11318.0], [21.0, 11318.0], [21.1, 11318.0], [21.2, 11318.0], [21.3, 11318.0], [21.4, 11318.0], [21.5, 11318.0], [21.6, 11318.0], [21.7, 11318.0], [21.8, 11318.0], [21.9, 11318.0], [22.0, 11366.0], [22.1, 11366.0], [22.2, 11366.0], [22.3, 11366.0], [22.4, 11366.0], [22.5, 11366.0], [22.6, 11366.0], [22.7, 11366.0], [22.8, 11366.0], [22.9, 11366.0], [23.0, 11366.0], [23.1, 11366.0], [23.2, 11366.0], [23.3, 11366.0], [23.4, 11366.0], [23.5, 11366.0], [23.6, 11366.0], [23.7, 11366.0], [23.8, 11366.0], [23.9, 11366.0], [24.0, 11368.0], [24.1, 11368.0], [24.2, 11368.0], [24.3, 11368.0], [24.4, 11368.0], [24.5, 11368.0], [24.6, 11368.0], [24.7, 11368.0], [24.8, 11368.0], [24.9, 11368.0], [25.0, 11368.0], [25.1, 11368.0], [25.2, 11368.0], [25.3, 11368.0], [25.4, 11368.0], [25.5, 11368.0], [25.6, 11368.0], [25.7, 11368.0], [25.8, 11368.0], [25.9, 11368.0], [26.0, 11406.0], [26.1, 11406.0], [26.2, 11406.0], [26.3, 11406.0], [26.4, 11406.0], [26.5, 11406.0], [26.6, 11406.0], [26.7, 11406.0], [26.8, 11406.0], [26.9, 11406.0], [27.0, 11406.0], [27.1, 11406.0], [27.2, 11406.0], [27.3, 11406.0], [27.4, 11406.0], [27.5, 11406.0], [27.6, 11406.0], [27.7, 11406.0], [27.8, 11406.0], [27.9, 11406.0], [28.0, 11425.0], [28.1, 11425.0], [28.2, 11425.0], [28.3, 11425.0], [28.4, 11425.0], [28.5, 11425.0], [28.6, 11425.0], [28.7, 11425.0], [28.8, 11425.0], [28.9, 11425.0], [29.0, 11425.0], [29.1, 11425.0], [29.2, 11425.0], [29.3, 11425.0], [29.4, 11425.0], [29.5, 11425.0], [29.6, 11425.0], [29.7, 11425.0], [29.8, 11425.0], [29.9, 11425.0], [30.0, 12272.0], [30.1, 12272.0], [30.2, 12272.0], [30.3, 12272.0], [30.4, 12272.0], [30.5, 12272.0], [30.6, 12272.0], [30.7, 12272.0], [30.8, 12272.0], [30.9, 12272.0], [31.0, 12272.0], [31.1, 12272.0], [31.2, 12272.0], [31.3, 12272.0], [31.4, 12272.0], [31.5, 12272.0], [31.6, 12272.0], [31.7, 12272.0], [31.8, 12272.0], [31.9, 12272.0], [32.0, 12322.0], [32.1, 12322.0], [32.2, 12322.0], [32.3, 12322.0], [32.4, 12322.0], [32.5, 12322.0], [32.6, 12322.0], [32.7, 12322.0], [32.8, 12322.0], [32.9, 12322.0], [33.0, 12322.0], [33.1, 12322.0], [33.2, 12322.0], [33.3, 12322.0], [33.4, 12322.0], [33.5, 12322.0], [33.6, 12322.0], [33.7, 12322.0], [33.8, 12322.0], [33.9, 12322.0], [34.0, 12340.0], [34.1, 12340.0], [34.2, 12340.0], [34.3, 12340.0], [34.4, 12340.0], [34.5, 12340.0], [34.6, 12340.0], [34.7, 12340.0], [34.8, 12340.0], [34.9, 12340.0], [35.0, 12340.0], [35.1, 12340.0], [35.2, 12340.0], [35.3, 12340.0], [35.4, 12340.0], [35.5, 12340.0], [35.6, 12340.0], [35.7, 12340.0], [35.8, 12340.0], [35.9, 12340.0], [36.0, 12356.0], [36.1, 12356.0], [36.2, 12356.0], [36.3, 12356.0], [36.4, 12356.0], [36.5, 12356.0], [36.6, 12356.0], [36.7, 12356.0], [36.8, 12356.0], [36.9, 12356.0], [37.0, 12356.0], [37.1, 12356.0], [37.2, 12356.0], [37.3, 12356.0], [37.4, 12356.0], [37.5, 12356.0], [37.6, 12356.0], [37.7, 12356.0], [37.8, 12356.0], [37.9, 12356.0], [38.0, 12376.0], [38.1, 12376.0], [38.2, 12376.0], [38.3, 12376.0], [38.4, 12376.0], [38.5, 12376.0], [38.6, 12376.0], [38.7, 12376.0], [38.8, 12376.0], [38.9, 12376.0], [39.0, 12376.0], [39.1, 12376.0], [39.2, 12376.0], [39.3, 12376.0], [39.4, 12376.0], [39.5, 12376.0], [39.6, 12376.0], [39.7, 12376.0], [39.8, 12376.0], [39.9, 12376.0], [40.0, 12385.0], [40.1, 12385.0], [40.2, 12385.0], [40.3, 12385.0], [40.4, 12385.0], [40.5, 12385.0], [40.6, 12385.0], [40.7, 12385.0], [40.8, 12385.0], [40.9, 12385.0], [41.0, 12385.0], [41.1, 12385.0], [41.2, 12385.0], [41.3, 12385.0], [41.4, 12385.0], [41.5, 12385.0], [41.6, 12385.0], [41.7, 12385.0], [41.8, 12385.0], [41.9, 12385.0], [42.0, 12385.0], [42.1, 12385.0], [42.2, 12385.0], [42.3, 12385.0], [42.4, 12385.0], [42.5, 12385.0], [42.6, 12385.0], [42.7, 12385.0], [42.8, 12385.0], [42.9, 12385.0], [43.0, 12385.0], [43.1, 12385.0], [43.2, 12385.0], [43.3, 12385.0], [43.4, 12385.0], [43.5, 12385.0], [43.6, 12385.0], [43.7, 12385.0], [43.8, 12385.0], [43.9, 12385.0], [44.0, 12418.0], [44.1, 12418.0], [44.2, 12418.0], [44.3, 12418.0], [44.4, 12418.0], [44.5, 12418.0], [44.6, 12418.0], [44.7, 12418.0], [44.8, 12418.0], [44.9, 12418.0], [45.0, 12418.0], [45.1, 12418.0], [45.2, 12418.0], [45.3, 12418.0], [45.4, 12418.0], [45.5, 12418.0], [45.6, 12418.0], [45.7, 12418.0], [45.8, 12418.0], [45.9, 12418.0], [46.0, 12487.0], [46.1, 12487.0], [46.2, 12487.0], [46.3, 12487.0], [46.4, 12487.0], [46.5, 12487.0], [46.6, 12487.0], [46.7, 12487.0], [46.8, 12487.0], [46.9, 12487.0], [47.0, 12487.0], [47.1, 12487.0], [47.2, 12487.0], [47.3, 12487.0], [47.4, 12487.0], [47.5, 12487.0], [47.6, 12487.0], [47.7, 12487.0], [47.8, 12487.0], [47.9, 12487.0], [48.0, 12515.0], [48.1, 12515.0], [48.2, 12515.0], [48.3, 12515.0], [48.4, 12515.0], [48.5, 12515.0], [48.6, 12515.0], [48.7, 12515.0], [48.8, 12515.0], [48.9, 12515.0], [49.0, 12515.0], [49.1, 12515.0], [49.2, 12515.0], [49.3, 12515.0], [49.4, 12515.0], [49.5, 12515.0], [49.6, 12515.0], [49.7, 12515.0], [49.8, 12515.0], [49.9, 12515.0], [50.0, 12678.0], [50.1, 12678.0], [50.2, 12678.0], [50.3, 12678.0], [50.4, 12678.0], [50.5, 12678.0], [50.6, 12678.0], [50.7, 12678.0], [50.8, 12678.0], [50.9, 12678.0], [51.0, 12678.0], [51.1, 12678.0], [51.2, 12678.0], [51.3, 12678.0], [51.4, 12678.0], [51.5, 12678.0], [51.6, 12678.0], [51.7, 12678.0], [51.8, 12678.0], [51.9, 12678.0], [52.0, 12770.0], [52.1, 12770.0], [52.2, 12770.0], [52.3, 12770.0], [52.4, 12770.0], [52.5, 12770.0], [52.6, 12770.0], [52.7, 12770.0], [52.8, 12770.0], [52.9, 12770.0], [53.0, 12770.0], [53.1, 12770.0], [53.2, 12770.0], [53.3, 12770.0], [53.4, 12770.0], [53.5, 12770.0], [53.6, 12770.0], [53.7, 12770.0], [53.8, 12770.0], [53.9, 12770.0], [54.0, 12774.0], [54.1, 12774.0], [54.2, 12774.0], [54.3, 12774.0], [54.4, 12774.0], [54.5, 12774.0], [54.6, 12774.0], [54.7, 12774.0], [54.8, 12774.0], [54.9, 12774.0], [55.0, 12774.0], [55.1, 12774.0], [55.2, 12774.0], [55.3, 12774.0], [55.4, 12774.0], [55.5, 12774.0], [55.6, 12774.0], [55.7, 12774.0], [55.8, 12774.0], [55.9, 12774.0], [56.0, 12780.0], [56.1, 12780.0], [56.2, 12780.0], [56.3, 12780.0], [56.4, 12780.0], [56.5, 12780.0], [56.6, 12780.0], [56.7, 12780.0], [56.8, 12780.0], [56.9, 12780.0], [57.0, 12780.0], [57.1, 12780.0], [57.2, 12780.0], [57.3, 12780.0], [57.4, 12780.0], [57.5, 12780.0], [57.6, 12780.0], [57.7, 12780.0], [57.8, 12780.0], [57.9, 12780.0], [58.0, 12821.0], [58.1, 12821.0], [58.2, 12821.0], [58.3, 12821.0], [58.4, 12821.0], [58.5, 12821.0], [58.6, 12821.0], [58.7, 12821.0], [58.8, 12821.0], [58.9, 12821.0], [59.0, 12821.0], [59.1, 12821.0], [59.2, 12821.0], [59.3, 12821.0], [59.4, 12821.0], [59.5, 12821.0], [59.6, 12821.0], [59.7, 12821.0], [59.8, 12821.0], [59.9, 12821.0], [60.0, 12831.0], [60.1, 12831.0], [60.2, 12831.0], [60.3, 12831.0], [60.4, 12831.0], [60.5, 12831.0], [60.6, 12831.0], [60.7, 12831.0], [60.8, 12831.0], [60.9, 12831.0], [61.0, 12831.0], [61.1, 12831.0], [61.2, 12831.0], [61.3, 12831.0], [61.4, 12831.0], [61.5, 12831.0], [61.6, 12831.0], [61.7, 12831.0], [61.8, 12831.0], [61.9, 12831.0], [62.0, 12855.0], [62.1, 12855.0], [62.2, 12855.0], [62.3, 12855.0], [62.4, 12855.0], [62.5, 12855.0], [62.6, 12855.0], [62.7, 12855.0], [62.8, 12855.0], [62.9, 12855.0], [63.0, 12855.0], [63.1, 12855.0], [63.2, 12855.0], [63.3, 12855.0], [63.4, 12855.0], [63.5, 12855.0], [63.6, 12855.0], [63.7, 12855.0], [63.8, 12855.0], [63.9, 12855.0], [64.0, 12911.0], [64.1, 12911.0], [64.2, 12911.0], [64.3, 12911.0], [64.4, 12911.0], [64.5, 12911.0], [64.6, 12911.0], [64.7, 12911.0], [64.8, 12911.0], [64.9, 12911.0], [65.0, 12911.0], [65.1, 12911.0], [65.2, 12911.0], [65.3, 12911.0], [65.4, 12911.0], [65.5, 12911.0], [65.6, 12911.0], [65.7, 12911.0], [65.8, 12911.0], [65.9, 12911.0], [66.0, 12950.0], [66.1, 12950.0], [66.2, 12950.0], [66.3, 12950.0], [66.4, 12950.0], [66.5, 12950.0], [66.6, 12950.0], [66.7, 12950.0], [66.8, 12950.0], [66.9, 12950.0], [67.0, 12950.0], [67.1, 12950.0], [67.2, 12950.0], [67.3, 12950.0], [67.4, 12950.0], [67.5, 12950.0], [67.6, 12950.0], [67.7, 12950.0], [67.8, 12950.0], [67.9, 12950.0], [68.0, 13008.0], [68.1, 13008.0], [68.2, 13008.0], [68.3, 13008.0], [68.4, 13008.0], [68.5, 13008.0], [68.6, 13008.0], [68.7, 13008.0], [68.8, 13008.0], [68.9, 13008.0], [69.0, 13008.0], [69.1, 13008.0], [69.2, 13008.0], [69.3, 13008.0], [69.4, 13008.0], [69.5, 13008.0], [69.6, 13008.0], [69.7, 13008.0], [69.8, 13008.0], [69.9, 13008.0], [70.0, 13028.0], [70.1, 13028.0], [70.2, 13028.0], [70.3, 13028.0], [70.4, 13028.0], [70.5, 13028.0], [70.6, 13028.0], [70.7, 13028.0], [70.8, 13028.0], [70.9, 13028.0], [71.0, 13028.0], [71.1, 13028.0], [71.2, 13028.0], [71.3, 13028.0], [71.4, 13028.0], [71.5, 13028.0], [71.6, 13028.0], [71.7, 13028.0], [71.8, 13028.0], [71.9, 13028.0], [72.0, 13063.0], [72.1, 13063.0], [72.2, 13063.0], [72.3, 13063.0], [72.4, 13063.0], [72.5, 13063.0], [72.6, 13063.0], [72.7, 13063.0], [72.8, 13063.0], [72.9, 13063.0], [73.0, 13063.0], [73.1, 13063.0], [73.2, 13063.0], [73.3, 13063.0], [73.4, 13063.0], [73.5, 13063.0], [73.6, 13063.0], [73.7, 13063.0], [73.8, 13063.0], [73.9, 13063.0], [74.0, 13122.0], [74.1, 13122.0], [74.2, 13122.0], [74.3, 13122.0], [74.4, 13122.0], [74.5, 13122.0], [74.6, 13122.0], [74.7, 13122.0], [74.8, 13122.0], [74.9, 13122.0], [75.0, 13122.0], [75.1, 13122.0], [75.2, 13122.0], [75.3, 13122.0], [75.4, 13122.0], [75.5, 13122.0], [75.6, 13122.0], [75.7, 13122.0], [75.8, 13122.0], [75.9, 13122.0], [76.0, 13180.0], [76.1, 13180.0], [76.2, 13180.0], [76.3, 13180.0], [76.4, 13180.0], [76.5, 13180.0], [76.6, 13180.0], [76.7, 13180.0], [76.8, 13180.0], [76.9, 13180.0], [77.0, 13180.0], [77.1, 13180.0], [77.2, 13180.0], [77.3, 13180.0], [77.4, 13180.0], [77.5, 13180.0], [77.6, 13180.0], [77.7, 13180.0], [77.8, 13180.0], [77.9, 13180.0], [78.0, 13392.0], [78.1, 13392.0], [78.2, 13392.0], [78.3, 13392.0], [78.4, 13392.0], [78.5, 13392.0], [78.6, 13392.0], [78.7, 13392.0], [78.8, 13392.0], [78.9, 13392.0], [79.0, 13392.0], [79.1, 13392.0], [79.2, 13392.0], [79.3, 13392.0], [79.4, 13392.0], [79.5, 13392.0], [79.6, 13392.0], [79.7, 13392.0], [79.8, 13392.0], [79.9, 13392.0], [80.0, 13809.0], [80.1, 13809.0], [80.2, 13809.0], [80.3, 13809.0], [80.4, 13809.0], [80.5, 13809.0], [80.6, 13809.0], [80.7, 13809.0], [80.8, 13809.0], [80.9, 13809.0], [81.0, 13809.0], [81.1, 13809.0], [81.2, 13809.0], [81.3, 13809.0], [81.4, 13809.0], [81.5, 13809.0], [81.6, 13809.0], [81.7, 13809.0], [81.8, 13809.0], [81.9, 13809.0], [82.0, 13874.0], [82.1, 13874.0], [82.2, 13874.0], [82.3, 13874.0], [82.4, 13874.0], [82.5, 13874.0], [82.6, 13874.0], [82.7, 13874.0], [82.8, 13874.0], [82.9, 13874.0], [83.0, 13874.0], [83.1, 13874.0], [83.2, 13874.0], [83.3, 13874.0], [83.4, 13874.0], [83.5, 13874.0], [83.6, 13874.0], [83.7, 13874.0], [83.8, 13874.0], [83.9, 13874.0], [84.0, 13904.0], [84.1, 13904.0], [84.2, 13904.0], [84.3, 13904.0], [84.4, 13904.0], [84.5, 13904.0], [84.6, 13904.0], [84.7, 13904.0], [84.8, 13904.0], [84.9, 13904.0], [85.0, 13904.0], [85.1, 13904.0], [85.2, 13904.0], [85.3, 13904.0], [85.4, 13904.0], [85.5, 13904.0], [85.6, 13904.0], [85.7, 13904.0], [85.8, 13904.0], [85.9, 13904.0], [86.0, 13996.0], [86.1, 13996.0], [86.2, 13996.0], [86.3, 13996.0], [86.4, 13996.0], [86.5, 13996.0], [86.6, 13996.0], [86.7, 13996.0], [86.8, 13996.0], [86.9, 13996.0], [87.0, 13996.0], [87.1, 13996.0], [87.2, 13996.0], [87.3, 13996.0], [87.4, 13996.0], [87.5, 13996.0], [87.6, 13996.0], [87.7, 13996.0], [87.8, 13996.0], [87.9, 13996.0], [88.0, 14029.0], [88.1, 14029.0], [88.2, 14029.0], [88.3, 14029.0], [88.4, 14029.0], [88.5, 14029.0], [88.6, 14029.0], [88.7, 14029.0], [88.8, 14029.0], [88.9, 14029.0], [89.0, 14029.0], [89.1, 14029.0], [89.2, 14029.0], [89.3, 14029.0], [89.4, 14029.0], [89.5, 14029.0], [89.6, 14029.0], [89.7, 14029.0], [89.8, 14029.0], [89.9, 14029.0], [90.0, 15752.0], [90.1, 15752.0], [90.2, 15752.0], [90.3, 15752.0], [90.4, 15752.0], [90.5, 15752.0], [90.6, 15752.0], [90.7, 15752.0], [90.8, 15752.0], [90.9, 15752.0], [91.0, 15752.0], [91.1, 15752.0], [91.2, 15752.0], [91.3, 15752.0], [91.4, 15752.0], [91.5, 15752.0], [91.6, 15752.0], [91.7, 15752.0], [91.8, 15752.0], [91.9, 15752.0], [92.0, 15756.0], [92.1, 15756.0], [92.2, 15756.0], [92.3, 15756.0], [92.4, 15756.0], [92.5, 15756.0], [92.6, 15756.0], [92.7, 15756.0], [92.8, 15756.0], [92.9, 15756.0], [93.0, 15756.0], [93.1, 15756.0], [93.2, 15756.0], [93.3, 15756.0], [93.4, 15756.0], [93.5, 15756.0], [93.6, 15756.0], [93.7, 15756.0], [93.8, 15756.0], [93.9, 15756.0], [94.0, 15794.0], [94.1, 15794.0], [94.2, 15794.0], [94.3, 15794.0], [94.4, 15794.0], [94.5, 15794.0], [94.6, 15794.0], [94.7, 15794.0], [94.8, 15794.0], [94.9, 15794.0], [95.0, 15794.0], [95.1, 15794.0], [95.2, 15794.0], [95.3, 15794.0], [95.4, 15794.0], [95.5, 15794.0], [95.6, 15794.0], [95.7, 15794.0], [95.8, 15794.0], [95.9, 15794.0], [96.0, 15820.0], [96.1, 15820.0], [96.2, 15820.0], [96.3, 15820.0], [96.4, 15820.0], [96.5, 15820.0], [96.6, 15820.0], [96.7, 15820.0], [96.8, 15820.0], [96.9, 15820.0], [97.0, 15820.0], [97.1, 15820.0], [97.2, 15820.0], [97.3, 15820.0], [97.4, 15820.0], [97.5, 15820.0], [97.6, 15820.0], [97.7, 15820.0], [97.8, 15820.0], [97.9, 15820.0], [98.0, 15846.0], [98.1, 15846.0], [98.2, 15846.0], [98.3, 15846.0], [98.4, 15846.0], [98.5, 15846.0], [98.6, 15846.0], [98.7, 15846.0], [98.8, 15846.0], [98.9, 15846.0], [99.0, 15846.0], [99.1, 15846.0], [99.2, 15846.0], [99.3, 15846.0], [99.4, 15846.0], [99.5, 15846.0], [99.6, 15846.0], [99.7, 15846.0], [99.8, 15846.0], [99.9, 15846.0]], "isOverall": false, "label": "SERIAL", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 10400.0, "maxY": 6.0, "series": [{"data": [[10400.0, 3.0], [10500.0, 2.0], [11200.0, 4.0], [11300.0, 4.0], [11400.0, 2.0], [12200.0, 1.0], [12700.0, 3.0], [12300.0, 6.0], [12500.0, 1.0], [12400.0, 2.0], [12600.0, 1.0], [12800.0, 3.0], [13000.0, 3.0], [12900.0, 2.0], [13100.0, 2.0], [13300.0, 1.0], [13800.0, 2.0], [13900.0, 2.0], [14000.0, 1.0], [15700.0, 3.0], [15800.0, 2.0]], "isOverall": false, "label": "SERIAL", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.78166286E12, "maxY": 5.0, "series": [{"data": [[1.78166286E12, 5.0], [1.78166298E12, 3.0], [1.78166292E12, 5.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78166298E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 11267.0, "minX": 1.0, "maxY": 12761.282608695652, "series": [{"data": [[4.0, 11283.0], [2.0, 11267.0], [1.0, 11288.0], [5.0, 12761.282608695652], [3.0, 11366.0]], "isOverall": false, "label": "SERIAL", "isController": false}, {"data": [[4.800000000000001, 12644.46]], "isOverall": false, "label": "SERIAL-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.78166286E12, "maxY": 4.9E-324, "series": [{"data": [[1.78166286E12, 0.0], [1.78166298E12, 0.0], [1.78166292E12, 0.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78166286E12, 0.0], [1.78166298E12, 0.0], [1.78166292E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78166298E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 11290.0, "minX": 1.78166286E12, "maxY": 13724.6, "series": [{"data": [[1.78166286E12, 13724.6], [1.78166298E12, 11290.0], [1.78166292E12, 12051.240000000002]], "isOverall": false, "label": "SERIAL", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78166298E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78166286E12, "maxY": 4.9E-324, "series": [{"data": [[1.78166286E12, 0.0], [1.78166298E12, 0.0], [1.78166292E12, 0.0]], "isOverall": false, "label": "SERIAL", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78166298E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78166286E12, "maxY": 4.9E-324, "series": [{"data": [[1.78166286E12, 0.0], [1.78166298E12, 0.0], [1.78166292E12, 0.0]], "isOverall": false, "label": "SERIAL", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78166298E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 10412.0, "minX": 1.78166286E12, "maxY": 15846.0, "series": [{"data": [[1.78166286E12, 15846.0], [1.78166298E12, 11366.0], [1.78166292E12, 13392.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78166286E12, 12272.0], [1.78166298E12, 11246.0], [1.78166292E12, 10412.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78166286E12, 15817.4], [1.78166298E12, 11366.0], [1.78166292E12, 13145.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78166286E12, 15846.0], [1.78166298E12, 11366.0], [1.78166292E12, 13392.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78166286E12, 13320.0], [1.78166298E12, 11283.0], [1.78166292E12, 12385.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78166286E12, 15844.7], [1.78166298E12, 11366.0], [1.78166292E12, 13328.4]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78166298E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 12418.0, "minX": 1.0, "maxY": 13392.0, "series": [{"data": [[2.0, 12546.0], [4.0, 13018.0], [1.0, 13392.0], [5.0, 12418.0], [3.0, 12635.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4.9E-324, "series": [{"data": [[2.0, 0.0], [4.0, 0.0], [1.0, 0.0], [5.0, 0.0], [3.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.78166286E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.78166286E12, 0.4166666666666667], [1.78166292E12, 0.4166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78166292E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.78166286E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.78166286E12, 0.3333333333333333], [1.78166298E12, 0.08333333333333333], [1.78166292E12, 0.4166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78166298E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.78166286E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.78166286E12, 0.3333333333333333], [1.78166298E12, 0.08333333333333333], [1.78166292E12, 0.4166666666666667]], "isOverall": false, "label": "SERIAL-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78166298E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.78166286E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.78166286E12, 0.3333333333333333], [1.78166298E12, 0.08333333333333333], [1.78166292E12, 0.4166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78166298E12, "title": "Total Transactions Per Second"}},
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

