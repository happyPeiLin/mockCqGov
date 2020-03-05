<template>
  <div class="myFooter zauto w1200">
    <div class="webs">
      <!-- <el-button @click="show3 = !show3">Click Me</el-button> -->
      <ul>
        <li @mouseover="myShow1" @mouseleave="show1=0">
          中国政府网
          <img src="../assets/xhy-linki.png" alt />
        </li>
        <li @mouseover="myShow2" @mouseleave="show1=0">
          国务院部门网站
          <img src="../assets/xhy-linki.png" alt />
        </li>
        <li @mouseover="myShow3" @mouseleave="show1=0">
          地方政府网站
          <img src="../assets/xhy-linki.png" alt />
        </li>
        <li @mouseover="myShow4" @mouseleave="show1=0">
          市政府部门网站
          <img src="../assets/xhy-linki.png" alt />
        </li>
        <li @mouseover="myShow5" @mouseleave="show1=0">
          区县政府网站
          <img src="../assets/xhy-linki.png" alt />
        </li>
        <li @mouseover="myShow6" @mouseleave="show1=0">
          其它网站
          <img src="../assets/xhy-linki.png" alt />
        </li>
        <li @mouseover="myShow7" @mouseleave="show1=0">
          公共服务单位网站
          <img src="../assets/xhy-linki.png" alt />
        </li>
        <li @mouseover="myShow8" @mouseleave="show1=0">
          新闻媒体网站
          <img src="../assets/xhy-linki.png" alt />
        </li>
      </ul>

      <el-collapse-transition>
        <div class="web1" v-show="show1" @mouseover="show1 = 1" @mouseleave="show1 = 0">
          <ul>
            <li v-for="(site,index) in sites" :key="index">
              <a href="#">{{site.name}}</a>
            </li>
          </ul>
        </div>
      </el-collapse-transition>
    </div>
    <div class="last">
      <div class="lastL">
        <p>
          <a href="#">网站地图</a>
          <span>|</span>
          <a href="#">版权申请</a>
          <span>|</span>
          <a href="#">公务信箱</a>
          <span>|</span>
          <a href="#">网站导航</a>
          <span>|</span>
          <a href="#">联系我们</a>
        </p>
        <p>重庆市人民政府版权所有 重庆市人民政府办公厅主办</p>
        <p>网站标识码：5000000095 ICP备案：渝ICP备05003300号国际联网备案：渝公网安备 50010302000814号</p>
        <a href="#">
          <img src="../assets/dzjg.png" alt />
        </a>
        <a href="#" style="margin-left:25px">
          <img src="../assets/footer2.png" alt />
        </a>
      </div>
      <div class="lastR">
        <img src="../assets/sideQrcode.png" alt />
        <a href="#"></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.myFooter {
  margin-top: 20px !important;
  height: 100px;
}

// 以下引用cq1中的内容

.webs {
  position: relative;
  border-bottom: 2px solid grey;
  width: 1200px;
}

.webs ul {
  margin: 0px;
  padding: 0px;
}

.webs li {
  display: inline-block;
  width: 150px;
  background-color: white;
  text-align: center;
  line-height: 64px;
  border-top: 5px solid blue;
}

.webs li:hover {
  background-color: #f7f7f7;
}
.web1 {
  background-color: #f7f7f7;
  width: 1200px;
  height: 200px;
  position: relative;
  left: 0px;
  top: 0px;
}

.myclear {
  clear: both;
}

.test {
  height: 3px;
  background-color: red;
}

.web1 li {
  border-top: none;
  width: 171px;
  height: 50px;
  line-height: 50px;
  background-color: #f7f7f7;
}

.web1 a {
  text-decoration: none;
  color: black;
}
.web1 a:hover {
  text-decoration: underline;
}

.last {
  margin: 0 auto;
  width: 1200px;
  height: 194px;
  position: relative;
}

.lastL {
  width: 700px;
  height: 100%;
}

.lastL a {
  font-size: 14px;
  color: #333;
  text-decoration: none;
}
.lastL a:hover {
  color: #bf0103;
}
.lastL span {
  padding-left: 10px;
  padding-right: 15px;
}
.lastL p {
  display: inline-block;
  margin: 0;
  height: 28px;
  font-size: 14px;
}

.lastR {
  height: 100%;
  display: inline-block;
  position: relative;
  top: -160px;
  left: 900px;
}

.lastR a {
  display: block;
  height: 120px;
  width: 80px;
  position: absolute;
  top: 0px;
  left: 175px;
}
// 以上引用cq1中的内容
</style>


