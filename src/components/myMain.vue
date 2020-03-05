<template>
  <div class="mine-main">
    <a href="/" class="qlyf zauto"></a>
    <div class="pic3 zauto w1200">
      <a href="/" class="pic3l"></a>
      <a href="/" class="pic3c"></a>
      <a href="/" class="pic3r">
        <el-carousel arrow="always">
          <el-carousel-item v-for="(item,index) in fff" :key="index">
            <img :src="item.img" />
          </el-carousel-item>
        </el-carousel>
      </a>
    </div>

    <div class="gzdt zauto w1200">
      <div class="gzdtL border">
        <div class="gzdtLL">
          <div class="gzdtLLT">
            <p>市政府领导工作动态</p>
            <a href="/">更多></a>
          </div>
          <div class="gzdtLLM">
            <div class="gzdtLLM1 re">
              <img src="../assets/wz_dian.png" alt class="ab" style="top:13px;left:-14px;" />
              <strong>唐良智</strong>
              <p>召开新型冠状病毒感染的肺炎疫情联防联控机制工作小组会议；召开全市新型冠状病毒感染的肺炎疫情防控工作领导小组电视电话会议；研究专项工作。</p>
            </div>

            <div class="gzdtLLM2 re">
              <img src="../assets/wz_dian.png" alt class="ab" style="top:13px;left:-14px;" />
              <strong>吴存荣</strong>
              <p>出席全市新型冠状病毒感染的肺炎疫情防控工作领导小组电视电话会议；研究专项工作。</p>
            </div>
            <div class="gzdtLLM3 re">
              <img src="../assets/wz_dian.png" alt class="ab" style="top:13px;left:-14px;" />
              <strong>陆克华</strong>
              <p>检查春运安全保障工作并慰问春运一线干部职工；研究专项工作。</p>
            </div>
          </div>
        </div>
        <div class="gzdtLR">
          <!-- 注意下面是借用LL，实际为LR -->
          <div class="gzdtLLT">
            <p>市政府常务会议</p>
            <a href="/">更多></a>
          </div>
          <div class="gzdtLRM">
            <ul>
              <li style="border-bottom:1px dashed #888;padding-bottom:40px; margin-bottom:15px">
                <a href="/" style="padding-left:0px">重庆市政府召开第86次常务会议</a>
                <span>会议深入贯彻落实习近平总书记在统筹推进新冠肺炎疫情防控和经济社会发展工作部署会议上的重要讲话精神，研究部</span>
              </li>
              <li>
                <a href="/" style="padding-left:0px">重庆市政府召开第85次常务会议</a>
              </li>
              <li>
                <a href="/" style="padding-left:0px">重庆市政府召开第84次常务会议</a>
              </li>
              <li>
                <a href="/" style="padding-left:0px">重庆市政府召开第83次常务会议</a>
              </li>
              <li>
                <a href="/" style="padding-left:0px">重庆市政府召开第82次常务会议</a>
              </li>
              <li>
                <a href="/" style="padding-left:0px">重庆市政府召开第81次常务会议</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="gzdtR border re">
        <p
          style="display:block;font-size:20px;padding:15px 10px 10px 20px;border-bottom:3px solid #cfcfcf;height:52px;box-sizing:border-box"
        >渝快办</p>

        <a class="bsdt" href="/"></a>

        <a class="zs ab" href="/"></a>
        <a class="ys ab" href="/"></a>
        <a class="zx ab" href="/"></a>
        <a class="yx ab" href="/"></a>
        <div class="searchWrap">
          <input type="text" placeholder="服务事项查询" />
          <button></button>
        </div>
        <div class="slider3">
          <el-carousel arrow="never">
            <el-carousel-item v-for="(item,index) in slider3" :key="index">
              <img :src="item.img" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>

    <div class="ttxx zauto w1200">
      <a href="/" class="ttxxL"></a>

      <div class="ttxxR">
        <a href="/" class="a1"></a>
        <a href="/" class="a2"></a>
        <a href="/" class="a3"></a>
      </div>
    </div>

    <div class="gzdt zauto w1200" style="height:331px">
      <div class="gzdtL border" style="height:331px">
        <div class="zsyz">招商引资</div>
        <div class="gzdtLL" style="margin-top:25px;">
          <div class="gzdtLLT">
            <p>招商活动</p>
            <a href="/" style="padding-left:234px">更多></a>
          </div>
          <div class="gzdtLLM" style="margin-top:-5px;">
            <div class="gzdtLLM1 re">
              <img src="../assets/wz_dian.png" alt class="ab" style="top:13px;left:-14px;" />
              <p style="padding-left:0px">重庆市政府与启迪控股签订战略合作协议 启迪数据云集团正式揭牌</p>
            </div>

            <div class="gzdtLLM2 re">
              <img src="../assets/wz_dian.png" alt class="ab" style="top:13px;left:-14px;" />
              <p style="padding-left:0px">长寿一季度“云签约”29个项目 投资总额218亿元</p>
            </div>
            <div class="gzdtLLM3 re">
              <img src="../assets/wz_dian.png" alt class="ab" style="top:13px;left:-14px;" />
              <p style="padding-left:0px">两江新区“云签约”实现常态化 再引百亿元投资</p>
            </div>
            <div class="gzdtLLM3 re">
              <img src="../assets/wz_dian.png" alt class="ab" style="top:13px;left:-14px;" />
              <p style="padding-left:0px">渝北区300余个招商项目开工复工</p>
            </div>
            <div class="gzdtLLM3 re">
              <img src="../assets/wz_dian.png" alt class="ab" style="top:13px;left:-14px;" />
              <p style="padding-left:0px">大数据促云招商 九龙坡“无接触”签下10项目</p>
            </div>
          </div>
        </div>
        <div class="gzdtLR" style="margin-top:23px;">
          <!-- 注意下面是借用LL，实际为LR -->
          <div class="gzdtLLT">
            <p>重大项目</p>
            <a href="/">更多></a>
          </div>

          <div class="zdxm">
            <ul>
              <li>
                <a href="/">万州机场改扩建工程正式复工 T2航站楼力争今年上半年开工</a>
              </li>
              <li>
                <a href="/">2020年市级重大项目出炉 924个重大建设项目估算总投资2.72万亿元</a>
              </li>
              <li>
                <a href="/">重庆11条轨道交通在建线路全面复工</a>
              </li>
              <li>
                <a href="/">渝黔高速公路扩能工程抓紧建设</a>
              </li>
            </ul>
          </div>

          <!-- <div class="gzdtLRM">
            <ul>
              <li style="line-height:36px;height36px">
                <a href="/" style="padding-left:0px;display:inline-block;line-height:36px;height36px">万州机场改扩建工程正式复工 T2航站楼力争今年上半年开工</a>
              </li>
              <li style="line-height:36px;height36px;">
                <a href="/" style="padding-left:0px;display:inline-block;line-height:36px;height36px">2020年市级重大项目出炉 924个重大建设项目估算总投资2.72万亿元</a>
              </li>
              <li style="line-height:36px;height36px">
                <a href="/" style="padding-left:0px;display:inline-block;line-height:36px;height36px">重庆11条轨道交通在建线路全面复工</a>
              </li>
              <li style="line-height:36px;height36px">
                <a href="/" style="padding-left:0px;display:inline-block;line-height:36px;height36px">渝黔高速公路扩能工程抓紧建设</a>
              </li>
            </ul>
          </div>-->
        </div>
      </div>
      <div class="gzdtR border re" style="height:331px">
        <p
          style="display:block;font-size:20px;padding:15px 10px 10px 20px;border-bottom:3px solid #cfcfcf;height:52px;box-sizing:border-box"
        >市长信箱回复选登</p>
        <div class="szxx">
          <ul>
            <li>
              <a href="/">民宿不退款</a>
            </li>
            <li>
              <a href="/">燃气供应不足</a>
            </li>
            <li>
              <a href="/">工地夜间施工扰民</a>
            </li>
            <li>
              <a href="/">丧事噪音</a>
            </li>
            <li>
              <a href="/">康居西城违停车辆</a>
            </li>
          </ul>
        </div>
        <a href class="wyxx"></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// .el-carousel__item h3 {
