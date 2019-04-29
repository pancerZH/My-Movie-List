<template>
    <div class="board">
        <el-col :span="14" class="sub-header">排行榜</el-col>
        <el-col :span="10" class="genre">
        <el-select v-model="genre" placeholder="请选择">
            <el-option
            v-for="item in genres"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        </el-col>
        <div class=boarding-list>
            <p v-for="(movie, index) in boardingRes" :key="index" @click="selectMovie(movie)" class="title">{{movie.title}}</p>
        </div>
        <el-col class="sub-header">口碑榜</el-col>
        <div class=boarding-list>
            <p v-for="(movie, index) in totalRes" :key="index" @click="selectMovie(movie)" class="title">{{movie.title}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Boarding",
        props: ["movieList"],
        data() {
            return {
                genre: "恐怖"
            }
        },

        methods: {
            selectMovie: function(movie) {
                this.$emit("titleSearchChanged", movie.title)
            }
        },

        computed: {
            genres() {
            var genreSet = new Set()
            this.movieList.forEach(element => {
                element.genres.forEach(genre => {
                genreSet.add(genre)
                })
            })
            var genreOp = []
            genreSet.forEach(element => {
                genreOp.push({"value": element, "label": element})
            })
            return genreOp
            },
            boardingRes() {
            var conditionList = this.movieList
                    .filter((info) => {
                    const text = Object.values(info.genres).join('____').toLowerCase();
                    return text.search(this.genre.toLowerCase()) >= 0
                    })
            conditionList = conditionList.sort(sortByRating)
            var result = conditionList.slice(0, 10)
            return result
            },
            totalRes() {
            var conditionList = this.movieList
                    .filter((info) => {
                    const text = Object.values(info.genres).join('____').toLowerCase();
                    return text.search() >= 0
                    })
            conditionList = conditionList.sort(sortByRating)
            var result = conditionList.slice(0, 10)
            return result
            }
        }
    }

    function sortByRating(movie1, movie2) {
                return movie2.rating.average - movie1.rating.average
            }
</script>

<style scoped>
.board {
    -webkit-user-select: none
}
.sub-header {
    text-align: left;
    padding-left: 12px;
    padding-top: 25px;
    font-size: 20px;
    opacity: 1;
    line-height: 1.4;
    font-weight: 500;
    color: darkcyan
  }
  .genre {
    opacity: 1;
    line-height: 1.4;
    font-weight: 300;
    padding-top: 20px;
    float: right;
    padding-right: 8px;
  }
  .boarding-list {
    opacity: 1;
    line-height: 1.4;
    font-weight: 500;
    text-align: left;
    float: left;
    padding: 12px;
  }
  .title {
    cursor: pointer;
  }
</style>