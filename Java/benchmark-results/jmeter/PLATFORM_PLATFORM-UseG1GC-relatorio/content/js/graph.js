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
        data: {"result": {"minY": 9470.0, "minX": 0.0, "maxY": 11973.0, "series": [{"data": [[0.0, 9470.0], [0.1, 9470.0], [0.2, 9470.0], [0.3, 9470.0], [0.4, 9470.0], [0.5, 9470.0], [0.6, 9470.0], [0.7, 9470.0], [0.8, 9470.0], [0.9, 9470.0], [1.0, 9470.0], [1.1, 9470.0], [1.2, 9470.0], [1.3, 9470.0], [1.4, 9470.0], [1.5, 9470.0], [1.6, 9470.0], [1.7, 9470.0], [1.8, 9470.0], [1.9, 9470.0], [2.0, 9507.0], [2.1, 9507.0], [2.2, 9507.0], [2.3, 9507.0], [2.4, 9507.0], [2.5, 9507.0], [2.6, 9507.0], [2.7, 9507.0], [2.8, 9507.0], [2.9, 9507.0], [3.0, 9507.0], [3.1, 9507.0], [3.2, 9507.0], [3.3, 9507.0], [3.4, 9507.0], [3.5, 9507.0], [3.6, 9507.0], [3.7, 9507.0], [3.8, 9507.0], [3.9, 9507.0], [4.0, 9525.0], [4.1, 9525.0], [4.2, 9525.0], [4.3, 9525.0], [4.4, 9525.0], [4.5, 9525.0], [4.6, 9525.0], [4.7, 9525.0], [4.8, 9525.0], [4.9, 9525.0], [5.0, 9525.0], [5.1, 9525.0], [5.2, 9525.0], [5.3, 9525.0], [5.4, 9525.0], [5.5, 9525.0], [5.6, 9525.0], [5.7, 9525.0], [5.8, 9525.0], [5.9, 9525.0], [6.0, 9617.0], [6.1, 9617.0], [6.2, 9617.0], [6.3, 9617.0], [6.4, 9617.0], [6.5, 9617.0], [6.6, 9617.0], [6.7, 9617.0], [6.8, 9617.0], [6.9, 9617.0], [7.0, 9617.0], [7.1, 9617.0], [7.2, 9617.0], [7.3, 9617.0], [7.4, 9617.0], [7.5, 9617.0], [7.6, 9617.0], [7.7, 9617.0], [7.8, 9617.0], [7.9, 9617.0], [8.0, 9664.0], [8.1, 9664.0], [8.2, 9664.0], [8.3, 9664.0], [8.4, 9664.0], [8.5, 9664.0], [8.6, 9664.0], [8.7, 9664.0], [8.8, 9664.0], [8.9, 9664.0], [9.0, 9664.0], [9.1, 9664.0], [9.2, 9664.0], [9.3, 9664.0], [9.4, 9664.0], [9.5, 9664.0], [9.6, 9664.0], [9.7, 9664.0], [9.8, 9664.0], [9.9, 9664.0], [10.0, 9670.0], [10.1, 9670.0], [10.2, 9670.0], [10.3, 9670.0], [10.4, 9670.0], [10.5, 9670.0], [10.6, 9670.0], [10.7, 9670.0], [10.8, 9670.0], [10.9, 9670.0], [11.0, 9670.0], [11.1, 9670.0], [11.2, 9670.0], [11.3, 9670.0], [11.4, 9670.0], [11.5, 9670.0], [11.6, 9670.0], [11.7, 9670.0], [11.8, 9670.0], [11.9, 9670.0], [12.0, 9675.0], [12.1, 9675.0], [12.2, 9675.0], [12.3, 9675.0], [12.4, 9675.0], [12.5, 9675.0], [12.6, 9675.0], [12.7, 9675.0], [12.8, 9675.0], [12.9, 9675.0], [13.0, 9675.0], [13.1, 9675.0], [13.2, 9675.0], [13.3, 9675.0], [13.4, 9675.0], [13.5, 9675.0], [13.6, 9675.0], [13.7, 9675.0], [13.8, 9675.0], [13.9, 9675.0], [14.0, 9682.0], [14.1, 9682.0], [14.2, 9682.0], [14.3, 9682.0], [14.4, 9682.0], [14.5, 9682.0], [14.6, 9682.0], [14.7, 9682.0], [14.8, 9682.0], [14.9, 9682.0], [15.0, 9682.0], [15.1, 9682.0], [15.2, 9682.0], [15.3, 9682.0], [15.4, 9682.0], [15.5, 9682.0], [15.6, 9682.0], [15.7, 9682.0], [15.8, 9682.0], [15.9, 9682.0], [16.0, 9697.0], [16.1, 9697.0], [16.2, 9697.0], [16.3, 9697.0], [16.4, 9697.0], [16.5, 9697.0], [16.6, 9697.0], [16.7, 9697.0], [16.8, 9697.0], [16.9, 9697.0], [17.0, 9697.0], [17.1, 9697.0], [17.2, 9697.0], [17.3, 9697.0], [17.4, 9697.0], [17.5, 9697.0], [17.6, 9697.0], [17.7, 9697.0], [17.8, 9697.0], [17.9, 9697.0], [18.0, 9711.0], [18.1, 9711.0], [18.2, 9711.0], [18.3, 9711.0], [18.4, 9711.0], [18.5, 9711.0], [18.6, 9711.0], [18.7, 9711.0], [18.8, 9711.0], [18.9, 9711.0], [19.0, 9711.0], [19.1, 9711.0], [19.2, 9711.0], [19.3, 9711.0], [19.4, 9711.0], [19.5, 9711.0], [19.6, 9711.0], [19.7, 9711.0], [19.8, 9711.0], [19.9, 9711.0], [20.0, 9826.0], [20.1, 9826.0], [20.2, 9826.0], [20.3, 9826.0], [20.4, 9826.0], [20.5, 9826.0], [20.6, 9826.0], [20.7, 9826.0], [20.8, 9826.0], [20.9, 9826.0], [21.0, 9826.0], [21.1, 9826.0], [21.2, 9826.0], [21.3, 9826.0], [21.4, 9826.0], [21.5, 9826.0], [21.6, 9826.0], [21.7, 9826.0], [21.8, 9826.0], [21.9, 9826.0], [22.0, 9857.0], [22.1, 9857.0], [22.2, 9857.0], [22.3, 9857.0], [22.4, 9857.0], [22.5, 9857.0], [22.6, 9857.0], [22.7, 9857.0], [22.8, 9857.0], [22.9, 9857.0], [23.0, 9857.0], [23.1, 9857.0], [23.2, 9857.0], [23.3, 9857.0], [23.4, 9857.0], [23.5, 9857.0], [23.6, 9857.0], [23.7, 9857.0], [23.8, 9857.0], [23.9, 9857.0], [24.0, 9925.0], [24.1, 9925.0], [24.2, 9925.0], [24.3, 9925.0], [24.4, 9925.0], [24.5, 9925.0], [24.6, 9925.0], [24.7, 9925.0], [24.8, 9925.0], [24.9, 9925.0], [25.0, 9925.0], [25.1, 9925.0], [25.2, 9925.0], [25.3, 9925.0], [25.4, 9925.0], [25.5, 9925.0], [25.6, 9925.0], [25.7, 9925.0], [25.8, 9925.0], [25.9, 9925.0], [26.0, 10011.0], [26.1, 10011.0], [26.2, 10011.0], [26.3, 10011.0], [26.4, 10011.0], [26.5, 10011.0], [26.6, 10011.0], [26.7, 10011.0], [26.8, 10011.0], [26.9, 10011.0], [27.0, 10011.0], [27.1, 10011.0], [27.2, 10011.0], [27.3, 10011.0], [27.4, 10011.0], [27.5, 10011.0], [27.6, 10011.0], [27.7, 10011.0], [27.8, 10011.0], [27.9, 10011.0], [28.0, 10024.0], [28.1, 10024.0], [28.2, 10024.0], [28.3, 10024.0], [28.4, 10024.0], [28.5, 10024.0], [28.6, 10024.0], [28.7, 10024.0], [28.8, 10024.0], [28.9, 10024.0], [29.0, 10024.0], [29.1, 10024.0], [29.2, 10024.0], [29.3, 10024.0], [29.4, 10024.0], [29.5, 10024.0], [29.6, 10024.0], [29.7, 10024.0], [29.8, 10024.0], [29.9, 10024.0], [30.0, 10047.0], [30.1, 10047.0], [30.2, 10047.0], [30.3, 10047.0], [30.4, 10047.0], [30.5, 10047.0], [30.6, 10047.0], [30.7, 10047.0], [30.8, 10047.0], [30.9, 10047.0], [31.0, 10047.0], [31.1, 10047.0], [31.2, 10047.0], [31.3, 10047.0], [31.4, 10047.0], [31.5, 10047.0], [31.6, 10047.0], [31.7, 10047.0], [31.8, 10047.0], [31.9, 10047.0], [32.0, 10119.0], [32.1, 10119.0], [32.2, 10119.0], [32.3, 10119.0], [32.4, 10119.0], [32.5, 10119.0], [32.6, 10119.0], [32.7, 10119.0], [32.8, 10119.0], [32.9, 10119.0], [33.0, 10119.0], [33.1, 10119.0], [33.2, 10119.0], [33.3, 10119.0], [33.4, 10119.0], [33.5, 10119.0], [33.6, 10119.0], [33.7, 10119.0], [33.8, 10119.0], [33.9, 10119.0], [34.0, 10187.0], [34.1, 10187.0], [34.2, 10187.0], [34.3, 10187.0], [34.4, 10187.0], [34.5, 10187.0], [34.6, 10187.0], [34.7, 10187.0], [34.8, 10187.0], [34.9, 10187.0], [35.0, 10187.0], [35.1, 10187.0], [35.2, 10187.0], [35.3, 10187.0], [35.4, 10187.0], [35.5, 10187.0], [35.6, 10187.0], [35.7, 10187.0], [35.8, 10187.0], [35.9, 10187.0], [36.0, 10207.0], [36.1, 10207.0], [36.2, 10207.0], [36.3, 10207.0], [36.4, 10207.0], [36.5, 10207.0], [36.6, 10207.0], [36.7, 10207.0], [36.8, 10207.0], [36.9, 10207.0], [37.0, 10207.0], [37.1, 10207.0], [37.2, 10207.0], [37.3, 10207.0], [37.4, 10207.0], [37.5, 10207.0], [37.6, 10207.0], [37.7, 10207.0], [37.8, 10207.0], [37.9, 10207.0], [38.0, 10321.0], [38.1, 10321.0], [38.2, 10321.0], [38.3, 10321.0], [38.4, 10321.0], [38.5, 10321.0], [38.6, 10321.0], [38.7, 10321.0], [38.8, 10321.0], [38.9, 10321.0], [39.0, 10321.0], [39.1, 10321.0], [39.2, 10321.0], [39.3, 10321.0], [39.4, 10321.0], [39.5, 10321.0], [39.6, 10321.0], [39.7, 10321.0], [39.8, 10321.0], [39.9, 10321.0], [40.0, 10587.0], [40.1, 10587.0], [40.2, 10587.0], [40.3, 10587.0], [40.4, 10587.0], [40.5, 10587.0], [40.6, 10587.0], [40.7, 10587.0], [40.8, 10587.0], [40.9, 10587.0], [41.0, 10587.0], [41.1, 10587.0], [41.2, 10587.0], [41.3, 10587.0], [41.4, 10587.0], [41.5, 10587.0], [41.6, 10587.0], [41.7, 10587.0], [41.8, 10587.0], [41.9, 10587.0], [42.0, 10690.0], [42.1, 10690.0], [42.2, 10690.0], [42.3, 10690.0], [42.4, 10690.0], [42.5, 10690.0], [42.6, 10690.0], [42.7, 10690.0], [42.8, 10690.0], [42.9, 10690.0], [43.0, 10690.0], [43.1, 10690.0], [43.2, 10690.0], [43.3, 10690.0], [43.4, 10690.0], [43.5, 10690.0], [43.6, 10690.0], [43.7, 10690.0], [43.8, 10690.0], [43.9, 10690.0], [44.0, 10774.0], [44.1, 10774.0], [44.2, 10774.0], [44.3, 10774.0], [44.4, 10774.0], [44.5, 10774.0], [44.6, 10774.0], [44.7, 10774.0], [44.8, 10774.0], [44.9, 10774.0], [45.0, 10774.0], [45.1, 10774.0], [45.2, 10774.0], [45.3, 10774.0], [45.4, 10774.0], [45.5, 10774.0], [45.6, 10774.0], [45.7, 10774.0], [45.8, 10774.0], [45.9, 10774.0], [46.0, 10825.0], [46.1, 10825.0], [46.2, 10825.0], [46.3, 10825.0], [46.4, 10825.0], [46.5, 10825.0], [46.6, 10825.0], [46.7, 10825.0], [46.8, 10825.0], [46.9, 10825.0], [47.0, 10825.0], [47.1, 10825.0], [47.2, 10825.0], [47.3, 10825.0], [47.4, 10825.0], [47.5, 10825.0], [47.6, 10825.0], [47.7, 10825.0], [47.8, 10825.0], [47.9, 10825.0], [48.0, 10837.0], [48.1, 10837.0], [48.2, 10837.0], [48.3, 10837.0], [48.4, 10837.0], [48.5, 10837.0], [48.6, 10837.0], [48.7, 10837.0], [48.8, 10837.0], [48.9, 10837.0], [49.0, 10837.0], [49.1, 10837.0], [49.2, 10837.0], [49.3, 10837.0], [49.4, 10837.0], [49.5, 10837.0], [49.6, 10837.0], [49.7, 10837.0], [49.8, 10837.0], [49.9, 10837.0], [50.0, 10868.0], [50.1, 10868.0], [50.2, 10868.0], [50.3, 10868.0], [50.4, 10868.0], [50.5, 10868.0], [50.6, 10868.0], [50.7, 10868.0], [50.8, 10868.0], [50.9, 10868.0], [51.0, 10868.0], [51.1, 10868.0], [51.2, 10868.0], [51.3, 10868.0], [51.4, 10868.0], [51.5, 10868.0], [51.6, 10868.0], [51.7, 10868.0], [51.8, 10868.0], [51.9, 10868.0], [52.0, 10875.0], [52.1, 10875.0], [52.2, 10875.0], [52.3, 10875.0], [52.4, 10875.0], [52.5, 10875.0], [52.6, 10875.0], [52.7, 10875.0], [52.8, 10875.0], [52.9, 10875.0], [53.0, 10875.0], [53.1, 10875.0], [53.2, 10875.0], [53.3, 10875.0], [53.4, 10875.0], [53.5, 10875.0], [53.6, 10875.0], [53.7, 10875.0], [53.8, 10875.0], [53.9, 10875.0], [54.0, 10983.0], [54.1, 10983.0], [54.2, 10983.0], [54.3, 10983.0], [54.4, 10983.0], [54.5, 10983.0], [54.6, 10983.0], [54.7, 10983.0], [54.8, 10983.0], [54.9, 10983.0], [55.0, 10983.0], [55.1, 10983.0], [55.2, 10983.0], [55.3, 10983.0], [55.4, 10983.0], [55.5, 10983.0], [55.6, 10983.0], [55.7, 10983.0], [55.8, 10983.0], [55.9, 10983.0], [56.0, 10992.0], [56.1, 10992.0], [56.2, 10992.0], [56.3, 10992.0], [56.4, 10992.0], [56.5, 10992.0], [56.6, 10992.0], [56.7, 10992.0], [56.8, 10992.0], [56.9, 10992.0], [57.0, 10992.0], [57.1, 10992.0], [57.2, 10992.0], [57.3, 10992.0], [57.4, 10992.0], [57.5, 10992.0], [57.6, 10992.0], [57.7, 10992.0], [57.8, 10992.0], [57.9, 10992.0], [58.0, 10993.0], [58.1, 10993.0], [58.2, 10993.0], [58.3, 10993.0], [58.4, 10993.0], [58.5, 10993.0], [58.6, 10993.0], [58.7, 10993.0], [58.8, 10993.0], [58.9, 10993.0], [59.0, 10993.0], [59.1, 10993.0], [59.2, 10993.0], [59.3, 10993.0], [59.4, 10993.0], [59.5, 10993.0], [59.6, 10993.0], [59.7, 10993.0], [59.8, 10993.0], [59.9, 10993.0], [60.0, 11098.0], [60.1, 11098.0], [60.2, 11098.0], [60.3, 11098.0], [60.4, 11098.0], [60.5, 11098.0], [60.6, 11098.0], [60.7, 11098.0], [60.8, 11098.0], [60.9, 11098.0], [61.0, 11098.0], [61.1, 11098.0], [61.2, 11098.0], [61.3, 11098.0], [61.4, 11098.0], [61.5, 11098.0], [61.6, 11098.0], [61.7, 11098.0], [61.8, 11098.0], [61.9, 11098.0], [62.0, 11099.0], [62.1, 11099.0], [62.2, 11099.0], [62.3, 11099.0], [62.4, 11099.0], [62.5, 11099.0], [62.6, 11099.0], [62.7, 11099.0], [62.8, 11099.0], [62.9, 11099.0], [63.0, 11099.0], [63.1, 11099.0], [63.2, 11099.0], [63.3, 11099.0], [63.4, 11099.0], [63.5, 11099.0], [63.6, 11099.0], [63.7, 11099.0], [63.8, 11099.0], [63.9, 11099.0], [64.0, 11154.0], [64.1, 11154.0], [64.2, 11154.0], [64.3, 11154.0], [64.4, 11154.0], [64.5, 11154.0], [64.6, 11154.0], [64.7, 11154.0], [64.8, 11154.0], [64.9, 11154.0], [65.0, 11154.0], [65.1, 11154.0], [65.2, 11154.0], [65.3, 11154.0], [65.4, 11154.0], [65.5, 11154.0], [65.6, 11154.0], [65.7, 11154.0], [65.8, 11154.0], [65.9, 11154.0], [66.0, 11181.0], [66.1, 11181.0], [66.2, 11181.0], [66.3, 11181.0], [66.4, 11181.0], [66.5, 11181.0], [66.6, 11181.0], [66.7, 11181.0], [66.8, 11181.0], [66.9, 11181.0], [67.0, 11181.0], [67.1, 11181.0], [67.2, 11181.0], [67.3, 11181.0], [67.4, 11181.0], [67.5, 11181.0], [67.6, 11181.0], [67.7, 11181.0], [67.8, 11181.0], [67.9, 11181.0], [68.0, 11217.0], [68.1, 11217.0], [68.2, 11217.0], [68.3, 11217.0], [68.4, 11217.0], [68.5, 11217.0], [68.6, 11217.0], [68.7, 11217.0], [68.8, 11217.0], [68.9, 11217.0], [69.0, 11217.0], [69.1, 11217.0], [69.2, 11217.0], [69.3, 11217.0], [69.4, 11217.0], [69.5, 11217.0], [69.6, 11217.0], [69.7, 11217.0], [69.8, 11217.0], [69.9, 11217.0], [70.0, 11245.0], [70.1, 11245.0], [70.2, 11245.0], [70.3, 11245.0], [70.4, 11245.0], [70.5, 11245.0], [70.6, 11245.0], [70.7, 11245.0], [70.8, 11245.0], [70.9, 11245.0], [71.0, 11245.0], [71.1, 11245.0], [71.2, 11245.0], [71.3, 11245.0], [71.4, 11245.0], [71.5, 11245.0], [71.6, 11245.0], [71.7, 11245.0], [71.8, 11245.0], [71.9, 11245.0], [72.0, 11309.0], [72.1, 11309.0], [72.2, 11309.0], [72.3, 11309.0], [72.4, 11309.0], [72.5, 11309.0], [72.6, 11309.0], [72.7, 11309.0], [72.8, 11309.0], [72.9, 11309.0], [73.0, 11309.0], [73.1, 11309.0], [73.2, 11309.0], [73.3, 11309.0], [73.4, 11309.0], [73.5, 11309.0], [73.6, 11309.0], [73.7, 11309.0], [73.8, 11309.0], [73.9, 11309.0], [74.0, 11319.0], [74.1, 11319.0], [74.2, 11319.0], [74.3, 11319.0], [74.4, 11319.0], [74.5, 11319.0], [74.6, 11319.0], [74.7, 11319.0], [74.8, 11319.0], [74.9, 11319.0], [75.0, 11319.0], [75.1, 11319.0], [75.2, 11319.0], [75.3, 11319.0], [75.4, 11319.0], [75.5, 11319.0], [75.6, 11319.0], [75.7, 11319.0], [75.8, 11319.0], [75.9, 11319.0], [76.0, 11329.0], [76.1, 11329.0], [76.2, 11329.0], [76.3, 11329.0], [76.4, 11329.0], [76.5, 11329.0], [76.6, 11329.0], [76.7, 11329.0], [76.8, 11329.0], [76.9, 11329.0], [77.0, 11329.0], [77.1, 11329.0], [77.2, 11329.0], [77.3, 11329.0], [77.4, 11329.0], [77.5, 11329.0], [77.6, 11329.0], [77.7, 11329.0], [77.8, 11329.0], [77.9, 11329.0], [78.0, 11371.0], [78.1, 11371.0], [78.2, 11371.0], [78.3, 11371.0], [78.4, 11371.0], [78.5, 11371.0], [78.6, 11371.0], [78.7, 11371.0], [78.8, 11371.0], [78.9, 11371.0], [79.0, 11371.0], [79.1, 11371.0], [79.2, 11371.0], [79.3, 11371.0], [79.4, 11371.0], [79.5, 11371.0], [79.6, 11371.0], [79.7, 11371.0], [79.8, 11371.0], [79.9, 11371.0], [80.0, 11383.0], [80.1, 11383.0], [80.2, 11383.0], [80.3, 11383.0], [80.4, 11383.0], [80.5, 11383.0], [80.6, 11383.0], [80.7, 11383.0], [80.8, 11383.0], [80.9, 11383.0], [81.0, 11383.0], [81.1, 11383.0], [81.2, 11383.0], [81.3, 11383.0], [81.4, 11383.0], [81.5, 11383.0], [81.6, 11383.0], [81.7, 11383.0], [81.8, 11383.0], [81.9, 11383.0], [82.0, 11403.0], [82.1, 11403.0], [82.2, 11403.0], [82.3, 11403.0], [82.4, 11403.0], [82.5, 11403.0], [82.6, 11403.0], [82.7, 11403.0], [82.8, 11403.0], [82.9, 11403.0], [83.0, 11403.0], [83.1, 11403.0], [83.2, 11403.0], [83.3, 11403.0], [83.4, 11403.0], [83.5, 11403.0], [83.6, 11403.0], [83.7, 11403.0], [83.8, 11403.0], [83.9, 11403.0], [84.0, 11430.0], [84.1, 11430.0], [84.2, 11430.0], [84.3, 11430.0], [84.4, 11430.0], [84.5, 11430.0], [84.6, 11430.0], [84.7, 11430.0], [84.8, 11430.0], [84.9, 11430.0], [85.0, 11430.0], [85.1, 11430.0], [85.2, 11430.0], [85.3, 11430.0], [85.4, 11430.0], [85.5, 11430.0], [85.6, 11430.0], [85.7, 11430.0], [85.8, 11430.0], [85.9, 11430.0], [86.0, 11445.0], [86.1, 11445.0], [86.2, 11445.0], [86.3, 11445.0], [86.4, 11445.0], [86.5, 11445.0], [86.6, 11445.0], [86.7, 11445.0], [86.8, 11445.0], [86.9, 11445.0], [87.0, 11445.0], [87.1, 11445.0], [87.2, 11445.0], [87.3, 11445.0], [87.4, 11445.0], [87.5, 11445.0], [87.6, 11445.0], [87.7, 11445.0], [87.8, 11445.0], [87.9, 11445.0], [88.0, 11618.0], [88.1, 11618.0], [88.2, 11618.0], [88.3, 11618.0], [88.4, 11618.0], [88.5, 11618.0], [88.6, 11618.0], [88.7, 11618.0], [88.8, 11618.0], [88.9, 11618.0], [89.0, 11618.0], [89.1, 11618.0], [89.2, 11618.0], [89.3, 11618.0], [89.4, 11618.0], [89.5, 11618.0], [89.6, 11618.0], [89.7, 11618.0], [89.8, 11618.0], [89.9, 11618.0], [90.0, 11795.0], [90.1, 11795.0], [90.2, 11795.0], [90.3, 11795.0], [90.4, 11795.0], [90.5, 11795.0], [90.6, 11795.0], [90.7, 11795.0], [90.8, 11795.0], [90.9, 11795.0], [91.0, 11795.0], [91.1, 11795.0], [91.2, 11795.0], [91.3, 11795.0], [91.4, 11795.0], [91.5, 11795.0], [91.6, 11795.0], [91.7, 11795.0], [91.8, 11795.0], [91.9, 11795.0], [92.0, 11795.0], [92.1, 11795.0], [92.2, 11795.0], [92.3, 11795.0], [92.4, 11795.0], [92.5, 11795.0], [92.6, 11795.0], [92.7, 11795.0], [92.8, 11795.0], [92.9, 11795.0], [93.0, 11795.0], [93.1, 11795.0], [93.2, 11795.0], [93.3, 11795.0], [93.4, 11795.0], [93.5, 11795.0], [93.6, 11795.0], [93.7, 11795.0], [93.8, 11795.0], [93.9, 11795.0], [94.0, 11826.0], [94.1, 11826.0], [94.2, 11826.0], [94.3, 11826.0], [94.4, 11826.0], [94.5, 11826.0], [94.6, 11826.0], [94.7, 11826.0], [94.8, 11826.0], [94.9, 11826.0], [95.0, 11826.0], [95.1, 11826.0], [95.2, 11826.0], [95.3, 11826.0], [95.4, 11826.0], [95.5, 11826.0], [95.6, 11826.0], [95.7, 11826.0], [95.8, 11826.0], [95.9, 11826.0], [96.0, 11847.0], [96.1, 11847.0], [96.2, 11847.0], [96.3, 11847.0], [96.4, 11847.0], [96.5, 11847.0], [96.6, 11847.0], [96.7, 11847.0], [96.8, 11847.0], [96.9, 11847.0], [97.0, 11847.0], [97.1, 11847.0], [97.2, 11847.0], [97.3, 11847.0], [97.4, 11847.0], [97.5, 11847.0], [97.6, 11847.0], [97.7, 11847.0], [97.8, 11847.0], [97.9, 11847.0], [98.0, 11973.0], [98.1, 11973.0], [98.2, 11973.0], [98.3, 11973.0], [98.4, 11973.0], [98.5, 11973.0], [98.6, 11973.0], [98.7, 11973.0], [98.8, 11973.0], [98.9, 11973.0], [99.0, 11973.0], [99.1, 11973.0], [99.2, 11973.0], [99.3, 11973.0], [99.4, 11973.0], [99.5, 11973.0], [99.6, 11973.0], [99.7, 11973.0], [99.8, 11973.0], [99.9, 11973.0]], "isOverall": false, "label": "PLATFORM_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 9400.0, "maxY": 6.0, "series": [{"data": [[9600.0, 6.0], [9700.0, 1.0], [9400.0, 1.0], [9500.0, 2.0], [9800.0, 2.0], [9900.0, 1.0], [10000.0, 3.0], [10100.0, 2.0], [10200.0, 1.0], [10300.0, 1.0], [10600.0, 1.0], [10700.0, 1.0], [10500.0, 1.0], [10800.0, 4.0], [11000.0, 2.0], [10900.0, 3.0], [11200.0, 2.0], [11100.0, 2.0], [11300.0, 5.0], [11400.0, 3.0], [11600.0, 1.0], [11700.0, 2.0], [11900.0, 1.0], [11800.0, 2.0]], "isOverall": false, "label": "PLATFORM_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.78166298E12, "maxY": 5.0, "series": [{"data": [[1.78166298E12, 5.0], [1.7816631E12, 1.0], [1.78166304E12, 4.793103448275861]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816631E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 10581.304347826086, "minX": 1.0, "maxY": 11847.0, "series": [{"data": [[4.0, 11826.0], [2.0, 11795.0], [1.0, 11847.0], [5.0, 10581.304347826086], [3.0, 11795.0]], "isOverall": false, "label": "PLATFORM_PLATFORM", "isController": false}, {"data": [[4.800000000000001, 10680.06]], "isOverall": false, "label": "PLATFORM_PLATFORM-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.78166298E12, "maxY": 4.9E-324, "series": [{"data": [[1.78166298E12, 0.0], [1.7816631E12, 0.0], [1.78166304E12, 0.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78166298E12, 0.0], [1.7816631E12, 0.0], [1.78166304E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816631E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9837.1, "minX": 1.78166298E12, "maxY": 11847.0, "series": [{"data": [[1.78166298E12, 9837.1], [1.7816631E12, 11847.0], [1.78166304E12, 11221.172413793103]], "isOverall": false, "label": "PLATFORM_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816631E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78166298E12, "maxY": 4.9E-324, "series": [{"data": [[1.78166298E12, 0.0], [1.7816631E12, 0.0], [1.78166304E12, 0.0]], "isOverall": false, "label": "PLATFORM_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816631E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78166298E12, "maxY": 4.9E-324, "series": [{"data": [[1.78166298E12, 0.0], [1.7816631E12, 0.0], [1.78166304E12, 0.0]], "isOverall": false, "label": "PLATFORM_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816631E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9470.0, "minX": 1.78166298E12, "maxY": 11973.0, "series": [{"data": [[1.78166298E12, 10321.0], [1.7816631E12, 11847.0], [1.78166304E12, 11973.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78166298E12, 9470.0], [1.7816631E12, 11847.0], [1.78166304E12, 10587.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78166298E12, 10205.0], [1.7816631E12, 11847.0], [1.78166304E12, 11795.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78166298E12, 10321.0], [1.7816631E12, 11847.0], [1.78166304E12, 11973.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78166298E12, 9768.5], [1.7816631E12, 11847.0], [1.78166304E12, 11217.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78166298E12, 10315.3], [1.7816631E12, 11847.0], [1.78166304E12, 11899.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816631E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 10454.0, "minX": 1.0, "maxY": 11732.5, "series": [{"data": [[1.0, 11732.5], [4.0, 11612.5], [5.0, 10454.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4.9E-324, "series": [{"data": [[1.0, 0.0], [4.0, 0.0], [5.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.78166298E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.78166298E12, 0.4166666666666667], [1.78166304E12, 0.4166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78166304E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.78166298E12, "maxY": 0.48333333333333334, "series": [{"data": [[1.78166298E12, 0.3333333333333333], [1.7816631E12, 0.016666666666666666], [1.78166304E12, 0.48333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816631E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.78166298E12, "maxY": 0.48333333333333334, "series": [{"data": [[1.78166298E12, 0.3333333333333333], [1.7816631E12, 0.016666666666666666], [1.78166304E12, 0.48333333333333334]], "isOverall": false, "label": "PLATFORM_PLATFORM-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816631E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.78166298E12, "maxY": 0.48333333333333334, "series": [{"data": [[1.78166298E12, 0.3333333333333333], [1.7816631E12, 0.016666666666666666], [1.78166304E12, 0.48333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816631E12, "title": "Total Transactions Per Second"}},
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

