<template>
  <div id="app">
    <div id="container"></div>
  </div>
</template>
<script>

import BMapGL from 'BMapGL'

export default {
  name: 'App',
  components: {},
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

<style>

html {
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;

}

#container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "微软雅黑";
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
