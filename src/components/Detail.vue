<template>
    <div>
        <el-container>
            <el-header>{{this.detail.title}}</el-header>
            <el-main>
                <div class="container">
                    <img :src="poster" :alt="title" @error="imgError()" class="poster" />
                    <div style="flex: 1;">
                        <div class="casts">
                            <div>
                                导演: <span v-for="(person, index) in directors" :key="index+100" class="director">
                                  {{person.name}}<a v-if="person!=directors[directors.length-1]" class="director">, </a>
                                </span>
                            </div>
                            <div>
                                编剧: <span v-for="(person, index) in writers" :key="index+1000">
                                  {{person.name}}<a v-if="person!=writers[writers.length-1]" class="sep">, </a>
                                </span>
                            </div>
                            <div>
                                演员: <span v-for="(person, index) in casts" :key="index+1000">
                                  {{person.name}}<a v-if="person!=casts[casts.length-1]" class="sep">, </a>
                                </span>
                            </div>
                        </div>
                        <div class="check">
                            上映日期: <span v-for="(date, index) in pubdate" :key="index" class="date">{{date}}</span>
                            <div class="duration">片长: {{duration}}min</div>
                            类型: <span v-for="(genre, index) in genres" :key="index+10" class="genre">{{genre}}</span>
                            <div>制片国家/地区: <span v-for="(country, index) in countries" :key="index+110" class="genre">{{country}}</span></div>
                            <div>语言: <span v-for="(language, index) in languages" :key="index+120" class="genre">{{language}}</span></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span class="rating">
                                <el-rate
                                v-model="rate"
                                disabled
                                text-color="#ff9900"
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                                score-template="{value}">
                                </el-rate>  
                            </span>
                            <span class="score" :style="{'color':getScoreColor}">{{rating.average}}</span>
                            <span class="rating-people">({{rating.rating_people}}人评分)</span>
                        </div>
                        <div>
                            <span class="rating">
                                <el-rate
                                v-model="value5"
                                disabled
                                show-text
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                                text-color="#ff9900"
                                score-template="{value}">
                                </el-rate>  
                            </span>
                            <span class="rating-people">{{rating.stars[0]}}%</span>
                        </div>
                        <div>
                            <span class="rating">
                                <el-rate
                                v-model="value4"
                                disabled
                                show-text
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                                text-color="#ff9900"
                                score-template="{value}">
                                </el-rate>  
                            </span>
                            <span class="rating-people">{{rating.stars[1]}}%</span>
                        </div>
                        <div>
                            <span class="rating">
                                <el-rate
                                v-model="value3"
                                disabled
                                show-text
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                                text-color="#F7BA2A"
                                score-template="{value}">
                                </el-rate>  
                            </span>
                            <span class="rating-people">{{rating.stars[2]}}%</span>
                        </div>
                        <div>
                            <span class="rating">
                                <el-rate
                                v-model="value2"
                                disabled
                                show-text
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                                text-color="#99A9BF"
                                score-template="{value}">
                                </el-rate>  
                            </span>
                            <span class="rating-people">{{rating.stars[3]}}%</span>
                        </div>
                        <div>
                            <span class="rating">
                                <el-rate
                                v-model="value1"
                                disabled
                                show-text
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                                text-color="#99A9BF"
                                score-template="{value}">
                                </el-rate>  
                            </span>
                            <span class="rating-people">{{rating.stars[4]}}%</span>
                        </div>
                    </div>
                </div>
                <div class="intro">
                    <div class="intro-word">简介</div><br>
                    <div>{{summary}}</div>
                </div>
                <div class="other-movie">
                    <div class="command-word">
                    <span>推荐</span>
                    <span @click="goToList" class="back">返回列表>></span>
                    </div>
                    <el-col :span="4" v-for="(movie, index) in randomRes" :key="index+350">
                        <img :src="movie.poster" :alt="movie.title" @error="imgListError(movie)" @click="goToDetail(movie)" class="poster-list" />
                        <div class="title-list">{{movie.title}}</div>
                    </el-col>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Detail", 
        data() {
            return {
                movies: [],
                detail: [],
                casts: [],
                countries: [],
                directors: [],
                duration: "",
                genres: [],
                languages: [],
                poster: "",
                pubdate: [],
                rating: {
                    average: 3,
                    rating_people: 0,
                    stars: []
                },
                summary: "",
                title: "",
                writers: [],
                rate: 3,
                countries: [],
                languages: [],
                value1: 1,
                value2: 2,
                value3: 3,
                value4: 4,
                value5: 5
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
                    this.detail = this.movies
                        .filter((info) => {
                        const text = Object.values(info._id).join('').toLowerCase()
                        return text.search(this.$route.params.id) >= 0
                        })[0]
                    this.totalMovie = this.movies.length
                    this.init()
                }).catch(function(response){
                })
            },
            init: function() {
                this.casts = this.detail.casts
                this.countries = this.detail.countries
                this.directors = this.detail.directors
                this.duration = this.detail.duration
                this.genres = this.detail.genres
                this.languages = this.detail.languages
                this.poster = this.detail.poster
                this.pubdate = this.detail.pubdate
                this.rating = this.detail.rating
                this.summary = this.detail.summary
                this.title = this.detail.title
                this.writers = this.detail.writers
                this.countries = this.detail.countries
                this.languages = this.detail.languages
                this.rate = parseFloat((parseFloat(this.detail.rating.average)/2).toFixed(1))
                if(this.detail.rating.average === "") {
                    this.rate = 0
                    this.rating.average = "" 
                    this.rating.rating_people = 0
                    this.rating.stars = [0, 0, 0, 0, 0]
                }
            },
            imgError() {
                this.poster = require('../assets/LostSource.png')
            },
            imgListError(movie) {
                movie.poster = require('../assets/LostSource.png')
            },
            goToDetail(movie) {
              this.$router.push({name: "movie-detail", params: {id: movie._id}})
            },
            goToList() {
              this.$router.push({name: "movie-list"})
            }
        },
        computed: {
            randomRes() {
                // var arr = this.movies
                var Arr = this.movies
                var n = Math.floor(Math.random() * Arr.length + 1)-1
                if(n > 200-6)
                    return Arr.slice(194, 200)
                else
                    return Arr.slice(n, n+6)
            },
            getScoreColor() {
              if(this.rating.average > 7.9)
                return '#FF9900'
              else if(this.rating.average > 4)
                return '#F7BA2A'
              else
                return '#FF9900'
            }
        },
        watch: {
            '$route' (to, from) {
                this.$router.go(0)
            }
        },
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #337ab7;
    font-size: 30px;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
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

  .container {
    display: flex;
    padding: 10px;
    padding-left: 20%;
    padding-right: 20%;
    text-align: left;
    line-height: 1.6;
  }
  .header {
    display: flex;
    align-items: left;
    font-size: 20px;
  }
  .poster {
    margin-right: 12px;
    flex-shrink: 0;
    width: 160px;
    height: 240px;
  }
  .check {
    font-size: 15px;
    opacity: 1;
    font-weight: 350;
    letter-spacing: 0.5px;
  }
  .genre {
    float: inherit
  }
  .genre::after {
    content: "  ";
    color: #ddd;
  }
  .duration::after {
    content: "  ";
    color: #ddd;
  }
  .score {
    color: #f7ba2a;
    font-size: 15px;
    opacity: 1;
  }
  .rating {
    display: inline-table
  }
  .rating-people {
    padding-left: 5px;
    font-size: 12px;
  }
  .casts {    
    font-size: 16px;
    opacity: 1;
    font-weight: 400;
    letter-spacing: 0.5px;
  }
  .sep {
    color: black;
  }
  .director {
    color: blue
  }
  .intro {
    opacity: 1;
    line-height: 1.4;
    letter-spacing: 0.5px;
    font-size: 14px;
    padding-top: 5px;
    word-break: break-all;
    padding-left: 20%;
    padding-right: 20%;
    text-align: left;
  }
  .intro-word {
    color: #337ab7;
    font-size: 20px;
  }
  .other-movie {
    padding-top: 50px;
    padding-left: 20%;
    padding-right: 20%;
  }
  .poster-list {
    padding: 5px;
    width: 120px;
    height: 200px;
    margin-bottom: -50px;
    cursor: pointer;
  }
  .title-list {
    opacity: 1;
    line-height: 1;
    text-align: center;
  }
  .command-word {
    opacity: 1;
    line-height: 1.4;
    letter-spacing: 0.5px;
    padding-top: 5px;
    padding-bottom: 30px;
    word-break: break-all;
    text-align: left;
    color: #337ab7;
    font-size: 20px;
  }
  .back {
    text-align: right;
    float: right;
    font-size: 16px;
    padding-top: 10px;
    -webkit-user-select: none;
    cursor: pointer;
  }
</style>