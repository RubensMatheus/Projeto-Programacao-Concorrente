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
        data: {"result": {"minY": 14106.0, "minX": 0.0, "maxY": 16549.0, "series": [{"data": [[0.0, 14106.0], [0.1, 14106.0], [0.2, 14106.0], [0.3, 14106.0], [0.4, 14106.0], [0.5, 14106.0], [0.6, 14106.0], [0.7, 14106.0], [0.8, 14106.0], [0.9, 14106.0], [1.0, 14106.0], [1.1, 14106.0], [1.2, 14106.0], [1.3, 14106.0], [1.4, 14106.0], [1.5, 14106.0], [1.6, 14106.0], [1.7, 14106.0], [1.8, 14106.0], [1.9, 14106.0], [2.0, 14114.0], [2.1, 14114.0], [2.2, 14114.0], [2.3, 14114.0], [2.4, 14114.0], [2.5, 14114.0], [2.6, 14114.0], [2.7, 14114.0], [2.8, 14114.0], [2.9, 14114.0], [3.0, 14114.0], [3.1, 14114.0], [3.2, 14114.0], [3.3, 14114.0], [3.4, 14114.0], [3.5, 14114.0], [3.6, 14114.0], [3.7, 14114.0], [3.8, 14114.0], [3.9, 14114.0], [4.0, 14122.0], [4.1, 14122.0], [4.2, 14122.0], [4.3, 14122.0], [4.4, 14122.0], [4.5, 14122.0], [4.6, 14122.0], [4.7, 14122.0], [4.8, 14122.0], [4.9, 14122.0], [5.0, 14122.0], [5.1, 14122.0], [5.2, 14122.0], [5.3, 14122.0], [5.4, 14122.0], [5.5, 14122.0], [5.6, 14122.0], [5.7, 14122.0], [5.8, 14122.0], [5.9, 14122.0], [6.0, 14178.0], [6.1, 14178.0], [6.2, 14178.0], [6.3, 14178.0], [6.4, 14178.0], [6.5, 14178.0], [6.6, 14178.0], [6.7, 14178.0], [6.8, 14178.0], [6.9, 14178.0], [7.0, 14178.0], [7.1, 14178.0], [7.2, 14178.0], [7.3, 14178.0], [7.4, 14178.0], [7.5, 14178.0], [7.6, 14178.0], [7.7, 14178.0], [7.8, 14178.0], [7.9, 14178.0], [8.0, 14225.0], [8.1, 14225.0], [8.2, 14225.0], [8.3, 14225.0], [8.4, 14225.0], [8.5, 14225.0], [8.6, 14225.0], [8.7, 14225.0], [8.8, 14225.0], [8.9, 14225.0], [9.0, 14225.0], [9.1, 14225.0], [9.2, 14225.0], [9.3, 14225.0], [9.4, 14225.0], [9.5, 14225.0], [9.6, 14225.0], [9.7, 14225.0], [9.8, 14225.0], [9.9, 14225.0], [10.0, 14226.0], [10.1, 14226.0], [10.2, 14226.0], [10.3, 14226.0], [10.4, 14226.0], [10.5, 14226.0], [10.6, 14226.0], [10.7, 14226.0], [10.8, 14226.0], [10.9, 14226.0], [11.0, 14226.0], [11.1, 14226.0], [11.2, 14226.0], [11.3, 14226.0], [11.4, 14226.0], [11.5, 14226.0], [11.6, 14226.0], [11.7, 14226.0], [11.8, 14226.0], [11.9, 14226.0], [12.0, 14242.0], [12.1, 14242.0], [12.2, 14242.0], [12.3, 14242.0], [12.4, 14242.0], [12.5, 14242.0], [12.6, 14242.0], [12.7, 14242.0], [12.8, 14242.0], [12.9, 14242.0], [13.0, 14242.0], [13.1, 14242.0], [13.2, 14242.0], [13.3, 14242.0], [13.4, 14242.0], [13.5, 14242.0], [13.6, 14242.0], [13.7, 14242.0], [13.8, 14242.0], [13.9, 14242.0], [14.0, 14329.0], [14.1, 14329.0], [14.2, 14329.0], [14.3, 14329.0], [14.4, 14329.0], [14.5, 14329.0], [14.6, 14329.0], [14.7, 14329.0], [14.8, 14329.0], [14.9, 14329.0], [15.0, 14329.0], [15.1, 14329.0], [15.2, 14329.0], [15.3, 14329.0], [15.4, 14329.0], [15.5, 14329.0], [15.6, 14329.0], [15.7, 14329.0], [15.8, 14329.0], [15.9, 14329.0], [16.0, 14372.0], [16.1, 14372.0], [16.2, 14372.0], [16.3, 14372.0], [16.4, 14372.0], [16.5, 14372.0], [16.6, 14372.0], [16.7, 14372.0], [16.8, 14372.0], [16.9, 14372.0], [17.0, 14372.0], [17.1, 14372.0], [17.2, 14372.0], [17.3, 14372.0], [17.4, 14372.0], [17.5, 14372.0], [17.6, 14372.0], [17.7, 14372.0], [17.8, 14372.0], [17.9, 14372.0], [18.0, 14381.0], [18.1, 14381.0], [18.2, 14381.0], [18.3, 14381.0], [18.4, 14381.0], [18.5, 14381.0], [18.6, 14381.0], [18.7, 14381.0], [18.8, 14381.0], [18.9, 14381.0], [19.0, 14381.0], [19.1, 14381.0], [19.2, 14381.0], [19.3, 14381.0], [19.4, 14381.0], [19.5, 14381.0], [19.6, 14381.0], [19.7, 14381.0], [19.8, 14381.0], [19.9, 14381.0], [20.0, 14390.0], [20.1, 14390.0], [20.2, 14390.0], [20.3, 14390.0], [20.4, 14390.0], [20.5, 14390.0], [20.6, 14390.0], [20.7, 14390.0], [20.8, 14390.0], [20.9, 14390.0], [21.0, 14390.0], [21.1, 14390.0], [21.2, 14390.0], [21.3, 14390.0], [21.4, 14390.0], [21.5, 14390.0], [21.6, 14390.0], [21.7, 14390.0], [21.8, 14390.0], [21.9, 14390.0], [22.0, 14453.0], [22.1, 14453.0], [22.2, 14453.0], [22.3, 14453.0], [22.4, 14453.0], [22.5, 14453.0], [22.6, 14453.0], [22.7, 14453.0], [22.8, 14453.0], [22.9, 14453.0], [23.0, 14453.0], [23.1, 14453.0], [23.2, 14453.0], [23.3, 14453.0], [23.4, 14453.0], [23.5, 14453.0], [23.6, 14453.0], [23.7, 14453.0], [23.8, 14453.0], [23.9, 14453.0], [24.0, 14579.0], [24.1, 14579.0], [24.2, 14579.0], [24.3, 14579.0], [24.4, 14579.0], [24.5, 14579.0], [24.6, 14579.0], [24.7, 14579.0], [24.8, 14579.0], [24.9, 14579.0], [25.0, 14579.0], [25.1, 14579.0], [25.2, 14579.0], [25.3, 14579.0], [25.4, 14579.0], [25.5, 14579.0], [25.6, 14579.0], [25.7, 14579.0], [25.8, 14579.0], [25.9, 14579.0], [26.0, 14748.0], [26.1, 14748.0], [26.2, 14748.0], [26.3, 14748.0], [26.4, 14748.0], [26.5, 14748.0], [26.6, 14748.0], [26.7, 14748.0], [26.8, 14748.0], [26.9, 14748.0], [27.0, 14748.0], [27.1, 14748.0], [27.2, 14748.0], [27.3, 14748.0], [27.4, 14748.0], [27.5, 14748.0], [27.6, 14748.0], [27.7, 14748.0], [27.8, 14748.0], [27.9, 14748.0], [28.0, 14763.0], [28.1, 14763.0], [28.2, 14763.0], [28.3, 14763.0], [28.4, 14763.0], [28.5, 14763.0], [28.6, 14763.0], [28.7, 14763.0], [28.8, 14763.0], [28.9, 14763.0], [29.0, 14763.0], [29.1, 14763.0], [29.2, 14763.0], [29.3, 14763.0], [29.4, 14763.0], [29.5, 14763.0], [29.6, 14763.0], [29.7, 14763.0], [29.8, 14763.0], [29.9, 14763.0], [30.0, 14777.0], [30.1, 14777.0], [30.2, 14777.0], [30.3, 14777.0], [30.4, 14777.0], [30.5, 14777.0], [30.6, 14777.0], [30.7, 14777.0], [30.8, 14777.0], [30.9, 14777.0], [31.0, 14777.0], [31.1, 14777.0], [31.2, 14777.0], [31.3, 14777.0], [31.4, 14777.0], [31.5, 14777.0], [31.6, 14777.0], [31.7, 14777.0], [31.8, 14777.0], [31.9, 14777.0], [32.0, 14778.0], [32.1, 14778.0], [32.2, 14778.0], [32.3, 14778.0], [32.4, 14778.0], [32.5, 14778.0], [32.6, 14778.0], [32.7, 14778.0], [32.8, 14778.0], [32.9, 14778.0], [33.0, 14778.0], [33.1, 14778.0], [33.2, 14778.0], [33.3, 14778.0], [33.4, 14778.0], [33.5, 14778.0], [33.6, 14778.0], [33.7, 14778.0], [33.8, 14778.0], [33.9, 14778.0], [34.0, 14796.0], [34.1, 14796.0], [34.2, 14796.0], [34.3, 14796.0], [34.4, 14796.0], [34.5, 14796.0], [34.6, 14796.0], [34.7, 14796.0], [34.8, 14796.0], [34.9, 14796.0], [35.0, 14796.0], [35.1, 14796.0], [35.2, 14796.0], [35.3, 14796.0], [35.4, 14796.0], [35.5, 14796.0], [35.6, 14796.0], [35.7, 14796.0], [35.8, 14796.0], [35.9, 14796.0], [36.0, 14829.0], [36.1, 14829.0], [36.2, 14829.0], [36.3, 14829.0], [36.4, 14829.0], [36.5, 14829.0], [36.6, 14829.0], [36.7, 14829.0], [36.8, 14829.0], [36.9, 14829.0], [37.0, 14829.0], [37.1, 14829.0], [37.2, 14829.0], [37.3, 14829.0], [37.4, 14829.0], [37.5, 14829.0], [37.6, 14829.0], [37.7, 14829.0], [37.8, 14829.0], [37.9, 14829.0], [38.0, 14835.0], [38.1, 14835.0], [38.2, 14835.0], [38.3, 14835.0], [38.4, 14835.0], [38.5, 14835.0], [38.6, 14835.0], [38.7, 14835.0], [38.8, 14835.0], [38.9, 14835.0], [39.0, 14835.0], [39.1, 14835.0], [39.2, 14835.0], [39.3, 14835.0], [39.4, 14835.0], [39.5, 14835.0], [39.6, 14835.0], [39.7, 14835.0], [39.8, 14835.0], [39.9, 14835.0], [40.0, 14838.0], [40.1, 14838.0], [40.2, 14838.0], [40.3, 14838.0], [40.4, 14838.0], [40.5, 14838.0], [40.6, 14838.0], [40.7, 14838.0], [40.8, 14838.0], [40.9, 14838.0], [41.0, 14838.0], [41.1, 14838.0], [41.2, 14838.0], [41.3, 14838.0], [41.4, 14838.0], [41.5, 14838.0], [41.6, 14838.0], [41.7, 14838.0], [41.8, 14838.0], [41.9, 14838.0], [42.0, 15006.0], [42.1, 15006.0], [42.2, 15006.0], [42.3, 15006.0], [42.4, 15006.0], [42.5, 15006.0], [42.6, 15006.0], [42.7, 15006.0], [42.8, 15006.0], [42.9, 15006.0], [43.0, 15006.0], [43.1, 15006.0], [43.2, 15006.0], [43.3, 15006.0], [43.4, 15006.0], [43.5, 15006.0], [43.6, 15006.0], [43.7, 15006.0], [43.8, 15006.0], [43.9, 15006.0], [44.0, 15013.0], [44.1, 15013.0], [44.2, 15013.0], [44.3, 15013.0], [44.4, 15013.0], [44.5, 15013.0], [44.6, 15013.0], [44.7, 15013.0], [44.8, 15013.0], [44.9, 15013.0], [45.0, 15013.0], [45.1, 15013.0], [45.2, 15013.0], [45.3, 15013.0], [45.4, 15013.0], [45.5, 15013.0], [45.6, 15013.0], [45.7, 15013.0], [45.8, 15013.0], [45.9, 15013.0], [46.0, 15024.0], [46.1, 15024.0], [46.2, 15024.0], [46.3, 15024.0], [46.4, 15024.0], [46.5, 15024.0], [46.6, 15024.0], [46.7, 15024.0], [46.8, 15024.0], [46.9, 15024.0], [47.0, 15024.0], [47.1, 15024.0], [47.2, 15024.0], [47.3, 15024.0], [47.4, 15024.0], [47.5, 15024.0], [47.6, 15024.0], [47.7, 15024.0], [47.8, 15024.0], [47.9, 15024.0], [48.0, 15071.0], [48.1, 15071.0], [48.2, 15071.0], [48.3, 15071.0], [48.4, 15071.0], [48.5, 15071.0], [48.6, 15071.0], [48.7, 15071.0], [48.8, 15071.0], [48.9, 15071.0], [49.0, 15071.0], [49.1, 15071.0], [49.2, 15071.0], [49.3, 15071.0], [49.4, 15071.0], [49.5, 15071.0], [49.6, 15071.0], [49.7, 15071.0], [49.8, 15071.0], [49.9, 15071.0], [50.0, 15087.0], [50.1, 15087.0], [50.2, 15087.0], [50.3, 15087.0], [50.4, 15087.0], [50.5, 15087.0], [50.6, 15087.0], [50.7, 15087.0], [50.8, 15087.0], [50.9, 15087.0], [51.0, 15087.0], [51.1, 15087.0], [51.2, 15087.0], [51.3, 15087.0], [51.4, 15087.0], [51.5, 15087.0], [51.6, 15087.0], [51.7, 15087.0], [51.8, 15087.0], [51.9, 15087.0], [52.0, 15093.0], [52.1, 15093.0], [52.2, 15093.0], [52.3, 15093.0], [52.4, 15093.0], [52.5, 15093.0], [52.6, 15093.0], [52.7, 15093.0], [52.8, 15093.0], [52.9, 15093.0], [53.0, 15093.0], [53.1, 15093.0], [53.2, 15093.0], [53.3, 15093.0], [53.4, 15093.0], [53.5, 15093.0], [53.6, 15093.0], [53.7, 15093.0], [53.8, 15093.0], [53.9, 15093.0], [54.0, 15109.0], [54.1, 15109.0], [54.2, 15109.0], [54.3, 15109.0], [54.4, 15109.0], [54.5, 15109.0], [54.6, 15109.0], [54.7, 15109.0], [54.8, 15109.0], [54.9, 15109.0], [55.0, 15109.0], [55.1, 15109.0], [55.2, 15109.0], [55.3, 15109.0], [55.4, 15109.0], [55.5, 15109.0], [55.6, 15109.0], [55.7, 15109.0], [55.8, 15109.0], [55.9, 15109.0], [56.0, 15111.0], [56.1, 15111.0], [56.2, 15111.0], [56.3, 15111.0], [56.4, 15111.0], [56.5, 15111.0], [56.6, 15111.0], [56.7, 15111.0], [56.8, 15111.0], [56.9, 15111.0], [57.0, 15111.0], [57.1, 15111.0], [57.2, 15111.0], [57.3, 15111.0], [57.4, 15111.0], [57.5, 15111.0], [57.6, 15111.0], [57.7, 15111.0], [57.8, 15111.0], [57.9, 15111.0], [58.0, 15179.0], [58.1, 15179.0], [58.2, 15179.0], [58.3, 15179.0], [58.4, 15179.0], [58.5, 15179.0], [58.6, 15179.0], [58.7, 15179.0], [58.8, 15179.0], [58.9, 15179.0], [59.0, 15179.0], [59.1, 15179.0], [59.2, 15179.0], [59.3, 15179.0], [59.4, 15179.0], [59.5, 15179.0], [59.6, 15179.0], [59.7, 15179.0], [59.8, 15179.0], [59.9, 15179.0], [60.0, 15195.0], [60.1, 15195.0], [60.2, 15195.0], [60.3, 15195.0], [60.4, 15195.0], [60.5, 15195.0], [60.6, 15195.0], [60.7, 15195.0], [60.8, 15195.0], [60.9, 15195.0], [61.0, 15195.0], [61.1, 15195.0], [61.2, 15195.0], [61.3, 15195.0], [61.4, 15195.0], [61.5, 15195.0], [61.6, 15195.0], [61.7, 15195.0], [61.8, 15195.0], [61.9, 15195.0], [62.0, 15207.0], [62.1, 15207.0], [62.2, 15207.0], [62.3, 15207.0], [62.4, 15207.0], [62.5, 15207.0], [62.6, 15207.0], [62.7, 15207.0], [62.8, 15207.0], [62.9, 15207.0], [63.0, 15207.0], [63.1, 15207.0], [63.2, 15207.0], [63.3, 15207.0], [63.4, 15207.0], [63.5, 15207.0], [63.6, 15207.0], [63.7, 15207.0], [63.8, 15207.0], [63.9, 15207.0], [64.0, 15216.0], [64.1, 15216.0], [64.2, 15216.0], [64.3, 15216.0], [64.4, 15216.0], [64.5, 15216.0], [64.6, 15216.0], [64.7, 15216.0], [64.8, 15216.0], [64.9, 15216.0], [65.0, 15216.0], [65.1, 15216.0], [65.2, 15216.0], [65.3, 15216.0], [65.4, 15216.0], [65.5, 15216.0], [65.6, 15216.0], [65.7, 15216.0], [65.8, 15216.0], [65.9, 15216.0], [66.0, 15231.0], [66.1, 15231.0], [66.2, 15231.0], [66.3, 15231.0], [66.4, 15231.0], [66.5, 15231.0], [66.6, 15231.0], [66.7, 15231.0], [66.8, 15231.0], [66.9, 15231.0], [67.0, 15231.0], [67.1, 15231.0], [67.2, 15231.0], [67.3, 15231.0], [67.4, 15231.0], [67.5, 15231.0], [67.6, 15231.0], [67.7, 15231.0], [67.8, 15231.0], [67.9, 15231.0], [68.0, 15446.0], [68.1, 15446.0], [68.2, 15446.0], [68.3, 15446.0], [68.4, 15446.0], [68.5, 15446.0], [68.6, 15446.0], [68.7, 15446.0], [68.8, 15446.0], [68.9, 15446.0], [69.0, 15446.0], [69.1, 15446.0], [69.2, 15446.0], [69.3, 15446.0], [69.4, 15446.0], [69.5, 15446.0], [69.6, 15446.0], [69.7, 15446.0], [69.8, 15446.0], [69.9, 15446.0], [70.0, 15526.0], [70.1, 15526.0], [70.2, 15526.0], [70.3, 15526.0], [70.4, 15526.0], [70.5, 15526.0], [70.6, 15526.0], [70.7, 15526.0], [70.8, 15526.0], [70.9, 15526.0], [71.0, 15526.0], [71.1, 15526.0], [71.2, 15526.0], [71.3, 15526.0], [71.4, 15526.0], [71.5, 15526.0], [71.6, 15526.0], [71.7, 15526.0], [71.8, 15526.0], [71.9, 15526.0], [72.0, 15540.0], [72.1, 15540.0], [72.2, 15540.0], [72.3, 15540.0], [72.4, 15540.0], [72.5, 15540.0], [72.6, 15540.0], [72.7, 15540.0], [72.8, 15540.0], [72.9, 15540.0], [73.0, 15540.0], [73.1, 15540.0], [73.2, 15540.0], [73.3, 15540.0], [73.4, 15540.0], [73.5, 15540.0], [73.6, 15540.0], [73.7, 15540.0], [73.8, 15540.0], [73.9, 15540.0], [74.0, 15566.0], [74.1, 15566.0], [74.2, 15566.0], [74.3, 15566.0], [74.4, 15566.0], [74.5, 15566.0], [74.6, 15566.0], [74.7, 15566.0], [74.8, 15566.0], [74.9, 15566.0], [75.0, 15566.0], [75.1, 15566.0], [75.2, 15566.0], [75.3, 15566.0], [75.4, 15566.0], [75.5, 15566.0], [75.6, 15566.0], [75.7, 15566.0], [75.8, 15566.0], [75.9, 15566.0], [76.0, 15583.0], [76.1, 15583.0], [76.2, 15583.0], [76.3, 15583.0], [76.4, 15583.0], [76.5, 15583.0], [76.6, 15583.0], [76.7, 15583.0], [76.8, 15583.0], [76.9, 15583.0], [77.0, 15583.0], [77.1, 15583.0], [77.2, 15583.0], [77.3, 15583.0], [77.4, 15583.0], [77.5, 15583.0], [77.6, 15583.0], [77.7, 15583.0], [77.8, 15583.0], [77.9, 15583.0], [78.0, 15793.0], [78.1, 15793.0], [78.2, 15793.0], [78.3, 15793.0], [78.4, 15793.0], [78.5, 15793.0], [78.6, 15793.0], [78.7, 15793.0], [78.8, 15793.0], [78.9, 15793.0], [79.0, 15793.0], [79.1, 15793.0], [79.2, 15793.0], [79.3, 15793.0], [79.4, 15793.0], [79.5, 15793.0], [79.6, 15793.0], [79.7, 15793.0], [79.8, 15793.0], [79.9, 15793.0], [80.0, 15817.0], [80.1, 15817.0], [80.2, 15817.0], [80.3, 15817.0], [80.4, 15817.0], [80.5, 15817.0], [80.6, 15817.0], [80.7, 15817.0], [80.8, 15817.0], [80.9, 15817.0], [81.0, 15817.0], [81.1, 15817.0], [81.2, 15817.0], [81.3, 15817.0], [81.4, 15817.0], [81.5, 15817.0], [81.6, 15817.0], [81.7, 15817.0], [81.8, 15817.0], [81.9, 15817.0], [82.0, 15852.0], [82.1, 15852.0], [82.2, 15852.0], [82.3, 15852.0], [82.4, 15852.0], [82.5, 15852.0], [82.6, 15852.0], [82.7, 15852.0], [82.8, 15852.0], [82.9, 15852.0], [83.0, 15852.0], [83.1, 15852.0], [83.2, 15852.0], [83.3, 15852.0], [83.4, 15852.0], [83.5, 15852.0], [83.6, 15852.0], [83.7, 15852.0], [83.8, 15852.0], [83.9, 15852.0], [84.0, 15896.0], [84.1, 15896.0], [84.2, 15896.0], [84.3, 15896.0], [84.4, 15896.0], [84.5, 15896.0], [84.6, 15896.0], [84.7, 15896.0], [84.8, 15896.0], [84.9, 15896.0], [85.0, 15896.0], [85.1, 15896.0], [85.2, 15896.0], [85.3, 15896.0], [85.4, 15896.0], [85.5, 15896.0], [85.6, 15896.0], [85.7, 15896.0], [85.8, 15896.0], [85.9, 15896.0], [86.0, 15937.0], [86.1, 15937.0], [86.2, 15937.0], [86.3, 15937.0], [86.4, 15937.0], [86.5, 15937.0], [86.6, 15937.0], [86.7, 15937.0], [86.8, 15937.0], [86.9, 15937.0], [87.0, 15937.0], [87.1, 15937.0], [87.2, 15937.0], [87.3, 15937.0], [87.4, 15937.0], [87.5, 15937.0], [87.6, 15937.0], [87.7, 15937.0], [87.8, 15937.0], [87.9, 15937.0], [88.0, 15960.0], [88.1, 15960.0], [88.2, 15960.0], [88.3, 15960.0], [88.4, 15960.0], [88.5, 15960.0], [88.6, 15960.0], [88.7, 15960.0], [88.8, 15960.0], [88.9, 15960.0], [89.0, 15960.0], [89.1, 15960.0], [89.2, 15960.0], [89.3, 15960.0], [89.4, 15960.0], [89.5, 15960.0], [89.6, 15960.0], [89.7, 15960.0], [89.8, 15960.0], [89.9, 15960.0], [90.0, 16078.0], [90.1, 16078.0], [90.2, 16078.0], [90.3, 16078.0], [90.4, 16078.0], [90.5, 16078.0], [90.6, 16078.0], [90.7, 16078.0], [90.8, 16078.0], [90.9, 16078.0], [91.0, 16078.0], [91.1, 16078.0], [91.2, 16078.0], [91.3, 16078.0], [91.4, 16078.0], [91.5, 16078.0], [91.6, 16078.0], [91.7, 16078.0], [91.8, 16078.0], [91.9, 16078.0], [92.0, 16243.0], [92.1, 16243.0], [92.2, 16243.0], [92.3, 16243.0], [92.4, 16243.0], [92.5, 16243.0], [92.6, 16243.0], [92.7, 16243.0], [92.8, 16243.0], [92.9, 16243.0], [93.0, 16243.0], [93.1, 16243.0], [93.2, 16243.0], [93.3, 16243.0], [93.4, 16243.0], [93.5, 16243.0], [93.6, 16243.0], [93.7, 16243.0], [93.8, 16243.0], [93.9, 16243.0], [94.0, 16265.0], [94.1, 16265.0], [94.2, 16265.0], [94.3, 16265.0], [94.4, 16265.0], [94.5, 16265.0], [94.6, 16265.0], [94.7, 16265.0], [94.8, 16265.0], [94.9, 16265.0], [95.0, 16265.0], [95.1, 16265.0], [95.2, 16265.0], [95.3, 16265.0], [95.4, 16265.0], [95.5, 16265.0], [95.6, 16265.0], [95.7, 16265.0], [95.8, 16265.0], [95.9, 16265.0], [96.0, 16376.0], [96.1, 16376.0], [96.2, 16376.0], [96.3, 16376.0], [96.4, 16376.0], [96.5, 16376.0], [96.6, 16376.0], [96.7, 16376.0], [96.8, 16376.0], [96.9, 16376.0], [97.0, 16376.0], [97.1, 16376.0], [97.2, 16376.0], [97.3, 16376.0], [97.4, 16376.0], [97.5, 16376.0], [97.6, 16376.0], [97.7, 16376.0], [97.8, 16376.0], [97.9, 16376.0], [98.0, 16549.0], [98.1, 16549.0], [98.2, 16549.0], [98.3, 16549.0], [98.4, 16549.0], [98.5, 16549.0], [98.6, 16549.0], [98.7, 16549.0], [98.8, 16549.0], [98.9, 16549.0], [99.0, 16549.0], [99.1, 16549.0], [99.2, 16549.0], [99.3, 16549.0], [99.4, 16549.0], [99.5, 16549.0], [99.6, 16549.0], [99.7, 16549.0], [99.8, 16549.0], [99.9, 16549.0]], "isOverall": false, "label": "MUTEX_VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 14100.0, "maxY": 6.0, "series": [{"data": [[14100.0, 4.0], [14300.0, 4.0], [14200.0, 3.0], [14800.0, 3.0], [14500.0, 1.0], [14700.0, 5.0], [14400.0, 1.0], [15100.0, 4.0], [15000.0, 6.0], [15200.0, 3.0], [15500.0, 4.0], [15700.0, 1.0], [15800.0, 3.0], [15400.0, 1.0], [16000.0, 1.0], [15900.0, 2.0], [16200.0, 2.0], [16300.0, 1.0], [16500.0, 1.0]], "isOverall": false, "label": "MUTEX_VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.78166346E12, "maxY": 5.0, "series": [{"data": [[1.78166364E12, 2.5], [1.78166346E12, 5.0], [1.78166358E12, 5.0], [1.78166352E12, 5.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78166364E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 15000.173913043482, "minX": 1.0, "maxY": 16549.0, "series": [{"data": [[4.0, 16265.0], [2.0, 16549.0], [1.0, 15852.0], [5.0, 15000.173913043482], [3.0, 16376.0]], "isOverall": false, "label": "MUTEX_VIRTUAL_PLATFORM", "isController": false}, {"data": [[4.800000000000001, 15101.000000000002]], "isOverall": false, "label": "MUTEX_VIRTUAL_PLATFORM-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.78166346E12, "maxY": 4.9E-324, "series": [{"data": [[1.78166364E12, 0.0], [1.78166346E12, 0.0], [1.78166358E12, 0.0], [1.78166352E12, 0.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78166364E12, 0.0], [1.78166346E12, 0.0], [1.78166358E12, 0.0], [1.78166352E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78166364E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 14885.2, "minX": 1.78166346E12, "maxY": 16260.5, "series": [{"data": [[1.78166364E12, 16260.5], [1.78166346E12, 14885.2], [1.78166358E12, 15127.190476190477], [1.78166352E12, 14895.55]], "isOverall": false, "label": "MUTEX_VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78166364E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78166346E12, "maxY": 4.9E-324, "series": [{"data": [[1.78166364E12, 0.0], [1.78166346E12, 0.0], [1.78166358E12, 0.0], [1.78166352E12, 0.0]], "isOverall": false, "label": "MUTEX_VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78166364E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78166346E12, "maxY": 4.9E-324, "series": [{"data": [[1.78166364E12, 0.0], [1.78166346E12, 0.0], [1.78166358E12, 0.0], [1.78166352E12, 0.0]], "isOverall": false, "label": "MUTEX_VIRTUAL_PLATFORM", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78166364E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 14106.0, "minX": 1.78166346E12, "maxY": 16549.0, "series": [{"data": [[1.78166364E12, 16549.0], [1.78166346E12, 15526.0], [1.78166358E12, 15896.0], [1.78166352E12, 16243.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78166364E12, 15852.0], [1.78166346E12, 14122.0], [1.78166358E12, 14242.0], [1.78166352E12, 14106.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78166364E12, 16549.0], [1.78166346E12, 15526.0], [1.78166358E12, 15812.2], [1.78166352E12, 16066.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78166364E12, 16549.0], [1.78166346E12, 15526.0], [1.78166358E12, 15896.0], [1.78166352E12, 16243.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78166364E12, 16320.5], [1.78166346E12, 14838.0], [1.78166358E12, 15109.0], [1.78166352E12, 14678.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78166364E12, 16549.0], [1.78166346E12, 15526.0], [1.78166358E12, 15888.1], [1.78166352E12, 16234.75]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78166364E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 14796.0, "minX": 1.0, "maxY": 16080.5, "series": [{"data": [[1.0, 14796.0], [4.0, 15948.5], [2.0, 16080.5], [3.0, 14838.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.78166346E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.78166346E12, 0.16666666666666666], [1.78166358E12, 0.3333333333333333], [1.78166352E12, 0.3333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78166358E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.78166346E12, "maxY": 0.35, "series": [{"data": [[1.78166364E12, 0.06666666666666667], [1.78166346E12, 0.08333333333333333], [1.78166358E12, 0.35], [1.78166352E12, 0.3333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78166364E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.78166346E12, "maxY": 0.35, "series": [{"data": [[1.78166364E12, 0.06666666666666667], [1.78166346E12, 0.08333333333333333], [1.78166358E12, 0.35], [1.78166352E12, 0.3333333333333333]], "isOverall": false, "label": "MUTEX_VIRTUAL_PLATFORM-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78166364E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.78166346E12, "maxY": 0.35, "series": [{"data": [[1.78166364E12, 0.06666666666666667], [1.78166346E12, 0.08333333333333333], [1.78166358E12, 0.35], [1.78166352E12, 0.3333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78166364E12, "title": "Total Transactions Per Second"}},
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

