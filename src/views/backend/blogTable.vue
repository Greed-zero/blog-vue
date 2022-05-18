<template>
  <div>
      <el-card>
          <el-row :gutter="15" class="top">
            <el-col :span="2.5" class="col1">
                <el-popconfirm
                    confirm-button-text='好的'
                    cancel-button-text='不用了'
                    icon="el-icon-info"
                    icon-color="red"
                    title="确定要删除所有选择的博客吗？"
                    @confirm="deleteAll()"
                    > 
                <el-button type="primary" slot="reference"><i class="el-icon-delete" ></i>批量删除</el-button>
                </el-popconfirm>
                </el-col>
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
            :data="data.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            stripe
            border
            ref="multipleTable"
            style="width: 100%"
            :header-cell-style="{'text-align':'center','background-color': '#F5F7FA',}"
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
                    @click="preview(scope.$index)">预览</el-button>
                    <el-button
                    size="mini"
                    icon="el-icon-edit"
                    @click="editBlog(scope.$index)">编辑</el-button>
                    <el-popconfirm
                    confirm-button-text='好的'
                    cancel-button-text='不用了'
                    icon="el-icon-info"
                    icon-color="red"
                    title="确定要删除该博客吗？"
                    :style="{'margin-left':'10px'}"
                    @confirm="deleteBlog(scope.$index)"
                    >                    
                    <el-button
                    size="mini"
                    type="danger"
                    icon="el-icon-delete"
                    slot="reference">删除</el-button>
                    </el-popconfirm>
                </template>
                </el-table-column>            
        </el-table>
        <div class="block" style="margin-top:15px;">
            <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange" 
            :current-page="currentPage"  
            :page-size="pageSize" 
            layout="total,  prev, pager, next, jumper" 
            :total="data.length">
            </el-pagination>
        </div>
        </template>         
      </el-card>
      <el-drawer
        :title="drawer.title"
        :visible.sync="drawer.isShow"
        :direction="'ltr'"
        :before-close="handleClose"
        :style="{'width':'2500px'}">
        <div class="content">
            <mavon-editor
                class="md"
                :value="drawer.htmlContent" 
                :subfield="prop.subfield" 
                :defaultOpen="prop.defaultOpen"
                :toolbarsFlag="prop.toolbarsFlag"
                :editable="prop.editable"
                :scrollStyle="prop.scrollStyle"
                :style="{'height':'650px'}"
            />
        </div>
      </el-drawer>
  </div>
</template>

<script>
export default {
    data() {
        return {
            markdownOption: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                
            },
            drawer:{
                isShow:false,
                title:'',
                htmlContent:'',
            },
            currentPage: 1,
            pageSize: 9,
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
                        this.data = res.data.article
                        console.log("this.data:",this.data)
                        },
                    err => console.log(err.message)
                )
                
        },
        handleSizeChange(val) {
                this.pageSize = val;
            },
            // 当前页
            handleCurrentChange(val) {
                this.currentPage = val;
            },
        handleClose(done) {
        this.$confirm('确认关闭？')
          .then(() => {
            done();
          })
          .catch(() => {});
        },
        preview(index){
           index = (this.currentPage-1)*this.pageSize+index
           this.drawer.isShow = true
           this.drawer.title = this.data[index].title
           console.log(this.drawer.title,index)
           this.drawer.htmlContent = this.data[index].text
        },
        deleteBlog(index){
            index = (this.currentPage-1)*this.pageSize + index
            let _id = this.data[index]._id
            console.log(_id)
            this.$ajax.post('http://localhost:8080/article/delete',{
                _id,
                deleteAll:false
            }).then( ()=>{
                this.getBlog()
                this.$forceUpdate();
          })
          .catch(error=> {
            console.log(error);
          })
        },
        deleteAll(){
            // console.log(this.$refs.multipleTable.selection)
            let ids = []
            let keys = this.$refs.multipleTable.selection
            if(keys.length===0) return
            else{
                for(let key of keys){
                    ids.push(key._id)
                }
                console.log(ids)
                this.$ajax.post('http://localhost:8080/article/delete',{
                ids,
                deleteAll:true
            }).then( ()=>{
                this.getBlog()
                this.$forceUpdate();
          })
          .catch(error=> {
            console.log(error);
          })
            }
        },
        editBlog(index){
            index = (this.currentPage-1)*this.pageSize + index
            let article =this.data[index]
            this.$router.push({path:'/manage/updateBlog',query: {article}})
        }

    },
    mounted(){
         this.getBlog()
    },
    computed: {
  // 解析器配置
    prop () {
      let data = {
        subfield: false,// 单双栏模式
        defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
        editable: false,    // 是否允许编辑
        toolbarsFlag: false,
        scrollStyle: true
      }
      return data
    }
  },

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
    margin-right: 5px!important;
}
}
::v-deep.el-drawer__wrapper{
    .el-drawer__header{
        font-size: 16px;
        color: #090808;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.content{
    margin-top: -35px;
}
</style>