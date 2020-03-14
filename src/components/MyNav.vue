<template>
  <div class="my-main">
    <div class="my-nav zauto re" id="father">
      <span :class="{homeB: changeCur === 0}"></span>
      <div
        v-for="(item,index) in navList"
        :key="index"
        :class="{cur:changeCur === index}"
        @mouseover="curs(index)"
      >
        <a :class="{cur:changeCur === index,}" :id="item.memo" href="/">{{item.name}}</a>
      </div>
    </div>
    <div class="slimBar"></div>

    <div class="change" v-show="changeCur === 0">
      <div class="changeLeft">
        <el-carousel height="320px" arrow="never">
          <el-carousel-item v-for="item in list" :key="item.img">
            <img :src="item.img" />
            <div href="#" class="grey"></div>
            <a href="#" class="aaa">{{item.words}}</a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="changeRight">
        <ul class="crTop">
          <li @mouseenter="yourEnter1" :class="{crTopHover:switch1===1}">
            <a href="#">国务院信息</a>
          </li>
          <li @mouseenter="yourEnter2" :class="{crTopHover:switch1===2}">
            <a href="#">今日重庆</a>
          </li>
          <li @mouseenter="yourEnter3" :class="{crTopHover:switch1===3}">
            <a href="#">政务活动</a>
          </li>
        </ul>
        <div class="crBottom" v-show="switch1 === 1">
          <ul>
            <li v-for="(item,index) in gwyxx" :key="index">
              <a href="#">{{item.words}}</a>
            </li>
          </ul>
        </div>
        <div class="crBottom" v-show="switch1 === 2">
          <ul>
            <li id="cao" v-for="(item,index) in jrcq" :key="index">
              <a href="#">{{item.words}}</a>
            </li>
          </ul>
        </div>
        <div class="crBottom" v-show="switch1 === 3">
          <ul>
            <li id="cao" v-for="(item,index) in zwhd" :key="index">
              <a href="#">{{item.words}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="change2 zauto" v-show="changeCur === 1">
      <zfld></zfld>
    </div>

    <div class="change2 zauto" v-show="changeCur === 2">
      <cqfz></cqfz>
    </div>
    <div class="change2 zauto" v-show="changeCur === 3">
      <div class="change4l ib vt">政府信息公开</div>

      <div class="change4c ib">
        <div class="change4ct">
          <a href="/" @mouseenter="myEnter1" :class="{change4ctHover: switch2===1} ">市政府文件</a>
          <a href="/" @mouseenter="myEnter2" :class="{change4ctHover: switch2===2} ">政策解读</a>
          <a href="/" @mouseenter="myEnter3" :class="{change4ctHover: switch2===3} ">政府公报</a>
        </div>
        <div class="change4cm" v-show="switch2 === 1">
          <ul>
            <li v-for="(item,index) in szfwj" :key="index">
              <a href="/">{{item.words}}</a>
            </li>
          </ul>
        </div>
        <div class="change4cm" v-show="switch2 === 2">
          <ul>
            <li v-for="(item,index) in zcjd" :key="index">
              <a href="/">{{item.words}}</a>
            </li>
          </ul>
        </div>
        <div class="change4cm" v-show="switch2 === 3">
          <ul>
            <li v-for="(item,index) in zfgb" :key="index">
              <a href="/">{{item.words}}</a>
            </li>
          </ul>
        </div>
        <div class="change4cf">
          <a href="/">政府工作报告</a>
          <a href="/">政府网站年度工作报表</a>
          <a href="/">五类政策信息</a>
        </div>
      </div>

      <div class="change4r">
        <a href="/" class="a1"></a>
        <a href="/" class="a2"></a>
        <a href="/" class="a3"></a>
        <a href="/" class="a4"></a>
      </div>
    </div>
    <div class="change2 zauto" v-show="changeCur === 4">
      <ykb></ykb>
    </div>
    <div class="change2 zauto" v-show="changeCur === 5">
      <zsyz></zsyz>
    </div>
    <div class="change2 zauto" v-show="changeCur === 6">
      <cqsj></cqsj>
    </div>
    <div class="change2 zauto" v-show="changeCur === 7">
      <hdjl></hdjl>
    </div>
  </div>
</template>

<style lang="scss">
#yes{
  // text-align: left !important;
  // font-size: 30px !important;
  margin-left: 30px;
}
.my-main {
  min-width: 1200px;
  margin: 0 auto;
}
.my-nav {
  width: 1200px;
}
.my-nav div {
  display: inline-block;
  width: 150px;
  height: 54px;
  font-size: 22px;
  line-height: 54px;
  text-align: center;
  background-color: #f2f2f2;
}