//   color: #475669;
//   font-size: 14px;
//   opacity: 0.75;
//   line-height: 200px;
//   margin: 0;
// }

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }

.qlyf {
  width: 1200px;
  height: 100px;
  display: block;
  margin-top: 15px;
  background: url("../assets/yq-sy-banner.png") no-repeat;
  background-size: 100% 100%;
}

.pic3 {
  height: 100px;
  margin-top: 15px !important;
}

.pic3 a {
  display: inline-block;
  width: 408px;
  height: 100%;
}

.pic3l {
  background: url("../assets/ykb.png");
  vertical-align: top;
}

.pic3l:hover {
  opacity: 0.4;
}

.pic3c {
  background: url("../assets/yshj.png");
  margin-left: 24px;
  vertical-align: top;
}

.pic3c:hover {
  opacity: 0.4;
}

.pic3r {
  width: 336px !important;
  background-color: orange;
  margin-left: 24px !important;
  vertical-align: top;
}

.pic3r img {
  width: 100%;
  height: 100px;
}

.pic3r button{
  opacity: 0.9 !important;
}
.test1 {
  width: 300px;
  height: 3000px;
  background-color: pink;
  margin-top: 30px;
}

.el-carousel__arrow {
  top: 17%;
}

.gzdt {
  height: 380px;
  margin-top: 15px !important;
}

