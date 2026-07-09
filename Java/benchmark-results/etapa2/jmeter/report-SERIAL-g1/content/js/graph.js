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
        data: {"result": {"minY": 9805.0, "minX": 0.0, "maxY": 16379.0, "series": [{"data": [[0.0, 9805.0], [0.1, 9805.0], [0.2, 9805.0], [0.3, 9805.0], [0.4, 9805.0], [0.5, 9805.0], [0.6, 9805.0], [0.7, 9805.0], [0.8, 9805.0], [0.9, 9805.0], [1.0, 9805.0], [1.1, 9805.0], [1.2, 9805.0], [1.3, 9805.0], [1.4, 9805.0], [1.5, 9805.0], [1.6, 9805.0], [1.7, 9805.0], [1.8, 9805.0], [1.9, 9805.0], [2.0, 9811.0], [2.1, 9811.0], [2.2, 9811.0], [2.3, 9811.0], [2.4, 9811.0], [2.5, 9811.0], [2.6, 9811.0], [2.7, 9811.0], [2.8, 9811.0], [2.9, 9811.0], [3.0, 9811.0], [3.1, 9811.0], [3.2, 9811.0], [3.3, 9811.0], [3.4, 9811.0], [3.5, 9811.0], [3.6, 9811.0], [3.7, 9811.0], [3.8, 9811.0], [3.9, 9811.0], [4.0, 9826.0], [4.1, 9826.0], [4.2, 9826.0], [4.3, 9826.0], [4.4, 9826.0], [4.5, 9826.0], [4.6, 9826.0], [4.7, 9826.0], [4.8, 9826.0], [4.9, 9826.0], [5.0, 9826.0], [5.1, 9826.0], [5.2, 9826.0], [5.3, 9826.0], [5.4, 9826.0], [5.5, 9826.0], [5.6, 9826.0], [5.7, 9826.0], [5.8, 9826.0], [5.9, 9826.0], [6.0, 9828.0], [6.1, 9828.0], [6.2, 9828.0], [6.3, 9828.0], [6.4, 9828.0], [6.5, 9828.0], [6.6, 9828.0], [6.7, 9828.0], [6.8, 9828.0], [6.9, 9828.0], [7.0, 9828.0], [7.1, 9828.0], [7.2, 9828.0], [7.3, 9828.0], [7.4, 9828.0], [7.5, 9828.0], [7.6, 9828.0], [7.7, 9828.0], [7.8, 9828.0], [7.9, 9828.0], [8.0, 9872.0], [8.1, 9872.0], [8.2, 9872.0], [8.3, 9872.0], [8.4, 9872.0], [8.5, 9872.0], [8.6, 9872.0], [8.7, 9872.0], [8.8, 9872.0], [8.9, 9872.0], [9.0, 9872.0], [9.1, 9872.0], [9.2, 9872.0], [9.3, 9872.0], [9.4, 9872.0], [9.5, 9872.0], [9.6, 9872.0], [9.7, 9872.0], [9.8, 9872.0], [9.9, 9872.0], [10.0, 9873.0], [10.1, 9873.0], [10.2, 9873.0], [10.3, 9873.0], [10.4, 9873.0], [10.5, 9873.0], [10.6, 9873.0], [10.7, 9873.0], [10.8, 9873.0], [10.9, 9873.0], [11.0, 9873.0], [11.1, 9873.0], [11.2, 9873.0], [11.3, 9873.0], [11.4, 9873.0], [11.5, 9873.0], [11.6, 9873.0], [11.7, 9873.0], [11.8, 9873.0], [11.9, 9873.0], [12.0, 9875.0], [12.1, 9875.0], [12.2, 9875.0], [12.3, 9875.0], [12.4, 9875.0], [12.5, 9875.0], [12.6, 9875.0], [12.7, 9875.0], [12.8, 9875.0], [12.9, 9875.0], [13.0, 9875.0], [13.1, 9875.0], [13.2, 9875.0], [13.3, 9875.0], [13.4, 9875.0], [13.5, 9875.0], [13.6, 9875.0], [13.7, 9875.0], [13.8, 9875.0], [13.9, 9875.0], [14.0, 9878.0], [14.1, 9878.0], [14.2, 9878.0], [14.3, 9878.0], [14.4, 9878.0], [14.5, 9878.0], [14.6, 9878.0], [14.7, 9878.0], [14.8, 9878.0], [14.9, 9878.0], [15.0, 9878.0], [15.1, 9878.0], [15.2, 9878.0], [15.3, 9878.0], [15.4, 9878.0], [15.5, 9878.0], [15.6, 9878.0], [15.7, 9878.0], [15.8, 9878.0], [15.9, 9878.0], [16.0, 9890.0], [16.1, 9890.0], [16.2, 9890.0], [16.3, 9890.0], [16.4, 9890.0], [16.5, 9890.0], [16.6, 9890.0], [16.7, 9890.0], [16.8, 9890.0], [16.9, 9890.0], [17.0, 9890.0], [17.1, 9890.0], [17.2, 9890.0], [17.3, 9890.0], [17.4, 9890.0], [17.5, 9890.0], [17.6, 9890.0], [17.7, 9890.0], [17.8, 9890.0], [17.9, 9890.0], [18.0, 9904.0], [18.1, 9904.0], [18.2, 9904.0], [18.3, 9904.0], [18.4, 9904.0], [18.5, 9904.0], [18.6, 9904.0], [18.7, 9904.0], [18.8, 9904.0], [18.9, 9904.0], [19.0, 9904.0], [19.1, 9904.0], [19.2, 9904.0], [19.3, 9904.0], [19.4, 9904.0], [19.5, 9904.0], [19.6, 9904.0], [19.7, 9904.0], [19.8, 9904.0], [19.9, 9904.0], [20.0, 9905.0], [20.1, 9905.0], [20.2, 9905.0], [20.3, 9905.0], [20.4, 9905.0], [20.5, 9905.0], [20.6, 9905.0], [20.7, 9905.0], [20.8, 9905.0], [20.9, 9905.0], [21.0, 9905.0], [21.1, 9905.0], [21.2, 9905.0], [21.3, 9905.0], [21.4, 9905.0], [21.5, 9905.0], [21.6, 9905.0], [21.7, 9905.0], [21.8, 9905.0], [21.9, 9905.0], [22.0, 9911.0], [22.1, 9911.0], [22.2, 9911.0], [22.3, 9911.0], [22.4, 9911.0], [22.5, 9911.0], [22.6, 9911.0], [22.7, 9911.0], [22.8, 9911.0], [22.9, 9911.0], [23.0, 9911.0], [23.1, 9911.0], [23.2, 9911.0], [23.3, 9911.0], [23.4, 9911.0], [23.5, 9911.0], [23.6, 9911.0], [23.7, 9911.0], [23.8, 9911.0], [23.9, 9911.0], [24.0, 9930.0], [24.1, 9930.0], [24.2, 9930.0], [24.3, 9930.0], [24.4, 9930.0], [24.5, 9930.0], [24.6, 9930.0], [24.7, 9930.0], [24.8, 9930.0], [24.9, 9930.0], [25.0, 9930.0], [25.1, 9930.0], [25.2, 9930.0], [25.3, 9930.0], [25.4, 9930.0], [25.5, 9930.0], [25.6, 9930.0], [25.7, 9930.0], [25.8, 9930.0], [25.9, 9930.0], [26.0, 9952.0], [26.1, 9952.0], [26.2, 9952.0], [26.3, 9952.0], [26.4, 9952.0], [26.5, 9952.0], [26.6, 9952.0], [26.7, 9952.0], [26.8, 9952.0], [26.9, 9952.0], [27.0, 9952.0], [27.1, 9952.0], [27.2, 9952.0], [27.3, 9952.0], [27.4, 9952.0], [27.5, 9952.0], [27.6, 9952.0], [27.7, 9952.0], [27.8, 9952.0], [27.9, 9952.0], [28.0, 9959.0], [28.1, 9959.0], [28.2, 9959.0], [28.3, 9959.0], [28.4, 9959.0], [28.5, 9959.0], [28.6, 9959.0], [28.7, 9959.0], [28.8, 9959.0], [28.9, 9959.0], [29.0, 9959.0], [29.1, 9959.0], [29.2, 9959.0], [29.3, 9959.0], [29.4, 9959.0], [29.5, 9959.0], [29.6, 9959.0], [29.7, 9959.0], [29.8, 9959.0], [29.9, 9959.0], [30.0, 9968.0], [30.1, 9968.0], [30.2, 9968.0], [30.3, 9968.0], [30.4, 9968.0], [30.5, 9968.0], [30.6, 9968.0], [30.7, 9968.0], [30.8, 9968.0], [30.9, 9968.0], [31.0, 9968.0], [31.1, 9968.0], [31.2, 9968.0], [31.3, 9968.0], [31.4, 9968.0], [31.5, 9968.0], [31.6, 9968.0], [31.7, 9968.0], [31.8, 9968.0], [31.9, 9968.0], [32.0, 9983.0], [32.1, 9983.0], [32.2, 9983.0], [32.3, 9983.0], [32.4, 9983.0], [32.5, 9983.0], [32.6, 9983.0], [32.7, 9983.0], [32.8, 9983.0], [32.9, 9983.0], [33.0, 9983.0], [33.1, 9983.0], [33.2, 9983.0], [33.3, 9983.0], [33.4, 9983.0], [33.5, 9983.0], [33.6, 9983.0], [33.7, 9983.0], [33.8, 9983.0], [33.9, 9983.0], [34.0, 10011.0], [34.1, 10011.0], [34.2, 10011.0], [34.3, 10011.0], [34.4, 10011.0], [34.5, 10011.0], [34.6, 10011.0], [34.7, 10011.0], [34.8, 10011.0], [34.9, 10011.0], [35.0, 10011.0], [35.1, 10011.0], [35.2, 10011.0], [35.3, 10011.0], [35.4, 10011.0], [35.5, 10011.0], [35.6, 10011.0], [35.7, 10011.0], [35.8, 10011.0], [35.9, 10011.0], [36.0, 10019.0], [36.1, 10019.0], [36.2, 10019.0], [36.3, 10019.0], [36.4, 10019.0], [36.5, 10019.0], [36.6, 10019.0], [36.7, 10019.0], [36.8, 10019.0], [36.9, 10019.0], [37.0, 10019.0], [37.1, 10019.0], [37.2, 10019.0], [37.3, 10019.0], [37.4, 10019.0], [37.5, 10019.0], [37.6, 10019.0], [37.7, 10019.0], [37.8, 10019.0], [37.9, 10019.0], [38.0, 10019.0], [38.1, 10019.0], [38.2, 10019.0], [38.3, 10019.0], [38.4, 10019.0], [38.5, 10019.0], [38.6, 10019.0], [38.7, 10019.0], [38.8, 10019.0], [38.9, 10019.0], [39.0, 10019.0], [39.1, 10019.0], [39.2, 10019.0], [39.3, 10019.0], [39.4, 10019.0], [39.5, 10019.0], [39.6, 10019.0], [39.7, 10019.0], [39.8, 10019.0], [39.9, 10019.0], [40.0, 10028.0], [40.1, 10028.0], [40.2, 10028.0], [40.3, 10028.0], [40.4, 10028.0], [40.5, 10028.0], [40.6, 10028.0], [40.7, 10028.0], [40.8, 10028.0], [40.9, 10028.0], [41.0, 10028.0], [41.1, 10028.0], [41.2, 10028.0], [41.3, 10028.0], [41.4, 10028.0], [41.5, 10028.0], [41.6, 10028.0], [41.7, 10028.0], [41.8, 10028.0], [41.9, 10028.0], [42.0, 10053.0], [42.1, 10053.0], [42.2, 10053.0], [42.3, 10053.0], [42.4, 10053.0], [42.5, 10053.0], [42.6, 10053.0], [42.7, 10053.0], [42.8, 10053.0], [42.9, 10053.0], [43.0, 10053.0], [43.1, 10053.0], [43.2, 10053.0], [43.3, 10053.0], [43.4, 10053.0], [43.5, 10053.0], [43.6, 10053.0], [43.7, 10053.0], [43.8, 10053.0], [43.9, 10053.0], [44.0, 10072.0], [44.1, 10072.0], [44.2, 10072.0], [44.3, 10072.0], [44.4, 10072.0], [44.5, 10072.0], [44.6, 10072.0], [44.7, 10072.0], [44.8, 10072.0], [44.9, 10072.0], [45.0, 10072.0], [45.1, 10072.0], [45.2, 10072.0], [45.3, 10072.0], [45.4, 10072.0], [45.5, 10072.0], [45.6, 10072.0], [45.7, 10072.0], [45.8, 10072.0], [45.9, 10072.0], [46.0, 10103.0], [46.1, 10103.0], [46.2, 10103.0], [46.3, 10103.0], [46.4, 10103.0], [46.5, 10103.0], [46.6, 10103.0], [46.7, 10103.0], [46.8, 10103.0], [46.9, 10103.0], [47.0, 10103.0], [47.1, 10103.0], [47.2, 10103.0], [47.3, 10103.0], [47.4, 10103.0], [47.5, 10103.0], [47.6, 10103.0], [47.7, 10103.0], [47.8, 10103.0], [47.9, 10103.0], [48.0, 10108.0], [48.1, 10108.0], [48.2, 10108.0], [48.3, 10108.0], [48.4, 10108.0], [48.5, 10108.0], [48.6, 10108.0], [48.7, 10108.0], [48.8, 10108.0], [48.9, 10108.0], [49.0, 10108.0], [49.1, 10108.0], [49.2, 10108.0], [49.3, 10108.0], [49.4, 10108.0], [49.5, 10108.0], [49.6, 10108.0], [49.7, 10108.0], [49.8, 10108.0], [49.9, 10108.0], [50.0, 11540.0], [50.1, 11540.0], [50.2, 11540.0], [50.3, 11540.0], [50.4, 11540.0], [50.5, 11540.0], [50.6, 11540.0], [50.7, 11540.0], [50.8, 11540.0], [50.9, 11540.0], [51.0, 11540.0], [51.1, 11540.0], [51.2, 11540.0], [51.3, 11540.0], [51.4, 11540.0], [51.5, 11540.0], [51.6, 11540.0], [51.7, 11540.0], [51.8, 11540.0], [51.9, 11540.0], [52.0, 11631.0], [52.1, 11631.0], [52.2, 11631.0], [52.3, 11631.0], [52.4, 11631.0], [52.5, 11631.0], [52.6, 11631.0], [52.7, 11631.0], [52.8, 11631.0], [52.9, 11631.0], [53.0, 11631.0], [53.1, 11631.0], [53.2, 11631.0], [53.3, 11631.0], [53.4, 11631.0], [53.5, 11631.0], [53.6, 11631.0], [53.7, 11631.0], [53.8, 11631.0], [53.9, 11631.0], [54.0, 11662.0], [54.1, 11662.0], [54.2, 11662.0], [54.3, 11662.0], [54.4, 11662.0], [54.5, 11662.0], [54.6, 11662.0], [54.7, 11662.0], [54.8, 11662.0], [54.9, 11662.0], [55.0, 11662.0], [55.1, 11662.0], [55.2, 11662.0], [55.3, 11662.0], [55.4, 11662.0], [55.5, 11662.0], [55.6, 11662.0], [55.7, 11662.0], [55.8, 11662.0], [55.9, 11662.0], [56.0, 11717.0], [56.1, 11717.0], [56.2, 11717.0], [56.3, 11717.0], [56.4, 11717.0], [56.5, 11717.0], [56.6, 11717.0], [56.7, 11717.0], [56.8, 11717.0], [56.9, 11717.0], [57.0, 11717.0], [57.1, 11717.0], [57.2, 11717.0], [57.3, 11717.0], [57.4, 11717.0], [57.5, 11717.0], [57.6, 11717.0], [57.7, 11717.0], [57.8, 11717.0], [57.9, 11717.0], [58.0, 11745.0], [58.1, 11745.0], [58.2, 11745.0], [58.3, 11745.0], [58.4, 11745.0], [58.5, 11745.0], [58.6, 11745.0], [58.7, 11745.0], [58.8, 11745.0], [58.9, 11745.0], [59.0, 11745.0], [59.1, 11745.0], [59.2, 11745.0], [59.3, 11745.0], [59.4, 11745.0], [59.5, 11745.0], [59.6, 11745.0], [59.7, 11745.0], [59.8, 11745.0], [59.9, 11745.0], [60.0, 12371.0], [60.1, 12371.0], [60.2, 12371.0], [60.3, 12371.0], [60.4, 12371.0], [60.5, 12371.0], [60.6, 12371.0], [60.7, 12371.0], [60.8, 12371.0], [60.9, 12371.0], [61.0, 12371.0], [61.1, 12371.0], [61.2, 12371.0], [61.3, 12371.0], [61.4, 12371.0], [61.5, 12371.0], [61.6, 12371.0], [61.7, 12371.0], [61.8, 12371.0], [61.9, 12371.0], [62.0, 12437.0], [62.1, 12437.0], [62.2, 12437.0], [62.3, 12437.0], [62.4, 12437.0], [62.5, 12437.0], [62.6, 12437.0], [62.7, 12437.0], [62.8, 12437.0], [62.9, 12437.0], [63.0, 12437.0], [63.1, 12437.0], [63.2, 12437.0], [63.3, 12437.0], [63.4, 12437.0], [63.5, 12437.0], [63.6, 12437.0], [63.7, 12437.0], [63.8, 12437.0], [63.9, 12437.0], [64.0, 12476.0], [64.1, 12476.0], [64.2, 12476.0], [64.3, 12476.0], [64.4, 12476.0], [64.5, 12476.0], [64.6, 12476.0], [64.7, 12476.0], [64.8, 12476.0], [64.9, 12476.0], [65.0, 12476.0], [65.1, 12476.0], [65.2, 12476.0], [65.3, 12476.0], [65.4, 12476.0], [65.5, 12476.0], [65.6, 12476.0], [65.7, 12476.0], [65.8, 12476.0], [65.9, 12476.0], [66.0, 12481.0], [66.1, 12481.0], [66.2, 12481.0], [66.3, 12481.0], [66.4, 12481.0], [66.5, 12481.0], [66.6, 12481.0], [66.7, 12481.0], [66.8, 12481.0], [66.9, 12481.0], [67.0, 12481.0], [67.1, 12481.0], [67.2, 12481.0], [67.3, 12481.0], [67.4, 12481.0], [67.5, 12481.0], [67.6, 12481.0], [67.7, 12481.0], [67.8, 12481.0], [67.9, 12481.0], [68.0, 12510.0], [68.1, 12510.0], [68.2, 12510.0], [68.3, 12510.0], [68.4, 12510.0], [68.5, 12510.0], [68.6, 12510.0], [68.7, 12510.0], [68.8, 12510.0], [68.9, 12510.0], [69.0, 12510.0], [69.1, 12510.0], [69.2, 12510.0], [69.3, 12510.0], [69.4, 12510.0], [69.5, 12510.0], [69.6, 12510.0], [69.7, 12510.0], [69.8, 12510.0], [69.9, 12510.0], [70.0, 12515.0], [70.1, 12515.0], [70.2, 12515.0], [70.3, 12515.0], [70.4, 12515.0], [70.5, 12515.0], [70.6, 12515.0], [70.7, 12515.0], [70.8, 12515.0], [70.9, 12515.0], [71.0, 12515.0], [71.1, 12515.0], [71.2, 12515.0], [71.3, 12515.0], [71.4, 12515.0], [71.5, 12515.0], [71.6, 12515.0], [71.7, 12515.0], [71.8, 12515.0], [71.9, 12515.0], [72.0, 12548.0], [72.1, 12548.0], [72.2, 12548.0], [72.3, 12548.0], [72.4, 12548.0], [72.5, 12548.0], [72.6, 12548.0], [72.7, 12548.0], [72.8, 12548.0], [72.9, 12548.0], [73.0, 12548.0], [73.1, 12548.0], [73.2, 12548.0], [73.3, 12548.0], [73.4, 12548.0], [73.5, 12548.0], [73.6, 12548.0], [73.7, 12548.0], [73.8, 12548.0], [73.9, 12548.0], [74.0, 12601.0], [74.1, 12601.0], [74.2, 12601.0], [74.3, 12601.0], [74.4, 12601.0], [74.5, 12601.0], [74.6, 12601.0], [74.7, 12601.0], [74.8, 12601.0], [74.9, 12601.0], [75.0, 12601.0], [75.1, 12601.0], [75.2, 12601.0], [75.3, 12601.0], [75.4, 12601.0], [75.5, 12601.0], [75.6, 12601.0], [75.7, 12601.0], [75.8, 12601.0], [75.9, 12601.0], [76.0, 12666.0], [76.1, 12666.0], [76.2, 12666.0], [76.3, 12666.0], [76.4, 12666.0], [76.5, 12666.0], [76.6, 12666.0], [76.7, 12666.0], [76.8, 12666.0], [76.9, 12666.0], [77.0, 12666.0], [77.1, 12666.0], [77.2, 12666.0], [77.3, 12666.0], [77.4, 12666.0], [77.5, 12666.0], [77.6, 12666.0], [77.7, 12666.0], [77.8, 12666.0], [77.9, 12666.0], [78.0, 12731.0], [78.1, 12731.0], [78.2, 12731.0], [78.3, 12731.0], [78.4, 12731.0], [78.5, 12731.0], [78.6, 12731.0], [78.7, 12731.0], [78.8, 12731.0], [78.9, 12731.0], [79.0, 12731.0], [79.1, 12731.0], [79.2, 12731.0], [79.3, 12731.0], [79.4, 12731.0], [79.5, 12731.0], [79.6, 12731.0], [79.7, 12731.0], [79.8, 12731.0], [79.9, 12731.0], [80.0, 12859.0], [80.1, 12859.0], [80.2, 12859.0], [80.3, 12859.0], [80.4, 12859.0], [80.5, 12859.0], [80.6, 12859.0], [80.7, 12859.0], [80.8, 12859.0], [80.9, 12859.0], [81.0, 12859.0], [81.1, 12859.0], [81.2, 12859.0], [81.3, 12859.0], [81.4, 12859.0], [81.5, 12859.0], [81.6, 12859.0], [81.7, 12859.0], [81.8, 12859.0], [81.9, 12859.0], [82.0, 12903.0], [82.1, 12903.0], [82.2, 12903.0], [82.3, 12903.0], [82.4, 12903.0], [82.5, 12903.0], [82.6, 12903.0], [82.7, 12903.0], [82.8, 12903.0], [82.9, 12903.0], [83.0, 12903.0], [83.1, 12903.0], [83.2, 12903.0], [83.3, 12903.0], [83.4, 12903.0], [83.5, 12903.0], [83.6, 12903.0], [83.7, 12903.0], [83.8, 12903.0], [83.9, 12903.0], [84.0, 12913.0], [84.1, 12913.0], [84.2, 12913.0], [84.3, 12913.0], [84.4, 12913.0], [84.5, 12913.0], [84.6, 12913.0], [84.7, 12913.0], [84.8, 12913.0], [84.9, 12913.0], [85.0, 12913.0], [85.1, 12913.0], [85.2, 12913.0], [85.3, 12913.0], [85.4, 12913.0], [85.5, 12913.0], [85.6, 12913.0], [85.7, 12913.0], [85.8, 12913.0], [85.9, 12913.0], [86.0, 12920.0], [86.1, 12920.0], [86.2, 12920.0], [86.3, 12920.0], [86.4, 12920.0], [86.5, 12920.0], [86.6, 12920.0], [86.7, 12920.0], [86.8, 12920.0], [86.9, 12920.0], [87.0, 12920.0], [87.1, 12920.0], [87.2, 12920.0], [87.3, 12920.0], [87.4, 12920.0], [87.5, 12920.0], [87.6, 12920.0], [87.7, 12920.0], [87.8, 12920.0], [87.9, 12920.0], [88.0, 12948.0], [88.1, 12948.0], [88.2, 12948.0], [88.3, 12948.0], [88.4, 12948.0], [88.5, 12948.0], [88.6, 12948.0], [88.7, 12948.0], [88.8, 12948.0], [88.9, 12948.0], [89.0, 12948.0], [89.1, 12948.0], [89.2, 12948.0], [89.3, 12948.0], [89.4, 12948.0], [89.5, 12948.0], [89.6, 12948.0], [89.7, 12948.0], [89.8, 12948.0], [89.9, 12948.0], [90.0, 16356.0], [90.1, 16356.0], [90.2, 16356.0], [90.3, 16356.0], [90.4, 16356.0], [90.5, 16356.0], [90.6, 16356.0], [90.7, 16356.0], [90.8, 16356.0], [90.9, 16356.0], [91.0, 16356.0], [91.1, 16356.0], [91.2, 16356.0], [91.3, 16356.0], [91.4, 16356.0], [91.5, 16356.0], [91.6, 16356.0], [91.7, 16356.0], [91.8, 16356.0], [91.9, 16356.0], [92.0, 16362.0], [92.1, 16362.0], [92.2, 16362.0], [92.3, 16362.0], [92.4, 16362.0], [92.5, 16362.0], [92.6, 16362.0], [92.7, 16362.0], [92.8, 16362.0], [92.9, 16362.0], [93.0, 16362.0], [93.1, 16362.0], [93.2, 16362.0], [93.3, 16362.0], [93.4, 16362.0], [93.5, 16362.0], [93.6, 16362.0], [93.7, 16362.0], [93.8, 16362.0], [93.9, 16362.0], [94.0, 16367.0], [94.1, 16367.0], [94.2, 16367.0], [94.3, 16367.0], [94.4, 16367.0], [94.5, 16367.0], [94.6, 16367.0], [94.7, 16367.0], [94.8, 16367.0], [94.9, 16367.0], [95.0, 16367.0], [95.1, 16367.0], [95.2, 16367.0], [95.3, 16367.0], [95.4, 16367.0], [95.5, 16367.0], [95.6, 16367.0], [95.7, 16367.0], [95.8, 16367.0], [95.9, 16367.0], [96.0, 16368.0], [96.1, 16368.0], [96.2, 16368.0], [96.3, 16368.0], [96.4, 16368.0], [96.5, 16368.0], [96.6, 16368.0], [96.7, 16368.0], [96.8, 16368.0], [96.9, 16368.0], [97.0, 16368.0], [97.1, 16368.0], [97.2, 16368.0], [97.3, 16368.0], [97.4, 16368.0], [97.5, 16368.0], [97.6, 16368.0], [97.7, 16368.0], [97.8, 16368.0], [97.9, 16368.0], [98.0, 16379.0], [98.1, 16379.0], [98.2, 16379.0], [98.3, 16379.0], [98.4, 16379.0], [98.5, 16379.0], [98.6, 16379.0], [98.7, 16379.0], [98.8, 16379.0], [98.9, 16379.0], [99.0, 16379.0], [99.1, 16379.0], [99.2, 16379.0], [99.3, 16379.0], [99.4, 16379.0], [99.5, 16379.0], [99.6, 16379.0], [99.7, 16379.0], [99.8, 16379.0], [99.9, 16379.0]], "isOverall": false, "label": "SERIAL", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 9800.0, "maxY": 9.0, "series": [{"data": [[9800.0, 9.0], [10000.0, 6.0], [9900.0, 8.0], [10100.0, 2.0], [11500.0, 1.0], [11700.0, 2.0], [11600.0, 2.0], [12300.0, 1.0], [12400.0, 3.0], [12500.0, 3.0], [12600.0, 2.0], [12700.0, 1.0], [12800.0, 1.0], [12900.0, 4.0], [16300.0, 5.0]], "isOverall": false, "label": "SERIAL", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.500000000000001, "minX": 1.78345818E12, "maxY": 5.0, "series": [{"data": [[1.78345818E12, 5.0], [1.7834583E12, 4.500000000000001], [1.78345824E12, 5.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7834583E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 9826.0, "minX": 1.0, "maxY": 11717.58695652174, "series": [{"data": [[4.0, 9826.0], [2.0, 9890.0], [1.0, 9905.0], [5.0, 11717.58695652174], [3.0, 9959.0]], "isOverall": false, "label": "SERIAL", "isController": false}, {"data": [[4.800000000000001, 11571.78]], "isOverall": false, "label": "SERIAL-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.78345818E12, "maxY": 4.9E-324, "series": [{"data": [[1.78345818E12, 0.0], [1.7834583E12, 0.0], [1.78345824E12, 0.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78345818E12, 0.0], [1.7834583E12, 0.0], [1.78345824E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7834583E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9945.35, "minX": 1.78345818E12, "maxY": 16366.4, "series": [{"data": [[1.78345818E12, 16366.4], [1.7834583E12, 9945.35], [1.78345824E12, 11914.000000000002]], "isOverall": false, "label": "SERIAL", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7834583E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78345818E12, "maxY": 4.9E-324, "series": [{"data": [[1.78345818E12, 0.0], [1.7834583E12, 0.0], [1.78345824E12, 0.0]], "isOverall": false, "label": "SERIAL", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7834583E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78345818E12, "maxY": 4.9E-324, "series": [{"data": [[1.78345818E12, 0.0], [1.7834583E12, 0.0], [1.78345824E12, 0.0]], "isOverall": false, "label": "SERIAL", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7834583E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9805.0, "minX": 1.78345818E12, "maxY": 16379.0, "series": [{"data": [[1.78345818E12, 16379.0], [1.7834583E12, 10108.0], [1.78345824E12, 12948.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78345818E12, 16356.0], [1.7834583E12, 9811.0], [1.78345824E12, 9805.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78345818E12, 16379.0], [1.7834583E12, 10099.9], [1.78345824E12, 12915.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78345818E12, 16379.0], [1.7834583E12, 10108.0], [1.78345824E12, 12948.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78345818E12, 16367.0], [1.7834583E12, 9920.5], [1.78345824E12, 12476.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78345818E12, 16379.0], [1.7834583E12, 10107.75], [1.78345824E12, 12939.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7834583E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9828.0, "minX": 1.0, "maxY": 11662.0, "series": [{"data": [[1.0, 9828.0], [4.0, 9897.5], [5.0, 11662.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.78345818E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.78345818E12, 0.16666666666666666], [1.7834583E12, 0.25], [1.78345824E12, 0.4166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7834583E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.78345818E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.78345818E12, 0.08333333333333333], [1.7834583E12, 0.3333333333333333], [1.78345824E12, 0.4166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7834583E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.78345818E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.78345818E12, 0.08333333333333333], [1.7834583E12, 0.3333333333333333], [1.78345824E12, 0.4166666666666667]], "isOverall": false, "label": "SERIAL-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7834583E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.78345818E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.78345818E12, 0.08333333333333333], [1.7834583E12, 0.3333333333333333], [1.78345824E12, 0.4166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7834583E12, "title": "Total Transactions Per Second"}},
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