// #home {
//   padding-left: 30px;
//   box-sizing: border-box;
// }

.my-nav a {
  color: #2a6aa7;
}

.my-nav a:hover {
  text-decoration: none;
}

.my-nav span {
  background: url("../assets/home2.png") no-repeat;
  position: absolute;
  width: 23px;
  height: 21px;
  left: 35px;
  top: 17px;
}

.homeB {
  background: url("../assets/home.png") no-repeat !important;
  position: absolute;
  width: 23px;
  height: 21px;
  left: 35px;
  top: 17px;
}

.cur {
  background-color: #275293 !important;
  color: white !important;
}

// .cur span {
//   background: url("../assets/home.png") no-repeat;
// }

.slimBar {
  width: 100%;
  height: 6px;
  background-color: #0b67d4;
}

// 复制自cq change

.change {
  height: 360px;
  position: relative;

  width: 1200px;
  margin: 0 auto;
}
.changeLeft {
  width: 590px;
  height: 320px;
  position: absolute;
  top: 15px;
}
.el-carousel__button {
  display: block;
  opacity: 0.48;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  left: 230px;
  position: relative;
  border-radius: 5px;
}

el-carousel-item {
  position: relative;
}
.grey {
  display: inline-block;
  position: absolute;
  top: 280px;
  left: 0px;
  width: 1000px;
  height: 40px;
  background-color: black;
  opacity: 0.5;
  padding-top: 7px;
  padding-left: 20px;
  font-size: 18px;
  color: white;
}
.aaa {
  display: inline-block;
  position: absolute;
  top: 280px;
  left: 0px;
  width: 200px;
  padding-top: 7px;
  padding-left: 20px;
  font-size: 18px;
  color: white;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis !important;
  white-space: nowrap;
}
.aaa:hover {
  text-decoration: underline;
}
.changeRight {
  background-color: white;
  position: relative;
  left: 610px;
  top: 0px;
  width: 585px;
  height: 320px;
}
.crTop {
  list-style-type: none;
  // float: left;
  float: left;
  padding: 0px;
  margin: 0px;
  height: 50px;
}
.crTopHover {
  border-bottom: 2px solid #2860b5 !important;
}
.crTop li {
  display: inline-block;
  background-color: white;
  width: 195px;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
  font-size: 20px;
  border-bottom: 2px solid rgb(0, 162, 255);
}
.crTop li a {
  text-decoration: none;
  color: black;
}
.crBottom {
  width: 578px;
  height: 267px;
  background-color: white;
  position: relative;
  top: 53px;
  left: 19px;
  vertical-align: text-top;
}

.crBottom ul {
  position: absolute;
  display: block;
  text-decoration: none;
}

.crBottom li {
  color: #cccccc;
  list-style-type: disc;
  line-height: 36px;
  // display: block;
}

.crBottom li a {
  line-height: 36px;
  text-decoration: none;
  color: black;
  font-size: 16px;
  height: 36px !important;
  display: block;
  vertical-align: middle;
  display: inline;
}

.crBottom a:hover {
  text-decoration: underline;
}
// 复制自cq change

.change2 {
  width: 1200px;
  height: 330px;
  margin: 15px auto !important;
}

// change4
.change4l {
  margin-bottom: 20px;
  margin-right: 30px;
  padding: 120px 40px 100px;
  box-sizing: border-box;
  font-size: 28px;
  color: #275394;
  font-family: "Adobe 黑体 Std";
  display: inline-block;
  width: 142px;
  height: 309px;
  background: url("../assets/home-i.png") no-repeat;
  line-height: 36px;
}

.change4c {
  width: 665px;
  height: 310px;
  vertical-align: top;
}

.change4ct {
  height: 36px;

  border-bottom: 3px solid #cfcfcf;
}

.change4ct a {
  font-size: 20px;
  color: #000000;
  display: inline-block;
  height: 40px;
  box-sizing: border-box;
  padding: 0 20px;
}

.change4ctHover {
  font-weight: bold;
  border-bottom: 3px solid #2860b5 !important;
  text-decoration: none !important;
}

.change4cm {
  padding-top: 10px;
}

.change4cm li {
  list-style: none;
  line-height: 34px;
  height: 27px;
  display: inline-block;
  overflow: hidden;
  width: 100%;
}

.change4cm a {
  width: 100%;

  padding-left: 15px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: url("../assets/wz_dian.png") no-repeat left 17px;
}

.change4cf {
  margin-top: 23px;
  position: relative;
  left: -10px;
  top: 6px;
}

