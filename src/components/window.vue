<template>
  <div>
    <button id="save" v-on:click="downloadImage">Descargar</button>
    <v-stage ref="stage" :config="configKonva">
      <v-layer ref="layer">
        <v-rect v-for="item in square" :key="item.id" :config="item" />
        <v-image
          :config="{
            x:212,
            y:134,
            width:645,
            height: 305,
            image: image
          }"
        />
      </v-layer>
      <v-layer>
        <v-line :config="configLine" />
      </v-layer>
      <v-layer>
        <v-shape :config="configShapeOne" />
        <v-shape :config="configShape" />
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
import prueba from "../App";
let vm = {};
let color = "red";
export default {
  props: ["configLine"],
  props: ["wall"],

  data() {
    return {
      configKonva: {
        width: 1000,
        height: 500
      },
      square: [
        {
          id: 1,
          x: 80,
          width: 900,
          height: 480,
          fill: "pink",
          stroke: "black",
          strokeWidth: 4,
          name: "rect2"
        },

        {
          x: 210,
          y: 40,
          width: 650,
          height: 400,
          fill: color,
          stroke: "black",
          strokeWidth: 4,
          name: "rect1"
        }
      ],

      configShape: {
        sceneFunc: function(context) {
          context.beginPath();
          context.moveTo(95, 110);
          context.lineTo(95, 415);
          context.closePath();
          context.fillStrokeShape(this);
        },
        x: 450,
        y: 25,
        fill: "#00D2FF",
        stroke: "black",
        strokeWidth: 4,
        draggable: false
      },
      configShapeOne: {
        sceneFunc: function(context) {
          context.beginPath();
          context.moveTo(-80, 255);
          context.lineTo(260, 255);
          context.closePath();
          context.fillStrokeShape(this);
        },
        x: 450,
        y: 25,
        fill: "#00D2FF",
        stroke: "black",
        strokeWidth: 4,
        draggable: false
      },
      image: null
    };
  },
  methods: {
    downloadURI: function(uri, name) {
      var link = document.createElement("a");
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      //delete link;
    },
    downloadImage: function() {
      var stage = this.$refs.stage.getStage();

      var dataURL = stage.toDataURL();
      this.downloadURI(dataURL, "diseño.jpg");
    }
  },
  created() {
    const image = new window.Image();
     image.src = "https://wallpaperstock.net/wallpapers/thumbs1/44468wide.jpg";
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
    };
  }
};
</script>

