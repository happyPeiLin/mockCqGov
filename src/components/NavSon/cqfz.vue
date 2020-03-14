<template>
  <div class="cqfz zauto w1200">
    <div class="cqfzL ib" id="cqfzL">
      <a class="cqfz1" href="/" @mouseover="cqfzCur($event,1)"></a>
      <a class="cqfz2" href="/" @mouseover="cqfzCur($event,2)"></a>
      <a class="cqfz3" href="/" @mouseover="cqfzCur($event,3)"></a>
      <a class="cqfz4" href="/" @mouseover="cqfzCur($event,4)"></a>
      <a class="cqfz5" href="/" @mouseover="cqfzCur($event,5)"></a>
    </div>
    <div class="cqfz1R ib border" v-show="cqfzNum === 1">
      <div class="cqfz1RL ib re">
        <p>重庆位于中国内陆西南部、长江上游地区。面积8.24万平方公里，辖38个区县（26区、8县、4自治县）。常住人口3102万人、城镇化率65.5%。人口以汉族为主，少数民族主要有土家族、苗族。地貌以丘陵、山地为主，其中山地占76%，有“山城”之称。属亚热带季风性湿润气候。长江横贯全境，流程691公里，与嘉陵江、乌江等河流交汇。旅游资源丰富，有长江三峡、世界文化遗产大...</p>
        <a class="cqfzxx">详细>></a>
        <div class="cqfz1RL2">
          <a href="/">自然地理</a>
          <a href="/">历史沿革</a>
          <a href="/">行政区划</a>
          <a href="/">民族人口</a>
          <a href="/">数字地图</a>
        </div>
      </div>
      <img class="cqfz1RR ib" src="../../assets/cqfz1RR.jpg" alt />
    </div>
    <div class="cqfz2R ib border cqfzAll re" v-show="cqfzNum === 2">
      <div class="cqfz2RL re ib">
        <ul>
          <li>
            <a href="/">2019年重庆市经济运行情况</a>
          </li>
          <li>
            <a href="/">重庆发布跨境贸易便利化16条措施</a>
          </li>
          <li>
            <a href="/">预计去年全年重庆新增减税降费超700亿元</a>
          </li>
          <li>
            <a href="/">去年重庆进出口总值5792.8亿元 同比增长11%，东盟成为第一大外贸</a>
          </li>
          <li>
            <a href="/">《2019年重庆市外商投资环境测评报告》出炉 外商投资企业持续看</a>
          </li>
          <li>
            <a href="/">去年全市148个重点工业项目完成1342亿元产值</a>
          </li>
        </ul>
      </div>
      <img class="cqfz2RR ib" src="../../assets/cqfz2RR.jpg" alt />

      <a href="/" class="tjgb ab ib">统计公报</a>
    </div>
    <div class="cqfz3R ib border cqfzAll re" v-show="cqfzNum === 3">
      <div class="cqfz3RL ib">
        <ul>
          <li>
            <a>重庆推八项措施激励专家人才在疫情防控一线担当奉献</a>
          </li>
          <li>
            <a>12条举措保障市民“米袋子”“菜篮子”“果盘子”</a>
          </li>
          <li>
            <a>为中小企业减负 重庆市推出援企稳岗返还政策</a>
          </li>
          <li>
            <a>重庆公布首批高校在线开放课程目录</a>
          </li>
          <li>
            <a>重庆扶贫办发布23条政策助力“战疫”“战贫”</a>
          </li>
          <li>
            <a>我市医院门急诊已陆续开诊 全面暂停口腔门诊常规诊疗服务</a>
          </li>
        </ul>
      </div>
      <div class="cqfz3RL2 ab ib">
        <a>科技</a>
        <a>教育</a>
        <a>卫生</a>
        <a>体育</a>
        <a>民政</a>
        <a>社保</a>
        <a>扶贫</a>
      </div>

      <img class="cqfz1RR ib" src="../../assets/cqfz3RR.jpg" alt />
    </div>
    <div class="cqfz4R ib border cqfzAll re" v-show="cqfzNum === 4">
      <div class="cqfz4RL ib">
        <ul>
          <li>
            <a>首批国家全域旅游示范区我市两区县上榜</a>
          </li>
          <li>
            <a>大足石刻景区将免费向全国医务工作者开放</a>
          </li>
          <li>
            <a>重庆多家博物馆推出数字展览</a>
          </li>
          <li>
            <a>今年重庆文旅着力提升服务整合业态 让游客留下来 让消费活起来</a>
          </li>
          <li>
            <a>推出十大精品线路 发布门票优惠政策 备好精彩文旅活动 特色年俗</a>
          </li>
          <li>
            <a>“冬游”去哪儿？重庆推出200多项冬季文旅主题活动</a>
          </li>
        </ul>
      </div>
      <div class="cqfz4RL2 ab ib">
        <a>世界文化自然遗产</a>
        <a>国家级非物质文化遗产</a>
        <a>博物馆</a>
        <a>旅游景点</a>
      </div>

      <img class="cqfz1RR ib" src="../../assets/cqfz4RR.jpg" alt />
    </div>
    <div class="cqfz5R ib border cqfzAll re" v-show="cqfzNum === 5">
      <div class="cqfz4RL ib">
        <ul>
          <li>
            <a>重庆今年头两个月完成营造林87万亩 目前全市69个国有林场全面复</a>
          </li>
          <li>
            <a>重庆发布第1号总河长令阶段性成果 实施近9个月 污水偷排乱排基本</a>
          </li>
          <li>
            <a>生态：山清水秀 徐徐铺展美丽画卷</a>
          </li>
          <li>
            <a>深入推进大保护 打造引领高质量发展生力军——推动长江经济带发</a>
          </li>
          <li>
            <a>推窗见绿 出门见景 四季见花 重庆主城新增绿地1080万平方米</a>
          </li>
          <li>
            <a>山清水秀 巴渝奏响绿色乐章</a>
          </li>
        </ul>
      </div>
      <div class="cqfz4RL2 ab ib">
        <a>环保督察</a>
      </div>

      <img class="cqfz1RR ib" src="../../assets/cqfz5RR.jpg" alt />
    </div>
  </div>
