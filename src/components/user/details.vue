<template>
    <div>
        <div style="width:70%; margin:30px auto 0 auto;">
            <el-row :gutter="60">
                <el-col :span="12">
					<el-carousel indicator-position="outside">
						<el-carousel-item v-for="item in 4" :key="item">
							<h3>{{ item }}</h3>
						</el-carousel-item>
  					</el-carousel>
				</el-col>
                <el-col :span="12">
					<div class="grid-content bg-purple-light">
						<div>
							<h2 style="display:inline-block;">品牌</h2><h2 style="display:inline-block; margin-left:20px;">车系</h2>
						</div>
						<div style="margin-top:30px;">
							<span>上牌时间</span>
							<el-divider direction="vertical"></el-divider>
							<span>行驶里程</span>
							<el-divider direction="vertical"></el-divider>
							<span>排量</span>
						</div>
						<div style="margin-top:40px;">
							<h1>车主报价：</h1>
						</div>
						<div style="margin-top:60px;">
							<el-button type="success">购买</el-button>
						</div>
					</div>
				</el-col>
            </el-row>
        </div>
		<div style="width:80%; margin:30px auto 0 auto">
			<el-row :gutter="20">
				<el-col :span="8">
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<span>基本参数</span>
						</div>
						<div>
							<table border="1">
								<tr>
									<th>证件品牌型号</th>
									
								</tr>
								<tr>
									<th>厂商</th>
								</tr>
								<tr>
									<th>级别</th>
								</tr>
								<tr>
									<th>发动机</th>
								</tr>
								<tr>
									<th>变速箱</th>
								</tr>
								<tr>
									<th>车身结构</th>
								</tr>
								<tr>
									<th>长*宽*高</th>
								</tr>
								<tr>
									<th>轴距</th>
								</tr>
								<tr>
									<th>行李箱容积</th>
								</tr>
								<tr>
									<th>整备质量</th>
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
							
						</div>
					</el-card>
				</el-col>
			</el-row>
		</div>
    </div>
</template>

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
