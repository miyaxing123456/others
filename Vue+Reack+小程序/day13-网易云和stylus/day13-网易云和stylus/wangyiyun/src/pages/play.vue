<template>
  <div>
    <h1>播放页面</h1>
    <audio ref="audio" autoplay :src="'https://music.163.com/song/media/outer/url?id='+id+'.mp3'"></audio>

    <!-- 跳转到评论页 -->
    <router-link :to="'/comment?id='+id">评论</router-link>

    <!-- 自制音乐播放器 -->
    <div class="my-controls">
      <span @click="toggle" :class="[isPlay?'play':'pause']"></span>
      <div class="time">{{start}}/{{end}}</div>
      <div class="outer" @click="changeProgress" ref="outer">
        <div class="inner" ref="inner">
          <div class="ball" ref="ball"></div>
        </div>
      </div>
      <span class="sound" @click="toggleSound">{{isMuted?'静音':'不静音'}}</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    //自制进度条方法
    //播放暂停切换
    toggle() {
      this.isPlay = !this.isPlay;
      this.isPlay ? this.$refs.audio.play() : this.$refs.audio.pause();
    },
    //点击outer改变播放进度
    changeProgress(e) {
      var outer = this.$refs.outer;
      var ball = this.$refs.ball;
      var audio = this.$refs.audio;

      var width =
        e.clientX - outer.getBoundingClientRect().left + ball.clientWidth / 2;
      if (width < 0) {
        width = 0;
      }
      if (width > outer.clientWidth) {
        width = outer.clientWidth;
      }
      this.$refs.inner.style.width = width + "px";
      audio.currentTime = (width / outer.clientWidth) * audio.duration;
      // outer     300
      //inner      150    300    width
      //歌总        180
      //currentTime 90    180    c=i/o*d
    },
    //声音切换
    toggleSound() {
      this.isMuted = !this.isMuted;
      this.$refs.audio.muted = this.isMuted;
    }
  },
  data() {
    return {
      id: "",

      //自制进度条的状态
      isPlay: true, //播放状态
      start: "00:00", //当前播放进度
      end: "00:00", //歌曲总时长
      isMuted: false //静音状态
    };
  },
  mounted() {
    //1.一进来获取id
    this.id = this.$route.params.id;

    //自制进度条的播放进度
    var audio = this.$refs.audio;
    audio.ontimeupdate = () => {
      this.start =
        (Math.floor(audio.currentTime / 60) + "").padStart(2, "0") +
        ":" +
        (Math.floor(audio.currentTime % 60) + "").padStart(2, "0");
      //计算歌曲总时长
      this.end =
        (Math.floor(audio.duration / 60) + "").padStart(2, "0") +
        ":" +
        (Math.floor(audio.duration % 60) + "").padStart(2, "0");

      this.$refs.inner.style.width =
        (audio.currentTime / audio.duration) * 100 + "%";
    };
  }
};
</script>
<style lang="css" scoped>
.my-controls {
  width: 6.7rem;
  height: 0.4rem;
  position: relative;
  left: 0.1rem;
  top: 2rem;
  background-color: beige;
  overflow: hidden;
}

.pause {
  float: left;
  width: 0;
  height: 0;
  border: 0.1rem solid transparent;
  border-left-color: yellowgreen;
  margin-left: 0.2rem;
  margin-top: 0.1rem;
}

.play {
  float: left;
  width: 0.04rem;
  height: 0.2rem;
  border-left: 0.03rem solid yellowgreen;
  border-right: 0.03rem solid yellowgreen;
  margin-left: 0.2rem;
  margin-top: 0.1rem;
}

.time {
  position: absolute;
  line-height: 0.4rem;
  left: 0.4rem;
  top: 0;
  font-size: 0.2rem;
}

.outer {
  width: 3rem;
  height: 0.1rem;
  position: absolute;
  left: 2.5rem;
  top: 0.15rem;
  background-color: bisque;
  border-radius: 0.05rem;
}

.inner {
  width: 0%;
  height: 0.1rem;
  background-color: pink;
  border-radius: 0.05rem;
  position: relative;
}

.ball {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 0.05rem;
  background-color: blue;
  position: absolute;
  right: 0rem;
  top: 0rem;
}
.sound {
  position: absolute;
  left: 5.5rem;
  top: 0rem;
  line-height: 0.4rem;
  font-size: 0.2rem;
}
</style>