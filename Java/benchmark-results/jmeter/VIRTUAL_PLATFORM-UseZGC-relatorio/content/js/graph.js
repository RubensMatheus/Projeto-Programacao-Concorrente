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
        data: {"result": {"minY": 18963.0, "minX": 0.0, "maxY": 33912.0, "series": [{"data": [[0.0, 18963.0], [0.1, 18963.0], [0.2, 18963.0], [0.3, 18963.0], [0.4, 18963.0], [0.5, 18963.0], [0.6, 18963.0], [0.7, 18963.0], [0.8, 18963.0], [0.9, 18963.0], [1.0, 18963.0], [1.1, 18963.0], [1.2, 18963.0], [1.3, 18963.0], [1.4, 18963.0], [1.5, 18963.0], [1.6, 18963.0], [1.7, 18963.0], [1.8, 18963.0], [1.9, 18963.0], [2.0, 20223.0], [2.1, 20223.0], [2.2, 20223.0], [2.3, 20223.0], [2.4, 20223.0], [2.5, 20223.0], [2.6, 20223.0], [2.7, 20223.0], [2.8, 20223.0], [2.9, 20223.0], [3.0, 20223.0], [3.1, 20223.0], [3.2, 20223.0], [3.3, 20223.0], [3.4, 20223.0], [3.5, 20223.0], [3.6, 20223.0], [3.7, 20223.0], [3.8, 20223.0], [3.9, 20223.0], [4.0, 20241.0], [4.1, 20241.0], [4.2, 20241.0], [4.3, 20241.0], [4.4, 20241.0], [4.5, 20241.0], [4.6, 20241.0], [4.7, 20241.0], [4.8, 20241.0], [4.9, 20241.0], [5.0, 20241.0], [5.1, 20241.0], [5.2, 20241.0], [5.3, 20241.0], [5.4, 20241.0], [5.5, 20241.0], [5.6, 20241.0], [5.7, 20241.0], [5.8, 20241.0], [5.9, 20241.0], [6.0, 20267.0], [6.1, 20267.0], [6.2, 20267.0], [6.3, 20267.0], [6.4, 20267.0], [6.5, 20267.0], [6.6, 20267.0], [6.7, 20267.0], [6.8, 20267.0], [6.9, 20267.0], [7.0, 20267.0], [7.1, 20267.0], [7.2, 20267.0], [7.3, 20267.0], [7.4, 20267.0], [7.5, 20267.0], [7.6, 20267.0], [7.7, 20267.0], [7.8, 20267.0], [7.9, 20267.0], [8.0, 21008.0], [8.1, 21008.0], [8.2, 21008.0], [8.3, 21008.0], [8.4, 21008.0], [8.5, 21008.0], [8.6, 21008.0], [8.7, 21008.0], [8.8, 21008.0], [8.9, 21008.0], [9.0, 21008.0], [9.1, 21008.0], [9.2, 21008.0], [9.3, 21008.0], [9.4, 21008.0], [9.5, 21008.0], [9.6, 21008.0], [9.7, 21008.0], [9.8, 21008.0], [9.9, 21008.0], [10.0, 21104.0], [10.1, 21104.0], [10.2, 21104.0], [10.3, 21104.0], [10.4, 21104.0], [10.5, 21104.0], [10.6, 21104.0], [10.7, 21104.0], [10.8, 21104.0], [10.9, 21104.0], [11.0, 21104.0], [11.1, 21104.0], [11.2, 21104.0], [11.3, 21104.0], [11.4, 21104.0], [11.5, 21104.0], [11.6, 21104.0], [11.7, 21104.0], [11.8, 21104.0], [11.9, 21104.0], [12.0, 21229.0], [12.1, 21229.0], [12.2, 21229.0], [12.3, 21229.0], [12.4, 21229.0], [12.5, 21229.0], [12.6, 21229.0], [12.7, 21229.0], [12.8, 21229.0], [12.9, 21229.0], [13.0, 21229.0], [13.1, 21229.0], [13.2, 21229.0], [13.3, 21229.0], [13.4, 21229.0], [13.5, 21229.0], [13.6, 21229.0], [13.7, 21229.0], [13.8, 21229.0], [13.9, 21229.0], [14.0, 21303.0], [14.1, 21303.0], [14.2, 21303.0], [14.3, 21303.0], [14.4, 21303.0], [14.5, 21303.0], [14.6, 21303.0], [14.7, 21303.0], [14.8, 21303.0], [14.9, 21303.0], [15.0, 21303.0], [15.1, 21303.0], [15.2, 21303.0], [15.3, 21303.0], [15.4, 21303.0], [15.5, 21303.0], [15.6, 21303.0], [15.7, 21303.0], [15.8, 21303.0], [15.9, 21303.0], [16.0, 21501.0], [16.1, 21501.0], [16.2, 21501.0], [16.3, 21501.0], [16.4, 21501.0], [16.5, 21501.0], [16.6, 21501.0], [16.7, 21501.0], [16.8, 21501.0], [16.9, 21501.0], [17.0, 21501.0], [17.1, 21501.0], [17.2, 21501.0], [17.3, 21501.0], [17.4, 21501.0], [17.5, 21501.0], [17.6, 21501.0], [17.7, 21501.0], [17.8, 21501.0], [17.9, 21501.0], [18.0, 21570.0], [18.1, 21570.0], [18.2, 21570.0], [18.3, 21570.0], [18.4, 21570.0], [18.5, 21570.0], [18.6, 21570.0], [18.7, 21570.0], [18.8, 21570.0], [18.9, 21570.0], [19.0, 21570.0], [19.1, 21570.0], [19.2, 21570.0], [19.3, 21570.0], [19.4, 21570.0], [19.5, 21570.0], [19.6, 21570.0], [19.7, 21570.0], [19.8, 21570.0], [19.9, 21570.0], [20.0, 21821.0], [20.1, 21821.0], [20.2, 21821.0], [20.3, 21821.0], [20.4, 21821.0], [20.5, 21821.0], [20.6, 21821.0], [20.7, 21821.0], [20.8, 21821.0], [20.9, 21821.0], [21.0, 21821.0], [21.1, 21821.0], [21.2, 21821.0], [21.3, 21821.0], [21.4, 21821.0], [21.5, 21821.0], [21.6, 21821.0], [21.7, 21821.0], [21.8, 21821.0], [21.9, 21821.0], [22.0, 21845.0], [22.1, 21845.0], [22.2, 21845.0], [22.3, 21845.0], [22.4, 21845.0], [22.5, 21845.0], [22.6, 21845.0], [22.7, 21845.0], [22.8, 21845.0], [22.9, 21845.0], [23.0, 21845.0], [23.1, 21845.0], [23.2, 21845.0], [23.3, 21845.0], [23.4, 21845.0], [23.5, 21845.0], [23.6, 21845.0], [23.7, 21845.0], [23.8, 21845.0], [23.9, 21845.0], [24.0, 22158.0], [24.1, 22158.0], [24.2, 22158.0], [24.3, 22158.0], [24.4, 22158.0], [24.5, 22158.0], [24.6, 22158.0], [24.7, 22158.0], [24.8, 22158.0], [24.9, 22158.0], [25.0, 22158.0], [25.1, 22158.0], [25.2, 22158.0], [25.3, 22158.0], [25.4, 22158.0], [25.5, 22158.0], [25.6, 22158.0], [25.7, 22158.0], [25.8, 22158.0], [25.9, 22158.0], [26.0, 22177.0], [26.1, 22177.0], [26.2, 22177.0], [26.3, 22177.0], [26.4, 22177.0], [26.5, 22177.0], [26.6, 22177.0], [26.7, 22177.0], [26.8, 22177.0], [26.9, 22177.0], [27.0, 22177.0], [27.1, 22177.0], [27.2, 22177.0], [27.3, 22177.0], [27.4, 22177.0], [27.5, 22177.0], [27.6, 22177.0], [27.7, 22177.0], [27.8, 22177.0], [27.9, 22177.0], [28.0, 22427.0], [28.1, 22427.0], [28.2, 22427.0], [28.3, 22427.0], [28.4, 22427.0], [28.5, 22427.0], [28.6, 22427.0], [28.7, 22427.0], [28.8, 22427.0], [28.9, 22427.0], [29.0, 22427.0], [29.1, 22427.0], [29.2, 22427.0], [29.3, 22427.0], [29.4, 22427.0], [29.5, 22427.0], [29.6, 22427.0], [29.7, 22427.0], [29.8, 22427.0], [29.9, 22427.0], [30.0, 22467.0], [30.1, 22467.0], [30.2, 22467.0], [30.3, 22467.0], [30.4, 22467.0], [30.5, 22467.0], [30.6, 22467.0], [30.7, 22467.0], [30.8, 22467.0], [30.9, 22467.0], [31.0, 22467.0], [31.1, 22467.0], [31.2, 22467.0], [31.3, 22467.0], [31.4, 22467.0], [31.5, 22467.0], [31.6, 22467.0], [31.7, 22467.0], [31.8, 22467.0], [31.9, 22467.0], [32.0, 22744.0], [32.1, 22744.0], [32.2, 22744.0], [32.3, 22744.0], [32.4, 22744.0], [32.5, 22744.0], [32.6, 22744.0], [32.7, 22744.0], [32.8, 22744.0], [32.9, 22744.0], [33.0, 22744.0], [33.1, 22744.0], [33.2, 22744.0], [33.3, 22744.0], [33.4, 22744.0], [33.5, 22744.0], [33.6, 22744.0], [33.7, 22744.0], [33.8, 22744.0], [33.9, 22744.0], [34.0, 22784.0], [34.1, 22784.0], [34.2, 22784.0], [34.3, 22784.0], [34.4, 22784.0], [34.5, 22784.0], [34.6, 22784.0], [34.7, 22784.0], [34.8, 22784.0], [34.9, 22784.0], [35.0, 22784.0], [35.1, 22784.0], [35.2, 22784.0], [35.3, 22784.0], [35.4, 22784.0], [35.5, 22784.0], [35.6, 22784.0], [35.7, 22784.0], [35.8, 22784.0], [35.9, 22784.0], [36.0, 22863.0], [36.1, 22863.0], [36.2, 22863.0], [36.3, 22863.0], [36.4, 22863.0], [36.5, 22863.0], [36.6, 22863.0], [36.7, 22863.0], [36.8, 22863.0], [36.9, 22863.0], [37.0, 22863.0], [37.1, 22863.0], [37.2, 22863.0], [37.3, 22863.0], [37.4, 22863.0], [37.5, 22863.0], [37.6, 22863.0], [37.7, 22863.0], [37.8, 22863.0], [37.9, 22863.0], [38.0, 23064.0], [38.1, 23064.0], [38.2, 23064.0], [38.3, 23064.0], [38.4, 23064.0], [38.5, 23064.0], [38.6, 23064.0], [38.7, 23064.0], [38.8, 23064.0], [38.9, 23064.0], [39.0, 23064.0], [39.1, 23064.0], [39.2, 23064.0], [39.3, 23064.0], [39.4, 23064.0], [39.5, 23064.0], [39.6, 23064.0], [39.7, 23064.0], [39.8, 23064.0], [39.9, 23064.0], [40.0, 23244.0], [40.1, 23244.0], [40.2, 23244.0], [40.3, 23244.0], [40.4, 23244.0], [40.5, 23244.0], [40.6, 23244.0], [40.7, 23244.0], [40.8, 23244.0], [40.9, 23244.0], [41.0, 23244.0], [41.1, 23244.0], [41.2, 23244.0], [41.3, 23244.0], [41.4, 23244.0], [41.5, 23244.0], [41.6, 23244.0], [41.7, 23244.0], [41.8, 23244.0], [41.9, 23244.0], [42.0, 23268.0], [42.1, 23268.0], [42.2, 23268.0], [42.3, 23268.0], [42.4, 23268.0], [42.5, 23268.0], [42.6, 23268.0], [42.7, 23268.0], [42.8, 23268.0], [42.9, 23268.0], [43.0, 23268.0], [43.1, 23268.0], [43.2, 23268.0], [43.3, 23268.0], [43.4, 23268.0], [43.5, 23268.0], [43.6, 23268.0], [43.7, 23268.0], [43.8, 23268.0], [43.9, 23268.0], [44.0, 23322.0], [44.1, 23322.0], [44.2, 23322.0], [44.3, 23322.0], [44.4, 23322.0], [44.5, 23322.0], [44.6, 23322.0], [44.7, 23322.0], [44.8, 23322.0], [44.9, 23322.0], [45.0, 23322.0], [45.1, 23322.0], [45.2, 23322.0], [45.3, 23322.0], [45.4, 23322.0], [45.5, 23322.0], [45.6, 23322.0], [45.7, 23322.0], [45.8, 23322.0], [45.9, 23322.0], [46.0, 23531.0], [46.1, 23531.0], [46.2, 23531.0], [46.3, 23531.0], [46.4, 23531.0], [46.5, 23531.0], [46.6, 23531.0], [46.7, 23531.0], [46.8, 23531.0], [46.9, 23531.0], [47.0, 23531.0], [47.1, 23531.0], [47.2, 23531.0], [47.3, 23531.0], [47.4, 23531.0], [47.5, 23531.0], [47.6, 23531.0], [47.7, 23531.0], [47.8, 23531.0], [47.9, 23531.0], [48.0, 23661.0], [48.1, 23661.0], [48.2, 23661.0], [48.3, 23661.0], [48.4, 23661.0], [48.5, 23661.0], [48.6, 23661.0], [48.7, 23661.0], [48.8, 23661.0], [48.9, 23661.0], [49.0, 23661.0], [49.1, 23661.0], [49.2, 23661.0], [49.3, 23661.0], [49.4, 23661.0], [49.5, 23661.0], [49.6, 23661.0], [49.7, 23661.0], [49.8, 23661.0], [49.9, 23661.0], [50.0, 24132.0], [50.1, 24132.0], [50.2, 24132.0], [50.3, 24132.0], [50.4, 24132.0], [50.5, 24132.0], [50.6, 24132.0], [50.7, 24132.0], [50.8, 24132.0], [50.9, 24132.0], [51.0, 24132.0], [51.1, 24132.0], [51.2, 24132.0], [51.3, 24132.0], [51.4, 24132.0], [51.5, 24132.0], [51.6, 24132.0], [51.7, 24132.0], [51.8, 24132.0], [51.9, 24132.0], [52.0, 24140.0], [52.1, 24140.0], [52.2, 24140.0], [52.3, 24140.0], [52.4, 24140.0], [52.5, 24140.0], [52.6, 24140.0], [52.7, 24140.0], [52.8, 24140.0], [52.9, 24140.0], [53.0, 24140.0], [53.1, 24140.0], [53.2, 24140.0], [53.3, 24140.0], [53.4, 24140.0], [53.5, 24140.0], [53.6, 24140.0], [53.7, 24140.0], [53.8, 24140.0], [53.9, 24140.0], [54.0, 24397.0], [54.1, 24397.0], [54.2, 24397.0], [54.3, 24397.0], [54.4, 24397.0], [54.5, 24397.0], [54.6, 24397.0], [54.7, 24397.0], [54.8, 24397.0], [54.9, 24397.0], [55.0, 24397.0], [55.1, 24397.0], [55.2, 24397.0], [55.3, 24397.0], [55.4, 24397.0], [55.5, 24397.0], [55.6, 24397.0], [55.7, 24397.0], [55.8, 24397.0], [55.9, 24397.0], [56.0, 25411.0], [56.1, 25411.0], [56.2, 25411.0], [56.3, 25411.0], [56.4, 25411.0], [56.5, 25411.0], [56.6, 25411.0], [56.7, 25411.0], [56.8, 25411.0], [56.9, 25411.0], [57.0, 25411.0], [57.1, 25411.0], [57.2, 25411.0], [57.3, 25411.0], [57.4, 25411.0], [57.5, 25411.0], [57.6, 25411.0], [57.7, 25411.0], [57.8, 25411.0], [57.9, 25411.0], [58.0, 25797.0], [58.1, 25797.0], [58.2, 25797.0], [58.3, 25797.0], [58.4, 25797.0], [58.5, 25797.0], [58.6, 25797.0], [58.7, 25797.0], [58.8, 25797.0], [58.9, 25797.0], [59.0, 25797.0], [59.1, 25797.0], [59.2, 25797.0], [59.3, 25797.0], [59.4, 25797.0], [59.5, 25797.0], [59.6, 25797.0], [59.7, 25797.0], [59.8, 25797.0], [59.9, 25797.0], [60.0, 25798.0], [60.1, 25798.0], [60.2, 25798.0], [60.3, 25798.0], [60.4, 25798.0], [60.5, 25798.0], [60.6, 25798.0], [60.7, 25798.0], [60.8, 25798.0], [60.9, 25798.0], [61.0, 25798.0], [61.1, 25798.0], [61.2, 25798.0], [61.3, 25798.0], [61.4, 25798.0], [61.5, 25798.0], [61.6, 25798.0], [61.7, 25798.0], [61.8, 25798.0], [61.9, 25798.0], [62.0, 26301.0], [62.1, 26301.0], [62.2, 26301.0], [62.3, 26301.0], [62.4, 26301.0], [62.5, 26301.0], [62.6, 26301.0], [62.7, 26301.0], [62.8, 26301.0], [62.9, 26301.0], [63.0, 26301.0], [63.1, 26301.0], [63.2, 26301.0], [63.3, 26301.0], [63.4, 26301.0], [63.5, 26301.0], [63.6, 26301.0], [63.7, 26301.0], [63.8, 26301.0], [63.9, 26301.0], [64.0, 27134.0], [64.1, 27134.0], [64.2, 27134.0], [64.3, 27134.0], [64.4, 27134.0], [64.5, 27134.0], [64.6, 27134.0], [64.7, 27134.0], [64.8, 27134.0], [64.9, 27134.0], [65.0, 27134.0], [65.1, 27134.0], [65.2, 27134.0], [65.3, 27134.0], [65.4, 27134.0], [65.5, 27134.0], [65.6, 27134.0], [65.7, 27134.0], [65.8, 27134.0], [65.9, 27134.0], [66.0, 27436.0], [66.1, 27436.0], [66.2, 27436.0], [66.3, 27436.0], [66.4, 27436.0], [66.5, 27436.0], [66.6, 27436.0], [66.7, 27436.0], [66.8, 27436.0], [66.9, 27436.0], [67.0, 27436.0], [67.1, 27436.0], [67.2, 27436.0], [67.3, 27436.0], [67.4, 27436.0], [67.5, 27436.0], [67.6, 27436.0], [67.7, 27436.0], [67.8, 27436.0], [67.9, 27436.0], [68.0, 27485.0], [68.1, 27485.0], [68.2, 27485.0], [68.3, 27485.0], [68.4, 27485.0], [68.5, 27485.0], [68.6, 27485.0], [68.7, 27485.0], [68.8, 27485.0], [68.9, 27485.0], [69.0, 27485.0], [69.1, 27485.0], [69.2, 27485.0], [69.3, 27485.0], [69.4, 27485.0], [69.5, 27485.0], [69.6, 27485.0], [69.7, 27485.0], [69.8, 27485.0], [69.9, 27485.0], [70.0, 27521.0], [70.1, 27521.0], [70.2, 27521.0], [70.3, 27521.0], [70.4, 27521.0], [70.5, 27521.0], [70.6, 27521.0], [70.7, 27521.0], [70.8, 27521.0], [70.9, 27521.0], [71.0, 27521.0], [71.1, 27521.0], [71.2, 27521.0], [71.3, 27521.0], [71.4, 27521.0], [71.5, 27521.0], [71.6, 27521.0], [71.7, 27521.0], [71.8, 27521.0], [71.9, 27521.0], [72.0, 27553.0], [72.1, 27553.0], [72.2, 27553.0], [72.3, 27553.0], [72.4, 27553.0], [72.5, 27553.0], [72.6, 27553.0], [72.7, 27553.0], [72.8, 27553.0], [72.9, 27553.0], [73.0, 27553.0], [73.1, 27553.0], [73.2, 27553.0], [73.3, 27553.0], [73.4, 27553.0], [73.5, 27553.0], [73.6, 27553.0], [73.7, 27553.0], [73.8, 27553.0], [73.9, 27553.0], [74.0, 27588.0], [74.1, 27588.0], [74.2, 27588.0], [74.3, 27588.0], [74.4, 27588.0], [74.5, 27588.0], [74.6, 27588.0], [74.7, 27588.0], [74.8, 27588.0], [74.9, 27588.0], [75.0, 27588.0], [75.1, 27588.0], [75.2, 27588.0], [75.3, 27588.0], [75.4, 27588.0], [75.5, 27588.0], [75.6, 27588.0], [75.7, 27588.0], [75.8, 27588.0], [75.9, 27588.0], [76.0, 27727.0], [76.1, 27727.0], [76.2, 27727.0], [76.3, 27727.0], [76.4, 27727.0], [76.5, 27727.0], [76.6, 27727.0], [76.7, 27727.0], [76.8, 27727.0], [76.9, 27727.0], [77.0, 27727.0], [77.1, 27727.0], [77.2, 27727.0], [77.3, 27727.0], [77.4, 27727.0], [77.5, 27727.0], [77.6, 27727.0], [77.7, 27727.0], [77.8, 27727.0], [77.9, 27727.0], [78.0, 28225.0], [78.1, 28225.0], [78.2, 28225.0], [78.3, 28225.0], [78.4, 28225.0], [78.5, 28225.0], [78.6, 28225.0], [78.7, 28225.0], [78.8, 28225.0], [78.9, 28225.0], [79.0, 28225.0], [79.1, 28225.0], [79.2, 28225.0], [79.3, 28225.0], [79.4, 28225.0], [79.5, 28225.0], [79.6, 28225.0], [79.7, 28225.0], [79.8, 28225.0], [79.9, 28225.0], [80.0, 28355.0], [80.1, 28355.0], [80.2, 28355.0], [80.3, 28355.0], [80.4, 28355.0], [80.5, 28355.0], [80.6, 28355.0], [80.7, 28355.0], [80.8, 28355.0], [80.9, 28355.0], [81.0, 28355.0], [81.1, 28355.0], [81.2, 28355.0], [81.3, 28355.0], [81.4, 28355.0], [81.5, 28355.0], [81.6, 28355.0], [81.7, 28355.0], [81.8, 28355.0], [81.9, 28355.0], [82.0, 28654.0], [82.1, 28654.0], [82.2, 28654.0], [82.3, 28654.0], [82.4, 28654.0], [82.5, 28654.0], [82.6, 28654.0], [82.7, 28654.0], [82.8, 28654.0], [82.9, 28654.0], [83.0, 28654.0], [83.1, 28654.0], [83.2, 28654.0], [83.3, 28654.0], [83.4, 28654.0], [83.5, 28654.0], [83.6, 28654.0], [83.7, 28654.0], [83.8, 28654.0], [83.9, 28654.0], [84.0, 28859.0], [84.1, 28859.0], [84.2, 28859.0], [84.3, 28859.0], [84.4, 28859.0], [84.5, 28859.0], [84.6, 28859.0], [84.7, 28859.0], [84.8, 28859.0], [84.9, 28859.0], [85.0, 28859.0], [85.1, 28859.0], [85.2, 28859.0], [85.3, 28859.0], [85.4, 28859.0], [85.5, 28859.0], [85.6, 28859.0], [85.7, 28859.0], [85.8, 28859.0], [85.9, 28859.0], [86.0, 29113.0], [86.1, 29113.0], [86.2, 29113.0], [86.3, 29113.0], [86.4, 29113.0], [86.5, 29113.0], [86.6, 29113.0], [86.7, 29113.0], [86.8, 29113.0], [86.9, 29113.0], [87.0, 29113.0], [87.1, 29113.0], [87.2, 29113.0], [87.3, 29113.0], [87.4, 29113.0], [87.5, 29113.0], [87.6, 29113.0], [87.7, 29113.0], [87.8, 29113.0], [87.9, 29113.0], [88.0, 30156.0], [88.1, 30156.0], [88.2, 30156.0], [88.3, 30156.0], [88.4, 30156.0], [88.5, 30156.0], [88.6, 30156.0], [88.7, 30156.0], [88.8, 30156.0], [88.9, 30156.0], [89.0, 30156.0], [89.1, 30156.0], [89.2, 30156.0], [89.3, 30156.0], [89.4, 30156.0], [89.5, 30156.0], [89.6, 30156.0], [89.7, 30156.0], [89.8, 30156.0], [89.9, 30156.0], [90.0, 32539.0], [90.1, 32539.0], [90.2, 32539.0], [90.3, 32539.0], [90.4, 32539.0], [90.5, 32539.0], [90.6, 32539.0], [90.7, 32539.0], [90.8, 32539.0], [90.9, 32539.0], [91.0, 32539.0], [91.1, 32539.0], [91.2, 32539.0], [91.3, 32539.0], [91.4, 32539.0], [91.5, 32539.0], [91.6, 32539.0], [91.7, 32539.0], [91.8, 32539.0], [91.9, 32539.0], [92.0, 32765.0], [92.1, 32765.0], [92.2, 32765.0], [92.3, 32765.0], [92.4, 32765.0], [92.5, 32765.0], [92.6, 32765.0], [92.7, 32765.0], [92.8, 32765.0], [92.9, 32765.0], [93.0, 32765.0], [93.1, 32765.0], [93.2, 32765.0], [93.3, 32765.0], [93.4, 32765.0], [93.5, 32765.0], [93.6, 32765.0], [93.7, 32765.0], [93.8, 32765.0], [93.9, 32765.0], [94.0, 32897.0], [94.1, 32897.0], [94.2, 32897.0], [94.3, 32897.0], [94.4, 32897.0], [94.5, 32897.0], [94.6, 32897.0], [94.7, 32897.0], [94.8, 32897.0], [94.9, 32897.0], [95.0, 32897.0], [95.1, 32897.0], [95.2, 32897.0], [95.3, 32897.0], [95.4, 32897.0], [95.5, 32897.0], [95.6, 32897.0], [95.7, 32897.0], [95.8, 32897.0], [95.9, 32897.0], [96.0, 33167.0], [96.1, 33167.0], [96.2, 33167.0], [96.3, 33167.0], [96.4, 33167.0], [96.5, 33167.0], [96.6, 33167.0], [96.7, 33167.0], [96.8, 33167.0], [96.9, 33167.0], [97.0, 33167.0], [97.1, 33167.0], [97.2, 33167.0], [97.3, 33167.0], [97.4, 33167.0], [97.5, 33167.0], [97.6, 33167.0], [97.7, 33167.0], [97.8, 33167.0], [97.9, 33167.0], [98.0, 33912.0], [98.1, 33912.0], [98.2, 33912.0], [98.3, 33912.0], [98.4, 33912.0], [98.5, 33912.0], [98.6, 33912.0], [98.7, 33912.0], [98.8, 33912.0], [98.9, 33912.0], [99.0, 33912.0], [99.1, 33912.0], [99.2, 33912.0], [99.3, 33912.0], [99.4, 33912.0], [99.5, 33912.0], [99.6, 33912.0], [99.7, 33912.0], [99.8, 33912.0], [99.9, 33912.0]], "isOverall": false, "label": "VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 18900.0, "maxY": 3.0, "series": [{"data": [[18900.0, 1.0], [20200.0, 3.0], [21200.0, 1.0], [21300.0, 1.0], [21100.0, 1.0], [21500.0, 2.0], [21000.0, 1.0], [22100.0, 2.0], [21800.0, 2.0], [22400.0, 2.0], [22700.0, 2.0], [22800.0, 1.0], [23000.0, 1.0], [23500.0, 1.0], [23300.0, 1.0], [23200.0, 2.0], [24100.0, 2.0], [24300.0, 1.0], [23600.0, 1.0], [25400.0, 1.0], [25700.0, 2.0], [26300.0, 1.0], [27100.0, 1.0], [27400.0, 2.0], [27500.0, 3.0], [27700.0, 1.0], [28300.0, 1.0], [28600.0, 1.0], [28200.0, 1.0], [28800.0, 1.0], [29100.0, 1.0], [30100.0, 1.0], [32500.0, 1.0], [32700.0, 1.0], [33100.0, 1.0], [32800.0, 1.0], [33900.0, 1.0]], "isOverall": false, "label": "VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 33900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.78169256E12, "maxY": 5.0, "series": [{"data": [[1.78169274E12, 4.916666666666667], [1.78169256E12, 5.0], [1.78169262E12, 5.0], [1.7816928E12, 2.0], [1.78169268E12, 5.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816928E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 21570.0, "minX": 1.0, "maxY": 29113.0, "series": [{"data": [[4.0, 21570.0], [2.0, 27485.0], [1.0, 29113.0], [5.0, 25106.413043478256], [3.0, 22784.0]], "isOverall": false, "label": "VIRTUAL_PLATFORM", "isController": false}, {"data": [[4.800000000000001, 25116.939999999995]], "isOverall": false, "label": "VIRTUAL_PLATFORM-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.78169256E12, "maxY": 4.9E-324, "series": [{"data": [[1.78169274E12, 0.0], [1.78169256E12, 0.0], [1.78169262E12, 0.0], [1.7816928E12, 0.0], [1.78169268E12, 0.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78169274E12, 0.0], [1.78169256E12, 0.0], [1.78169262E12, 0.0], [1.7816928E12, 0.0], [1.78169268E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816928E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 21586.533333333333, "minX": 1.78169256E12, "maxY": 28304.2, "series": [{"data": [[1.78169274E12, 26171.16666666666], [1.78169256E12, 21586.533333333333], [1.78169262E12, 25557.1], [1.7816928E12, 26460.666666666668], [1.78169268E12, 28304.2]], "isOverall": false, "label": "VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816928E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78169256E12, "maxY": 4.9E-324, "series": [{"data": [[1.78169274E12, 0.0], [1.78169256E12, 0.0], [1.78169262E12, 0.0], [1.7816928E12, 0.0], [1.78169268E12, 0.0]], "isOverall": false, "label": "VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816928E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78169256E12, "maxY": 4.9E-324, "series": [{"data": [[1.78169274E12, 0.0], [1.78169256E12, 0.0], [1.78169262E12, 0.0], [1.7816928E12, 0.0], [1.78169268E12, 0.0]], "isOverall": false, "label": "VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816928E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 18963.0, "minX": 1.78169256E12, "maxY": 33912.0, "series": [{"data": [[1.78169274E12, 28859.0], [1.78169256E12, 24140.0], [1.78169262E12, 30156.0], [1.7816928E12, 29113.0], [1.78169268E12, 33912.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78169274E12, 21570.0], [1.78169256E12, 18963.0], [1.78169262E12, 21008.0], [1.7816928E12, 22784.0], [1.78169268E12, 23244.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78169274E12, 28668.8], [1.78169256E12, 23494.4], [1.78169262E12, 30005.8], [1.7816928E12, 29113.0], [1.78169268E12, 33837.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78169274E12, 28859.0], [1.78169256E12, 24140.0], [1.78169262E12, 30156.0], [1.7816928E12, 29113.0], [1.78169268E12, 33912.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78169274E12, 26868.5], [1.78169256E12, 21501.0], [1.78169262E12, 26466.0], [1.7816928E12, 27485.0], [1.78169268E12, 28468.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78169274E12, 28859.0], [1.78169256E12, 24140.0], [1.78169262E12, 30156.0], [1.7816928E12, 29113.0], [1.78169268E12, 33912.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816928E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 23896.5, "minX": 1.0, "maxY": 24330.0, "series": [{"data": [[1.0, 23896.5], [2.0, 24330.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4.9E-324, "series": [{"data": [[1.0, 0.0], [2.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.7816925E12, "maxY": 0.25, "series": [{"data": [[1.78169274E12, 0.16666666666666666], [1.78169256E12, 0.25], [1.78169262E12, 0.16666666666666666], [1.7816925E12, 0.08333333333333333], [1.78169268E12, 0.16666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78169274E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.78169256E12, "maxY": 0.25, "series": [{"data": [[1.78169274E12, 0.2], [1.78169256E12, 0.25], [1.78169262E12, 0.16666666666666666], [1.7816928E12, 0.05], [1.78169268E12, 0.16666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7816928E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.78169256E12, "maxY": 0.25, "series": [{"data": [[1.78169274E12, 0.2], [1.78169256E12, 0.25], [1.78169262E12, 0.16666666666666666], [1.7816928E12, 0.05], [1.78169268E12, 0.16666666666666666]], "isOverall": false, "label": "VIRTUAL_PLATFORM-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816928E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.78169256E12, "maxY": 0.25, "series": [{"data": [[1.78169274E12, 0.2], [1.78169256E12, 0.25], [1.78169262E12, 0.16666666666666666], [1.7816928E12, 0.05], [1.78169268E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7816928E12, "title": "Total Transactions Per Second"}},
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

