<template>
    <div ref="chart" style="width: 100%;height:150px;" class="map-show"></div>
</template>
<script>
import { defineComponent,onMounted,ref,toRefs,reactive} from 'vue'
import echarts from 'echarts'
import 'echarts/map/js/china'  //中国地图
import {getLocation} from '@/api/index'
export default ({
    setup() {
    const state = reactive({
      myChart:'',
      chart :ref() , //表示默认值
      items:[]
    })
    const init=()=>{  //方法的定义
        if(state.chart){
          var myChart = echarts.init(state.chart); //chart.value 是原生DOM对象
          // 指定图表的配置项和数据
        const option = {
            series:[
              {
                type: "map",
                map: 'china',             //官方文档-配置项-series-map中有说明
                data:state.items,
                label:{     //文字显示
                  //show: true,   //是否显示标签。
                  color: 'red',  //文字颜色
                  fontSize: 10     //文字大小
                },
                itemStyle:{  //地图区域的多边形 图形样式。
                  borderColor: '#fff',   //地图边框颜色
                  borderWidth:1//描边线宽
                },
                zoom:1.2,               //控制地图放大和缩小 当前视角的缩放比例。
                emphasis: {   //高亮状态下的多边形和标签样式。
                    //控制地图滑过后的颜色
                    label:{
                      color: '#fff',  //移入后显示颜色
                      fontSize: 12,
                    },
                    itemStyle:{  //移入后颜色及边框
                      areaColor: '#1bc1ad',   //区域颜色
                      borderColor: 'blue'   //边框颜色
                    },
                  },
              }
            ],
            visualMap:[{   //数据分段 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
              type: 'piecewise', // 定义为分段型 visualMap
              show: true,
              pieces: [
                {min: 100, max: 999},
                {min: 1, max: 99},
                {value: 0},
              ],
              inRange: {   //定义 在选中范围中 的视觉元素。
                color: ['#f54704','#c7da0e', '#ff1054'],  //颜色可以在实时地图上取
              },
              itemWidth: 8,        //显示框的宽高
              itemHeight: 8,
            }],
       };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    }
    // const getData = ()=>{
    //   getLocation().then(res=>{
    //     console.log(res);
    //     state.items = res.data.result;
    //     init();
    //   })
    // }

    const getData = async()=>{
      var res = await getLocation();
      state.items = res.data.result;
      init();
    }
    
    //生命周期 挂载完成
    onMounted(() => {
      getData();
    });
    return {  
      ...toRefs(state),  
    }
  }
})
</script>