</template>

<style lang="scss">
.cqfz {
  height: 325px;
  z-index: 10000;
}
.cqfzL {
  width: 304px;
  height: 306px;
  vertical-align: top;
}

.cqfzL a {
  width: 304px;
  height: 55px;
  display: block;
  margin-bottom: 8px;
}
.cqfz1 {
  background: url("../../assets/cqfz1.jpg");
}
.cqfz11 {
  background: url("../../assets/cqfz11.jpg");
}
.cqfz2 {
  background: url("../../assets/cqfz2.jpg");
}
.cqfz22 {
  background: url("../../assets/cqfz22.jpg");
}
.cqfz3 {
  background: url("../../assets/cqfz3.jpg");
}
.cqfz33 {
  background: url("../../assets/cqfz33.jpg");
}
.cqfz4 {
  background: url("../../assets/cqfz4.jpg");
}
.cqfz44 {
  background: url("../../assets/cqfz44.jpg");
}
.cqfz5 {
  background: url("../../assets/cqfz5.jpg");
}
.cqfz55 {
  background: url("../../assets/cqfz55.jpg");
}

.cqfz1R {
  background: url("../../assets/cqfzR.jpg");
  margin-left: 20px;
  height: 306px;
  padding-right: 16px;
  //   border: 1px solid black;
}

.cqfz1RL {
  width: 550px;
  height: 314px;
  margin: 30px 0 0 18px;
  vertical-align: top;
  text-indent: 2em;

  font-size: 16px;
  line-height: 30px;
  text-indent: 2em;
  color: #565050;
}

.cqfzxx {
  position: absolute;
  right: 162px;
  top: 150px;
  color: orange;
}

.cqfz1RR {
  vertical-align: top;
  margin: 23px 0 0 20px;
}

.cqfz2RR {
  vertical-align: top;
  margin: 23px 0 0 20px;
}

.cqfz1RL p {
  display: block;
}