<script>
export default {
  data: () => {
    return {
      show1: false,
      sites: null,
      websites1: [
        {
          name: "中国政府网"
        }
      ],
      websites2: [
        {
          name: "外交部"
        },
        {
          name: "国防部"
        },
        {
          name: "外交部"
        },
        {
          name: "国防部"
        },
        {
          name: "外交部"
        },
        {
          name: "国防部"
        },
        {
          name: "外交部"
        },
        {
          name: "国防部"
        },
        {
          name: "外交部"
        },
        {
          name: "国防部"
        },
        {
          name: "外交部"
        },
        {
          name: "国防部"
        },
        {
          name: "外交部"
        },
        {
          name: "国防部"
        },
        {
          name: "外交部"
        },
        {
          name: "国防部"
        },
        {
          name: "外交部"
        },
        {
          name: "国防部"
        }
      ],
      websites3: [
        {
          name: "北京"
        },
        {
          name: "天津"
        },
        {
          name: "河北"
        },
        {
          name: "山西"
        },
        {
          name: "北京"
        },
        {
          name: "天津"
        },
        {
          name: "河北"
        },
        {
          name: "山西"
        },
        {
          name: "北京"
        },
        {
          name: "天津"
        },
        {
          name: "河北"
        },
        {
          name: "山西"
        },
        {
          name: "北京"
        },
        {
          name: "天津"
        },
        {
          name: "河北"
        },
        {
          name: "山西"
        },
        {
          name: "北京"
        },
        {
          name: "天津"
        },
        {
          name: "河北"
        },
        {
          name: "山西"
        }
      ],
      websites4: [
        {
          name: "市发展改革委"
        },
        {
          name: "市教委"
        },
        {
          name: "市科技局"
        },
        {
          name: "市经济信息委"
        },
        {
          name: "市发展改革委"
        },
        {
          name: "市教委"
        },
        {
          name: "市科技局"
        },
        {
          name: "市经济信息委"
        },
        {
          name: "市发展改革委"
        },
        {
          name: "市教委"
        },
        {
          name: "市科技局"
        },
        {
          name: "市经济信息委"
        }
      ],
      websites5: [
        {
          name: "万州区"
        },
        {
          name: "黔江区"
        },
        {
          name: "涪陵区"
        },
        {
          name: "渝中区"
        },
        {
          name: "万州区"
        },
        {
          name: "黔江区"
        },
        {
          name: "涪陵区"
        },
        {
          name: "渝中区"
        },
        {
          name: "万州区"
        },
        {
          name: "黔江区"
        },
        {
          name: "涪陵区"
        },
        {
          name: "渝中区"
        },
        {
          name: "万州区"
        },
        {
          name: "黔江区"
        },
        {
          name: "涪陵区"
        },
        {
          name: "渝中区"
        },
        {
          name: "万州区"
        },
        {
          name: "黔江区"
        },
        {
          name: "涪陵区"
        },
        {
          name: "渝中区"
        },
        {
          name: "万州区"
        },
        {
          name: "黔江区"
        },
        {
          name: "涪陵区"
        },
        {
          name: "渝中区"
        }
      ],
      websites6: [
        {
          name: "市纪委监委机关"
        },
        {
          name: "市委组织部"
        },
        {
          name: "市委宣传部"
        },
        {
          name: "市委统战部"
        },
        {
          name: "市纪委监委机关"
        },
        {
          name: "市委组织部"
        },
        {
          name: "市委宣传部"
        },
        {
          name: "市委统战部"
        },
        {
          name: "市纪委监委机关"
        },
        {
          name: "市委组织部"
        },
        {
          name: "市委宣传部"
        },
        {
          name: "市委统战部"
        },
        {
          name: "市纪委监委机关"
        },
        {
          name: "市委组织部"
        },
        {
          name: "市委宣传部"
        },
        {
          name: "市委统战部"
        },
        {
          name: "市纪委监委机关"
        },
        {
          name: "市委组织部"
        },
        {
          name: "市委宣传部"
        },
        {
          name: "市委统战部"
        },
        {
          name: "市纪委监委机关"
        },
        {
          name: "市委组织部"
        },
        {
          name: "市委宣传部"
        },
        {
          name: "市委统战部"
        }
      ],
      websites7: [
        {
          name: "重庆能源集团"
        },
        {
          name: "重庆水务集团"
        },
        {
          name: "重庆燃气集团"
        },
        {
          name: "重庆交运集团"
        },
        {
          name: "重庆能源集团"
        },
        {
          name: "重庆水务集团"
        },
        {
          name: "重庆燃气集团"
        },
        {
          name: "重庆交运集团"
        },
        {
          name: "重庆能源集团"
        },
        {
          name: "重庆水务集团"
        },
        {
          name: "重庆燃气集团"
        },
        {
          name: "重庆交运集团"
        },
        {
          name: "重庆能源集团"
        },
        {
          name: "重庆水务集团"
        },
        {
          name: "重庆燃气集团"
        },
        {
          name: "重庆交运集团"
        }
      ],
      websites8: [
        {
          name: "人民日报重庆分社"
        },
        {
          name: "新华社重庆分社"
        },
        {
          name: "中青报"
        },
        {
          name: "重庆日报"
        },
        {
          name: "人民日报重庆分社"
        },
        {
          name: "新华社重庆分社"
        },
        {
          name: "中青报"
        },
        {
          name: "重庆日报"
        },
        {
          name: "人民日报重庆分社"
        },
        {
          name: "新华社重庆分社"
        },
        {
          name: "中青报"
        },
        {
          name: "重庆日报"
        }
      ]
    };
  },
  methods: {
    myShow1: function() {
      console.log("fuck1");
      this.sites = this.websites1;
      this.show1 = 1;
    },
    myShow2: function() {
      console.log("fuck2");
      this.sites = this.websites2;
      this.show1 = 1;
    },
    myShow3: function() {
      this.sites = this.websites3;
      this.show1 = 1;
    },
    myShow4: function() {
      this.sites = this.websites4;
      this.show1 = 1;
    },
    myShow5: function() {
      this.sites = this.websites5;
      this.show1 = 1;
    },
    myShow6: function() {
      this.sites = this.websites6;
      this.show1 = 1;
    },
    myShow7: function() {
      this.sites = this.websites7;
      this.show1 = 1;
    },
    myShow8: function() {
      this.sites = this.websites8;
      this.show1 = 1;
    }
  }
};
</script>