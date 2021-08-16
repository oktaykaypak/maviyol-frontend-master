<template>
  <div class="row">
    <div class="col-12">
      <section class="boat-detail-comments">
        <div class="row">
          <div class="col-md-12">
            <div class="header">
              <fa
                style="font-size: 24px; margin-right: 21px"
                :icon="['fa', 'life-ring']"
              />
              <h1>Yorumlar ({{ getCommentsData.length }})</h1>
              <div class="rateBox">
                <span
                  style="font-weight: 700; margin-right: 5px; color: #000"
                  v-text="getBoatCommentScoreData.total"
                />
                <MRateStar :full-star="getBoatCommentScoreData.count" />
              </div>
            </div>
            <hr class="hr" />
            <div class="categoriesBox">
              <div class="box active">
                <span>Temizlik {{ getCleanlinessVoteAvgData }} </span>
                <fa class="activeStar" :icon="['fas', 'star']" />
              </div>
              <div class="box">
                <span>Kaptan {{ getCaptainVoteAvgData }}</span>
                <fa class="star" :icon="['fas', 'star']" />
              </div>

              <div class="box">
                <span>Aşçı {{ getChefVoteAvgData }} </span>
                <fa class="star" :icon="['fas', 'star']" />
              </div>
              <div class="box">
                <span>Hizmet {{ getServiceVoteAvgData }}</span>
                <fa class="star" :icon="['fas', 'star']" />
              </div>
            </div>
            <div
              v-if="commentItemCover.length != 0"
              class="boat-detail-comment"
            >
              <div
                v-for="(comment, index) in commentItemCover"
                :key="index"
                class="commentBox"
              >
                <div v-if="comment.smallText">
                  <div class="top">
                    <img :src="comment.image" alt="comment.name" />
                    <div class="text">
                      <span class="name" v-text="comment.name" />
                      <span v-text="comment.date" />
                    </div>
                  </div>
                  <div class="bottom">
                    <p>
                      {{
                        opensText.includes(index)
                          ? comment.text
                          : comment.smallText
                      }}

                      <span
                        class="showMore"
                        :data-id="index"
                        @click.prevent="showItem(index)"
                      >
                        Devamını Oku
                      </span>
                    </p>
                  </div>
                </div>
                <div v-else>
                  <div class="top">
                    <img :src="comment.image" alt="" />
                    <div class="text">
                      <span class="name" v-text="comment.name" />
                      <span v-text="comment.date" />
                    </div>
                  </div>
                  <div class="bottom">
                    <div v-text="comment.text"></div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <p>Hiç yorum yapılmamış...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      text: '',
      opensText: [],
    }
  },
  computed: {
    ...mapGetters({
      getCommentsData: 'boat/getCommentsData',
      getCleanlinessVoteAvgData: 'boat/getCleanlinessVoteAvgData',
      getCaptainVoteAvgData: 'boat/getCaptainVoteAvgData',
      getChefVoteAvgData: 'boat/getChefVoteAvgData',
      getServiceVoteAvgData: 'boat/getServiceVoteAvgData',
      getBoatCommentScoreData: 'boat/getBoatCommentScoreData',
    }),
    commentItemCover() {
      return this.getCommentsData.map((item) => {
        if (item.text.length > 550) {
          return {
            ...item,
            smallText: String(item.text).substring(0, 500) + '...',
          }
        } else {
          return item
        }
      })
    },
  },
  methods: {
    showItem(payload) {
      this.opensText.push(payload)
      document.querySelector(`span[data-id="${payload}"]`).style.display =
        'none'
    },
  },
}
</script>

<style lang="scss" scoped>
.boat-detail-comments {
  padding-right: 105px;

  .boat-detail-comment {
    .commentBox {
      &:first-child {
        margin-top: 0;
      }
      margin-top: 34px;
      .top {
        display: flex;
        margin-bottom: 17px;
        img {
          height: 47px;
          width: 47px;
          border-radius: 50%;
          margin-right: 15px;
        }
        .text {
          display: flex;
          flex-direction: column;
          span {
            font-size: 12px;
            color: #525f7f;
            font-weight: 500;
            margin-bottom: 0;

            &.name {
              margin-bottom: 4px;
              font-weight: 700;
              color: #172b4d;
            }
          }
        }
      }
      .bottom {
        span {
          font-size: 12px;
          line-height: 24px;
          color: #172b4d;
          font-weight: 700;
        }
        span.showMore {
          &:hover {
            cursor: pointer;
          }
          margin-right: 5px;
          color: #3182fd;
          text-decoration: underline;
          display: inline-block;
          margin-left: 5px;
        }
      }
    }
  }

  .hr {
    border-top: 1px solid #d8d8d8;
    margin-top: 19px;
    opacity: 0.7;
  }
  .header {
    display: flex;
    align-items: center;
    h1 {
      font-size: 24px;
      margin-bottom: 0;
      font-weight: 700;
      margin-right: 20px;
    }
  }
  .rateBox {
    display: flex;
    align-items: center;
    font-size: 12.5px;
  }

  .categoriesBox {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
    .box {
      margin-right: 16px;
      background-color: #d5d6df;
      transition: all 0.5s;
      &:hover {
        border: solid 1px #172b4d;
        background-color: transparent;
        cursor: default;

        .star {
          color: #fb6340;
        }
      }
      .activeStar {
        color: #fb6340;
      }
      .star {
        color: #9ca1aa;
      }
      span {
        margin-right: 2px;
      }
      &.active {
        border: solid 1px #172b4d;
        background-color: transparent;
      }

      width: 162px;
      height: 30px;
      border-radius: 19.5px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-right: 2px;
        font-weight: 700;
        font-size: 14px;
        line-height: 15px;
      }
    }
  }
}

@media screen and (max-width: 744px) {
  .box {
    margin-bottom: 10px;
    width: 100% !important;
  }
  .boat-detail-comments .header h1 {
    font-size: 16px;
  }
}
</style>
