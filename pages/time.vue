<template>
  <div>
    <div class="top-buttons">
      <div class="buttons has-addons">
        <b-button @click="reset"><i class="fas fa-redo-alt"></i></b-button>
        <b-button @click="biggerTime">T+</b-button>
        <b-button @click="smallerTime">T-</b-button>
        <b-button @click="biggerText">A+</b-button>
        <b-button @click="smallerText">A-</b-button>
        <b-button @click="leftText"
          ><span class="icon is-small"> <i class="fas fa-align-left"></i> </span
        ></b-button>
        <b-button @click="centerText"
          ><span class="icon is-small">
            <i class="fas fa-align-center"></i> </span
        ></b-button>
      </div>
    </div>
    <section class="hero is-fullheight has-text-centered">
      <div class="hero-body">
        <div class="container">
          <div id="time">{{ hours }}:{{ minutes }}:{{ seconds }}</div>

          <textarea id="text" type="text" v-model="message"></textarea>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const UPDATE_RATE = 1000;
const zeroPadding = (n) => {
  return (parseInt(n, 10) >= 10 ? "" : "0") + n;
};
export default {
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      message: "meow",
      textSize: 3,
      timeSize: 8,
    };
  },
  mounted() {
    document.getElementById("text").style.fontSize = this.textSize + "em";
    document.getElementById("time").style.fontSize = this.timeSize + "em";
    this.$options.timer = window.setTimeout(this.updateDateTime, 1);
    this.message = this.$route.query.t;
  },
  beforeDestroy() {
    window.clearTimeout(this.$options.timer);
  },
  methods: {
    reset() {
      this.message = "";
      this.textSize = 3;
      this.timeSize = 8;
      this.$router.push({});
      document.getElementById("time").style.fontSize = this.timeSize + "em";
      document.getElementById("text").style.fontSize = this.textSize + "em";
    },
    updateDateTime() {
      const now = new Date();
      this.hours = zeroPadding(now.getHours());
      this.minutes = zeroPadding(now.getMinutes());
      this.seconds = zeroPadding(now.getSeconds());
      this.$options.timer = window.setTimeout(this.updateDateTime, UPDATE_RATE);
    },
    biggerTime() {
      this.timeSize += 0.5;
      document.getElementById("time").style.fontSize = this.timeSize + "em";
    },
    smallerTime() {
      if (this.timeSize < 2) {
        this.timeSize = 2;
      } else {
        this.timeSize -= 0.5;
        document.getElementById("time").style.fontSize = this.timeSize + "em";
      }
    },
    biggerText() {
      this.textSize += 0.5;
      document.getElementById("text").style.fontSize = this.textSize + "em";
    },
    smallerText() {
      if (this.textSize < 2) {
        this.textSize = 2;
      } else {
        this.textSize -= 0.5;
        document.getElementById("text").style.fontSize = this.textSize + "em";
      }
    },
    centerText() {
      document.getElementById("text").style.textAlign = "center";
    },
    leftText() {
      document.getElementById("text").style.textAlign = "left";
    },
  },
  watch: {
    message() {
      this.$router.push({ query: { t: this.message } });
    },
  },
};
</script>

<style>
#time {
  font-size: 6em;
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
}

#text {
  width: 80%;
  font-size: 3em;
  border: none;
  font-family: "Noto Sans TC", sans-serif;
  font-weight: 500;
  background-color: #eff0eb;
}
.top-buttons {
  position: fixed;
}
</style>