.gzdtL {
  width: 842px;
  height: 380px;
  display: inline-block;
  vertical-align: top;
}

.gzdtLL {
  width: 378px;
  height: 332px;
  margin: 35px 0 0 15px;
  vertical-align: top;
  display: inline-block;
}

.gzdtLLT {
  margin-bottom: 22px;
  height: 22px;

  border-left: 5px solid #275293;
}

.gzdtLL a {
  display: inline-block;
  color: orange;
  padding-left: 160px;
  font-size: 14px;
}

.gzdtLR p {
  display: inline-block;
  color: #275293;
  font-size: 18px;
  padding-left: 7px;
}

.gzdtLR a {
  display: inline-block;
  color: orange;
  padding-left: 200px;
  font-size: 14px;
}

.gzdtLL p {
  display: inline-block;
  color: #275293;
  font-size: 18px;
  padding-left: 7px;
}

.gzdtLLM {
  margin-left: 15px;
  width: 95%;
}
.gzdtLLM strong {
  display: inline-block !important;
}

.gzdtLLM p {
  font-size: 16px;
  display: inline !important;
  color: #333;
  line-height: 34px;
}

.gzdtLR {
  width: 378px;
  height: 332px;
  margin: 35px 0 0 15px;
  vertical-align: top;
  display: inline-block;
  margin-left: 60px;
}

.gzdtR {
  width: 337px;
  height: 306px;
  margin-left: 17px;
  display: inline-block;
  vertical-align: top;
}

.gzdtLR p {
  display: inline-block;
  color: #275293;
  font-size: 18px;
  padding-left: 7px;
}

// .gzdtLR a {
//   display: inline-block;
//   color: orange;
//   padding-left: 199px;
//   font-size: 14px;
// }

.gzdtLRM a {
  font-size: 16px;
  color: #333;
  line-height: 25px;
  display: block;
}
.gzdtLRM li {
  height: 36px;
}
.gzdtLRM span {
  color: #888 !important;
  font-size: 14px !important;
  line-height: 22px !important;
  height: 44px !important;
  overflow: hidden;
  text-indent: 1.2em;
  display: inline-block;
}

.bsdt {
  margin-top: 10px;
  background: url("../assets/bsdt.jpg");
  display: block;
  width: 336px;
  height: 75px;
  box-sizing: 100% 100%;
}