.change4cf a {
  width: 210px;
  padding: 0 10px;
  box-sizing: border-box;
  display: inline-block;
  font-size: 16px;
  color: #1b5d9a;
  text-align: center;
  line-height: 44px;
  border: 1px solid #1b5d9a;
  border-radius: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 11px;
}

.change4cf a:hover {
  text-decoration: none;
}

.change4r {
  width: 336px;
  height: 320px;
  display: inline-block;
  position: relative;
  left: 25px;
}

.change4r a {
  display: block;
  width: 336px;
  height: 70px;
  font-size: 0px;
  color: #000;
  box-sizing: border-box;
  margin: 0px;
  margin: 0 0 11px 0;
  border: 0px;
}

.a1 {
  background: url("../assets/xnav10.png");
  background-color: orange;
  background-size: 100% auto;
}

.a2 {
  background: url("../assets/xnav11.png");
  background-color: orange;
  background-size: 100% auto;
}

.a3 {
  background: url("../assets/xnav12.png");
  background-color: orange;
  background-size: 100% auto;
}

.a4 {
  background: url("../assets/xnav13.png");
  background-color: orange;
  background-size: 100% auto;
}
</style>

<script>
import cqfz from "./NavSon/cqfz";
import ykb from "./NavSon/ykb";
import zsyz from "./NavSon/zsyz";
import cqsj from "./NavSon/cqsj";
import hdjl from "./NavSon/hdjl";
import zfld from "./NavSon/zfld";

import lkq from "../assets/lkq.jpg";
import xjp from "../assets/xjp.jpg";
import zy from "../assets/zhiyuan.jpg";
import wd from "../assets/tiwen.jpg";
import ys from "../assets/ys.jpg";

import fg from "../assets/fg.jpg";
import gwy from "../assets/gwy.jpg";
import zl from "../assets/zl.jpg";
import xyzg from "../assets/xyzg.jpg";
import szcq from "../assets/szcq.jpg";
import ttxxr1 from "../assets/ttxxr1.jpg";
import ttxxr2 from "../assets/ttxr2.jpg";
import ttxxr3 from "../assets/ttxr3.jpg";
import ttxxr4 from "../assets/ttxr4.png";
import ttxxr5 from "../assets/ttxr5.jpg";