.cqfz1RL2 {
  width: 100%px;
  height: 31px;
  margin: 10px 0 0 15px;
}

.cqfz1RL2 a {
  position: relative;
  display: inline-block !important;
  width: 80px;
  height: 31px;
  margin: 10px 10px 0 0;
  border-radius: 4px;
  background: #2a6aa7;
  text-align: center;
  color: #fff;
  text-indent: 0em !important;
}

.cqfzAll {
  width: 874px;
  height: 306px;
  margin-left: 20px;
  background: url("../../assets/cqfzR.jpg");
}

.cqfz2RL {
  width: 550px;
  height: 216px;
  margin-top: 30px;
  margin-left: 18px;
}

.cqfz2RL li {
  line-height: 36px;
  width: 550px;
}

.cqfz2RL a {
  display: inline-block;
  padding-left: 15px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
  max-width: 90%;
  background: url("../../assets/wz_dian.png") no-repeat left 13px;
  width: 550px;
  min-width: 550px;
  vertical-align: top;
  line-height: 36px;
}

.tjgb {
  display: inline-block;
  background: #2a6aa7;
  color: #fff;
  font-size: 16px;
  padding: 5px 8px;
  margin-right: 10px;
  border-radius: 4px;
  margin-top: 10px;
  left: 16px;
  top: 258px;
}

.cqfz3RL {
  width: 550px;
  height: 216px;
  margin-top: 30px;
  margin-left: 18px;
}

.cqfz3RL li {
  line-height: 36px;
  width: 550px;
}

.cqfz3RL a {
  display: inline-block;
  padding-left: 15px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
  max-width: 90%;
  background: url("../../assets/wz_dian.png") no-repeat left 13px;
  width: 550px;
  min-width: 550px;
  vertical-align: top;
  line-height: 36px;
}
.cqfz3RL2 {
  top: 255px;
  left: 15px;
}
.cqfz3RL2 a {
  display: inline-block;
  background: #2a6aa7;
  color: #fff;
  font-size: 16px;
  padding: 5px 8px;
  margin-right: 10px;
  border-radius: 4px;
  margin-top: 10px;
}

.cqfz4RL {
  width: 550px;
  height: 216px;
  margin-top: 30px;
  margin-left: 18px;
}

.cqfz4RL li {
  line-height: 36px;
  width: 550px;
}

.cqfz4RL a {
  display: inline-block;
  padding-left: 15px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
  max-width: 90%;
  background: url("../../assets/wz_dian.png") no-repeat left 13px;
  width: 550px;
  min-width: 550px;
  vertical-align: top;
  line-height: 36px;
}

.cqfz4RL2 {
  top: 255px;
  left: 15px;
}

.cqfz4RL2 a {
  display: inline-block;
  background: #2a6aa7;
  color: #fff;
  font-size: 16px;
  padding: 5px 8px;
  margin-right: 10px;
  border-radius: 4px;
  margin-top: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      cqfzNum: 3
    };
  },
  methods: {
    cqfzCur($event, index) {
      this.cqfzNum = index;

      //   console.log(index);
      //   console.log("ffffff" + $event.currentTarget.className)
      var cqfzL = document.getElementById("cqfzL");
      //   var cqfzL1 = cqfzL.childNodes[0].className;
      // console.log(cqfzL1 + "dddddddddd")
      cqfzL.childNodes[0].className = "cqfz1";
      cqfzL.childNodes[1].className = "cqfz2";
      cqfzL.childNodes[2].className = "cqfz3";
      cqfzL.childNodes[3].className = "cqfz4";
      cqfzL.childNodes[4].className = "cqfz5";

      if (index === 1) {
        $event.currentTarget.className = "cqfz11";
      } else if (index === 2) {
        $event.currentTarget.className = "cqfz22";
      } else if (index === 3) {
        $event.currentTarget.className = "cqfz33";
      } else if (index === 4) {
        $event.currentTarget.className = "cqfz44";
      } else if (index === 5) {
        $event.currentTarget.className = "cqfz55";
      } else if (index === 6) {
        $event.currentTarget.className = "cqfz66";
      }
    }
  }
};
</script>