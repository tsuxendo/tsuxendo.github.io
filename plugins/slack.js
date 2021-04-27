export default (context, inject) => {
  inject('slack', async text => {
    const params = new URLSearchParams()
    params.append('payload', JSON.stringify({
      username: context.$util.$app.name,
      channel: '#test',
      icon_emoji: ':envelope:',
      text: `${text}（<${window.location.href}|URL>）`
    }))
    await context.$axios.$post(context.env.SLACK_API_URL, params)
  })
}