export default {
  components: { cqfz, ykb, zsyz, cqsj, hdjl, zfld },
  data: () => {
    return {
      changeCur: 0,
      switch1: 1,
      switch2: 1,
      gwyxx: [
        {
          words: "李克强考察这个平台后说：现在看来最终战胜疫情的曙光就要出现了"
        },
        { words: "李克强考察国家新冠肺炎药品医疗器械应急平台" },
        {
          words:
            "李克强主持召开中央应对新冠肺炎疫情工作领导小组会议 进一步部署降低病亡率和保障生活必需品供应等"
        },
        { words: "孙春兰：切实发挥支援湖北医务人员火线上的中流砥柱作用" },
        { words: "胡春华强调：全力做好稳外贸稳外资和生活必需品保供工作" },
        { words: "王毅：坚决打赢抗击疫情阻击战 推动构建人类命运共同体" },
        { words: "赵克志部署打击治理跨境赌博工作" }
      ],
      jrcq: [
        { words: "陈敏尔与国务院联防联控机制第二十一指导组座谈" },
        {
          words:
            "国务院联防联控机制第二十一指导组召开来渝指导情况反馈会 唐良智孙新华出席"
        },
        { words: "川渝建立疫情联防联控工作机制" },
        {
          words:
            '稳投资 重庆打出"组合拳" 近期准备开工复工100个项目 年度投资预计1200亿元'
        },
        { words: "2020年高校毕业生网络双选活动3月5日启动" },
        { words: "重庆各类企业、住宅小区、公共场所全面推行使用“渝康码”" },
        {
          words:
            "重庆市人民政府办公厅关于征集新型冠状病毒感染的肺炎疫情防控工作问题线索及意见建议的公告"
        }
      ],
      zwhd: [
        { words: "【市公安局】研究部署大数据信息化服务疫情防控工作" },
        { words: "【市教委】重庆出台中职学校《在线教学工作方案》" },
        {
          words:
            "【市生态环境局】企业复工复产遇到环保问题 可拨打“12369”专人专班解决"
        },
        { words: "【开州】加强城市管理执法力度 筑牢疫情防护网" },
        { words: "【潼南】183家规上工业企业全面复工" },
        { words: "【石柱】12条政策助新型农业经营主体渡难关" },
        { words: "【北碚】金刚碑历史文化街区项目复工 核心区建设已完成80%" },
        { words: '【綦江】出台金融扶持政策 复工复产按下"快捷键"' }
      ],

      //   市政府文件
      szfwj: [
        {
          words:
            "转发国务院应对新型冠状病毒感染肺炎疫情联防联控机制关于进一步做好民政服务机构疫情防控工作通知的通知"
        },
        {
          words: "关于规范使用“渝康码”的通知"
        },
        {
          words:
            "重庆市人民政府办公厅关于做好2020年市级重大项目实施有关工作的通知"
        },
        {
          words: "关于深入开展爱国卫生运动扎实做好新冠肺炎疫情防控工作的通知"
        },
        {
          words: "关于加快推进全市重大项目复工开工的通知"
        },
        {
          words: "关于统筹做好分区分级分类疫情防控工作的通知"
        }
      ],
      //   政策解读
      zcjd: [
        { words: "“渝康码”如何申办？哪些场所使用？你关心的信息都在这里" },
        { words: "重庆公安出台37条措施服务民生助力企业复工复产" },
        { words: "重庆将细化措施全面禁食野生动物" },
        { words: "抢进度、赶时间、补损失 8个数字看懂重庆有多拼" },
        { words: "一图读懂丨中小企业申报疫情援企稳岗返还流程来了" },
        { words: `看重庆如何解答"春耕题" "绿色通道"保障春耕农资供应` }
      ],
      zfgb: [
        {
          words:
            "重庆市人民政府关于印发重庆市加快推动5G发展行动计划（2019—2022年）的通知"
        },
        {
          words:
            "重庆市人民政府关于表彰重庆市民族团结进步模范集体和模范个人的决定"
        },
        { words: "重庆市人民政府关于促进乡村产业振兴的实施意见" },
        {
          words:
            "重庆市人民政府办公厅关于切实加强非洲猪瘟防控稳定生猪生产保障市场供应促进转型升级的实施意见"
        },
        {
          words:
            "重庆市人民政府办公厅关于建立健全农村供水工程运行管护长效机制的意见（试行）"
        },
        {
          words:
            "重庆市人民政府办公厅关于印发重庆市引进科技创新资源行动计划（2019—2022年）的通知"
        }
      ],
      navList: [
        { name: "首页",memo:"yes" },
        { name: "政府领导",memo:"no" },
        { name: "重庆发展" ,memo:"no" },
        { name: "政务公开",memo:"no"  },
        { name: "渝快办" ,memo:"no" },
        { name: "招商引资" ,memo:"no" },
        { name: "重庆数据" ,memo:"no" },
        { name: "互动交流",memo:"no"  }
      ],

      list: [
        {
          words: "春回大地耕作忙",
          img: xjp
        },
        { words: "志愿者助力抗疫情", img: lkq },
        { words: "驰援湖北 第十二批医疗队集结出发", img: zy },
        { words: "“智能人体测温系统”助力疫情防控", img: wd },
        { words: "复工复产保供应", img: fg },
        { words: "疑似病例在这里确诊 ——探访核酸检测实验室", img: ys }
      ],
      crRight: [
        {
          wordss: "啊手动阀手动阀十分的"
        },
        {
          wordss: "啊撒旦立刻就发送大附件"
        },
        {
          wordss: "啊手动阀手动阀手动阀第三方"
        },
        {
          wordss: "啊手动阀手动阀十分"
        },
        {
          wordss:
            "啊手动阀手动阀的撒方法大大撒发射点反对啊手动阀手动asdfa阿斯顿发顺丰dads发大水发大水发阀"
        }
      ]
    };
  },
  methods: {
    curs: function(index) {
      this.changeCur = index;
    },
    addActive($event) {
      $event.currentTarget.className = "cur";
      $event.currentTarget.firstElementChild.className = "cur";
    },
    removeActive($event) {
      $event.currentTarget.className = "";
      $event.currentTarget.firstElementChild.className = "";
    },
    addActive1($event) {
      $event.currentTarget.className = "cur";
      $event.currentTarget.children[1].className = "cur";
    },
    removeActive1($event) {
      $event.currentTarget.className = "";
      $event.currentTarget.children[1].className = "";
    },
    myEnter1() {
      this.switch2 = 1;
      console.log("1");
    },
    myEnter2() {
      this.switch2 = 2;
      console.log("2");
    },
    myEnter3() {
      this.switch2 = 3;
      console.log("3");
    },
    yourEnter1() {
      this.switch1 = 1;
    },
    yourEnter2() {
      this.switch1 = 2;
    },
    yourEnter3() {
      this.switch1 = 3;
    }
  }
};

// setTimeout(function() {
//   var cao = document.getElementById("cao");
//   var ans = getComputedStyle(cao, null);
//   console.log(ans.display);
// }, 1000);
</script>
