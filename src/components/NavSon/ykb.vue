<template>
  <div class="ykb zauto w1200">
    <div class="ykbL ib">
      <div class="ykbLT">
        <a href="/" class="ykbLTb">便民提示</a>
        <a href="/" class="ykbLTg">更多></a>
      </div>
      <div class="ykbLM">
        <ul>
          <li>
            <a href="/">一“码”通行！重庆与广东、四川实现健康码互认互通</a>
          </li>
          <li>
            <a href="/">重庆北站北广场汽车站恢复19条省际客运班线 最早7点发班</a>
          </li>
          <li>
            <a href="/">3月3日起重庆5个轨道交通站恢复运行</a>
          </li>
          <li>
            <a href="/">即日起 重庆公积金中心正式推出网上缴存业务</a>
          </li>
          <li>
            <a href="/">复工复产了主城区货车通行证怎么办？看这里</a>
          </li>
          <li>
            <a href="/">车管所上线“极速办”小程序 车主不进检测站就能轻松审车</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="ykbM ib">
      <div class="ykbMT">
        <a href="/">
          <p class="bjcxCn">办件查询</p>
          <p class="bjcxEng">BANJIANCHAXUN</p>
        </a>
      </div>

      <div class="ykbMM">
        <div class="ykbMM1">
          <div class="ykbMM11">
            <span>统一服务监管码：</span>
            <input type="text" placeholder="请输入统一服务监管码" />
          </div>
          <div class="ykbMM22">
            <span>申请人或申请单位：</span>
            <input type="text" placeholder="请输入申请人或申请单位" />
          </div>
        </div>
        <a href="/" class="ykbMM2"></a>
        <div class="ykbMM3">
          <p>方式一：进入用户中心查询</p>
          <p>方式二：输入统一用户监管码、申请人或申请单位</p>
        </div>
        <div class="ykbMM4">
          <a href="/" class="ykbMM411"></a>

          <a href="/" class="ykbMM422"></a>
        </div>
      </div>
    </div>
    <div class="ykbR ib">
      <div class="ykbRM">
        <a class="ykbRM1" href="/">
          <i></i>
          <span>医疗卫生</span>
        </a>
        <a class="ykbRM2" href="/">
          <i></i>
          <span>教育科研</span>
        </a>
        <a class="ykbRM3" href="/">
          <i></i>
          <span>公共安全</span>
        </a>
        <a class="ykbRM4" href="/">
          <i></i>
          <span>交通出行</span>
        </a>
        <a class="ykbRM5" href="/">
          <i></i>
          <span>设立变更</span>
        </a>
        <a class="ykbRM6" href="/">
          <i></i>
          <span>证件办理</span>
        </a>
        <a class="ykbRM7" href="/">
          <i></i>
          <span>准营准办</span>
        </a>
        <a class="ykbRM8" href="/">
          <i></i>
          <span>司法公正</span>
        </a>
      </div>
      <div class="ykbRF">
        <a href="/" class="ykbRF1"></a>

        <a href="/" class="ykbRF2"></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ykb {
  height: 325px;
}
.ykbL {
  width: 408px;
  height: 314px;
}
.ykbLT {
  width: 408px;
  height: 36px;
  border-bottom: 3px solid #cfcfcf !important;
}
.ykbLTb {
  font-size: 20px;
  color: #000000;
  display: inline-block;
  height: 36px;
  box-sizing: border-box;
  padding: 0 20px;
}
.ykbLTb:hover {
  text-decoration: none;
  font-weight: bold;
}
.ykbLTg {
  font-size: 14px;
  color: orange;
  float: right;
  margin-top: 10px;
}
.ykbLM {
  width: 408px;
  height: 278px;
}

.ykbLM li {
  line-height: 34px;
}

.ykbLM a {
  display: inline-block;
  padding-left: 15px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
  max-width: 100%;
  background: url("../../assets/wz_dian.png") no-repeat left 13px;
  line-height: 34px;
  vertical-align: top;
  width: 100%;
}

.ykbM {
  width: 408px;
  height: 301px;
  margin-left: 20px;
  vertical-align: top;
}

