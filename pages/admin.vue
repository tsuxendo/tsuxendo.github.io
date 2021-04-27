<template>
  <page-wrapper :loading="loading">
    <v-card
      class="pa-6 d-flex align-center"
      flat
    >
      <h1 v-text="'管理者ページ'" />

      <v-spacer />

      <v-btn
        v-if="isAuthenticated"
        small
        outlined
        @click="clickLogout"
        v-text="'ログアウト'"
      />

      <v-btn
        v-else
        small
        outlined
        @click="clickLogin"
        v-text="'ログイン'"
      />

    </v-card>

    <v-divider class="my-6" />

    <v-card-title v-text="'このページでできること'" />

    <v-card-text>
      <div
        v-for="capa, i of capabilities"
        :key="i"
        v-text="capa"
      />
    </v-card-text>

    <v-card
      v-show="routeChanged"
      class="pa-3"
      dark
    >
      <v-card-title v-text="'ページ再読み込み'" />

      <v-card-text v-text="'カテゴリ・サブカテゴリ・記事のいずれかが選択されました。このページでできることを変更する場合は、ページを再読み込みします。'" />

      <v-card-actions>
        <v-btn
          outlined
          @click="routeChanged = false"
          v-text="'キャンセル'"
        />

        <v-spacer />

        <v-btn
          outlined
          @click="$router.go(0)"
          v-text="'読み込む'"
        />
      </v-card-actions>
    </v-card>

    <v-form
      v-if="isAuthenticated"
      ref="adminForm"
      @submit.prevent
    >
      <v-divider class="my-6" />

      <v-subheader class="mb-6">
        <span v-text="'トップページ'" />

        <v-spacer />

        <v-btn
          small
          outlined
          @click="readOnlyToggle('top')"
        >
          <span v-text="readonly.top ? '編集' : '中断'" />
        </v-btn>
      </v-subheader>

      <v-textarea
        v-model="siteDataForm.code"
        label="コード"
        :disabled="readonly.top"
        :rules="[v => !!v || '入力してください']"
        outlined
      />

      <v-checkbox
        v-model="siteDataForm.isAdmin"
        label="管理者のみ"
        :disabled="readonly.top"
      />

      <v-divider class="my-6" />

      <v-subheader class="mb-6">
        <span v-text="'カテゴリ'" />

        <v-spacer />

        <v-btn
          small
          outlined
          @click="readOnlyToggle('category')"
        >
          <span v-text="readonly.category ? '編集' : '中断'" />
        </v-btn>
      </v-subheader>

      <v-text-field
        v-model="siteDataForm.categoryTitle"
        label="カテゴリ"
        :disabled="readonly.category"
        :rules="[v => !!v || '入力してください']"
        outlined
      />

      <v-text-field
        v-model="siteDataForm.categoryRank"
        label="ランク"
        type="number"
        :disabled="readonly.category"
        :rules="[v => !!v || '入力してください']"
        outlined
      />

      <v-checkbox
        v-model="siteDataForm.categoryIsAdmin"
        label="管理者のみ"
        :disabled="readonly.category"
      />


      <v-divider class="my-6" />

      <v-subheader class="mb-6">
        <span v-text="'サブカテゴリ'" />

        <v-spacer />

        <v-btn
          small
          outlined
          @click="readOnlyToggle('subcategory')"
        >
          <span v-text="readonly.subcategory ? '編集' : '中断'" />
        </v-btn>
      </v-subheader>

      <v-text-field
        v-model="siteDataForm.subcategoryTitle"
        label="サブカテゴリ"
        :disabled="readonly.subcategory"
        :rules="[v => !!v || '入力してください']"
        outlined
      />

      <v-text-field
        v-model="siteDataForm.subcategoryRank"
        label="ランク"
        type="number"
        :disabled="readonly.subcategory"
        :rules="[v => !!v || '入力してください']"
        outlined
      />

      <v-checkbox
        v-model="siteDataForm.subcategoryIsAdmin"
        label="管理者のみ"
        :disabled="readonly.subcategory"
      />

      <v-divider class="my-6" />

      <div
        v-if="editArticle"
        class="pb-6"
      >
        <v-subheader class="mb-6">
          <span v-text="'記事'" />

          <v-spacer />

          <v-btn
            small
            outlined
            @click="readOnlyToggle('article')"
          >
            <span v-text="readonly.article ? '編集' : '中断'" />
          </v-btn>
        </v-subheader>

        <v-text-field
          v-model="articleDataForm.title"
          label="タイトル"
          :disabled="readonly.article"
          :rules="[v => !!v || '入力してください']"
          outlined
        />

        <v-textarea
          v-model="articleDataForm.code"
          label="コード"
          :disabled="readonly.article"
          :rules="[v => !!v || '入力してください']"
          outlined
        />

        <v-file-input
          label="ファイルアップロード"
          @change="uploadFile"
          outlined
          hide-input
        />

        <v-text-field
          v-model="articleDataForm.rank"
          label="ランク"
          type="number"
          :disabled="readonly.artocle"
          :rules="[v => !!v || '入力してください']"
          outlined
        />

        <v-checkbox
          v-model="articleDataForm.isAdmin"
          label="管理者のみ"
          :disabled="readonly.article"
        />
      </div>

      <v-card-actions>
        <v-btn
          outlined
          @click="editArticle = !editArticle"
        >
          <span v-text="editArticle ? '記事は書かない' : '記事を書く'" />
        </v-btn>
      </v-card-actions>

      <v-divider class="my-6" />

      <v-card-actions>
        <v-spacer />

        <v-btn
          outlined
          @click="submit"
          v-text="'保存'"
        />
      </v-card-actions>
    </v-form>
  </page-wrapper>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      loading: false,
      rendered: false,
      capabilities: [],
      articleDataForm: {},
      siteDataForm: {},
      editArticle: false,
      routeChanged: false,
      readonly: {
        top: true,
        category: true,
        subcategory: true,
        article: true
      }
    }
  },
  head () {
    return {
      title: '管理者ページ',
    }
  },
  async created () {
    this.loading = true
    if (!this.siteData.id) {
      await this.getSiteData()
    }
    this.loading = false
    if (this.isAuthenticated) {
      this.render()
    }
  },
  methods: {
    async clickLogin () {
      if (!this.isAuthenticated) {
        const username = window.prompt('username')
        if (username) {
          const password = window.prompt('password')
          if (password) {
            await this.login([username, password])
          }
        }
      }
    },
    async render () {
      this.rendered = true
      this.loading = true
      const categoryId = this.$route.query?.categoryId
      const subcategoryId = this.$route.query?.subcategoryId
      const articleId = this.$route.query?.articleId
      this.capabilities = ['・トップページの編集']
      this.capabilities.push(this.$route.query?.categoryId ? '・カテゴリの編集' : '・カテゴリの追加')
      this.capabilities.push(this.$route.query?.subcategoryId ? '・サブカテゴリの編集' : '・サブカテゴリの追加')
      this.capabilities.push(this.$route.query?.articleId ? '・記事の編集' : '・記事の追加')
      this.editArticle = !!articleId
      if (articleId && !this.article(articleId)?.id) {
        await this.getArticle(articleId)
      }
      this.articleDataForm = {
        ...JSON.parse(JSON.stringify(this.article(articleId))),
        id: articleId || this.$firebase.$uuid(),
        categoryId: categoryId || this.$firebase.$uuid(),
        subcategoryId: subcategoryId || this.$firebase.$uuid()
      }
      const sitemap = this.siteData.sitemap || []
      const theCategory = sitemap.find(item => item.id === categoryId) || { items: [] }
      const theSubcategory = theCategory.items.find(item => item.id === subcategoryId) || {}
      this.siteDataForm = {
        ...JSON.parse(JSON.stringify(this.siteData)),
        categoryId: this.articleDataForm.categoryId,
        categoryTitle: theCategory.title,
        categoryCreatedAt: theCategory.createdAt,
        categoryIsAdmin: !!theCategory.isAdmin,
        categoryRank: theCategory.rank,
        subcategoryId: this.articleDataForm.subcategoryId,
        subcategoryTitle: theSubcategory.title,
        subcategoryCreatedAt: theSubcategory.createdAt,
        subcategoryIsAdmin: !!theSubcategory.isAdmin,
        subcategoryRank: theSubcategory.rank
      }
      this.loading = false
    },
    async submit () {
      if (!this.$refs.adminForm.validate()) { return }
      this.loading = true
      const updatedAt = this.$firebase.$timestamp()
      if (this.editArticle) {
        await this.setArticle({
          id: this.articleDataForm.id,
          title: this.articleDataForm.title,
          code: this.articleDataForm.code,
          categoryId: this.siteDataForm.categoryId,
          subcategoryId: this.siteDataForm.subcategoryId,
          rank: this.articleDataForm.rank,
          isAdmin: !!this.articleDataForm.isAdmin,
          createdAt: this.articleDataForm.createdAt ? this.$firebase.$timestamp(new Date(this.articleDataForm.createdAt.seconds * 1000)) : updatedAt,
          updatedAt
        })
      }
      const setTimestamp = item => {
        item.createdAt = item.createdAt ? this.$firebase.$timestamp(new Date(item.createdAt.seconds * 1000)) : updatedAt
        item.updatedAt = item.updatedAt ? this.$firebase.$timestamp(new Date(item.updatedAt.seconds * 1000)) : updatedAt
        if (!!item.items?.length) {
          for (const subitem of item.items) {
            setTimestamp(subitem)
          }
        }
        return item
      }
      const sitemap = this.siteDataForm.sitemap || []
      const theCategory = sitemap.find(item => item.id === this.siteDataForm.categoryId) || { items: [] }
      const theSubcategory = theCategory.items.find(item => item.id === this.siteDataForm.subcategoryId) || { items: [] }
      const siteData = {
        code: this.siteDataForm.code,
        isAdmin: !!this.siteDataForm.isAdmin,
        sitemap: [
          ...sitemap.filter(item => item.id !== this.siteDataForm.categoryId).map(setTimestamp),
          {
            id: this.siteDataForm.categoryId,
            title: this.siteDataForm.categoryTitle,
            isAdmin: !!this.siteDataForm.categoryIsAdmin,
            rank: this.siteDataForm.categoryRank,
            createdAt: this.siteDataForm.categoryCreatedAt ? this.$firebase.$timestamp(new Date(this.siteDataForm.categoryCreatedAt.seconds * 1000)) : updatedAt,
            updatedAt,
            items: [
              ...theCategory.items.filter(item => item.id !== this.siteDataForm.subcategoryId).map(setTimestamp),
              {
                id: this.siteDataForm.subcategoryId,
                title: this.siteDataForm.subcategoryTitle,
                isAdmin: !!this.siteDataForm.subcategoryIsAdmin,
                rank: this.siteDataForm.subcategoryRank,
                createdAt: this.siteDataForm.subcategoryCreatedAt ? this.$firebase.$timestamp(new Date(this.siteDataForm.subcategoryCreatedAt.seconds * 1000)) : updatedAt,
                updatedAt,
                items: !this.editArticle ? theSubcategory.items : [
                  ...theSubcategory.items.filter(item => item.id !== this.articleDataForm.id).map(setTimestamp),
                  {
                    id: this.articleDataForm.id,
                    title: this.articleDataForm.title,
                    isAdmin: !!this.articleDataForm.isAdmin,
                    rank: this.articleDataForm.rank,
                    createdAt: this.articleDataForm.createdAt ? this.$firebase.$timestamp(new Date(this.articleDataForm.createdAt.seconds * 1000)) : updatedAt,
                    updatedAt
                  }
                ]
              }
            ]
          }
        ],
        createdAt: this.siteDataForm.createdAt ? this.$firebase.$timestamp(new Date(this.siteDataForm.createdAt.seconds * 1000)) : updatedAt,
        updatedAt
      }
      await this.setSiteData(siteData)
      this.loading = false
      this.$router.go(0)
    },
    async uploadFile (file) {
      if (!file) { return }
      this.loading = true
      const url = await this.$firebase.$upload(file)
      this.articleDataForm.code += url
      this.loading = false
    },
    readOnlyToggle (part) {
      this.readonly[part] = !this.readonly[part]
    },
    clickLogout () {
      const confirm = window.confirm('logout?')
      if (confirm) {
        this.logout()
        this.$router.push({ path: '/' })
      }
    },
    ...mapActions('auth', ['login', 'logout']),
    ...mapActions('data', ['getSiteData', 'getArticle', 'setSiteData', 'setArticle'])
  },
  watch: {
    $route () {
      this.routeChanged = true
    },
    isAuthenticated (auth) {
      if (auth && !this.rendered) {
        this.render()
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['user', 'isAuthenticated']),
    ...mapGetters('data', ['siteData', 'article'])
  }
}
</script>
