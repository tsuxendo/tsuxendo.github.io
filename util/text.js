const app = Object.freeze({
  description: 'tsuxのホームページです。',
  name: 'tsux.me',
  title: 'tsux.me'
})

const layouts = Object.freeze({
  default: Object.freeze({}),
  error: Object.freeze({
    backButtonText: '戻る',
    reportButtonText: 'バグを報告する',
    reportPrompt: '体験したバグの内容を詳細に入力してください。',
    sentReport: '報告しました',
    notFound: '404 Not Found',
    notFoundMessage: 'お探しのページは見つかりませんでした。',
    internalServerError: '500 Internal Server Error',
    internalServerErrorMessage: 'サーバーで原因不明のエラーが発生しました。'
  })
})

const pages = Object.freeze({
})

const components = Object.freeze({
  navigationmenu: Object.freeze({
    sitetitle: 'tsux.me'
  }),
  appbar: Object.freeze({
    sitetitle: 'tsux.me'
  })
})

export default Object.freeze({
  app,
  layouts,
  pages,
  components
})
