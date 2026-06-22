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
        data: {"result": {"minY": 12479.0, "minX": 0.0, "maxY": 16359.0, "series": [{"data": [[0.0, 12479.0], [0.1, 12479.0], [0.2, 12479.0], [0.3, 12479.0], [0.4, 12479.0], [0.5, 12479.0], [0.6, 12479.0], [0.7, 12479.0], [0.8, 12479.0], [0.9, 12479.0], [1.0, 12479.0], [1.1, 12479.0], [1.2, 12479.0], [1.3, 12479.0], [1.4, 12479.0], [1.5, 12479.0], [1.6, 12479.0], [1.7, 12479.0], [1.8, 12479.0], [1.9, 12479.0], [2.0, 12487.0], [2.1, 12487.0], [2.2, 12487.0], [2.3, 12487.0], [2.4, 12487.0], [2.5, 12487.0], [2.6, 12487.0], [2.7, 12487.0], [2.8, 12487.0], [2.9, 12487.0], [3.0, 12487.0], [3.1, 12487.0], [3.2, 12487.0], [3.3, 12487.0], [3.4, 12487.0], [3.5, 12487.0], [3.6, 12487.0], [3.7, 12487.0], [3.8, 12487.0], [3.9, 12487.0], [4.0, 12510.0], [4.1, 12510.0], [4.2, 12510.0], [4.3, 12510.0], [4.4, 12510.0], [4.5, 12510.0], [4.6, 12510.0], [4.7, 12510.0], [4.8, 12510.0], [4.9, 12510.0], [5.0, 12510.0], [5.1, 12510.0], [5.2, 12510.0], [5.3, 12510.0], [5.4, 12510.0], [5.5, 12510.0], [5.6, 12510.0], [5.7, 12510.0], [5.8, 12510.0], [5.9, 12510.0], [6.0, 12542.0], [6.1, 12542.0], [6.2, 12542.0], [6.3, 12542.0], [6.4, 12542.0], [6.5, 12542.0], [6.6, 12542.0], [6.7, 12542.0], [6.8, 12542.0], [6.9, 12542.0], [7.0, 12542.0], [7.1, 12542.0], [7.2, 12542.0], [7.3, 12542.0], [7.4, 12542.0], [7.5, 12542.0], [7.6, 12542.0], [7.7, 12542.0], [7.8, 12542.0], [7.9, 12542.0], [8.0, 12548.0], [8.1, 12548.0], [8.2, 12548.0], [8.3, 12548.0], [8.4, 12548.0], [8.5, 12548.0], [8.6, 12548.0], [8.7, 12548.0], [8.8, 12548.0], [8.9, 12548.0], [9.0, 12548.0], [9.1, 12548.0], [9.2, 12548.0], [9.3, 12548.0], [9.4, 12548.0], [9.5, 12548.0], [9.6, 12548.0], [9.7, 12548.0], [9.8, 12548.0], [9.9, 12548.0], [10.0, 14003.0], [10.1, 14003.0], [10.2, 14003.0], [10.3, 14003.0], [10.4, 14003.0], [10.5, 14003.0], [10.6, 14003.0], [10.7, 14003.0], [10.8, 14003.0], [10.9, 14003.0], [11.0, 14003.0], [11.1, 14003.0], [11.2, 14003.0], [11.3, 14003.0], [11.4, 14003.0], [11.5, 14003.0], [11.6, 14003.0], [11.7, 14003.0], [11.8, 14003.0], [11.9, 14003.0], [12.0, 14055.0], [12.1, 14055.0], [12.2, 14055.0], [12.3, 14055.0], [12.4, 14055.0], [12.5, 14055.0], [12.6, 14055.0], [12.7, 14055.0], [12.8, 14055.0], [12.9, 14055.0], [13.0, 14055.0], [13.1, 14055.0], [13.2, 14055.0], [13.3, 14055.0], [13.4, 14055.0], [13.5, 14055.0], [13.6, 14055.0], [13.7, 14055.0], [13.8, 14055.0], [13.9, 14055.0], [14.0, 14060.0], [14.1, 14060.0], [14.2, 14060.0], [14.3, 14060.0], [14.4, 14060.0], [14.5, 14060.0], [14.6, 14060.0], [14.7, 14060.0], [14.8, 14060.0], [14.9, 14060.0], [15.0, 14060.0], [15.1, 14060.0], [15.2, 14060.0], [15.3, 14060.0], [15.4, 14060.0], [15.5, 14060.0], [15.6, 14060.0], [15.7, 14060.0], [15.8, 14060.0], [15.9, 14060.0], [16.0, 14102.0], [16.1, 14102.0], [16.2, 14102.0], [16.3, 14102.0], [16.4, 14102.0], [16.5, 14102.0], [16.6, 14102.0], [16.7, 14102.0], [16.8, 14102.0], [16.9, 14102.0], [17.0, 14102.0], [17.1, 14102.0], [17.2, 14102.0], [17.3, 14102.0], [17.4, 14102.0], [17.5, 14102.0], [17.6, 14102.0], [17.7, 14102.0], [17.8, 14102.0], [17.9, 14102.0], [18.0, 14161.0], [18.1, 14161.0], [18.2, 14161.0], [18.3, 14161.0], [18.4, 14161.0], [18.5, 14161.0], [18.6, 14161.0], [18.7, 14161.0], [18.8, 14161.0], [18.9, 14161.0], [19.0, 14161.0], [19.1, 14161.0], [19.2, 14161.0], [19.3, 14161.0], [19.4, 14161.0], [19.5, 14161.0], [19.6, 14161.0], [19.7, 14161.0], [19.8, 14161.0], [19.9, 14161.0], [20.0, 14460.0], [20.1, 14460.0], [20.2, 14460.0], [20.3, 14460.0], [20.4, 14460.0], [20.5, 14460.0], [20.6, 14460.0], [20.7, 14460.0], [20.8, 14460.0], [20.9, 14460.0], [21.0, 14460.0], [21.1, 14460.0], [21.2, 14460.0], [21.3, 14460.0], [21.4, 14460.0], [21.5, 14460.0], [21.6, 14460.0], [21.7, 14460.0], [21.8, 14460.0], [21.9, 14460.0], [22.0, 14471.0], [22.1, 14471.0], [22.2, 14471.0], [22.3, 14471.0], [22.4, 14471.0], [22.5, 14471.0], [22.6, 14471.0], [22.7, 14471.0], [22.8, 14471.0], [22.9, 14471.0], [23.0, 14471.0], [23.1, 14471.0], [23.2, 14471.0], [23.3, 14471.0], [23.4, 14471.0], [23.5, 14471.0], [23.6, 14471.0], [23.7, 14471.0], [23.8, 14471.0], [23.9, 14471.0], [24.0, 14474.0], [24.1, 14474.0], [24.2, 14474.0], [24.3, 14474.0], [24.4, 14474.0], [24.5, 14474.0], [24.6, 14474.0], [24.7, 14474.0], [24.8, 14474.0], [24.9, 14474.0], [25.0, 14474.0], [25.1, 14474.0], [25.2, 14474.0], [25.3, 14474.0], [25.4, 14474.0], [25.5, 14474.0], [25.6, 14474.0], [25.7, 14474.0], [25.8, 14474.0], [25.9, 14474.0], [26.0, 14504.0], [26.1, 14504.0], [26.2, 14504.0], [26.3, 14504.0], [26.4, 14504.0], [26.5, 14504.0], [26.6, 14504.0], [26.7, 14504.0], [26.8, 14504.0], [26.9, 14504.0], [27.0, 14504.0], [27.1, 14504.0], [27.2, 14504.0], [27.3, 14504.0], [27.4, 14504.0], [27.5, 14504.0], [27.6, 14504.0], [27.7, 14504.0], [27.8, 14504.0], [27.9, 14504.0], [28.0, 14536.0], [28.1, 14536.0], [28.2, 14536.0], [28.3, 14536.0], [28.4, 14536.0], [28.5, 14536.0], [28.6, 14536.0], [28.7, 14536.0], [28.8, 14536.0], [28.9, 14536.0], [29.0, 14536.0], [29.1, 14536.0], [29.2, 14536.0], [29.3, 14536.0], [29.4, 14536.0], [29.5, 14536.0], [29.6, 14536.0], [29.7, 14536.0], [29.8, 14536.0], [29.9, 14536.0], [30.0, 14543.0], [30.1, 14543.0], [30.2, 14543.0], [30.3, 14543.0], [30.4, 14543.0], [30.5, 14543.0], [30.6, 14543.0], [30.7, 14543.0], [30.8, 14543.0], [30.9, 14543.0], [31.0, 14543.0], [31.1, 14543.0], [31.2, 14543.0], [31.3, 14543.0], [31.4, 14543.0], [31.5, 14543.0], [31.6, 14543.0], [31.7, 14543.0], [31.8, 14543.0], [31.9, 14543.0], [32.0, 14611.0], [32.1, 14611.0], [32.2, 14611.0], [32.3, 14611.0], [32.4, 14611.0], [32.5, 14611.0], [32.6, 14611.0], [32.7, 14611.0], [32.8, 14611.0], [32.9, 14611.0], [33.0, 14611.0], [33.1, 14611.0], [33.2, 14611.0], [33.3, 14611.0], [33.4, 14611.0], [33.5, 14611.0], [33.6, 14611.0], [33.7, 14611.0], [33.8, 14611.0], [33.9, 14611.0], [34.0, 14623.0], [34.1, 14623.0], [34.2, 14623.0], [34.3, 14623.0], [34.4, 14623.0], [34.5, 14623.0], [34.6, 14623.0], [34.7, 14623.0], [34.8, 14623.0], [34.9, 14623.0], [35.0, 14623.0], [35.1, 14623.0], [35.2, 14623.0], [35.3, 14623.0], [35.4, 14623.0], [35.5, 14623.0], [35.6, 14623.0], [35.7, 14623.0], [35.8, 14623.0], [35.9, 14623.0], [36.0, 14673.0], [36.1, 14673.0], [36.2, 14673.0], [36.3, 14673.0], [36.4, 14673.0], [36.5, 14673.0], [36.6, 14673.0], [36.7, 14673.0], [36.8, 14673.0], [36.9, 14673.0], [37.0, 14673.0], [37.1, 14673.0], [37.2, 14673.0], [37.3, 14673.0], [37.4, 14673.0], [37.5, 14673.0], [37.6, 14673.0], [37.7, 14673.0], [37.8, 14673.0], [37.9, 14673.0], [38.0, 14677.0], [38.1, 14677.0], [38.2, 14677.0], [38.3, 14677.0], [38.4, 14677.0], [38.5, 14677.0], [38.6, 14677.0], [38.7, 14677.0], [38.8, 14677.0], [38.9, 14677.0], [39.0, 14677.0], [39.1, 14677.0], [39.2, 14677.0], [39.3, 14677.0], [39.4, 14677.0], [39.5, 14677.0], [39.6, 14677.0], [39.7, 14677.0], [39.8, 14677.0], [39.9, 14677.0], [40.0, 14710.0], [40.1, 14710.0], [40.2, 14710.0], [40.3, 14710.0], [40.4, 14710.0], [40.5, 14710.0], [40.6, 14710.0], [40.7, 14710.0], [40.8, 14710.0], [40.9, 14710.0], [41.0, 14710.0], [41.1, 14710.0], [41.2, 14710.0], [41.3, 14710.0], [41.4, 14710.0], [41.5, 14710.0], [41.6, 14710.0], [41.7, 14710.0], [41.8, 14710.0], [41.9, 14710.0], [42.0, 14744.0], [42.1, 14744.0], [42.2, 14744.0], [42.3, 14744.0], [42.4, 14744.0], [42.5, 14744.0], [42.6, 14744.0], [42.7, 14744.0], [42.8, 14744.0], [42.9, 14744.0], [43.0, 14744.0], [43.1, 14744.0], [43.2, 14744.0], [43.3, 14744.0], [43.4, 14744.0], [43.5, 14744.0], [43.6, 14744.0], [43.7, 14744.0], [43.8, 14744.0], [43.9, 14744.0], [44.0, 14782.0], [44.1, 14782.0], [44.2, 14782.0], [44.3, 14782.0], [44.4, 14782.0], [44.5, 14782.0], [44.6, 14782.0], [44.7, 14782.0], [44.8, 14782.0], [44.9, 14782.0], [45.0, 14782.0], [45.1, 14782.0], [45.2, 14782.0], [45.3, 14782.0], [45.4, 14782.0], [45.5, 14782.0], [45.6, 14782.0], [45.7, 14782.0], [45.8, 14782.0], [45.9, 14782.0], [46.0, 14791.0], [46.1, 14791.0], [46.2, 14791.0], [46.3, 14791.0], [46.4, 14791.0], [46.5, 14791.0], [46.6, 14791.0], [46.7, 14791.0], [46.8, 14791.0], [46.9, 14791.0], [47.0, 14791.0], [47.1, 14791.0], [47.2, 14791.0], [47.3, 14791.0], [47.4, 14791.0], [47.5, 14791.0], [47.6, 14791.0], [47.7, 14791.0], [47.8, 14791.0], [47.9, 14791.0], [48.0, 14811.0], [48.1, 14811.0], [48.2, 14811.0], [48.3, 14811.0], [48.4, 14811.0], [48.5, 14811.0], [48.6, 14811.0], [48.7, 14811.0], [48.8, 14811.0], [48.9, 14811.0], [49.0, 14811.0], [49.1, 14811.0], [49.2, 14811.0], [49.3, 14811.0], [49.4, 14811.0], [49.5, 14811.0], [49.6, 14811.0], [49.7, 14811.0], [49.8, 14811.0], [49.9, 14811.0], [50.0, 14815.0], [50.1, 14815.0], [50.2, 14815.0], [50.3, 14815.0], [50.4, 14815.0], [50.5, 14815.0], [50.6, 14815.0], [50.7, 14815.0], [50.8, 14815.0], [50.9, 14815.0], [51.0, 14815.0], [51.1, 14815.0], [51.2, 14815.0], [51.3, 14815.0], [51.4, 14815.0], [51.5, 14815.0], [51.6, 14815.0], [51.7, 14815.0], [51.8, 14815.0], [51.9, 14815.0], [52.0, 14831.0], [52.1, 14831.0], [52.2, 14831.0], [52.3, 14831.0], [52.4, 14831.0], [52.5, 14831.0], [52.6, 14831.0], [52.7, 14831.0], [52.8, 14831.0], [52.9, 14831.0], [53.0, 14831.0], [53.1, 14831.0], [53.2, 14831.0], [53.3, 14831.0], [53.4, 14831.0], [53.5, 14831.0], [53.6, 14831.0], [53.7, 14831.0], [53.8, 14831.0], [53.9, 14831.0], [54.0, 14865.0], [54.1, 14865.0], [54.2, 14865.0], [54.3, 14865.0], [54.4, 14865.0], [54.5, 14865.0], [54.6, 14865.0], [54.7, 14865.0], [54.8, 14865.0], [54.9, 14865.0], [55.0, 14865.0], [55.1, 14865.0], [55.2, 14865.0], [55.3, 14865.0], [55.4, 14865.0], [55.5, 14865.0], [55.6, 14865.0], [55.7, 14865.0], [55.8, 14865.0], [55.9, 14865.0], [56.0, 14888.0], [56.1, 14888.0], [56.2, 14888.0], [56.3, 14888.0], [56.4, 14888.0], [56.5, 14888.0], [56.6, 14888.0], [56.7, 14888.0], [56.8, 14888.0], [56.9, 14888.0], [57.0, 14888.0], [57.1, 14888.0], [57.2, 14888.0], [57.3, 14888.0], [57.4, 14888.0], [57.5, 14888.0], [57.6, 14888.0], [57.7, 14888.0], [57.8, 14888.0], [57.9, 14888.0], [58.0, 15028.0], [58.1, 15028.0], [58.2, 15028.0], [58.3, 15028.0], [58.4, 15028.0], [58.5, 15028.0], [58.6, 15028.0], [58.7, 15028.0], [58.8, 15028.0], [58.9, 15028.0], [59.0, 15028.0], [59.1, 15028.0], [59.2, 15028.0], [59.3, 15028.0], [59.4, 15028.0], [59.5, 15028.0], [59.6, 15028.0], [59.7, 15028.0], [59.8, 15028.0], [59.9, 15028.0], [60.0, 15058.0], [60.1, 15058.0], [60.2, 15058.0], [60.3, 15058.0], [60.4, 15058.0], [60.5, 15058.0], [60.6, 15058.0], [60.7, 15058.0], [60.8, 15058.0], [60.9, 15058.0], [61.0, 15058.0], [61.1, 15058.0], [61.2, 15058.0], [61.3, 15058.0], [61.4, 15058.0], [61.5, 15058.0], [61.6, 15058.0], [61.7, 15058.0], [61.8, 15058.0], [61.9, 15058.0], [62.0, 15059.0], [62.1, 15059.0], [62.2, 15059.0], [62.3, 15059.0], [62.4, 15059.0], [62.5, 15059.0], [62.6, 15059.0], [62.7, 15059.0], [62.8, 15059.0], [62.9, 15059.0], [63.0, 15059.0], [63.1, 15059.0], [63.2, 15059.0], [63.3, 15059.0], [63.4, 15059.0], [63.5, 15059.0], [63.6, 15059.0], [63.7, 15059.0], [63.8, 15059.0], [63.9, 15059.0], [64.0, 15084.0], [64.1, 15084.0], [64.2, 15084.0], [64.3, 15084.0], [64.4, 15084.0], [64.5, 15084.0], [64.6, 15084.0], [64.7, 15084.0], [64.8, 15084.0], [64.9, 15084.0], [65.0, 15084.0], [65.1, 15084.0], [65.2, 15084.0], [65.3, 15084.0], [65.4, 15084.0], [65.5, 15084.0], [65.6, 15084.0], [65.7, 15084.0], [65.8, 15084.0], [65.9, 15084.0], [66.0, 15257.0], [66.1, 15257.0], [66.2, 15257.0], [66.3, 15257.0], [66.4, 15257.0], [66.5, 15257.0], [66.6, 15257.0], [66.7, 15257.0], [66.8, 15257.0], [66.9, 15257.0], [67.0, 15257.0], [67.1, 15257.0], [67.2, 15257.0], [67.3, 15257.0], [67.4, 15257.0], [67.5, 15257.0], [67.6, 15257.0], [67.7, 15257.0], [67.8, 15257.0], [67.9, 15257.0], [68.0, 15298.0], [68.1, 15298.0], [68.2, 15298.0], [68.3, 15298.0], [68.4, 15298.0], [68.5, 15298.0], [68.6, 15298.0], [68.7, 15298.0], [68.8, 15298.0], [68.9, 15298.0], [69.0, 15298.0], [69.1, 15298.0], [69.2, 15298.0], [69.3, 15298.0], [69.4, 15298.0], [69.5, 15298.0], [69.6, 15298.0], [69.7, 15298.0], [69.8, 15298.0], [69.9, 15298.0], [70.0, 15326.0], [70.1, 15326.0], [70.2, 15326.0], [70.3, 15326.0], [70.4, 15326.0], [70.5, 15326.0], [70.6, 15326.0], [70.7, 15326.0], [70.8, 15326.0], [70.9, 15326.0], [71.0, 15326.0], [71.1, 15326.0], [71.2, 15326.0], [71.3, 15326.0], [71.4, 15326.0], [71.5, 15326.0], [71.6, 15326.0], [71.7, 15326.0], [71.8, 15326.0], [71.9, 15326.0], [72.0, 15330.0], [72.1, 15330.0], [72.2, 15330.0], [72.3, 15330.0], [72.4, 15330.0], [72.5, 15330.0], [72.6, 15330.0], [72.7, 15330.0], [72.8, 15330.0], [72.9, 15330.0], [73.0, 15330.0], [73.1, 15330.0], [73.2, 15330.0], [73.3, 15330.0], [73.4, 15330.0], [73.5, 15330.0], [73.6, 15330.0], [73.7, 15330.0], [73.8, 15330.0], [73.9, 15330.0], [74.0, 15381.0], [74.1, 15381.0], [74.2, 15381.0], [74.3, 15381.0], [74.4, 15381.0], [74.5, 15381.0], [74.6, 15381.0], [74.7, 15381.0], [74.8, 15381.0], [74.9, 15381.0], [75.0, 15381.0], [75.1, 15381.0], [75.2, 15381.0], [75.3, 15381.0], [75.4, 15381.0], [75.5, 15381.0], [75.6, 15381.0], [75.7, 15381.0], [75.8, 15381.0], [75.9, 15381.0], [76.0, 15387.0], [76.1, 15387.0], [76.2, 15387.0], [76.3, 15387.0], [76.4, 15387.0], [76.5, 15387.0], [76.6, 15387.0], [76.7, 15387.0], [76.8, 15387.0], [76.9, 15387.0], [77.0, 15387.0], [77.1, 15387.0], [77.2, 15387.0], [77.3, 15387.0], [77.4, 15387.0], [77.5, 15387.0], [77.6, 15387.0], [77.7, 15387.0], [77.8, 15387.0], [77.9, 15387.0], [78.0, 15394.0], [78.1, 15394.0], [78.2, 15394.0], [78.3, 15394.0], [78.4, 15394.0], [78.5, 15394.0], [78.6, 15394.0], [78.7, 15394.0], [78.8, 15394.0], [78.9, 15394.0], [79.0, 15394.0], [79.1, 15394.0], [79.2, 15394.0], [79.3, 15394.0], [79.4, 15394.0], [79.5, 15394.0], [79.6, 15394.0], [79.7, 15394.0], [79.8, 15394.0], [79.9, 15394.0], [80.0, 15426.0], [80.1, 15426.0], [80.2, 15426.0], [80.3, 15426.0], [80.4, 15426.0], [80.5, 15426.0], [80.6, 15426.0], [80.7, 15426.0], [80.8, 15426.0], [80.9, 15426.0], [81.0, 15426.0], [81.1, 15426.0], [81.2, 15426.0], [81.3, 15426.0], [81.4, 15426.0], [81.5, 15426.0], [81.6, 15426.0], [81.7, 15426.0], [81.8, 15426.0], [81.9, 15426.0], [82.0, 15441.0], [82.1, 15441.0], [82.2, 15441.0], [82.3, 15441.0], [82.4, 15441.0], [82.5, 15441.0], [82.6, 15441.0], [82.7, 15441.0], [82.8, 15441.0], [82.9, 15441.0], [83.0, 15441.0], [83.1, 15441.0], [83.2, 15441.0], [83.3, 15441.0], [83.4, 15441.0], [83.5, 15441.0], [83.6, 15441.0], [83.7, 15441.0], [83.8, 15441.0], [83.9, 15441.0], [84.0, 15502.0], [84.1, 15502.0], [84.2, 15502.0], [84.3, 15502.0], [84.4, 15502.0], [84.5, 15502.0], [84.6, 15502.0], [84.7, 15502.0], [84.8, 15502.0], [84.9, 15502.0], [85.0, 15502.0], [85.1, 15502.0], [85.2, 15502.0], [85.3, 15502.0], [85.4, 15502.0], [85.5, 15502.0], [85.6, 15502.0], [85.7, 15502.0], [85.8, 15502.0], [85.9, 15502.0], [86.0, 15509.0], [86.1, 15509.0], [86.2, 15509.0], [86.3, 15509.0], [86.4, 15509.0], [86.5, 15509.0], [86.6, 15509.0], [86.7, 15509.0], [86.8, 15509.0], [86.9, 15509.0], [87.0, 15509.0], [87.1, 15509.0], [87.2, 15509.0], [87.3, 15509.0], [87.4, 15509.0], [87.5, 15509.0], [87.6, 15509.0], [87.7, 15509.0], [87.8, 15509.0], [87.9, 15509.0], [88.0, 15586.0], [88.1, 15586.0], [88.2, 15586.0], [88.3, 15586.0], [88.4, 15586.0], [88.5, 15586.0], [88.6, 15586.0], [88.7, 15586.0], [88.8, 15586.0], [88.9, 15586.0], [89.0, 15586.0], [89.1, 15586.0], [89.2, 15586.0], [89.3, 15586.0], [89.4, 15586.0], [89.5, 15586.0], [89.6, 15586.0], [89.7, 15586.0], [89.8, 15586.0], [89.9, 15586.0], [90.0, 15602.0], [90.1, 15602.0], [90.2, 15602.0], [90.3, 15602.0], [90.4, 15602.0], [90.5, 15602.0], [90.6, 15602.0], [90.7, 15602.0], [90.8, 15602.0], [90.9, 15602.0], [91.0, 15602.0], [91.1, 15602.0], [91.2, 15602.0], [91.3, 15602.0], [91.4, 15602.0], [91.5, 15602.0], [91.6, 15602.0], [91.7, 15602.0], [91.8, 15602.0], [91.9, 15602.0], [92.0, 15642.0], [92.1, 15642.0], [92.2, 15642.0], [92.3, 15642.0], [92.4, 15642.0], [92.5, 15642.0], [92.6, 15642.0], [92.7, 15642.0], [92.8, 15642.0], [92.9, 15642.0], [93.0, 15642.0], [93.1, 15642.0], [93.2, 15642.0], [93.3, 15642.0], [93.4, 15642.0], [93.5, 15642.0], [93.6, 15642.0], [93.7, 15642.0], [93.8, 15642.0], [93.9, 15642.0], [94.0, 16065.0], [94.1, 16065.0], [94.2, 16065.0], [94.3, 16065.0], [94.4, 16065.0], [94.5, 16065.0], [94.6, 16065.0], [94.7, 16065.0], [94.8, 16065.0], [94.9, 16065.0], [95.0, 16065.0], [95.1, 16065.0], [95.2, 16065.0], [95.3, 16065.0], [95.4, 16065.0], [95.5, 16065.0], [95.6, 16065.0], [95.7, 16065.0], [95.8, 16065.0], [95.9, 16065.0], [96.0, 16285.0], [96.1, 16285.0], [96.2, 16285.0], [96.3, 16285.0], [96.4, 16285.0], [96.5, 16285.0], [96.6, 16285.0], [96.7, 16285.0], [96.8, 16285.0], [96.9, 16285.0], [97.0, 16285.0], [97.1, 16285.0], [97.2, 16285.0], [97.3, 16285.0], [97.4, 16285.0], [97.5, 16285.0], [97.6, 16285.0], [97.7, 16285.0], [97.8, 16285.0], [97.9, 16285.0], [98.0, 16359.0], [98.1, 16359.0], [98.2, 16359.0], [98.3, 16359.0], [98.4, 16359.0], [98.5, 16359.0], [98.6, 16359.0], [98.7, 16359.0], [98.8, 16359.0], [98.9, 16359.0], [99.0, 16359.0], [99.1, 16359.0], [99.2, 16359.0], [99.3, 16359.0], [99.4, 16359.0], [99.5, 16359.0], [99.6, 16359.0], [99.7, 16359.0], [99.8, 16359.0], [99.9, 16359.0]], "isOverall": false, "label": "VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 12400.0, "maxY": 5.0, "series": [{"data": [[12400.0, 2.0], [12500.0, 3.0], [14000.0, 3.0], [14100.0, 2.0], [14500.0, 3.0], [14600.0, 4.0], [14700.0, 4.0], [14400.0, 3.0], [14800.0, 5.0], [15000.0, 4.0], [15300.0, 5.0], [15200.0, 2.0], [15400.0, 2.0], [15500.0, 3.0], [15600.0, 2.0], [16000.0, 1.0], [16200.0, 1.0], [16300.0, 1.0]], "isOverall": false, "label": "VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.444444444444445, "minX": 1.78169238E12, "maxY": 5.0, "series": [{"data": [[1.78169244E12, 5.0], [1.7816925E12, 4.444444444444445], [1.78169238E12, 5.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816925E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 14720.282608695652, "minX": 1.0, "maxY": 15059.0, "series": [{"data": [[4.0, 15059.0], [2.0, 14811.0], [1.0, 14744.0], [5.0, 14720.282608695652], [3.0, 15028.0]], "isOverall": false, "label": "VIRTUAL_PLATFORM", "isController": false}, {"data": [[4.800000000000001, 14735.5]], "isOverall": false, "label": "VIRTUAL_PLATFORM-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.78169238E12, "maxY": 4.9E-324, "series": [{"data": [[1.78169244E12, 0.0], [1.7816925E12, 0.0], [1.78169238E12, 0.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78169244E12, 0.0], [1.7816925E12, 0.0], [1.78169238E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816925E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 13692.499999999998, "minX": 1.78169238E12, "maxY": 15245.888888888887, "series": [{"data": [[1.78169244E12, 15245.888888888887], [1.7816925E12, 15036.333333333334], [1.78169238E12, 13692.499999999998]], "isOverall": false, "label": "VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816925E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78169238E12, "maxY": 4.9E-324, "series": [{"data": [[1.78169244E12, 0.0], [1.7816925E12, 0.0], [1.78169238E12, 0.0]], "isOverall": false, "label": "VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816925E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78169238E12, "maxY": 4.9E-324, "series": [{"data": [[1.78169244E12, 0.0], [1.7816925E12, 0.0], [1.78169238E12, 0.0]], "isOverall": false, "label": "VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816925E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 12479.0, "minX": 1.78169238E12, "maxY": 16359.0, "series": [{"data": [[1.78169244E12, 16359.0], [1.7816925E12, 15509.0], [1.78169238E12, 15058.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78169244E12, 14474.0], [1.7816925E12, 14460.0], [1.78169238E12, 12479.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78169244E12, 16292.4], [1.7816925E12, 15502.7], [1.78169238E12, 14834.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78169244E12, 16359.0], [1.7816925E12, 15509.0], [1.78169238E12, 15058.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78169244E12, 15093.0], [1.7816925E12, 15071.5], [1.78169238E12, 14057.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78169244E12, 16359.0], [1.7816925E12, 15509.0], [1.78169238E12, 15058.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816925E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13275.5, "minX": 1.0, "maxY": 15322.0, "series": [{"data": [[4.0, 14577.0], [1.0, 15322.0], [2.0, 14973.5], [5.0, 13275.5], [3.0, 15128.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.78169238E12, "maxY": 0.31666666666666665, "series": [{"data": [[1.78169244E12, 0.3], [1.7816925E12, 0.21666666666666667], [1.78169238E12, 0.31666666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816925E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.78169238E12, "maxY": 0.3, "series": [{"data": [[1.78169244E12, 0.3], [1.7816925E12, 0.3], [1.78169238E12, 0.23333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816925E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.78169238E12, "maxY": 0.3, "series": [{"data": [[1.78169244E12, 0.3], [1.7816925E12, 0.3], [1.78169238E12, 0.23333333333333334]], "isOverall": false, "label": "VIRTUAL_PLATFORM-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816925E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.78169238E12, "maxY": 0.3, "series": [{"data": [[1.78169244E12, 0.3], [1.7816925E12, 0.3], [1.78169238E12, 0.23333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816925E12, "title": "Total Transactions Per Second"}},
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

