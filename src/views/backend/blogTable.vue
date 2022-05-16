<template>
  <div>
      <el-card>
          <el-row :gutter="15" class="top">
            <el-col :span="2.5" class="col1"><el-button type="primary"><i class="el-icon-delete"></i>批量删除</el-button></el-col>
            <el-col :span="3" class="col2">
                <el-select v-model="select" placeholder="请选择" >
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="6" class="col3">
                <el-input
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="search"
                >
                </el-input>
            </el-col>
            <el-col :span="2" class="col4">
                <el-button type="primary" icon="el-icon-search" class="search">搜索</el-button>  
            </el-col>                                
          </el-row>
        <template>
        <el-table
            :data="data"
            stripe
            border
            header-cell-class-name="tableStyle"
            style="width: 100%"
            :header-cell-style="{'text-align':'center'}"
            :cell-style="{'text-align':'center'}"
            >
            <el-table-column
            type="selection"
            min-width="12%">
            </el-table-column>            
            <el-table-column
            prop="title"
            label="标题"
            min-width="12%">
            </el-table-column>
            <el-table-column
            label="描述"
            min-width="12%"
            prop="description"
            >
            </el-table-column>
            <el-table-column
            label="标签" 
            min-width="12%"
            >
            <template slot-scope="scope">
             <span v-for="(tag,key) in scope.row.tags" :key="key">
            {{tag}}
          </span>
          </template>
            </el-table-column>
            
            <el-table-column
            prop="time"
            label="创建时间"
            min-width="10%">
            </el-table-column>
            <el-table-column
            prop="updatetime"
            label="更新时间"
            min-width="10%">
            </el-table-column>
            <el-table-column 
            label="操作"
            min-width="22%"
            max-width="22%">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="info"
                    icon="el-icon-camera"
                    @click="handleEdit(scope.$index, scope.row)">预览</el-button>
                    <el-button
                    size="mini"
                    icon="el-icon-edit"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    icon="el-icon-delete"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
                </el-table-column>            
        </el-table>
        </template>         
      </el-card>
  </div>
</template>

<script>
export default {
    data() {
        return {
            search:'',
            select:'',
            data:[],
            options: [{
          value: '选项5',
          label: '无'
        },{
          value: '选项1',
          label: '标题'
        }, {
          value: '选项2',
          label: '描述'
        }, {
          value: '选项3',
          label: '写入时间'
        }, {
          value: '选项4',
          label: '修改时间'
        }],
        }
    },
    methods:{
         getBlog(){
            this.$ajax({
                url:'http://localhost:8080/article',
                method:'get',
                }).then(
                    res => {
                        console.log("res.data:",res.data)
                        this.data = res.data.res
                        console.log("this.data:",this.data[0].tags)
                        },
                    err => console.log(err.message)
                )
                
        }
    },
    created(){
         this.getBlog()
    }

}
</script>

<style lang="scss" scoped>
*{
    font-size: small;
}
.top{
    display: flex;
    flex-flow: row;
    *{
        font-size: small;
    }
    .el-button--primary{
        width: 100px;
        font-size: small;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .serach{
        width: 30px!important
    }
    /deep/.el-select{
        font-size: small;
    }
    /deep/ .el-input__inner{
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            caret-color: auto !important
}
    /deep/ .el-input__icon{
           display: flex;
            justify-content: center;
            align-items: center;
   }

}
.col4{
    /deep/.el-button--primary{
        width: 65px!important
    }
}
.el-table{
    margin-top: 20px;
    margin-left: 10px;
}

.el-card{
    .el-row{
    margin-left: 5px!important;
}
}
.tableStyle{
    background-color: #1989fa!important;
    color:#fff;
    font-weight:400;
  }

</style>