<template>
  <div class="appheader">
    <el-row>
      <el-col :span="12">
        <div class="logo">
          <a href="/">
            <img src="../assets/xhy-logo.png" alt />
          </a>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="search">
          <div class="searchTool">
            <input type="text" placeholder="请输入关键词" id="searchWord" />
            <button id="toSearch"></button>
          </div>
        </div>
      </el-col>
      <el-col :span="7" class="topRight">
        <div class="dlAndzc">
          <span class="hello">您好，请</span>
          <a class="dl" href="/">登录</a>
          <a class="zc" href="/">注册</a>
        </div>
        <div class="fourTool">
          <a href="/" class="phone"></a>
          <span class="line">|</span>
          <a href="/" class="ftzWord">繁體版</a>
          <span class="line">|</span>
          <a href="/" class="weather"></a>
          <span class="line">|</span>
          <a href="/" class="robot"></a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.logo {
  background-color: white;
  height: 130px;
  position: relative;
}
.logo a {
  display: block;
  position: absolute;
  top: 0px;
  left: 192px;
}
.search {
  background-color: white;
  height: 130px;
  position: relative;
}
.login {
  background-color: pink;
  height: 130px;
}
.navbar {
  background-color: rgb(11, 103, 212);
  height: 60px;
}

.searchTool {
  border: 1px solid #4e9ddd;
  width: 352px;
  height: 38px;
  border-radius: 8px;
  position: absolute;
  top: 52px;
  left: 10px;
  overflow: hidden;
}
#searchWord {
  width: 285px;
  height: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  color: #333;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 38px;
  vertical-align: top;
}

#toSearch {
  width: 67px;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left: 1px solid #4e9ddd;
  background: #e9e8e8 url("../assets/search.jpg") center no-repeat;
  vertical-align: top;
}

.dl {
  color: #adadad;
  font-size: 16px;
  display: block;
  float: left;
  padding: 0 7px;
  border-right: 1px solid #adadad;
}

.zc {
  color: #adadad;
  font-size: 16px;
  display: block;
  float: left;
  padding: 0 7px;
}

.hello {
  float: left;
}

.dlAndzc {
  position: absolute;
  top: 10px;
  left: 100px;
}
.topRight {
  position: relative;
}

.fourTool {
  position: absolute;
  top: 60px;
  left: 55px;
}

.phone {
  display: inline-block;
  width: 12px;
  height: 21px;
  background: url("../assets/phone.jpg") no-repeat;
  vertical-align: top;
}

.line {
  font-size: 14px;
  color: #999;
  padding: 0 10px;
  vertical-align: top;
}

.ftzWord {
  text-decoration: none;
  font-size: 14px;
  color: #275293;
  width: 46px;
}

.weather {
  display: inline-block;
  width: 22px;
  height: 23px;
  background: url("../assets/weather.png") no-repeat;
  vertical-align: top;
}

.robot {
  display: inline-block;
  width: 23px;
  height: 21px;
  background: url("../assets/robot.png") no-repeat;
  vertical-align: top;
}
</style>

