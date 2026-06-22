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
        data: {"result": {"minY": 20833.0, "minX": 0.0, "maxY": 43497.0, "series": [{"data": [[0.0, 20833.0], [0.1, 20833.0], [0.2, 20833.0], [0.3, 20833.0], [0.4, 20833.0], [0.5, 20833.0], [0.6, 20833.0], [0.7, 20833.0], [0.8, 20833.0], [0.9, 20833.0], [1.0, 20833.0], [1.1, 20833.0], [1.2, 20833.0], [1.3, 20833.0], [1.4, 20833.0], [1.5, 20833.0], [1.6, 20833.0], [1.7, 20833.0], [1.8, 20833.0], [1.9, 20833.0], [2.0, 29075.0], [2.1, 29075.0], [2.2, 29075.0], [2.3, 29075.0], [2.4, 29075.0], [2.5, 29075.0], [2.6, 29075.0], [2.7, 29075.0], [2.8, 29075.0], [2.9, 29075.0], [3.0, 29075.0], [3.1, 29075.0], [3.2, 29075.0], [3.3, 29075.0], [3.4, 29075.0], [3.5, 29075.0], [3.6, 29075.0], [3.7, 29075.0], [3.8, 29075.0], [3.9, 29075.0], [4.0, 29930.0], [4.1, 29930.0], [4.2, 29930.0], [4.3, 29930.0], [4.4, 29930.0], [4.5, 29930.0], [4.6, 29930.0], [4.7, 29930.0], [4.8, 29930.0], [4.9, 29930.0], [5.0, 29930.0], [5.1, 29930.0], [5.2, 29930.0], [5.3, 29930.0], [5.4, 29930.0], [5.5, 29930.0], [5.6, 29930.0], [5.7, 29930.0], [5.8, 29930.0], [5.9, 29930.0], [6.0, 30483.0], [6.1, 30483.0], [6.2, 30483.0], [6.3, 30483.0], [6.4, 30483.0], [6.5, 30483.0], [6.6, 30483.0], [6.7, 30483.0], [6.8, 30483.0], [6.9, 30483.0], [7.0, 30483.0], [7.1, 30483.0], [7.2, 30483.0], [7.3, 30483.0], [7.4, 30483.0], [7.5, 30483.0], [7.6, 30483.0], [7.7, 30483.0], [7.8, 30483.0], [7.9, 30483.0], [8.0, 31551.0], [8.1, 31551.0], [8.2, 31551.0], [8.3, 31551.0], [8.4, 31551.0], [8.5, 31551.0], [8.6, 31551.0], [8.7, 31551.0], [8.8, 31551.0], [8.9, 31551.0], [9.0, 31551.0], [9.1, 31551.0], [9.2, 31551.0], [9.3, 31551.0], [9.4, 31551.0], [9.5, 31551.0], [9.6, 31551.0], [9.7, 31551.0], [9.8, 31551.0], [9.9, 31551.0], [10.0, 32283.0], [10.1, 32283.0], [10.2, 32283.0], [10.3, 32283.0], [10.4, 32283.0], [10.5, 32283.0], [10.6, 32283.0], [10.7, 32283.0], [10.8, 32283.0], [10.9, 32283.0], [11.0, 32283.0], [11.1, 32283.0], [11.2, 32283.0], [11.3, 32283.0], [11.4, 32283.0], [11.5, 32283.0], [11.6, 32283.0], [11.7, 32283.0], [11.8, 32283.0], [11.9, 32283.0], [12.0, 32444.0], [12.1, 32444.0], [12.2, 32444.0], [12.3, 32444.0], [12.4, 32444.0], [12.5, 32444.0], [12.6, 32444.0], [12.7, 32444.0], [12.8, 32444.0], [12.9, 32444.0], [13.0, 32444.0], [13.1, 32444.0], [13.2, 32444.0], [13.3, 32444.0], [13.4, 32444.0], [13.5, 32444.0], [13.6, 32444.0], [13.7, 32444.0], [13.8, 32444.0], [13.9, 32444.0], [14.0, 32546.0], [14.1, 32546.0], [14.2, 32546.0], [14.3, 32546.0], [14.4, 32546.0], [14.5, 32546.0], [14.6, 32546.0], [14.7, 32546.0], [14.8, 32546.0], [14.9, 32546.0], [15.0, 32546.0], [15.1, 32546.0], [15.2, 32546.0], [15.3, 32546.0], [15.4, 32546.0], [15.5, 32546.0], [15.6, 32546.0], [15.7, 32546.0], [15.8, 32546.0], [15.9, 32546.0], [16.0, 32924.0], [16.1, 32924.0], [16.2, 32924.0], [16.3, 32924.0], [16.4, 32924.0], [16.5, 32924.0], [16.6, 32924.0], [16.7, 32924.0], [16.8, 32924.0], [16.9, 32924.0], [17.0, 32924.0], [17.1, 32924.0], [17.2, 32924.0], [17.3, 32924.0], [17.4, 32924.0], [17.5, 32924.0], [17.6, 32924.0], [17.7, 32924.0], [17.8, 32924.0], [17.9, 32924.0], [18.0, 33089.0], [18.1, 33089.0], [18.2, 33089.0], [18.3, 33089.0], [18.4, 33089.0], [18.5, 33089.0], [18.6, 33089.0], [18.7, 33089.0], [18.8, 33089.0], [18.9, 33089.0], [19.0, 33089.0], [19.1, 33089.0], [19.2, 33089.0], [19.3, 33089.0], [19.4, 33089.0], [19.5, 33089.0], [19.6, 33089.0], [19.7, 33089.0], [19.8, 33089.0], [19.9, 33089.0], [20.0, 33132.0], [20.1, 33132.0], [20.2, 33132.0], [20.3, 33132.0], [20.4, 33132.0], [20.5, 33132.0], [20.6, 33132.0], [20.7, 33132.0], [20.8, 33132.0], [20.9, 33132.0], [21.0, 33132.0], [21.1, 33132.0], [21.2, 33132.0], [21.3, 33132.0], [21.4, 33132.0], [21.5, 33132.0], [21.6, 33132.0], [21.7, 33132.0], [21.8, 33132.0], [21.9, 33132.0], [22.0, 33171.0], [22.1, 33171.0], [22.2, 33171.0], [22.3, 33171.0], [22.4, 33171.0], [22.5, 33171.0], [22.6, 33171.0], [22.7, 33171.0], [22.8, 33171.0], [22.9, 33171.0], [23.0, 33171.0], [23.1, 33171.0], [23.2, 33171.0], [23.3, 33171.0], [23.4, 33171.0], [23.5, 33171.0], [23.6, 33171.0], [23.7, 33171.0], [23.8, 33171.0], [23.9, 33171.0], [24.0, 33215.0], [24.1, 33215.0], [24.2, 33215.0], [24.3, 33215.0], [24.4, 33215.0], [24.5, 33215.0], [24.6, 33215.0], [24.7, 33215.0], [24.8, 33215.0], [24.9, 33215.0], [25.0, 33215.0], [25.1, 33215.0], [25.2, 33215.0], [25.3, 33215.0], [25.4, 33215.0], [25.5, 33215.0], [25.6, 33215.0], [25.7, 33215.0], [25.8, 33215.0], [25.9, 33215.0], [26.0, 33337.0], [26.1, 33337.0], [26.2, 33337.0], [26.3, 33337.0], [26.4, 33337.0], [26.5, 33337.0], [26.6, 33337.0], [26.7, 33337.0], [26.8, 33337.0], [26.9, 33337.0], [27.0, 33337.0], [27.1, 33337.0], [27.2, 33337.0], [27.3, 33337.0], [27.4, 33337.0], [27.5, 33337.0], [27.6, 33337.0], [27.7, 33337.0], [27.8, 33337.0], [27.9, 33337.0], [28.0, 33562.0], [28.1, 33562.0], [28.2, 33562.0], [28.3, 33562.0], [28.4, 33562.0], [28.5, 33562.0], [28.6, 33562.0], [28.7, 33562.0], [28.8, 33562.0], [28.9, 33562.0], [29.0, 33562.0], [29.1, 33562.0], [29.2, 33562.0], [29.3, 33562.0], [29.4, 33562.0], [29.5, 33562.0], [29.6, 33562.0], [29.7, 33562.0], [29.8, 33562.0], [29.9, 33562.0], [30.0, 33564.0], [30.1, 33564.0], [30.2, 33564.0], [30.3, 33564.0], [30.4, 33564.0], [30.5, 33564.0], [30.6, 33564.0], [30.7, 33564.0], [30.8, 33564.0], [30.9, 33564.0], [31.0, 33564.0], [31.1, 33564.0], [31.2, 33564.0], [31.3, 33564.0], [31.4, 33564.0], [31.5, 33564.0], [31.6, 33564.0], [31.7, 33564.0], [31.8, 33564.0], [31.9, 33564.0], [32.0, 33648.0], [32.1, 33648.0], [32.2, 33648.0], [32.3, 33648.0], [32.4, 33648.0], [32.5, 33648.0], [32.6, 33648.0], [32.7, 33648.0], [32.8, 33648.0], [32.9, 33648.0], [33.0, 33648.0], [33.1, 33648.0], [33.2, 33648.0], [33.3, 33648.0], [33.4, 33648.0], [33.5, 33648.0], [33.6, 33648.0], [33.7, 33648.0], [33.8, 33648.0], [33.9, 33648.0], [34.0, 33993.0], [34.1, 33993.0], [34.2, 33993.0], [34.3, 33993.0], [34.4, 33993.0], [34.5, 33993.0], [34.6, 33993.0], [34.7, 33993.0], [34.8, 33993.0], [34.9, 33993.0], [35.0, 33993.0], [35.1, 33993.0], [35.2, 33993.0], [35.3, 33993.0], [35.4, 33993.0], [35.5, 33993.0], [35.6, 33993.0], [35.7, 33993.0], [35.8, 33993.0], [35.9, 33993.0], [36.0, 34009.0], [36.1, 34009.0], [36.2, 34009.0], [36.3, 34009.0], [36.4, 34009.0], [36.5, 34009.0], [36.6, 34009.0], [36.7, 34009.0], [36.8, 34009.0], [36.9, 34009.0], [37.0, 34009.0], [37.1, 34009.0], [37.2, 34009.0], [37.3, 34009.0], [37.4, 34009.0], [37.5, 34009.0], [37.6, 34009.0], [37.7, 34009.0], [37.8, 34009.0], [37.9, 34009.0], [38.0, 34066.0], [38.1, 34066.0], [38.2, 34066.0], [38.3, 34066.0], [38.4, 34066.0], [38.5, 34066.0], [38.6, 34066.0], [38.7, 34066.0], [38.8, 34066.0], [38.9, 34066.0], [39.0, 34066.0], [39.1, 34066.0], [39.2, 34066.0], [39.3, 34066.0], [39.4, 34066.0], [39.5, 34066.0], [39.6, 34066.0], [39.7, 34066.0], [39.8, 34066.0], [39.9, 34066.0], [40.0, 34410.0], [40.1, 34410.0], [40.2, 34410.0], [40.3, 34410.0], [40.4, 34410.0], [40.5, 34410.0], [40.6, 34410.0], [40.7, 34410.0], [40.8, 34410.0], [40.9, 34410.0], [41.0, 34410.0], [41.1, 34410.0], [41.2, 34410.0], [41.3, 34410.0], [41.4, 34410.0], [41.5, 34410.0], [41.6, 34410.0], [41.7, 34410.0], [41.8, 34410.0], [41.9, 34410.0], [42.0, 34416.0], [42.1, 34416.0], [42.2, 34416.0], [42.3, 34416.0], [42.4, 34416.0], [42.5, 34416.0], [42.6, 34416.0], [42.7, 34416.0], [42.8, 34416.0], [42.9, 34416.0], [43.0, 34416.0], [43.1, 34416.0], [43.2, 34416.0], [43.3, 34416.0], [43.4, 34416.0], [43.5, 34416.0], [43.6, 34416.0], [43.7, 34416.0], [43.8, 34416.0], [43.9, 34416.0], [44.0, 35027.0], [44.1, 35027.0], [44.2, 35027.0], [44.3, 35027.0], [44.4, 35027.0], [44.5, 35027.0], [44.6, 35027.0], [44.7, 35027.0], [44.8, 35027.0], [44.9, 35027.0], [45.0, 35027.0], [45.1, 35027.0], [45.2, 35027.0], [45.3, 35027.0], [45.4, 35027.0], [45.5, 35027.0], [45.6, 35027.0], [45.7, 35027.0], [45.8, 35027.0], [45.9, 35027.0], [46.0, 35223.0], [46.1, 35223.0], [46.2, 35223.0], [46.3, 35223.0], [46.4, 35223.0], [46.5, 35223.0], [46.6, 35223.0], [46.7, 35223.0], [46.8, 35223.0], [46.9, 35223.0], [47.0, 35223.0], [47.1, 35223.0], [47.2, 35223.0], [47.3, 35223.0], [47.4, 35223.0], [47.5, 35223.0], [47.6, 35223.0], [47.7, 35223.0], [47.8, 35223.0], [47.9, 35223.0], [48.0, 35849.0], [48.1, 35849.0], [48.2, 35849.0], [48.3, 35849.0], [48.4, 35849.0], [48.5, 35849.0], [48.6, 35849.0], [48.7, 35849.0], [48.8, 35849.0], [48.9, 35849.0], [49.0, 35849.0], [49.1, 35849.0], [49.2, 35849.0], [49.3, 35849.0], [49.4, 35849.0], [49.5, 35849.0], [49.6, 35849.0], [49.7, 35849.0], [49.8, 35849.0], [49.9, 35849.0], [50.0, 36759.0], [50.1, 36759.0], [50.2, 36759.0], [50.3, 36759.0], [50.4, 36759.0], [50.5, 36759.0], [50.6, 36759.0], [50.7, 36759.0], [50.8, 36759.0], [50.9, 36759.0], [51.0, 36759.0], [51.1, 36759.0], [51.2, 36759.0], [51.3, 36759.0], [51.4, 36759.0], [51.5, 36759.0], [51.6, 36759.0], [51.7, 36759.0], [51.8, 36759.0], [51.9, 36759.0], [52.0, 37708.0], [52.1, 37708.0], [52.2, 37708.0], [52.3, 37708.0], [52.4, 37708.0], [52.5, 37708.0], [52.6, 37708.0], [52.7, 37708.0], [52.8, 37708.0], [52.9, 37708.0], [53.0, 37708.0], [53.1, 37708.0], [53.2, 37708.0], [53.3, 37708.0], [53.4, 37708.0], [53.5, 37708.0], [53.6, 37708.0], [53.7, 37708.0], [53.8, 37708.0], [53.9, 37708.0], [54.0, 37951.0], [54.1, 37951.0], [54.2, 37951.0], [54.3, 37951.0], [54.4, 37951.0], [54.5, 37951.0], [54.6, 37951.0], [54.7, 37951.0], [54.8, 37951.0], [54.9, 37951.0], [55.0, 37951.0], [55.1, 37951.0], [55.2, 37951.0], [55.3, 37951.0], [55.4, 37951.0], [55.5, 37951.0], [55.6, 37951.0], [55.7, 37951.0], [55.8, 37951.0], [55.9, 37951.0], [56.0, 38308.0], [56.1, 38308.0], [56.2, 38308.0], [56.3, 38308.0], [56.4, 38308.0], [56.5, 38308.0], [56.6, 38308.0], [56.7, 38308.0], [56.8, 38308.0], [56.9, 38308.0], [57.0, 38308.0], [57.1, 38308.0], [57.2, 38308.0], [57.3, 38308.0], [57.4, 38308.0], [57.5, 38308.0], [57.6, 38308.0], [57.7, 38308.0], [57.8, 38308.0], [57.9, 38308.0], [58.0, 38742.0], [58.1, 38742.0], [58.2, 38742.0], [58.3, 38742.0], [58.4, 38742.0], [58.5, 38742.0], [58.6, 38742.0], [58.7, 38742.0], [58.8, 38742.0], [58.9, 38742.0], [59.0, 38742.0], [59.1, 38742.0], [59.2, 38742.0], [59.3, 38742.0], [59.4, 38742.0], [59.5, 38742.0], [59.6, 38742.0], [59.7, 38742.0], [59.8, 38742.0], [59.9, 38742.0], [60.0, 38959.0], [60.1, 38959.0], [60.2, 38959.0], [60.3, 38959.0], [60.4, 38959.0], [60.5, 38959.0], [60.6, 38959.0], [60.7, 38959.0], [60.8, 38959.0], [60.9, 38959.0], [61.0, 38959.0], [61.1, 38959.0], [61.2, 38959.0], [61.3, 38959.0], [61.4, 38959.0], [61.5, 38959.0], [61.6, 38959.0], [61.7, 38959.0], [61.8, 38959.0], [61.9, 38959.0], [62.0, 38997.0], [62.1, 38997.0], [62.2, 38997.0], [62.3, 38997.0], [62.4, 38997.0], [62.5, 38997.0], [62.6, 38997.0], [62.7, 38997.0], [62.8, 38997.0], [62.9, 38997.0], [63.0, 38997.0], [63.1, 38997.0], [63.2, 38997.0], [63.3, 38997.0], [63.4, 38997.0], [63.5, 38997.0], [63.6, 38997.0], [63.7, 38997.0], [63.8, 38997.0], [63.9, 38997.0], [64.0, 39076.0], [64.1, 39076.0], [64.2, 39076.0], [64.3, 39076.0], [64.4, 39076.0], [64.5, 39076.0], [64.6, 39076.0], [64.7, 39076.0], [64.8, 39076.0], [64.9, 39076.0], [65.0, 39076.0], [65.1, 39076.0], [65.2, 39076.0], [65.3, 39076.0], [65.4, 39076.0], [65.5, 39076.0], [65.6, 39076.0], [65.7, 39076.0], [65.8, 39076.0], [65.9, 39076.0], [66.0, 39165.0], [66.1, 39165.0], [66.2, 39165.0], [66.3, 39165.0], [66.4, 39165.0], [66.5, 39165.0], [66.6, 39165.0], [66.7, 39165.0], [66.8, 39165.0], [66.9, 39165.0], [67.0, 39165.0], [67.1, 39165.0], [67.2, 39165.0], [67.3, 39165.0], [67.4, 39165.0], [67.5, 39165.0], [67.6, 39165.0], [67.7, 39165.0], [67.8, 39165.0], [67.9, 39165.0], [68.0, 39214.0], [68.1, 39214.0], [68.2, 39214.0], [68.3, 39214.0], [68.4, 39214.0], [68.5, 39214.0], [68.6, 39214.0], [68.7, 39214.0], [68.8, 39214.0], [68.9, 39214.0], [69.0, 39214.0], [69.1, 39214.0], [69.2, 39214.0], [69.3, 39214.0], [69.4, 39214.0], [69.5, 39214.0], [69.6, 39214.0], [69.7, 39214.0], [69.8, 39214.0], [69.9, 39214.0], [70.0, 39378.0], [70.1, 39378.0], [70.2, 39378.0], [70.3, 39378.0], [70.4, 39378.0], [70.5, 39378.0], [70.6, 39378.0], [70.7, 39378.0], [70.8, 39378.0], [70.9, 39378.0], [71.0, 39378.0], [71.1, 39378.0], [71.2, 39378.0], [71.3, 39378.0], [71.4, 39378.0], [71.5, 39378.0], [71.6, 39378.0], [71.7, 39378.0], [71.8, 39378.0], [71.9, 39378.0], [72.0, 39784.0], [72.1, 39784.0], [72.2, 39784.0], [72.3, 39784.0], [72.4, 39784.0], [72.5, 39784.0], [72.6, 39784.0], [72.7, 39784.0], [72.8, 39784.0], [72.9, 39784.0], [73.0, 39784.0], [73.1, 39784.0], [73.2, 39784.0], [73.3, 39784.0], [73.4, 39784.0], [73.5, 39784.0], [73.6, 39784.0], [73.7, 39784.0], [73.8, 39784.0], [73.9, 39784.0], [74.0, 39835.0], [74.1, 39835.0], [74.2, 39835.0], [74.3, 39835.0], [74.4, 39835.0], [74.5, 39835.0], [74.6, 39835.0], [74.7, 39835.0], [74.8, 39835.0], [74.9, 39835.0], [75.0, 39835.0], [75.1, 39835.0], [75.2, 39835.0], [75.3, 39835.0], [75.4, 39835.0], [75.5, 39835.0], [75.6, 39835.0], [75.7, 39835.0], [75.8, 39835.0], [75.9, 39835.0], [76.0, 39840.0], [76.1, 39840.0], [76.2, 39840.0], [76.3, 39840.0], [76.4, 39840.0], [76.5, 39840.0], [76.6, 39840.0], [76.7, 39840.0], [76.8, 39840.0], [76.9, 39840.0], [77.0, 39840.0], [77.1, 39840.0], [77.2, 39840.0], [77.3, 39840.0], [77.4, 39840.0], [77.5, 39840.0], [77.6, 39840.0], [77.7, 39840.0], [77.8, 39840.0], [77.9, 39840.0], [78.0, 40003.0], [78.1, 40003.0], [78.2, 40003.0], [78.3, 40003.0], [78.4, 40003.0], [78.5, 40003.0], [78.6, 40003.0], [78.7, 40003.0], [78.8, 40003.0], [78.9, 40003.0], [79.0, 40003.0], [79.1, 40003.0], [79.2, 40003.0], [79.3, 40003.0], [79.4, 40003.0], [79.5, 40003.0], [79.6, 40003.0], [79.7, 40003.0], [79.8, 40003.0], [79.9, 40003.0], [80.0, 40087.0], [80.1, 40087.0], [80.2, 40087.0], [80.3, 40087.0], [80.4, 40087.0], [80.5, 40087.0], [80.6, 40087.0], [80.7, 40087.0], [80.8, 40087.0], [80.9, 40087.0], [81.0, 40087.0], [81.1, 40087.0], [81.2, 40087.0], [81.3, 40087.0], [81.4, 40087.0], [81.5, 40087.0], [81.6, 40087.0], [81.7, 40087.0], [81.8, 40087.0], [81.9, 40087.0], [82.0, 40468.0], [82.1, 40468.0], [82.2, 40468.0], [82.3, 40468.0], [82.4, 40468.0], [82.5, 40468.0], [82.6, 40468.0], [82.7, 40468.0], [82.8, 40468.0], [82.9, 40468.0], [83.0, 40468.0], [83.1, 40468.0], [83.2, 40468.0], [83.3, 40468.0], [83.4, 40468.0], [83.5, 40468.0], [83.6, 40468.0], [83.7, 40468.0], [83.8, 40468.0], [83.9, 40468.0], [84.0, 40761.0], [84.1, 40761.0], [84.2, 40761.0], [84.3, 40761.0], [84.4, 40761.0], [84.5, 40761.0], [84.6, 40761.0], [84.7, 40761.0], [84.8, 40761.0], [84.9, 40761.0], [85.0, 40761.0], [85.1, 40761.0], [85.2, 40761.0], [85.3, 40761.0], [85.4, 40761.0], [85.5, 40761.0], [85.6, 40761.0], [85.7, 40761.0], [85.8, 40761.0], [85.9, 40761.0], [86.0, 41398.0], [86.1, 41398.0], [86.2, 41398.0], [86.3, 41398.0], [86.4, 41398.0], [86.5, 41398.0], [86.6, 41398.0], [86.7, 41398.0], [86.8, 41398.0], [86.9, 41398.0], [87.0, 41398.0], [87.1, 41398.0], [87.2, 41398.0], [87.3, 41398.0], [87.4, 41398.0], [87.5, 41398.0], [87.6, 41398.0], [87.7, 41398.0], [87.8, 41398.0], [87.9, 41398.0], [88.0, 41677.0], [88.1, 41677.0], [88.2, 41677.0], [88.3, 41677.0], [88.4, 41677.0], [88.5, 41677.0], [88.6, 41677.0], [88.7, 41677.0], [88.8, 41677.0], [88.9, 41677.0], [89.0, 41677.0], [89.1, 41677.0], [89.2, 41677.0], [89.3, 41677.0], [89.4, 41677.0], [89.5, 41677.0], [89.6, 41677.0], [89.7, 41677.0], [89.8, 41677.0], [89.9, 41677.0], [90.0, 41967.0], [90.1, 41967.0], [90.2, 41967.0], [90.3, 41967.0], [90.4, 41967.0], [90.5, 41967.0], [90.6, 41967.0], [90.7, 41967.0], [90.8, 41967.0], [90.9, 41967.0], [91.0, 41967.0], [91.1, 41967.0], [91.2, 41967.0], [91.3, 41967.0], [91.4, 41967.0], [91.5, 41967.0], [91.6, 41967.0], [91.7, 41967.0], [91.8, 41967.0], [91.9, 41967.0], [92.0, 42217.0], [92.1, 42217.0], [92.2, 42217.0], [92.3, 42217.0], [92.4, 42217.0], [92.5, 42217.0], [92.6, 42217.0], [92.7, 42217.0], [92.8, 42217.0], [92.9, 42217.0], [93.0, 42217.0], [93.1, 42217.0], [93.2, 42217.0], [93.3, 42217.0], [93.4, 42217.0], [93.5, 42217.0], [93.6, 42217.0], [93.7, 42217.0], [93.8, 42217.0], [93.9, 42217.0], [94.0, 42380.0], [94.1, 42380.0], [94.2, 42380.0], [94.3, 42380.0], [94.4, 42380.0], [94.5, 42380.0], [94.6, 42380.0], [94.7, 42380.0], [94.8, 42380.0], [94.9, 42380.0], [95.0, 42380.0], [95.1, 42380.0], [95.2, 42380.0], [95.3, 42380.0], [95.4, 42380.0], [95.5, 42380.0], [95.6, 42380.0], [95.7, 42380.0], [95.8, 42380.0], [95.9, 42380.0], [96.0, 43437.0], [96.1, 43437.0], [96.2, 43437.0], [96.3, 43437.0], [96.4, 43437.0], [96.5, 43437.0], [96.6, 43437.0], [96.7, 43437.0], [96.8, 43437.0], [96.9, 43437.0], [97.0, 43437.0], [97.1, 43437.0], [97.2, 43437.0], [97.3, 43437.0], [97.4, 43437.0], [97.5, 43437.0], [97.6, 43437.0], [97.7, 43437.0], [97.8, 43437.0], [97.9, 43437.0], [98.0, 43497.0], [98.1, 43497.0], [98.2, 43497.0], [98.3, 43497.0], [98.4, 43497.0], [98.5, 43497.0], [98.6, 43497.0], [98.7, 43497.0], [98.8, 43497.0], [98.9, 43497.0], [99.0, 43497.0], [99.1, 43497.0], [99.2, 43497.0], [99.3, 43497.0], [99.4, 43497.0], [99.5, 43497.0], [99.6, 43497.0], [99.7, 43497.0], [99.8, 43497.0], [99.9, 43497.0]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 20800.0, "maxY": 2.0, "series": [{"data": [[20800.0, 1.0], [29000.0, 1.0], [29900.0, 1.0], [30400.0, 1.0], [31500.0, 1.0], [32400.0, 1.0], [32200.0, 1.0], [32500.0, 1.0], [33000.0, 1.0], [33100.0, 2.0], [33300.0, 1.0], [33900.0, 1.0], [33200.0, 1.0], [32900.0, 1.0], [33600.0, 1.0], [34400.0, 2.0], [33500.0, 2.0], [34000.0, 2.0], [35800.0, 1.0], [35200.0, 1.0], [35000.0, 1.0], [36700.0, 1.0], [38900.0, 2.0], [38700.0, 1.0], [37900.0, 1.0], [37700.0, 1.0], [38300.0, 1.0], [40700.0, 1.0], [39100.0, 1.0], [40000.0, 2.0], [39800.0, 2.0], [39200.0, 1.0], [39300.0, 1.0], [39700.0, 1.0], [39000.0, 1.0], [40400.0, 1.0], [41600.0, 1.0], [41300.0, 1.0], [42300.0, 1.0], [41900.0, 1.0], [42200.0, 1.0], [43400.0, 2.0]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 43400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.7816937E12, "maxY": 5.0, "series": [{"data": [[1.7816937E12, 5.0], [1.781694E12, 5.0], [1.78169406E12, 2.5], [1.78169388E12, 5.0], [1.78169394E12, 5.0], [1.78169376E12, 5.0], [1.78169382E12, 5.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78169406E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 36099.49999999999, "minX": 1.0, "maxY": 40468.0, "series": [{"data": [[4.0, 38959.0], [2.0, 38308.0], [1.0, 40468.0], [5.0, 36099.49999999999], [3.0, 39076.0]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM", "isController": false}, {"data": [[4.800000000000001, 36347.759999999995]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.7816937E12, "maxY": 4.9E-324, "series": [{"data": [[1.7816937E12, 0.0], [1.781694E12, 0.0], [1.78169406E12, 0.0], [1.78169388E12, 0.0], [1.78169394E12, 0.0], [1.78169376E12, 0.0], [1.78169382E12, 0.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7816937E12, 0.0], [1.781694E12, 0.0], [1.78169406E12, 0.0], [1.78169388E12, 0.0], [1.78169394E12, 0.0], [1.78169376E12, 0.0], [1.78169382E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78169406E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 32486.88888888889, "minX": 1.7816937E12, "maxY": 41604.166666666664, "series": [{"data": [[1.7816937E12, 35948.666666666664], [1.781694E12, 41604.166666666664], [1.78169406E12, 39202.75], [1.78169388E12, 40284.16666666667], [1.78169394E12, 37014.666666666664], [1.78169376E12, 32486.88888888889], [1.78169382E12, 32804.100000000006]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78169406E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7816937E12, "maxY": 4.9E-324, "series": [{"data": [[1.7816937E12, 0.0], [1.781694E12, 0.0], [1.78169406E12, 0.0], [1.78169388E12, 0.0], [1.78169394E12, 0.0], [1.78169376E12, 0.0], [1.78169382E12, 0.0]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78169406E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7816937E12, "maxY": 4.9E-324, "series": [{"data": [[1.7816937E12, 0.0], [1.781694E12, 0.0], [1.78169406E12, 0.0], [1.78169388E12, 0.0], [1.78169394E12, 0.0], [1.78169376E12, 0.0], [1.78169382E12, 0.0]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78169406E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 20833.0, "minX": 1.7816937E12, "maxY": 43497.0, "series": [{"data": [[1.7816937E12, 40761.0], [1.781694E12, 43437.0], [1.78169406E12, 40468.0], [1.78169388E12, 43497.0], [1.78169394E12, 41398.0], [1.78169376E12, 33993.0], [1.78169382E12, 34410.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7816937E12, 20833.0], [1.781694E12, 39784.0], [1.78169406E12, 38308.0], [1.78169388E12, 37951.0], [1.78169394E12, 34009.0], [1.78169376E12, 29075.0], [1.78169382E12, 30483.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7816937E12, 40761.0], [1.781694E12, 43437.0], [1.78169406E12, 40468.0], [1.78169388E12, 43497.0], [1.78169394E12, 41398.0], [1.78169376E12, 33993.0], [1.78169382E12, 34375.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7816937E12, 40761.0], [1.781694E12, 43437.0], [1.78169406E12, 40468.0], [1.78169388E12, 43497.0], [1.78169394E12, 41398.0], [1.78169376E12, 33993.0], [1.78169382E12, 34410.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7816937E12, 39081.0], [1.781694E12, 42092.0], [1.78169406E12, 39017.5], [1.78169388E12, 39919.0], [1.78169394E12, 36759.0], [1.78169376E12, 33171.0], [1.78169382E12, 32839.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7816937E12, 40761.0], [1.781694E12, 43437.0], [1.78169406E12, 40468.0], [1.78169388E12, 43497.0], [1.78169394E12, 41398.0], [1.78169376E12, 33993.0], [1.78169382E12, 34410.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78169406E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 34410.0, "minX": 1.0, "maxY": 39214.0, "series": [{"data": [[1.0, 34410.0], [2.0, 36364.5], [3.0, 39214.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.78169364E12, "maxY": 0.16666666666666666, "series": [{"data": [[1.7816937E12, 0.1], [1.781694E12, 0.08333333333333333], [1.78169388E12, 0.1], [1.78169394E12, 0.15], [1.78169376E12, 0.15], [1.78169382E12, 0.16666666666666666], [1.78169364E12, 0.08333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.781694E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.7816937E12, "maxY": 0.16666666666666666, "series": [{"data": [[1.7816937E12, 0.1], [1.781694E12, 0.1], [1.78169406E12, 0.06666666666666667], [1.78169388E12, 0.1], [1.78169394E12, 0.15], [1.78169376E12, 0.15], [1.78169382E12, 0.16666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78169406E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.7816937E12, "maxY": 0.16666666666666666, "series": [{"data": [[1.7816937E12, 0.1], [1.781694E12, 0.1], [1.78169406E12, 0.06666666666666667], [1.78169388E12, 0.1], [1.78169394E12, 0.15], [1.78169376E12, 0.15], [1.78169382E12, 0.16666666666666666]], "isOverall": false, "label": "SEMAPHORE_VIRTUAL_PLATFORM-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78169406E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.7816937E12, "maxY": 0.16666666666666666, "series": [{"data": [[1.7816937E12, 0.1], [1.781694E12, 0.1], [1.78169406E12, 0.06666666666666667], [1.78169388E12, 0.1], [1.78169394E12, 0.15], [1.78169376E12, 0.15], [1.78169382E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78169406E12, "title": "Total Transactions Per Second"}},
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

