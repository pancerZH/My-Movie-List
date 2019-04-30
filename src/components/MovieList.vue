<template>
  <div>
    <el-container>
      <el-header>
        <el-col :span="6">
          <el-input v-model="search" placeholder="请输入需要检索的内容"></el-input>
        </el-col>
        <el-col :span="2">
          <el-select v-model="command" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="10" class="header-text">My Movie List</el-col>
        <el-col :span="6">
          <div class="block">
            <el-pagination
              @current-change="handleCurrentChange"
              layout="prev, pager, next"
              :current-page="currentPage"
              :page-size="pageSize"
              :total="totalMovie">
            </el-pagination>
        </div>
        </el-col>
      </el-header>
      <el-container>
        <el-aside>
          <div class="boarding">
            <Boarding :movieList="movies" @titleSearchChanged="searchTitle($event)" />
          </div>
        </el-aside>
        <el-main>
            <el-row v-for="(movie,index) in res" :key="index">
              <el-col :span=24>
                <MovieCard :detail = "movie" />
              </el-col>
            </el-row>
        </el-main>
      </el-container>
    </el-container>  
  </div>
</template>

<script>
import MovieCard from './MovieCard'
import Boarding from './Boarding'
export default {
  name: 'MovieList',
  components: {
      MovieCard,
      Boarding
    },
  data () {
    return {
      movies: [],
      currentPage: 1,
      pageSize: 10,
      totalMovie: 0,
      search: '',
      oldSearch: '',
      command: '全文检索',
      options: [{
          value: '按名称',
          label: '按名称'
        }, {
          value: '按导演',
          label: '按导演'
        }, {
          value: '按演员',
          label: '按演员'
        },{
          value: '全文检索',
          label: '全文检索'
        }],
      genre: ""
    }
  },

  mounted: function() {
    this.getJsonInfo()
  },

  methods: {
  getJsonInfo: function() {
        this.$http.options.emulateJSON = true
        this.$http.get('./static/films.json').then(function(response){
            this.movies = response.data
            this.totalMovie = this.movies.length
        }).catch(function(response){
            console.log(response)
        })
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
    searchTitle(movieTitle) {
      this.command = "按名称"
      this.search = movieTitle
    }
  },

  computed: {
    res() {
      if(this.search != this.oldSearch){
        this.currentPage = 1
        this.oldSearch = this.search
      }
      const val = this.currentPage
      var conditionList = this.movies
            .filter((info) => {
              const text = Object.values(info).join('____').toLowerCase()
              return text.search(this.search.toLowerCase()) >= 0
            })
      var command = this.command
      if(command === "按名称") {
          conditionList = this.movies
            .filter((info) => {
              const text = Object.values(info.title).join('').toLowerCase()
              return text.search(this.search.toLowerCase()) >= 0
            })
        }
      if(command === "按导演") {
          conditionList = this.movies
            .filter((info) => {
              var directorList = []
              info.directors.forEach(element => {
                directorList.push(element["name"])
              })
              const text = Object.values(directorList).join('____').toLowerCase()
              return text.search(this.search.toLowerCase()) >= 0
            })
        }
      if(command === "按演员") {
          conditionList = this.movies
            .filter((info) => {
              var actorList = []
              info.casts.forEach(element => {
                actorList.push(element["name"])
              })
              const text = Object.values(actorList).join('____').toLowerCase()
              return text.search(this.search.toLowerCase()) >= 0
            })
        }
      this.totalMovie = conditionList.length
      console.log(this.totalMovie)
      var result = conditionList.slice((val-1)*this.pageSize, val*this.pageSize)
      return result
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
  }

  .header-text {
    font-size: 28px;
    font-family: 'Times New Roman', Times, serif
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    width: 25%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .block {
    float:right;
    padding-top:15px
  }

  .el-dropdown-link {
    cursor: pointer;
    color: white;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .boarding {
    padding-left: 8px;
  }
</style>
