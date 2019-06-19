<template>
  <div>
    <el-table
      :data="tableList"
      border
      empty-text="-"
      style="text-align:center;width: 90%; margin:10px auto;left:0;right:0;">
      <el-table-column
        prop="brand"
        label="品牌"
        min-width="60">
      </el-table-column>
      <el-table-column
        prop="model"
        label="车系"
        min-width="100">
      </el-table-column>
      <el-table-column label="参数">
        <el-table-column
        prop="displacement"
        label="排量"
        sortable
        min-width="60">
        </el-table-column>
        <el-table-column
        prop="mileage"
        label="里程数"
        sortable
        min-width="60">
        </el-table-column>
        <el-table-column
        prop="oldPrice"
        label="二手价"
        sortable
        min-width="60">
        </el-table-column>
        <el-table-column
        label="照片"
        min-width="180">
          <template slot-scope="props">
            <div class="block">
              <el-carousel
                :height = "'180px'"
                :autoplay="false"
                arrow="never"
              >
                <el-carousel-item v-for="(item, index) in props.row.faceImage" :key="index">
                  <div :style="{
                    width:'100%',
                    height:'100%',
                    backgroundImage:`url(${item})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    }"></div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </template>
        </el-table-column>
        <el-table-column
        prop="cardTime"
        label="上牌时间"
        sortable
        min-width="100">
        </el-table-column>
        <el-table-column
        prop="area"
        label="上牌地点"
        min-width="60">
        </el-table-column>
      </el-table-column>
      <el-table-column
      prop="phone"
      label="卖家手机"
      min-width="110">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="100">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status === 0" @click="handleClick(scope.row.id)">审核</el-button>
          <el-button type="info" v-if="scope.row.status === 1">已处理</el-button>
          <el-button type="danger" v-if="scope.row.status === 3">已取消</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="tableData.length"
      :hide-on-single-page="Math.ceil(tableData.length / 10) < 2"
      @current-change="handleCurrentChange"
      style="text-align:center;">
    </el-pagination>
    <el-dialog
      title="提交审核单"
      :visible.sync="dialogVisible"
      width="800px"
      :show-close="false"
      :close-on-click-modal="false"
      center>
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <el-form v-if="active === 0" :rules="rules1" :inline="true" label-width="80px" :model="rule1Form" label-position="right" status-icon ref="rule1Form" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="rule1Form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="rule1Form.age"></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="idCard">
          <el-input v-model="rule1Form.idCard"></el-input>
        </el-form-item>
        <el-form-item label="地点" prop="area">
          <el-select v-model="rule1Form.area" placeholder="请选择地域">
            <el-option label="西安" value="西安"></el-option>
            <el-option label="北京" value="北京"></el-option>
            <el-option label="上海" value="上海"></el-option>
            <el-option label="深圳" value="深圳"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号" prop="number">
          <el-input v-model="rule1Form.number"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="rule1Form.sex" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职业" prop="profession">
          <el-select v-model="rule1Form.profession" placeholder="请选择职业">
            <el-option label="学生" value="学生"></el-option>
            <el-option label="工人" value="工人"></el-option>
            <el-option label="自由职业" value="自由职业"></el-option>
            <el-option label="职工" value="职工"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <div style="text-align:center">
          <el-form-item>
            <el-button @click="next('rule1Form')">
              提交
            </el-button>
          </el-form-item>
        </div>
      </el-form>
      <el-form v-if="active === 1" :rules="rules2" :inline="true" label-width="120px" :model="rule2Form" label-position="right" status-icon ref="rule2Form" class="demo-ruleForm">
        <el-form-item label="品牌" prop="brand">
          <el-input v-model="rule2Form.brand"></el-input>
        </el-form-item>
        <el-form-item label="车系" prop="model">
          <el-input v-model="rule2Form.model"></el-input>
        </el-form-item>
        <el-form-item label="排量" prop="displacement">
          <el-input v-model="rule2Form.displacement"></el-input>
        </el-form-item>
        <el-form-item label="里程（万里）" prop="mileage">
          <el-input v-model="rule2Form.mileage"></el-input>
        </el-form-item>
        <el-form-item label="售价（万元）" prop="old_price">
          <el-input v-model="rule2Form.old_price"></el-input>
        </el-form-item>
        <el-form-item label="车龄" prop="carAge">
          <el-input v-model="rule2Form.carAge"></el-input>
        </el-form-item>
        <el-form-item label="车型" prop="carModel">
          <el-input v-model="rule2Form.carModel"></el-input>
        </el-form-item>
        <el-form-item label="排放" prop="letOut">
          <el-input v-model="rule2Form.letOut"></el-input>
        </el-form-item>
        <el-form-item label="颜色" prop="color">
          <el-input v-model="rule2Form.color"></el-input>
        </el-form-item>
        <el-form-item label="驱动模型" prop="drivingModel">
          <el-input v-model="rule2Form.drivingModel"></el-input>
        </el-form-item>
        <el-form-item label="亮点配置" prop="lightspot">
          <el-input v-model="rule2Form.lightspot"></el-input>
        </el-form-item>
        <el-form-item label="首页图片" prop="face_image">
          <el-input v-model="rule2Form.face_image"></el-input>
        </el-form-item>
        <el-form-item label="其他图片" prop="other_image">
          <el-input v-model="rule2Form.other_image"></el-input>
        </el-form-item>
        <el-form-item label="国别" prop="country">
          <el-select v-model="rule2Form.country" placeholder="请选择国家">
            <el-option label="美国" value="美国"></el-option>
            <el-option label="日本" value="日本"></el-option>
            <el-option label="德国" value="德国"></el-option>
            <el-option label="法国" value="法国"></el-option>
            <el-option label="中国" value="中国"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所在城市" prop="area">
          <el-select v-model="rule2Form.area" placeholder="请选择城市">
            <el-option label="西安" value="西安"></el-option>
            <el-option label="北京" value="北京"></el-option>
            <el-option label="上海" value="上海"></el-option>
            <el-option label="深圳" value="深圳"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item >
        <el-form-item label="选择上牌时间" prop="card_time">
          <el-date-picker 
            prop="area"
            v-model="rule2Form.card_time"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="选择变速箱" prop="gearbox">
          <el-select v-model="rule2Form.gearbox" placeholder="请选择变速箱">
            <el-option label="自动" value="自动"></el-option>
            <el-option label="手动" value="手动"></el-option>
          </el-select>
        </el-form-item >
        <div style="text-align:center">
          <el-form-item>
            <el-button @click="next('rule2Form')">
              提交
            </el-button>
          </el-form-item>
        </div>
      </el-form>
      <el-form v-if="active == 2" :inline="true" label-width="140px" :model="rule2Form" label-position="right" status-icon ref="rule3Form" class="demo-ruleForm">
        <el-form-item label="新车价" prop="newPrice">
          <el-input v-model="rule3Form.newPrice"></el-input>
        </el-form-item>
        <el-form-item label="过户次数" prop="transferCnt">
          <el-input v-model="rule3Form.transferCnt"></el-input>
        </el-form-item>
        <el-form-item label="选择年检到期时间" prop="renewal_at">
          <el-date-picker 
            prop="renewal_at"
            v-model="rule3Form.renewal_at"
            type="date"
            placeholder="选择年检到期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="选择强险到期时间" prop="insurance_at">
          <el-date-picker 
            prop="insurance_at"
            v-model="rule3Form.insurance_at"
            type="date"
            placeholder="选择强险到期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="厂商" prop="firm">
          <el-input v-model="rule3Form.firm"></el-input>
        </el-form-item>
        <el-form-item label="级别" prop="level">
          <el-input v-model="rule3Form.level"></el-input>
        </el-form-item>
        <el-form-item label="发动机" prop="engine">
          <el-input v-model="rule3Form.engine"></el-input>
        </el-form-item>
        <el-form-item label="车身结构" prop="structure">
          <el-input v-model="rule3Form.structure"></el-input>
        </el-form-item>
        <el-form-item label="车身长度" prop="length">
          <el-input v-model="rule3Form.length"></el-input>
        </el-form-item>
        <el-form-item label="车身宽度" prop="width">
          <el-input v-model="rule3Form.width"></el-input>
        </el-form-item>
        <el-form-item label="车身高度" prop="height">
          <el-input v-model="rule3Form.height"></el-input>
        </el-form-item>
        <el-form-item label="轴距" prop="wheelbase">
          <el-input v-model="rule3Form.wheelbase"></el-input>
        </el-form-item>
        <el-form-item label="行李箱容积最小值" prop="volume_min">
          <el-input v-model="rule3Form.volume_min"></el-input>
        </el-form-item>
        <el-form-item label="行李箱容积最大值" prop="volume_max">
          <el-input v-model="rule3Form.volume_max"></el-input>
        </el-form-item>
        <el-form-item label="整备质量" prop="weight">
          <el-input v-model="rule3Form.weight"></el-input>
        </el-form-item>
        <el-form-item label="气缸" prop="cylinder">
          <el-input v-model="rule3Form.cylinder"></el-input>
        </el-form-item>
        <el-form-item label="最大马力" prop="horsepower">
          <el-input v-model="rule3Form.horsepower"></el-input>
        </el-form-item>
        <el-form-item label="最大扭矩" prop="torque">
          <el-input v-model="rule3Form.torque"></el-input>
        </el-form-item>
        <el-form-item label="燃料类型" prop="fuel_type">
          <el-input v-model="rule3Form.fuel_type"></el-input>
        </el-form-item>
        <el-form-item label="供油方式" prop="oil_supply_type">
          <el-input v-model="rule3Form.oil_supply_type"></el-input>
        </el-form-item>
        <el-form-item label="排放方式" prop="emission_standard">
          <el-input v-model="rule3Form.emission_standard"></el-input>
        </el-form-item>
        <el-form-item label="驱动类型" prop="drive_type">
          <el-input v-model="rule3Form.drive_type"></el-input>
        </el-form-item>
        <el-form-item label="助力类型" prop="assist_type">
          <el-input v-model="rule3Form.assist_type"></el-input>
        </el-form-item>
        <el-form-item label="前悬挂类型" prop="front_hang_type">
          <el-input v-model="rule3Form.front_hang_type"></el-input>
        </el-form-item>
        <el-form-item label="后悬挂类型" prop="back_hang_type">
          <el-input v-model="rule3Form.back_hang_type"></el-input>
        </el-form-item>
        <el-form-item label="前制动类型" prop="front_braking_type">
          <el-input v-model="rule3Form.front_braking_type"></el-input>
        </el-form-item>
        <el-form-item label="驻车制动类型" prop="stop_type">
          <el-input v-model="rule3Form.stop_type"></el-input>
        </el-form-item>
        <el-form-item label="前轮胎断面宽度" prop="front_tyre_width">
          <el-input v-model="rule3Form.front_tyre_width"></el-input>
        </el-form-item>
        <el-form-item label="前轮胎扁平比" prop="front_tyre_aspect">
          <el-input v-model="rule3Form.front_tyre_aspect"></el-input>
        </el-form-item>
        <el-form-item label="前轮胎外径" prop="front_tyre_radius">
          <el-input v-model="rule3Form.front_tyre_radius"></el-input>
        </el-form-item>
        <el-form-item label="后轮胎断面宽度" prop="back_tyre_width">
          <el-input v-model="rule3Form.front_tyre_width"></el-input>
        </el-form-item>
        <el-form-item label="后轮胎扁平比" prop="back_tyre_aspect">
          <el-input v-model="rule3Form.front_tyre_aspect"></el-input>
        </el-form-item>
        <el-form-item label="后轮胎外径" prop="back_tyre_radius">
          <el-input v-model="rule3Form.front_tyre_radius"></el-input>
        </el-form-item>
        <el-form-item label="主驾驶安全气囊" prop="mian_gasbag">
          <el-select v-model="rule3Form.mian_gasbag" placeholder="请选择有无">
            <el-option label="有" value="0"></el-option>
            <el-option label="无" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="副驾驶安全气囊" prop="vice_gasbag">
          <el-select v-model="rule3Form.vice_gasbag" placeholder="请选择有无">
            <el-option label="有" value="0"></el-option>
            <el-option label="无" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="胎压检测" prop="tire_pressure">
          <el-select v-model="rule3Form.tire_pressure" placeholder="请选择有无">
            <el-option label="有" value="0"></el-option>
            <el-option label="无" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车内中控锁" prop="lock_incar">
          <el-select v-model="rule3Form.lock_incar" placeholder="请选择有无">
            <el-option label="有" value="0"></el-option>
            <el-option label="无" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车内中控锁" prop="ABS">
          <el-select v-model="rule3Form.ABS" placeholder="请选择有无">
            <el-option label="有" value="0"></el-option>
            <el-option label="无" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电动吸合门" prop="suction_gate">
          <el-select v-model="rule3Form.suction_gate" placeholder="请选择有无">
            <el-option label="有" value="0"></el-option>
            <el-option label="无" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="感应后备箱" prop="trunk">
          <el-select v-model="rule3Form.trunk" placeholder="请选择有无">
            <el-option label="有" value="0"></el-option>
            <el-option label="无" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="感应雨刷" prop="wipre">
          <el-select v-model="rule3Form.wipre" placeholder="请选择有无">
            <el-option label="有" value="0"></el-option>
            <el-option label="无" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电动车窗" prop="electric_window">
          <el-select v-model="rule3Form.electric_window" placeholder="请选择有无">
            <el-option label="有" value="0"></el-option>
            <el-option label="无" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电动后视镜调节" prop="electric_rearview_mirror">
          <el-select v-model="rule3Form.electric_rearview_mirror" placeholder="请选择有无">
            <el-option label="有" value="0"></el-option>
            <el-option label="无" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="多功能方向盘" prop="multifunction_steering_wheel">
          <el-select v-model="rule3Form.multifunction_steering_wheel" placeholder="请选择有无">
            <el-option label="有" value="0"></el-option>
            <el-option label="无" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="定速巡航" prop="cruise">
          <el-select v-model="rule3Form.cruise" placeholder="请选择有无">
            <el-option label="有" value="0"></el-option>
            <el-option label="无" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="空调" prop="air_conditioning">
          <el-select v-model="rule3Form.air_conditioning" placeholder="请选择有无">
            <el-option label="有" value="0"></el-option>
            <el-option label="无" value="1"></el-option>
          </el-select>
        </el-form-item>
        <div style="text-align:center">
          <el-form-item>
            <el-button @click="next('rule3Form')">
              提交
            </el-button>
          </el-form-item>
        </div>
      </el-form>
      <div v-if="active == 3" style="text-align:center">
        <i class="el-icon-circle-check" style="font-size:100px;color:#67C23A;display:block;margin:100px 0;"></i>
        <el-button @click="next()" >
          完成
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from '../../assets/Axios'
export default {
  name: "reviewCenter",
  data(){
    return {
      status: this.$route.query.status > -1 ? this.$route.query.status : 4,
      tableData: [{
        id: 5,
        brand: '宝马',//品牌
        model: '宝马4系',//车系
        displacement: '4000',//排量
        mileage: '10',//里程数
        oldPrice: '20', //二手价,
        status:1,
        faceImage: 'https://img.pcauto.com.cn/images/upload/upc/tx/auto5/1811/08/c28/118277536_1541660020582_400x300.jpg', //车的正面照
        otherImage: 'https://img.pcauto.com.cn/images/upload/upc/tx/auto5/1811/08/c29/118277813_1541660095931_400x300.jpg', //其他照片
        cardTime: '2018-4-20', //上牌时间
        phone: '13333333333',
        createdAt: '2019-06-09',
        area: '北京'
      },{
        id: 5,
        brand: '宝马',//品牌
        model: '宝马4系',//车系
        displacement: '3000',//排量
        mileage: '50',//里程数
        oldPrice: '10', //二手价
        status:0,
        faceImage: 'https://img.pcauto.com.cn/images/upload/upc/tx/auto5/1811/08/c28/118277536_1541660020582_400x300.jpg', //车的正面照
        otherImage: 'https://img.pcauto.com.cn/images/upload/upc/tx/auto5/1811/08/c29/118277813_1541660095931_400x300.jpg', //其他照片
        cardTime: '2018-4-11', //上牌时间
        phone: '13333333333',
        createdAt: '2019-06-11',
        area: '北京'
      },{
        id: 5,
        brand: '宝马',//品牌
        model: '宝马4系',//车系
        displacement: '3000',//排量
        mileage: '50',//里程数
        oldPrice: '10', //二手价
        status:3,
        faceImage: 'https://img.pcauto.com.cn/images/upload/upc/tx/auto5/1811/08/c28/118277536_1541660020582_400x300.jpg', //车的正面照
        otherImage: 'https://img.pcauto.com.cn/images/upload/upc/tx/auto5/1811/08/c29/118277813_1541660095931_400x300.jpg', //其他照片
        cardTime: '2018-4-11', //上牌时间
        phone: '13333333333',
        createdAt: '2019-06-11',
        area: '北京'
      }],
      tableList: [],
      dialogVisible: false,
      reviewId: 0,
      active: 0,
      rule1Form: {
        name: '',
        age: 0,
        idCard: '',
        area: '',
        number: '',
        sex: '',
        profession: ''
      },
      rules1: {
        name:[{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        },
        {
          min: '1',
          max: '20',
          message:'请输入正确姓名',
        },{
          pattern: /^[\u4E00-\u9FA5]+$/,
          message: '用户名只能为中文'
        }],
        age:[
          {required: true,message: '请输入年龄',trigger: 'blur'},
          {type: 'number',message: '年龄必须为数字值'},
        ],
        idCard: [
          {
          required: true,
          message: '请输入身份证ID',
          trigger: 'blur'
          },{
            pattern:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '你的身份证格式不正确' 
          }
        ],
        area: [
          { required: true, message: '请选择地域', trigger: 'change' }
        ],
        number: [
          { 
            required: true,
            message: '请输入手机号码',
            trigger: 'blur'
          },
          {
            pattern: /^1[34578]\d{9}$/,
            message: '请输入正确手机号'
          }
        ],
        sex:[
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        profession:[
          { required: true, message: '请选择职业', trigger: 'change' }
        ],
      },
      carId: -1,
      rule2Form: {
        brand: '',
        model: '',
        displacement: '',
        mileage: '',
        old_price: '',
        carAge: '',
        carModel: '',
        letOut: '',
        color: '',
        drivingModel: '',
        country: '',
        lightspot: '',
        face_image: '',
        other_image: '',
        area: '',
        card_time: '',
        gearbox: ''
      },
      rules2:{
        brand: [
          { required: true, message: '请输入品牌', trigger: 'blur' },
        ],
        model: [
          { required: true, message: '请输入车系', trigger: 'blur' },
        ],
        displacement: [
          { required: true, message: '请输入排量', trigger: 'blur' },
        ],
        mileage: [
          { required: true, message: '请输入里程', trigger: 'blur' },
        ],
        oldPrice: [
          { required: true, message: '请输入售价', trigger: 'blur' },
        ],
        carAge: [
          { required: true, message: '请输入车龄', trigger: 'blur' },
        ],
        carModel: [
          { required: true, message: '请输入车型', trigger: 'blur' },
        ],
        letOut: [
          { required: true, message: '请输入排放', trigger: 'blur' },
        ],
        color: [
          { required: true, message: '请输入颜色', trigger: 'blur' },
        ],
        drivingModel: [
          { required: true, message: '请输入驱动模型', trigger: 'blur' },
        ],
        country: [
          { required: true, message: '请选择国家', trigger: 'change' },
        ],
        faceImage: [
          { required: true, message: '请输入正面照片', trigger: 'blur' },
        ],
        otherImage: [
          { required: true, message: '请输入其他照片', trigger: 'blur' },
        ],
        area: [
          { required: true, message: '请选择所在地', trigger: 'change' },
        ],
        cardTime: [
          { type:'date', required: true, message: '请选择上牌时间', trigger: 'change' },
        ],
        gearbox: [
          { required: true, message: '请选择变速箱类别', trigger: 'change' },
        ]
      },
      rule3Form: {
        new_price: '',//新车价
        transfer_cnt: '',//过户次数
        renewal_at: '',//年检到期时间
        insurance_at: '',//强险到期时间
        firm: '',//厂商
        level: '',//级别
        engine: '',//
        structure: '',
        length: '',
        width: '',
        height: '',
        wheelbase: '',
        volume_min: '',
        volume_max: '',
        weight: '',
        cylinder: '',
        horsepower: '',
        torque: '',
        fuel_type: '',
        oil_supply_type: '',
        emission_standard: '',
        drive_type: '',
        assist_type: '',
        front_hang_type: '',
        back_hang_type: '',
        front_braking_type: '',
        stop_type: '',
        front_tyre_width: '',
        front_tyre_aspect: '',
        front_tyre_radius: '',
        back_tyre_width: '',
        back_tyre_aspect: '',
        back_tyre_radius: '',
        mian_gasbag: '1',
        vice_gasbag: '1',
        tire_pressure: '1',
        lock_incar: '1',
        ABS:'1',
        suction_gate: '1',
        trunk: '1',
        wipre: '1',
        electric_window: '1',
        electric_rearview_mirror: '1',
        multifunction_steering_wheel: '1',
        cruise: '1',
        air_conditioning: '1'
      }
    }
  },
  async mounted(){
    this.tableData = (await axios('/admin/findByStatus', {
      params: {
        status: this.status
      }
    })).data.data
    this.tableData.forEach((v, i) => {
      let imgArr = []
      imgArr.push(v.faceImage)
      if (v.oldImage) {
        imgArr.push(...v.otherImage.splice(','))
      }
      this.tableData[i].faceImage = imgArr
    }) 
    this.tableList = this.tableData.slice(0, Math.max(this.tableData.length, 10))
  },
  methods: {
    handleCurrentChange(val) {
      this.tableList = [...this.tableData].slice((val-1)*10, val * 10)
    },
    handleClick (val) {
      this.dialogVisible = true
      this.reviewId = val
    },
    next(formName){
      if (formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            if (this.active === 0) {
              let data = (await axios('/add/addUser', this.rule1Form, 'post')).data.data
              this.carId = data
            } else if (this.active === 1) {
              let data = (await axios('/add/addCar', {carId : this.carId, ...this.rule2Form}, 'post')).data.data
              this.carId = data
            } else if (this.active === 2) {
              let data = (await axios('/add/addMoreCar', {carId : this.carId, ...this.rule3Form}, 'post'))
              axios('/admin/updataApply', {
                params:{
                  id: this.reviewId
                }
              }).then(console.log)  
              this.tableData = (await axios('/admin/findByStatus', {
                params: {
                  status: this.status
                }
              })).data.data
            }
            if (this.active ++ > 2) {
              this.dialogVisible = false
              this.active = 0
            }
            this.$refs[formName].resetFields();
          }
        });
      }
      if (this.active === 3 && !formName) {
        this.dialogVisible = false
        this.active = 0
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
