<template>
  <el-card :body-style="{
    display: 'flex',
    flexDirection: 'column',
    padding: 0
  }">
    <div class="container">
      <img :src="poster" :alt="title" @error="imgError()" @click="goToDetail" class="poster" />
      <div class="info">
          <div class="title" @click="goToDetail">{{title}}</div>
        <div class="check">
          <span v-for="(date, index) in pubdate" :key="index" class="date">{{date}}</span>
          <span class="duration">{{duration}}min</span>
          <span v-for="(genre, index) in genres" :key="index+10" class="genre">{{genre}}</span>
          <el-row class="rating-row">
          <span class="rating">
            <el-rate
              v-model="rate"
              disabled
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>  
          </span>
          <span class="score">{{rating.average}}</span>
          <span class="rating-people">({{this.rating.rating_people}}人评分)</span>
          </el-row>
        </div>
        <div class="casts">
          <div class="director-part">
            <span v-for="(person, index) in directors" :key="index+100" class="director">
              {{person.name}}<a v-if="person!=directors[directors.length-1]" class="director">, </a>
            </span>
          </div>
          <span v-for="(person, index) in casts" :key="index+1000" class="cast-name">
            {{person.name}}<a v-if="person!=casts[casts.length-1]" class="sep">, </a>
          </span>
        </div>
        <div class="intro">
          {{summary}}
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
  export default {
      name: "MovieCard",
      props: ['detail'],
      data() {
          return {
              id: "",
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
              rate: 0
          }
      },
      mounted: function() {
          this.init()
      },
      methods: {
          init: function() {
              this.id = this.detail._id
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
              this.rate = parseFloat((parseFloat(this.detail.rating.average)/2).toFixed(1))
              if(this.detail.rating.average === "") {
                this.rate = 0 
                this.rating.rating_people = 0
              }
          },
          imgError() {
              this.poster = require('../assets/LostSource.png')
          },
          goToDetail() {
              this.$router.push({name: "movie-detail", params: {id: this.id}})
          }
      },
      watch: {
        detail: {
          handler(newValue, oldValue){
            this.init()
          },
          deep: true
        }
      }
  }
</script>

<style scoped>
  .container {
    display: flex;
    padding: 10px;
    text-align: left;
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
    cursor: pointer;
  }
  .info {
    flex: 1;
  }
  .title {
    font-size: 24px;
    line-height: 1;
    margin-top: 8px;
    color: #337ab7;
    -webkit-user-select: none;
    cursor: pointer;
  }
  .check {
    font-size: 12px;
    opacity: 1;
    line-height: 1.4;
    font-weight: 300;
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
    content: " | ";
    color: #ddd;
  }
  .date::after {
    content: " | ";
    color: #ddd;
  }
  .rating-row {
    display: flex; 
    align-items: center;
  }
  .rating {
    display: inline-table
  }
  .rating-people {
    padding-left: 10px;
  }
  .score {
    color: #f7ba2a;
    font-size: 15px;
    opacity: 1;
  }
  .casts {    
    font-size: 13px;
    opacity: 1;
    line-height: 1.4;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
  .sep {
    color: black;
    line-height: 1.4;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
  .director-part {
    display: inline;
  }
  .director {
    color: blue
  }
  .director-part::after {
    content: " | ";
    color: #ddd;
  }
  .intro {
    opacity: 1;
    line-height: 1.4;
    letter-spacing: 0.5px;
    font-size: 14px;
    padding-top: 5px;
    word-break: break-all;
  }
</style>