.zs {
  display: inline-block;
  width: 152px;
  height: 41px;
  background: url("../assets/zs.jpg");
  background-size: 100% 100%;
  left: 12px;
  top: 150px;
}
.ys {
  display: inline-block;
  width: 152px;
  height: 41px;
  background: url("../assets/yss.jpg");
  background-size: 100% 100%;

  left: 174px;
  top: 148px;
}
.zx {
  display: inline-block;
  width: 152px;
  height: 41px;
  background: url("../assets/zx.jpg") no-repeat;
  background-size: 99% 100%;

  left: 14px;
  top: 201px;
}
.yx {
  display: inline-block;
  width: 152px;
  height: 41px;
  background: url("../assets/yx.jpg");
  background-size: 100% 100%;

  left: 174px;
  top: 200px;
}

.searchWrap {
  margin: 120px 0px 0px 14px;
  width: 308px;
  height: 34px;

  border: 1px solid #4e9ddd;
  border-radius: 8px;
  overflow: hidden;
}

.searchWrap input {
  width: 250px;
  line-height: 34px;
  height: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  color: #333;
  border: none;
  outline: none;
  font-size: 16px;
}

.searchWrap button {
  width: 58px;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left: 1px solid #4e9ddd;
  background: #e9e8e8 url("../assets/search.jpg") center no-repeat;
}

.slider3 {
  width: 338px;
  height: 59px;
  background-color: orange;
  margin-top: 29px;
}

.ttxx {
  height: 123px;
  margin-top: 20px !important;
}

.ttxxL {
  display: inline-block;
  height: 100%;
  width: 366px;
  // background-color: pink;
  background: url("../assets/ttxx.jpg");
  vertical-align: top;
}

.ttxxR {
  display: inline-block;
  width: 807px;
  height: 123px;
  margin-left: 27px;
  overflow: hidden;
}

.ttxxR .a1 {
  display: inline-block;
  width: 260px;
  height: 123px;
  background: url("../assets/a1.png");
  margin-right: 13px;
  background-size: 100% 100%;
}
.ttxxR .a2 {
  display: inline-block;
  width: 260px;
  height: 123px;
  background: url("../assets/a2.jpg");
  margin-right: 13px;
  background-size: 100% 100%;
}
.ttxxR .a3 {
  display: inline-block;
  width: 260px;
  height: 123px;
  background: url("../assets/a3.jpg");
  background-size: 100% 100%;
  margin-left: 1px;
}

.zsyz {
  width: 100%;
  height: 52px;
  border-bottom: 3px solid #cfcfcf;
  font-size: 20px;
  padding-top: 15px;
  padding-left: 20px;
  box-sizing: border-box;
}

.zdxm {
  margin-top: -12px;
}

.zdxm li {
  width: 100%;
  line-height: 36px;
}

.zdxm a {
  display: inline-block;
  padding-left: 15px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
  max-width: 90%;
  background: url("../assets/wz_dian.png") no-repeat left 13px;
}

.szxx {
  margin: 15px 0 0 15px;
}

.szxx a {
  display: inline-block;
  padding-left: 15px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
  max-width: 90%;
  background: url("../assets/wz_dian.png") no-repeat left 13px;
}

.szxx li {
  height: 36px;
}

.wyxx {
  margin-top: 5px;
  display: block;
  width: 310px;
  height: 64px;
  background-color: orange;
  margin-left: 15px;
  background: url("../assets/wyxx.jpg");
}
</style>

<script>
import pic3r1 from "../assets/pic3r1.jpg";
import pic3r2 from "../assets/pic3r2.jpg";
import szcq from "../assets/szcq.jpg";
import xyzg from "../assets/xyzg.jpg";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";
import a4 from "../assets/a4.jpg";
import a5 from "../assets/a5.jpg";
import a6 from "../assets/a6.jpg";

export default {
  data: () => {
    return {
      fff: [{ img: pic3r1 }, { img: pic3r2 }, { img: pic3r1 }, { img: pic3r2 }],
      slider3: [
        {
          img: szcq
        },
        {
          img: xyzg
        },
        {
          img: szcq
        },
        {
          img: xyzg
        },
        {
          img: szcq
        },
        {
          img: xyzg
        }
      ],
      slider4: [
        { img: a1 },
        { img: a2 },
        { img: a3 },
        { img: a4 },
        { img: a5 },
        { img: a6 }
      ]
    };
  }
};
</script>