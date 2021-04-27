
<template>
  <v-navigation-drawer
    mobile-breakpoint="xs"
    :value="value"
    app
    fixed
    floating
    @input="$emit('input', $event)"
  >
    <v-list link>
      <v-subheader
        style="cursor: pointer;"
        @click="$router.push({ path: '/' })"
      >
        <v-img
          class="mr-3"
          src="/icon.png"
          max-width="24"
        />

        <span v-text="$util.$text.components.navigationmenu.sitetitle" />
      </v-subheader>

      <v-list-group
        v-show="!item.isAdmin || isAuthenticated"
        v-for="item of sitemap"
        :key="item.id"
        no-action
        @click="clickItem('category', item)"
      >
        <template v-slot:activator>
          <v-list-item>
            <v-list-item-title v-text="item.title" />
          </v-list-item>
        </template>

        <v-list-group
          v-show="!item.isAdmin || isAuthenticated"
          v-for="subitem of item.items"
          :key="subitem.id"
          no-action
          sub-group
          @click="clickItem('subcategory', subitem)"
        >
          <template v-slot:activator>
            <v-list-item>
              <v-list-item-title v-text="subitem.title" />
            </v-list-item>
          </template>

          <v-list-item
            v-show="!item.isAdmin || isAuthenticated"
            v-for="subsubitem of subitem.items"
            :key="subsubitem.id"
            link
            @click="clickItem('article', subsubitem)"
          >
            <v-list-item-title v-text="subsubitem.title" />
          </v-list-item>
        </v-list-group>
      </v-list-group>

      <contact-form />
    </v-list>

    <template #append>
      <socials />
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    navItems: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      sitemap: null
    }
  },
  fetch () {
    this.sitemap = JSON.parse(JSON.stringify(this.navItems))
    this.sitemap.sort((a, b) => a.rank > b.rank || -1)
    for (const subitems of this.sitemap) {
      subitems.items.sort((a, b) => a.rank > b.rank || -1)
      for (const subsubitems of subitems.items) {
        subsubitems.items.sort((a, b) => a.rank > b.rank || -1)
      }
    }
  },
  methods: {
    clickItem (type, item) {
      const categoryEdit = type === 'category' && this.isAdminPage && this.isAuthenticated
      if (categoryEdit) {
        this.$router.push({ query: { categoryId: item.id } })
      }
      const subcategoryEdit = type === 'subcategory' && this.isAdminPage && this.isAuthenticated && this.$route.query.categoryId
      if (subcategoryEdit) {
        this.$router.push({ query: { categoryId: this.$route.query.categoryId, subcategoryId: item.id } })
      }
      const articleEdit = type === 'article' && this.isAdminPage && this.isAuthenticated && this.$route.query.categoryId && this.$route.query.subcategoryId
      if (articleEdit) {
        this.$router.push({ query: { ...this.$route.query, articleId: item.id } })
      }
      const articleView = type === 'article' && !this.isAdminPage
      if (articleView) {
        this.$router.push({ path: `/${item.id}/` })
      }
    }
  },
  watch: {
    navItems () {
      this.$fetch()
    }
  },
  computed: {
    isAdminPage () { return this.$route.name === 'admin' },
    ...mapGetters('auth', ['isAuthenticated'])
  }
}
</script>