.ykbMT {
  margin-top: 40px;
  position: relative;
  width: 100%;
  border-bottom: 3px solid #2860b5;
}

.ykbMT a {
  position: absolute;
  display: inline-block;
  width: 140px;
  color: #40537d;
  font-size: 20px;
  left: 50%;
  margin-left: -70px;
  text-align: center;
  top: -34px;
  background: #fff;
  text-decoration: none;
}

.ykbMT a:hover {
  text-decoration: none;
}

.bjcxCn {
  font-size: 20px;
  text-align: center;
}
.bjcxEng {
  color: #0063d7;
  font-size: 14px;
  text-align: center;
}

.ykbMM {
  width: 100%;
  background: #f8f8f8;
  padding: 20px 0 14px 20px;
  box-sizing: border-box;
  line-height: 24px;
  width: 408px;
  height: 244px;
}

.ykbMM1 {
  width: 388px;
  height: 53px;
  line-height: 28px;
}

.ykbMM1 span {
  display: inline-block;
  color: #3f629b;
  font-size: 16px;
  width: 150px;
}

.ykbMM1 input {
  width: 205px;
  height: 22px;
  line-height: 22px;
  border: 1px solid #dcdcdc;
  color: #333;
  font-size: 12px;
  outline: none;
  background: #fff;
  border-radius: 5px;
  margin-top: 2px;
  padding: 0 15px;
  box-sizing: border-box;
}

.ykbMM2 {
  margin: 10px 0 0 115px;
  display: inline-block;
  width: 132px;
  height: 37px;
  background: url("../../assets/index44.jpg") no-repeat;
}

.ykbMM3 {
  width: 100%;
  background: #f8f8f8;
  padding: 20px 0 14px 20px;
  box-sizing: border-box;
  line-height: 24px;
  margin-top: -20px;
  margin-left: -17px;
  width: 388px;
  height: 48px;
}

.ykbMM3 p {
  padding-left: 20px;
  width: 500px;
  box-sizing: border-box;
  color: #717171;
  font-size: 16px;
  line-height: 24px;
  background: url("../../assets/index31.jpg") no-repeat left center;
}

.ykbMM4 {
  margin-top: 25px;

  line-height: 24px;
  width: 388px;
  height: 61px;
}

.ykbMM411 {
  background: url("../../assets/index32_n.png") no-repeat center;

  display: inline-block;
  width: 171px;
  height: 61px;
  border-radius: 4px;
}

.ykbMM422 {
  background: url("../../assets/index33_n.png") no-repeat center;

  display: inline-block;
  width: 171px;
  height: 61px;
  border-radius: 4px;
  margin-left: 16px;
}

.ykbR {
  width: 336px;
  height: 306px;
  border: 1px solid #bfbfbf;
  margin-left: 26px;
  margin-top: 15px;
  vertical-align: top;
}

.ykbRM {
  width: 302px;
  height: 201px;
  border-bottom: 1px dashed #a0a2a6 !important;
  margin-left: 16px;
  margin-top: 24px;
}

.ykbRM a {
  text-align: center;
  color: #a0a2a6;
  font-size: 12px;
  width: 75px;
  height: 80px;
  display: inline-block;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.ykbRM i {
  display: block;
  height: 50px;
  background: url("../../assets/jlt.png") center top no-repeat;
}

.ykbRM1 i {
  background-position: center 0px;
}

.ykbRM2 i {
  background-position: center -50px;
}

.ykbRM3 i {
  background-position: center -100px;
}
.ykbRM4 i {
  background-position: center -150px;
}
.ykbRM5 i {
  background-position: center -200px;
}
.ykbRM6 i {
  background-position: center -250px;
}
.ykbRM7 i {
  background-position: center -300px;
}
.ykbRM8 i {
  background-position: center -350px;
}

.ykbRF {
  width: 302px;
  height: 59px;
  margin-left: 18px;
  margin-top: 10px;
}

.ykbRF a {
  display: inline-block;
  width: 139px;
  height: 59px;
}

.ykbRF1 {
  background: url("../../assets/index34_1.png") no-repeat;
  margin-right: 20px;
}
.ykbRF2 {
  background: url("../../assets/index35_1.png") no-repeat;
}
</style>