<template>
  <canvas ref="canvasBottom" class="level-bottom">
  </canvas>
  <canvas ref="canvasTop" class="level-top">
  </canvas>
</template>
<script>
import {reactive,onMounted,ref, toRef} from'vue'
export default {
  // setup()=>{
  //   const state =reactive({})
  //   // level1中显示中奖100000000000000，
  //   //level2鼠标移动，一点点变透明
  // }
  setup() {
    let canvasBottom=ref()
    let canvasTop=ref()
    const state =reactive({
      
    })
    function draw (){
      if(canvasBottom&&canvasTop){
        let ctx = canvasBottom.value.getContext('2d') // canvasBottom.value dom元素
        let ctx2 = canvasTop.value.getContext('2d')
        let canvasWidth = canvasBottom.value.clientWidth;
        let canvasHeight = canvasBottom.value.clientHeight;
        let doc= document.querySelector('body')
        ctx.font="12px 微软雅黑"
        ctx.fillText("恭喜您🎉，中奖100000000000000元",0,50)
        // 绘制上层的模版
        ctx2.fillStyle = '#e4ebf2'
        ctx2.strokeStyle="#000"
        ctx2.fillRect(0,0,canvasWidth,canvasWidth)
        getScratchOff(ctx2,canvasTop.value)
      }
    }
    //刮奖
    function getScratchOff(ctx2,canvas) {
    if(!ctx2) {
        return
    }
        console.log(ctx2)
      // 获取当前鼠标的坐标
      let startX = null;
      let startY = null;
      let tag = false;
      
      canvas.addEventListener('mousedown',function(e){
        startX = e.clientX;
        startY = e.clientY;
        // ctx2.beginPath();
        tag = true
        // console.log('step111')
        //   ctx2.moveTo(0, 0)
      })
      canvas.onmousemove=function(e){
        //   if(!tag) {
        //       return
        //   }
        //    ctx2.beginPath(); 
        //    ctx2.clearRect(startX,startY,e.clientX,e.clientY)
        //    ctx2.closePath()
        //  console.log('step222')
        // ctx2.beginPath();
       
        // ctx2.fillStyle="#ffffff";
       
        ctx2.lineTo(e.clientX,e.clientY)
        // ctx2.fill()
        ctx2.stroke();
      }
      canvas.addEventListener('mouseup',function(e){
        // ctx2.closePath()
        // tag=false
        //  console.log('step333')
      })
    }
    
    onMounted(()=>{
      draw()
    })
    return {...toRef(state),canvasBottom,canvasTop}
  }
}
</script>
<style scoped>
.level-top{
    width:100%;
}
</style>
