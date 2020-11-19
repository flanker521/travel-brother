<template>
  <div id="main">
    <div>
      <el-row class="tac">
        <el-col :span="24">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                 class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row class="tac">
        <el-col :span="24">
          <h5>去过的地方</h5>
          <div style="height: 400px">
            <el-steps direction="vertical" :active="1">
              <el-step title="西宁-敦煌" icon="el-icon-map-location"></el-step>
              <el-step title="上海" icon="el-icon-map-location"></el-step>
              <el-step title="长沙" icon="el-icon-map-location" description="这是一段很长很长很长的描述性文字"></el-step>
            </el-steps>
          </div>

        </el-col>
      </el-row>
    </div>
    <!--图表-->
    <div class="div-chart">
      <div id="mainChart"></div>
      <div></div>
    </div>
    <!--地图-->
    <div id="container"></div>
  </div>
</template>

<script>
import BMapGL from 'BMapGL'
export default {
  name: "main",
  data() {
    return {
      chartOption: {}

    }
  },
  methods: {
    initMap() {
      let map = new BMapGL.Map('container'); // 创建Map实例
      map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 12); // 初始化地图,设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
    }
  },
  mounted() {
    this.initMap()
  }
}
</script>

<style scoped>
#main {
  display: grid;
  grid-template-columns: 15% 85%;
  width: 100%;
  height: 100%;

}
.div-chart{
  display: grid;
  position: absolute;
  z-index: 99;
  left: 15%;
  top: 0;
  background-color: transparent;
  grid-template-rows: 60% 40%;
  height: 100%;
  width: 450px;
}

#container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "微软雅黑";
}
</style>
