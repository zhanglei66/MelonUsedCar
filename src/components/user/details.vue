<template>
    <div>
        <div style="width:70%; margin:30px auto 0 auto;">
            <el-row :gutter="60">
                <el-col :span="12">
					<el-carousel indicator-position="outside">
						<el-carousel-item v-for="item in [items.esCar.face_image]" :key="item">
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
				</el-col>
                <el-col :span="12">
					<div class="grid-content bg-purple-light">
						<div>
							<h2 style="display:inline-block;">{{items.esCar.brand}}</h2><h2 style="display:inline-block; margin-left:20px;">{{items.esCar.model}}</h2>
						</div>
						<div style="margin-top:30px;">
							<span>{{items.esCar.card_time}}</span>
							<el-divider direction="vertical"></el-divider>
							<span>{{items.esCar.mileage}}</span>
							<el-divider direction="vertical"></el-divider>
							<span>{{items.esCar.displacement}}</span>
						</div>
						<div style="margin-top:40px;">
							<h1>车主报价：{{items.esCar.old_price}}</h1>
						</div>
						<div style="margin-top:60px;">
							<el-button type="success" @click="yuyue">预约</el-button>
							<el-button @click="collect" type="primary">收藏</el-button>
						</div>
					</div>
				</el-col>
            </el-row>
        </div>
		<div style="width:80%; margin:30px auto 0 auto">
			<el-row :gutter="20" >
				<el-col :span="8">
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<span>基本参数</span>
						</div>
						<div>
							<table border="1">
								<tr>
									<th>厂商</th>
									<td>{{items.esMoreCar.firm}}</td>
								</tr>
								<tr>
									<th>级别</th>
									<td>{{items.esMoreCar.level}}</td>
								</tr>
								<tr>
									<th>发动机</th>
									<td>{{items.esMoreCar.engine}}</td>
								</tr>
								<tr>
									<th>变速箱</th>
									<td>{{items.esCar.gearbox}}</td>
								</tr>
								<tr>
									<th>车身结构</th>
									<td>{{items.esMoreCar.structure}}</td>
								</tr>
								<tr>
									<th>长*宽*高</th>
									<td>{{items.esMoreCar.length}}-{{items.esMoreCar.width}}-{{items.esMoreCar.height}}</td>
								</tr>
								<tr>
									<th>轴距</th>
									<td>{{items.esMoreCar.wheelbase}}</td>
								</tr>
								<tr>
									<th>行李箱容积</th>
									<td>{{items.esMoreCar.volume_min}}-{{items.esMoreCar.volume_max}}</td>
								</tr>
								<tr>
									<th>整备质量</th>
									<td>{{items.esMoreCar.weight}}</td>
								</tr>
							</table>
						</div>
					</el-card>
				</el-col>
				<el-col :span="8">
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<span>发动机参数</span>
						</div>
						<div>
							<table border="1">
								<tr>
									<th>排量</th>
									<td>{{items.esCar.displacement}}</td>
								</tr>
								<tr>
									<th>进气形式</th>
								</tr>
								<tr>
									<th>气缸</th>
								</tr>
								<tr>
									<th>最大马力</th>
								</tr>
								<tr>
									<th>最大扭矩</th>
								</tr>
								<tr>
									<th>燃料类型</th>
								</tr>
								<tr>
									<th>燃油标号</th>
								</tr>
								<tr>
									<th>供油方式</th>
								</tr>
								<tr>
									<th>排放标准</th>
								</tr>
								<tr>
									<th>空</th>
								</tr>
							</table>
						</div>
					</el-card>
				</el-col>
				<el-col :span="8">
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<span>底盘及制动</span>
						</div>
						<div>
							<table border="1">
								<tr>
									<th>驱动方式</th>
								</tr>
								<tr>
									<th>助力类型</th>
								</tr>
								<tr>
									<th>前悬挂类型</th>
								</tr>
								<tr>
									<th>后悬挂类型</th>
								</tr>
								<tr>
									<th>前制动类型</th>
								</tr>
								<tr>
									<th>后制动类型</th>
								</tr>
								<tr>
									<th>驻车制动类型	</th>
								</tr>
								<tr>
									<th>前轮胎规格</th>
								</tr>
								<tr>
									<th>后轮胎规格</th>
								</tr>
								<tr>
									<th>空</th>
								</tr>
							</table>
						</div>
					</el-card>
				</el-col>
			</el-row>
		</div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			items: [
			
			]
		};
	},
	methods: {
		collect() {
			var collect_params = new URLSearchParams()
			collect_params.append('carId',this.items.esCar.carId);
			collect_params.append('tokenId',localStorage.getItem('tokenId'));
			this.$axios({
				method:'post',
				url:'http://39.108.160.89:8091/collect/addCollection',
				data:collect_params
				})
				.then((response) => {
					console.log(response)
					
				})
				.catch(function(error) {
				console.log(error)
			})
		},
		yuyue() {
			var collect_params = new URLSearchParams()
			collect_params.append('carId',this.items.esCar.carId);
			collect_params.append('tokenId',localStorage.getItem('tokenId'));
			this.$axios({
				method:'post',
				url:'http://39.108.160.89:8091/collect/addCollection',
				data:collect_params
				})
				.then((response) => {
					console.log(response)
					
				})
				.catch(function(error) {
				console.log(error)
			})
		}
	},
	created () {
		var detail_params = new URLSearchParams()
        detail_params.append('carId',this.$route.query.id);
        this.$axios({
          method:'post',
          url:'http://39.108.160.89:8091/es/findByCarId',
          data:detail_params
       	})
        .then((response) => {
          console.log(response.data.data)
		  this.items = response.data.data
        })
        .catch(function(error) {
          console.log(error)
        })
	}
	
}
</script>


<style scoped>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
  	}
  
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
  
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	.clearfix:after {
		clear: both
	}

	.box-card {
		width: 100%px;
	}
</style>
