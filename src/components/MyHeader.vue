<template>
  <div class="myHeader centerWidth">
    <a class="myHeaderL" href="/">
      <img src="../assets/xhy-logo.png" alt />
    </a>

    <div class="myHeaderR re">
      <div class="searchDiv">
        <input type="text" class="searchInput fl in" placeholder="请输入关键字" />
        <button class="searchButton"></button>
        <div class="searchRight ab">
          <a href="/" class="phone"></a>
          <span class="line">|</span>
          <a href="/" class="ftzWord">繁體版</a>
          <span class="line">|</span>
          <a href="/" class="weather"></a>
          <span class="line">|</span>
          <a href="/" class="robot"></a>
        </div>
      </div>

      <div class="my-login ab">
        <span class="hello fl">您好，请</span>
        <a class="my-dl" href="/">登录</a>
        <a class="my-zc" href="/">注册</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.myHeader {
  height: 134px;
  min-width: 1200px;
}
.myHeaderL {
  width: 599px;
  display: inline-block;
  height: 134px;
}
.myHeaderR {
  width: 588px;
  height: 134px;
  display: inline-block;
  vertical-align: top;
}
.searchDiv {
  width: 352px;
  height: 38px;
  border: 1px solid #4e9ddd;
  border-radius: 8px;
  margin-top: 53px;
  margin-left: 8px;
  overflow: hidden;
}
.searchInput {
  width: 285px;
  height: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 16px;
}
.searchButton {
  width: 67px;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left: 1px solid #4e9ddd;
  background: #e9e8e8 url("../assets/search.jpg") center no-repeat;
}

.searchRight {
  top: 62px;
  left: 382px;
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

.my-login{
  right: -5px;
  top:12px;
}


.my-dl {
  color: #adadad;
  font-size: 16px;
  display: block;
  float: left;
  padding: 0 7px;
  border-right: 1px solid #adadad;
}

.my-zc {
  color: #adadad;
  font-size: 16px;
  display: block;
  float: left;
  padding: 0 7px;
}

.hello{
  font-size:16px;
}
</style>

<script>
// setTimeout(function() {
//   var cao = document.getElementById("cao");
//   var ans = getComputedStyle(cao, null);
//   console.log(ans.display);
// }, 3000);
</script>