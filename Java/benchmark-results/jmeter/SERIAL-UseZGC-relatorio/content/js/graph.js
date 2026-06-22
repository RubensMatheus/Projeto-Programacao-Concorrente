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
        data: {"result": {"minY": 11903.0, "minX": 0.0, "maxY": 193026.0, "series": [{"data": [[0.0, 11903.0], [0.1, 11903.0], [0.2, 11903.0], [0.3, 11903.0], [0.4, 11903.0], [0.5, 11903.0], [0.6, 11903.0], [0.7, 11903.0], [0.8, 11903.0], [0.9, 11903.0], [1.0, 11903.0], [1.1, 11903.0], [1.2, 11903.0], [1.3, 11903.0], [1.4, 11903.0], [1.5, 11903.0], [1.6, 11903.0], [1.7, 11903.0], [1.8, 11903.0], [1.9, 11903.0], [2.0, 13875.0], [2.1, 13875.0], [2.2, 13875.0], [2.3, 13875.0], [2.4, 13875.0], [2.5, 13875.0], [2.6, 13875.0], [2.7, 13875.0], [2.8, 13875.0], [2.9, 13875.0], [3.0, 13875.0], [3.1, 13875.0], [3.2, 13875.0], [3.3, 13875.0], [3.4, 13875.0], [3.5, 13875.0], [3.6, 13875.0], [3.7, 13875.0], [3.8, 13875.0], [3.9, 13875.0], [4.0, 14358.0], [4.1, 14358.0], [4.2, 14358.0], [4.3, 14358.0], [4.4, 14358.0], [4.5, 14358.0], [4.6, 14358.0], [4.7, 14358.0], [4.8, 14358.0], [4.9, 14358.0], [5.0, 14358.0], [5.1, 14358.0], [5.2, 14358.0], [5.3, 14358.0], [5.4, 14358.0], [5.5, 14358.0], [5.6, 14358.0], [5.7, 14358.0], [5.8, 14358.0], [5.9, 14358.0], [6.0, 14713.0], [6.1, 14713.0], [6.2, 14713.0], [6.3, 14713.0], [6.4, 14713.0], [6.5, 14713.0], [6.6, 14713.0], [6.7, 14713.0], [6.8, 14713.0], [6.9, 14713.0], [7.0, 14713.0], [7.1, 14713.0], [7.2, 14713.0], [7.3, 14713.0], [7.4, 14713.0], [7.5, 14713.0], [7.6, 14713.0], [7.7, 14713.0], [7.8, 14713.0], [7.9, 14713.0], [8.0, 15149.0], [8.1, 15149.0], [8.2, 15149.0], [8.3, 15149.0], [8.4, 15149.0], [8.5, 15149.0], [8.6, 15149.0], [8.7, 15149.0], [8.8, 15149.0], [8.9, 15149.0], [9.0, 15149.0], [9.1, 15149.0], [9.2, 15149.0], [9.3, 15149.0], [9.4, 15149.0], [9.5, 15149.0], [9.6, 15149.0], [9.7, 15149.0], [9.8, 15149.0], [9.9, 15149.0], [10.0, 15684.0], [10.1, 15684.0], [10.2, 15684.0], [10.3, 15684.0], [10.4, 15684.0], [10.5, 15684.0], [10.6, 15684.0], [10.7, 15684.0], [10.8, 15684.0], [10.9, 15684.0], [11.0, 15684.0], [11.1, 15684.0], [11.2, 15684.0], [11.3, 15684.0], [11.4, 15684.0], [11.5, 15684.0], [11.6, 15684.0], [11.7, 15684.0], [11.8, 15684.0], [11.9, 15684.0], [12.0, 15834.0], [12.1, 15834.0], [12.2, 15834.0], [12.3, 15834.0], [12.4, 15834.0], [12.5, 15834.0], [12.6, 15834.0], [12.7, 15834.0], [12.8, 15834.0], [12.9, 15834.0], [13.0, 15834.0], [13.1, 15834.0], [13.2, 15834.0], [13.3, 15834.0], [13.4, 15834.0], [13.5, 15834.0], [13.6, 15834.0], [13.7, 15834.0], [13.8, 15834.0], [13.9, 15834.0], [14.0, 16304.0], [14.1, 16304.0], [14.2, 16304.0], [14.3, 16304.0], [14.4, 16304.0], [14.5, 16304.0], [14.6, 16304.0], [14.7, 16304.0], [14.8, 16304.0], [14.9, 16304.0], [15.0, 16304.0], [15.1, 16304.0], [15.2, 16304.0], [15.3, 16304.0], [15.4, 16304.0], [15.5, 16304.0], [15.6, 16304.0], [15.7, 16304.0], [15.8, 16304.0], [15.9, 16304.0], [16.0, 17025.0], [16.1, 17025.0], [16.2, 17025.0], [16.3, 17025.0], [16.4, 17025.0], [16.5, 17025.0], [16.6, 17025.0], [16.7, 17025.0], [16.8, 17025.0], [16.9, 17025.0], [17.0, 17025.0], [17.1, 17025.0], [17.2, 17025.0], [17.3, 17025.0], [17.4, 17025.0], [17.5, 17025.0], [17.6, 17025.0], [17.7, 17025.0], [17.8, 17025.0], [17.9, 17025.0], [18.0, 17114.0], [18.1, 17114.0], [18.2, 17114.0], [18.3, 17114.0], [18.4, 17114.0], [18.5, 17114.0], [18.6, 17114.0], [18.7, 17114.0], [18.8, 17114.0], [18.9, 17114.0], [19.0, 17114.0], [19.1, 17114.0], [19.2, 17114.0], [19.3, 17114.0], [19.4, 17114.0], [19.5, 17114.0], [19.6, 17114.0], [19.7, 17114.0], [19.8, 17114.0], [19.9, 17114.0], [20.0, 17569.0], [20.1, 17569.0], [20.2, 17569.0], [20.3, 17569.0], [20.4, 17569.0], [20.5, 17569.0], [20.6, 17569.0], [20.7, 17569.0], [20.8, 17569.0], [20.9, 17569.0], [21.0, 17569.0], [21.1, 17569.0], [21.2, 17569.0], [21.3, 17569.0], [21.4, 17569.0], [21.5, 17569.0], [21.6, 17569.0], [21.7, 17569.0], [21.8, 17569.0], [21.9, 17569.0], [22.0, 17688.0], [22.1, 17688.0], [22.2, 17688.0], [22.3, 17688.0], [22.4, 17688.0], [22.5, 17688.0], [22.6, 17688.0], [22.7, 17688.0], [22.8, 17688.0], [22.9, 17688.0], [23.0, 17688.0], [23.1, 17688.0], [23.2, 17688.0], [23.3, 17688.0], [23.4, 17688.0], [23.5, 17688.0], [23.6, 17688.0], [23.7, 17688.0], [23.8, 17688.0], [23.9, 17688.0], [24.0, 17721.0], [24.1, 17721.0], [24.2, 17721.0], [24.3, 17721.0], [24.4, 17721.0], [24.5, 17721.0], [24.6, 17721.0], [24.7, 17721.0], [24.8, 17721.0], [24.9, 17721.0], [25.0, 17721.0], [25.1, 17721.0], [25.2, 17721.0], [25.3, 17721.0], [25.4, 17721.0], [25.5, 17721.0], [25.6, 17721.0], [25.7, 17721.0], [25.8, 17721.0], [25.9, 17721.0], [26.0, 18348.0], [26.1, 18348.0], [26.2, 18348.0], [26.3, 18348.0], [26.4, 18348.0], [26.5, 18348.0], [26.6, 18348.0], [26.7, 18348.0], [26.8, 18348.0], [26.9, 18348.0], [27.0, 18348.0], [27.1, 18348.0], [27.2, 18348.0], [27.3, 18348.0], [27.4, 18348.0], [27.5, 18348.0], [27.6, 18348.0], [27.7, 18348.0], [27.8, 18348.0], [27.9, 18348.0], [28.0, 19375.0], [28.1, 19375.0], [28.2, 19375.0], [28.3, 19375.0], [28.4, 19375.0], [28.5, 19375.0], [28.6, 19375.0], [28.7, 19375.0], [28.8, 19375.0], [28.9, 19375.0], [29.0, 19375.0], [29.1, 19375.0], [29.2, 19375.0], [29.3, 19375.0], [29.4, 19375.0], [29.5, 19375.0], [29.6, 19375.0], [29.7, 19375.0], [29.8, 19375.0], [29.9, 19375.0], [30.0, 20830.0], [30.1, 20830.0], [30.2, 20830.0], [30.3, 20830.0], [30.4, 20830.0], [30.5, 20830.0], [30.6, 20830.0], [30.7, 20830.0], [30.8, 20830.0], [30.9, 20830.0], [31.0, 20830.0], [31.1, 20830.0], [31.2, 20830.0], [31.3, 20830.0], [31.4, 20830.0], [31.5, 20830.0], [31.6, 20830.0], [31.7, 20830.0], [31.8, 20830.0], [31.9, 20830.0], [32.0, 22243.0], [32.1, 22243.0], [32.2, 22243.0], [32.3, 22243.0], [32.4, 22243.0], [32.5, 22243.0], [32.6, 22243.0], [32.7, 22243.0], [32.8, 22243.0], [32.9, 22243.0], [33.0, 22243.0], [33.1, 22243.0], [33.2, 22243.0], [33.3, 22243.0], [33.4, 22243.0], [33.5, 22243.0], [33.6, 22243.0], [33.7, 22243.0], [33.8, 22243.0], [33.9, 22243.0], [34.0, 26745.0], [34.1, 26745.0], [34.2, 26745.0], [34.3, 26745.0], [34.4, 26745.0], [34.5, 26745.0], [34.6, 26745.0], [34.7, 26745.0], [34.8, 26745.0], [34.9, 26745.0], [35.0, 26745.0], [35.1, 26745.0], [35.2, 26745.0], [35.3, 26745.0], [35.4, 26745.0], [35.5, 26745.0], [35.6, 26745.0], [35.7, 26745.0], [35.8, 26745.0], [35.9, 26745.0], [36.0, 28278.0], [36.1, 28278.0], [36.2, 28278.0], [36.3, 28278.0], [36.4, 28278.0], [36.5, 28278.0], [36.6, 28278.0], [36.7, 28278.0], [36.8, 28278.0], [36.9, 28278.0], [37.0, 28278.0], [37.1, 28278.0], [37.2, 28278.0], [37.3, 28278.0], [37.4, 28278.0], [37.5, 28278.0], [37.6, 28278.0], [37.7, 28278.0], [37.8, 28278.0], [37.9, 28278.0], [38.0, 29184.0], [38.1, 29184.0], [38.2, 29184.0], [38.3, 29184.0], [38.4, 29184.0], [38.5, 29184.0], [38.6, 29184.0], [38.7, 29184.0], [38.8, 29184.0], [38.9, 29184.0], [39.0, 29184.0], [39.1, 29184.0], [39.2, 29184.0], [39.3, 29184.0], [39.4, 29184.0], [39.5, 29184.0], [39.6, 29184.0], [39.7, 29184.0], [39.8, 29184.0], [39.9, 29184.0], [40.0, 29514.0], [40.1, 29514.0], [40.2, 29514.0], [40.3, 29514.0], [40.4, 29514.0], [40.5, 29514.0], [40.6, 29514.0], [40.7, 29514.0], [40.8, 29514.0], [40.9, 29514.0], [41.0, 29514.0], [41.1, 29514.0], [41.2, 29514.0], [41.3, 29514.0], [41.4, 29514.0], [41.5, 29514.0], [41.6, 29514.0], [41.7, 29514.0], [41.8, 29514.0], [41.9, 29514.0], [42.0, 30347.0], [42.1, 30347.0], [42.2, 30347.0], [42.3, 30347.0], [42.4, 30347.0], [42.5, 30347.0], [42.6, 30347.0], [42.7, 30347.0], [42.8, 30347.0], [42.9, 30347.0], [43.0, 30347.0], [43.1, 30347.0], [43.2, 30347.0], [43.3, 30347.0], [43.4, 30347.0], [43.5, 30347.0], [43.6, 30347.0], [43.7, 30347.0], [43.8, 30347.0], [43.9, 30347.0], [44.0, 31339.0], [44.1, 31339.0], [44.2, 31339.0], [44.3, 31339.0], [44.4, 31339.0], [44.5, 31339.0], [44.6, 31339.0], [44.7, 31339.0], [44.8, 31339.0], [44.9, 31339.0], [45.0, 31339.0], [45.1, 31339.0], [45.2, 31339.0], [45.3, 31339.0], [45.4, 31339.0], [45.5, 31339.0], [45.6, 31339.0], [45.7, 31339.0], [45.8, 31339.0], [45.9, 31339.0], [46.0, 32229.0], [46.1, 32229.0], [46.2, 32229.0], [46.3, 32229.0], [46.4, 32229.0], [46.5, 32229.0], [46.6, 32229.0], [46.7, 32229.0], [46.8, 32229.0], [46.9, 32229.0], [47.0, 32229.0], [47.1, 32229.0], [47.2, 32229.0], [47.3, 32229.0], [47.4, 32229.0], [47.5, 32229.0], [47.6, 32229.0], [47.7, 32229.0], [47.8, 32229.0], [47.9, 32229.0], [48.0, 32229.0], [48.1, 32229.0], [48.2, 32229.0], [48.3, 32229.0], [48.4, 32229.0], [48.5, 32229.0], [48.6, 32229.0], [48.7, 32229.0], [48.8, 32229.0], [48.9, 32229.0], [49.0, 32229.0], [49.1, 32229.0], [49.2, 32229.0], [49.3, 32229.0], [49.4, 32229.0], [49.5, 32229.0], [49.6, 32229.0], [49.7, 32229.0], [49.8, 32229.0], [49.9, 32229.0], [50.0, 32262.0], [50.1, 32262.0], [50.2, 32262.0], [50.3, 32262.0], [50.4, 32262.0], [50.5, 32262.0], [50.6, 32262.0], [50.7, 32262.0], [50.8, 32262.0], [50.9, 32262.0], [51.0, 32262.0], [51.1, 32262.0], [51.2, 32262.0], [51.3, 32262.0], [51.4, 32262.0], [51.5, 32262.0], [51.6, 32262.0], [51.7, 32262.0], [51.8, 32262.0], [51.9, 32262.0], [52.0, 39137.0], [52.1, 39137.0], [52.2, 39137.0], [52.3, 39137.0], [52.4, 39137.0], [52.5, 39137.0], [52.6, 39137.0], [52.7, 39137.0], [52.8, 39137.0], [52.9, 39137.0], [53.0, 39137.0], [53.1, 39137.0], [53.2, 39137.0], [53.3, 39137.0], [53.4, 39137.0], [53.5, 39137.0], [53.6, 39137.0], [53.7, 39137.0], [53.8, 39137.0], [53.9, 39137.0], [54.0, 39703.0], [54.1, 39703.0], [54.2, 39703.0], [54.3, 39703.0], [54.4, 39703.0], [54.5, 39703.0], [54.6, 39703.0], [54.7, 39703.0], [54.8, 39703.0], [54.9, 39703.0], [55.0, 39703.0], [55.1, 39703.0], [55.2, 39703.0], [55.3, 39703.0], [55.4, 39703.0], [55.5, 39703.0], [55.6, 39703.0], [55.7, 39703.0], [55.8, 39703.0], [55.9, 39703.0], [56.0, 40553.0], [56.1, 40553.0], [56.2, 40553.0], [56.3, 40553.0], [56.4, 40553.0], [56.5, 40553.0], [56.6, 40553.0], [56.7, 40553.0], [56.8, 40553.0], [56.9, 40553.0], [57.0, 40553.0], [57.1, 40553.0], [57.2, 40553.0], [57.3, 40553.0], [57.4, 40553.0], [57.5, 40553.0], [57.6, 40553.0], [57.7, 40553.0], [57.8, 40553.0], [57.9, 40553.0], [58.0, 40603.0], [58.1, 40603.0], [58.2, 40603.0], [58.3, 40603.0], [58.4, 40603.0], [58.5, 40603.0], [58.6, 40603.0], [58.7, 40603.0], [58.8, 40603.0], [58.9, 40603.0], [59.0, 40603.0], [59.1, 40603.0], [59.2, 40603.0], [59.3, 40603.0], [59.4, 40603.0], [59.5, 40603.0], [59.6, 40603.0], [59.7, 40603.0], [59.8, 40603.0], [59.9, 40603.0], [60.0, 40678.0], [60.1, 40678.0], [60.2, 40678.0], [60.3, 40678.0], [60.4, 40678.0], [60.5, 40678.0], [60.6, 40678.0], [60.7, 40678.0], [60.8, 40678.0], [60.9, 40678.0], [61.0, 40678.0], [61.1, 40678.0], [61.2, 40678.0], [61.3, 40678.0], [61.4, 40678.0], [61.5, 40678.0], [61.6, 40678.0], [61.7, 40678.0], [61.8, 40678.0], [61.9, 40678.0], [62.0, 40919.0], [62.1, 40919.0], [62.2, 40919.0], [62.3, 40919.0], [62.4, 40919.0], [62.5, 40919.0], [62.6, 40919.0], [62.7, 40919.0], [62.8, 40919.0], [62.9, 40919.0], [63.0, 40919.0], [63.1, 40919.0], [63.2, 40919.0], [63.3, 40919.0], [63.4, 40919.0], [63.5, 40919.0], [63.6, 40919.0], [63.7, 40919.0], [63.8, 40919.0], [63.9, 40919.0], [64.0, 41795.0], [64.1, 41795.0], [64.2, 41795.0], [64.3, 41795.0], [64.4, 41795.0], [64.5, 41795.0], [64.6, 41795.0], [64.7, 41795.0], [64.8, 41795.0], [64.9, 41795.0], [65.0, 41795.0], [65.1, 41795.0], [65.2, 41795.0], [65.3, 41795.0], [65.4, 41795.0], [65.5, 41795.0], [65.6, 41795.0], [65.7, 41795.0], [65.8, 41795.0], [65.9, 41795.0], [66.0, 42573.0], [66.1, 42573.0], [66.2, 42573.0], [66.3, 42573.0], [66.4, 42573.0], [66.5, 42573.0], [66.6, 42573.0], [66.7, 42573.0], [66.8, 42573.0], [66.9, 42573.0], [67.0, 42573.0], [67.1, 42573.0], [67.2, 42573.0], [67.3, 42573.0], [67.4, 42573.0], [67.5, 42573.0], [67.6, 42573.0], [67.7, 42573.0], [67.8, 42573.0], [67.9, 42573.0], [68.0, 43330.0], [68.1, 43330.0], [68.2, 43330.0], [68.3, 43330.0], [68.4, 43330.0], [68.5, 43330.0], [68.6, 43330.0], [68.7, 43330.0], [68.8, 43330.0], [68.9, 43330.0], [69.0, 43330.0], [69.1, 43330.0], [69.2, 43330.0], [69.3, 43330.0], [69.4, 43330.0], [69.5, 43330.0], [69.6, 43330.0], [69.7, 43330.0], [69.8, 43330.0], [69.9, 43330.0], [70.0, 73759.0], [70.1, 73759.0], [70.2, 73759.0], [70.3, 73759.0], [70.4, 73759.0], [70.5, 73759.0], [70.6, 73759.0], [70.7, 73759.0], [70.8, 73759.0], [70.9, 73759.0], [71.0, 73759.0], [71.1, 73759.0], [71.2, 73759.0], [71.3, 73759.0], [71.4, 73759.0], [71.5, 73759.0], [71.6, 73759.0], [71.7, 73759.0], [71.8, 73759.0], [71.9, 73759.0], [72.0, 74131.0], [72.1, 74131.0], [72.2, 74131.0], [72.3, 74131.0], [72.4, 74131.0], [72.5, 74131.0], [72.6, 74131.0], [72.7, 74131.0], [72.8, 74131.0], [72.9, 74131.0], [73.0, 74131.0], [73.1, 74131.0], [73.2, 74131.0], [73.3, 74131.0], [73.4, 74131.0], [73.5, 74131.0], [73.6, 74131.0], [73.7, 74131.0], [73.8, 74131.0], [73.9, 74131.0], [74.0, 74146.0], [74.1, 74146.0], [74.2, 74146.0], [74.3, 74146.0], [74.4, 74146.0], [74.5, 74146.0], [74.6, 74146.0], [74.7, 74146.0], [74.8, 74146.0], [74.9, 74146.0], [75.0, 74146.0], [75.1, 74146.0], [75.2, 74146.0], [75.3, 74146.0], [75.4, 74146.0], [75.5, 74146.0], [75.6, 74146.0], [75.7, 74146.0], [75.8, 74146.0], [75.9, 74146.0], [76.0, 75157.0], [76.1, 75157.0], [76.2, 75157.0], [76.3, 75157.0], [76.4, 75157.0], [76.5, 75157.0], [76.6, 75157.0], [76.7, 75157.0], [76.8, 75157.0], [76.9, 75157.0], [77.0, 75157.0], [77.1, 75157.0], [77.2, 75157.0], [77.3, 75157.0], [77.4, 75157.0], [77.5, 75157.0], [77.6, 75157.0], [77.7, 75157.0], [77.8, 75157.0], [77.9, 75157.0], [78.0, 75710.0], [78.1, 75710.0], [78.2, 75710.0], [78.3, 75710.0], [78.4, 75710.0], [78.5, 75710.0], [78.6, 75710.0], [78.7, 75710.0], [78.8, 75710.0], [78.9, 75710.0], [79.0, 75710.0], [79.1, 75710.0], [79.2, 75710.0], [79.3, 75710.0], [79.4, 75710.0], [79.5, 75710.0], [79.6, 75710.0], [79.7, 75710.0], [79.8, 75710.0], [79.9, 75710.0], [80.0, 176808.0], [80.1, 176808.0], [80.2, 176808.0], [80.3, 176808.0], [80.4, 176808.0], [80.5, 176808.0], [80.6, 176808.0], [80.7, 176808.0], [80.8, 176808.0], [80.9, 176808.0], [81.0, 176808.0], [81.1, 176808.0], [81.2, 176808.0], [81.3, 176808.0], [81.4, 176808.0], [81.5, 176808.0], [81.6, 176808.0], [81.7, 176808.0], [81.8, 176808.0], [81.9, 176808.0], [82.0, 181869.0], [82.1, 181869.0], [82.2, 181869.0], [82.3, 181869.0], [82.4, 181869.0], [82.5, 181869.0], [82.6, 181869.0], [82.7, 181869.0], [82.8, 181869.0], [82.9, 181869.0], [83.0, 181869.0], [83.1, 181869.0], [83.2, 181869.0], [83.3, 181869.0], [83.4, 181869.0], [83.5, 181869.0], [83.6, 181869.0], [83.7, 181869.0], [83.8, 181869.0], [83.9, 181869.0], [84.0, 182363.0], [84.1, 182363.0], [84.2, 182363.0], [84.3, 182363.0], [84.4, 182363.0], [84.5, 182363.0], [84.6, 182363.0], [84.7, 182363.0], [84.8, 182363.0], [84.9, 182363.0], [85.0, 182363.0], [85.1, 182363.0], [85.2, 182363.0], [85.3, 182363.0], [85.4, 182363.0], [85.5, 182363.0], [85.6, 182363.0], [85.7, 182363.0], [85.8, 182363.0], [85.9, 182363.0], [86.0, 182914.0], [86.1, 182914.0], [86.2, 182914.0], [86.3, 182914.0], [86.4, 182914.0], [86.5, 182914.0], [86.6, 182914.0], [86.7, 182914.0], [86.8, 182914.0], [86.9, 182914.0], [87.0, 182914.0], [87.1, 182914.0], [87.2, 182914.0], [87.3, 182914.0], [87.4, 182914.0], [87.5, 182914.0], [87.6, 182914.0], [87.7, 182914.0], [87.8, 182914.0], [87.9, 182914.0], [88.0, 183898.0], [88.1, 183898.0], [88.2, 183898.0], [88.3, 183898.0], [88.4, 183898.0], [88.5, 183898.0], [88.6, 183898.0], [88.7, 183898.0], [88.8, 183898.0], [88.9, 183898.0], [89.0, 183898.0], [89.1, 183898.0], [89.2, 183898.0], [89.3, 183898.0], [89.4, 183898.0], [89.5, 183898.0], [89.6, 183898.0], [89.7, 183898.0], [89.8, 183898.0], [89.9, 183898.0], [90.0, 183920.0], [90.1, 183920.0], [90.2, 183920.0], [90.3, 183920.0], [90.4, 183920.0], [90.5, 183920.0], [90.6, 183920.0], [90.7, 183920.0], [90.8, 183920.0], [90.9, 183920.0], [91.0, 183920.0], [91.1, 183920.0], [91.2, 183920.0], [91.3, 183920.0], [91.4, 183920.0], [91.5, 183920.0], [91.6, 183920.0], [91.7, 183920.0], [91.8, 183920.0], [91.9, 183920.0], [92.0, 184093.0], [92.1, 184093.0], [92.2, 184093.0], [92.3, 184093.0], [92.4, 184093.0], [92.5, 184093.0], [92.6, 184093.0], [92.7, 184093.0], [92.8, 184093.0], [92.9, 184093.0], [93.0, 184093.0], [93.1, 184093.0], [93.2, 184093.0], [93.3, 184093.0], [93.4, 184093.0], [93.5, 184093.0], [93.6, 184093.0], [93.7, 184093.0], [93.8, 184093.0], [93.9, 184093.0], [94.0, 184115.0], [94.1, 184115.0], [94.2, 184115.0], [94.3, 184115.0], [94.4, 184115.0], [94.5, 184115.0], [94.6, 184115.0], [94.7, 184115.0], [94.8, 184115.0], [94.9, 184115.0], [95.0, 184115.0], [95.1, 184115.0], [95.2, 184115.0], [95.3, 184115.0], [95.4, 184115.0], [95.5, 184115.0], [95.6, 184115.0], [95.7, 184115.0], [95.8, 184115.0], [95.9, 184115.0], [96.0, 184129.0], [96.1, 184129.0], [96.2, 184129.0], [96.3, 184129.0], [96.4, 184129.0], [96.5, 184129.0], [96.6, 184129.0], [96.7, 184129.0], [96.8, 184129.0], [96.9, 184129.0], [97.0, 184129.0], [97.1, 184129.0], [97.2, 184129.0], [97.3, 184129.0], [97.4, 184129.0], [97.5, 184129.0], [97.6, 184129.0], [97.7, 184129.0], [97.8, 184129.0], [97.9, 184129.0], [98.0, 193026.0], [98.1, 193026.0], [98.2, 193026.0], [98.3, 193026.0], [98.4, 193026.0], [98.5, 193026.0], [98.6, 193026.0], [98.7, 193026.0], [98.8, 193026.0], [98.9, 193026.0], [99.0, 193026.0], [99.1, 193026.0], [99.2, 193026.0], [99.3, 193026.0], [99.4, 193026.0], [99.5, 193026.0], [99.6, 193026.0], [99.7, 193026.0], [99.8, 193026.0], [99.9, 193026.0]], "isOverall": false, "label": "SERIAL", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 11900.0, "maxY": 3.0, "series": [{"data": [[176800.0, 1.0], [183800.0, 1.0], [184000.0, 1.0], [181800.0, 1.0], [11900.0, 1.0], [193000.0, 1.0], [13800.0, 1.0], [14300.0, 1.0], [14700.0, 1.0], [15100.0, 1.0], [15600.0, 1.0], [15800.0, 1.0], [16300.0, 1.0], [17100.0, 1.0], [17000.0, 1.0], [17600.0, 1.0], [17500.0, 1.0], [17700.0, 1.0], [18300.0, 1.0], [19300.0, 1.0], [20800.0, 1.0], [22200.0, 1.0], [26700.0, 1.0], [28200.0, 1.0], [29100.0, 1.0], [29500.0, 1.0], [30300.0, 1.0], [31300.0, 1.0], [32200.0, 3.0], [39100.0, 1.0], [40500.0, 1.0], [40600.0, 2.0], [40900.0, 1.0], [39700.0, 1.0], [42500.0, 1.0], [41700.0, 1.0], [43300.0, 1.0], [184100.0, 2.0], [182900.0, 1.0], [182300.0, 1.0], [183900.0, 1.0], [73700.0, 1.0], [75700.0, 1.0], [75100.0, 1.0], [74100.0, 2.0]], "isOverall": false, "label": "SERIAL", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 193000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.7816904E12, "maxY": 5.0, "series": [{"data": [[1.78169082E12, 5.0], [1.78169052E12, 5.0], [1.781691E12, 4.9], [1.7816907E12, 5.0], [1.7816904E12, 5.0], [1.78169106E12, 2.5], [1.78169046E12, 5.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78169106E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 30266.5, "minX": 1.0, "maxY": 65591.33333333334, "series": [{"data": [[4.0, 30266.5], [2.0, 41795.0], [1.0, 40678.0], [5.0, 65591.33333333334], [3.0, 42573.0]], "isOverall": false, "label": "SERIAL", "isController": false}, {"data": [[4.78, 62743.780000000006]], "isOverall": false, "label": "SERIAL-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.7816904E12, "maxY": 4.9E-324, "series": [{"data": [[1.78169082E12, 0.0], [1.78169052E12, 0.0], [1.781691E12, 0.0], [1.7816907E12, 0.0], [1.7816904E12, 0.0], [1.78169106E12, 0.0], [1.78169046E12, 0.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78169082E12, 0.0], [1.78169052E12, 0.0], [1.781691E12, 0.0], [1.7816907E12, 0.0], [1.7816904E12, 0.0], [1.78169106E12, 0.0], [1.78169046E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78169106E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 13875.0, "minX": 1.7816904E12, "maxY": 101422.7, "series": [{"data": [[1.78169082E12, 45520.00000000001], [1.78169052E12, 40908.4], [1.781691E12, 100056.6], [1.7816907E12, 101422.7], [1.7816904E12, 13875.0], [1.78169106E12, 41187.25], [1.78169046E12, 28403.0]], "isOverall": false, "label": "SERIAL", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78169106E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7816904E12, "maxY": 4.9E-324, "series": [{"data": [[1.78169082E12, 0.0], [1.78169052E12, 0.0], [1.781691E12, 0.0], [1.7816907E12, 0.0], [1.7816904E12, 0.0], [1.78169106E12, 0.0], [1.78169046E12, 0.0]], "isOverall": false, "label": "SERIAL", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78169106E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7816904E12, "maxY": 4.9E-324, "series": [{"data": [[1.78169082E12, 0.0], [1.78169052E12, 0.0], [1.781691E12, 0.0], [1.7816907E12, 0.0], [1.7816904E12, 0.0], [1.78169106E12, 0.0], [1.78169046E12, 0.0]], "isOverall": false, "label": "SERIAL", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78169106E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 11903.0, "minX": 1.7816904E12, "maxY": 193026.0, "series": [{"data": [[1.78169082E12, 75710.0], [1.78169052E12, 43330.0], [1.781691E12, 183920.0], [1.7816907E12, 193026.0], [1.7816904E12, 13875.0], [1.78169106E12, 42573.0], [1.78169046E12, 32262.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78169082E12, 14358.0], [1.78169052E12, 39137.0], [1.781691E12, 17025.0], [1.7816907E12, 15684.0], [1.7816904E12, 13875.0], [1.78169106E12, 39703.0], [1.78169046E12, 11903.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78169082E12, 75654.7], [1.78169052E12, 43330.0], [1.781691E12, 183819.4], [1.7816907E12, 192136.3], [1.7816904E12, 13875.0], [1.78169106E12, 42573.0], [1.78169046E12, 32258.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78169082E12, 75710.0], [1.78169052E12, 43330.0], [1.781691E12, 183920.0], [1.7816907E12, 193026.0], [1.7816904E12, 13875.0], [1.78169106E12, 42573.0], [1.78169046E12, 32262.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78169082E12, 48001.0], [1.78169052E12, 40603.0], [1.781691E12, 98819.0], [1.7816907E12, 100809.5], [1.7816904E12, 13875.0], [1.78169106E12, 41236.5], [1.78169046E12, 29930.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78169082E12, 75710.0], [1.78169052E12, 43330.0], [1.781691E12, 183920.0], [1.7816907E12, 193026.0], [1.7816904E12, 13875.0], [1.78169106E12, 42573.0], [1.78169046E12, 32262.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78169106E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 16069.0, "minX": 1.0, "maxY": 129804.0, "series": [{"data": [[1.0, 26745.0], [4.0, 110069.0], [2.0, 16069.0], [5.0, 129804.0], [3.0, 29514.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4.9E-324, "series": [{"data": [[1.0, 0.0], [4.0, 0.0], [2.0, 0.0], [5.0, 0.0], [3.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.7816904E12, "maxY": 0.16666666666666666, "series": [{"data": [[1.78169082E12, 0.16666666666666666], [1.78169052E12, 0.08333333333333333], [1.781691E12, 0.15], [1.7816907E12, 0.16666666666666666], [1.7816904E12, 0.1], [1.78169046E12, 0.16666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.781691E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7816904E12, "maxY": 0.16666666666666666, "series": [{"data": [[1.78169082E12, 0.16666666666666666], [1.78169052E12, 0.08333333333333333], [1.781691E12, 0.16666666666666666], [1.7816907E12, 0.16666666666666666], [1.7816904E12, 0.016666666666666666], [1.78169106E12, 0.06666666666666667], [1.78169046E12, 0.16666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78169106E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7816904E12, "maxY": 0.16666666666666666, "series": [{"data": [[1.78169082E12, 0.16666666666666666], [1.78169052E12, 0.08333333333333333], [1.781691E12, 0.16666666666666666], [1.7816907E12, 0.16666666666666666], [1.7816904E12, 0.016666666666666666], [1.78169106E12, 0.06666666666666667], [1.78169046E12, 0.16666666666666666]], "isOverall": false, "label": "SERIAL-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78169106E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7816904E12, "maxY": 0.16666666666666666, "series": [{"data": [[1.78169082E12, 0.16666666666666666], [1.78169052E12, 0.08333333333333333], [1.781691E12, 0.16666666666666666], [1.7816907E12, 0.16666666666666666], [1.7816904E12, 0.016666666666666666], [1.78169106E12, 0.06666666666666667], [1.78169046E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78169106E12, "title": "Total Transactions Per Second"}},
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

