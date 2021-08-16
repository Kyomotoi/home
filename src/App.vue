<template>
  <v-app>

    <v-main class="lighten-3 mainApp">
      <v-container>
        <v-col>
          <v-row>
            <v-container fluid>
              <v-lazy>
                <div class="index-info">
                  <h1 class="index-hello">Hello there.</h1>
                  <p></p>
                  <p class="index-name">私、Kyomotoiです ∠(･`_´･ )</p>
                  <p>
                    一名未来的Developer，经常在 <a href="https://github.com/Kyomotoi">GitHub</a> 上提交代码，目前致力于维护个人项目<br>比如：<a href="https://github.com/Kyomotoi/ATRI">ATRI</a>、<a href="https://github.com/Kyomotoi/go-ATRI">go-ATRI</a>、<a href="https://github.com/Kyomotoi/EffectivePlugin">EffectivePlugin</a>。此外，还有一个Funny repo：<a href="https://github.com/Kyomotoi/AnimeThesaurus">AnimeThesaurus</a><br>
                  </p>
                  <p>
                    前后端均有所接触，也仅限接触。此外，你还可以在 <a href="https://twitter.com/Kyomotoi327">Twitter</a> 或 <a href="https://t.me/Kyomotoi">Telegram</a> 上找到我<br>
                    个人常用邮箱：<a href="mailto:Kyomotoiowo@gmail.com">Kyomotoiowo@gmail.com</a>
                  </p>
                </div>
              </v-lazy>
            </v-container>
          </v-row>
        </v-col>

        <div class="overflow-hidden">
          <div class="mb-8">
          </div>

          <v-bottom-navigation
            v-model="value"
            :input-value="active"
            color="ffffff"
          >
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="auto">
                <span>
                  <v-icon>mdi-copyright</v-icon>
                  Yours 
                  <router-link to="/github" tag="v-text">
                    <strong>Kyomotoi</strong>
                  </router-link>
                </span>
              </v-col>

              <v-col class="text-center" cols="auto">
                <span>
                  <v-icon>mdi-book-multiple</v-icon>
                  <router-link to="/blog" tag="v-text">
                    Blog
                  </router-link>
                </span>
              </v-col>
            </v-row>
          </v-bottom-navigation>
        </div>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  mounted() {
    document.title = "Kyomotoi!!!"
  }
}
</script>>

<style>
.index-info {
  padding: 5vh 10vw;
}

.index-hello {
  font-size: calc(40px + 0.33vw);
}

.index-name {
  font-size: calc(20px + 0.33vw);
  font-weight: 500;
}
</style>
