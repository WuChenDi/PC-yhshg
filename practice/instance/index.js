import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="div">{{text}}</div>',
  data: {
    text: 0
  },
  watch: {
    text (newText, oldText) {
      console.log(`${newText}:${oldText}`)
    }
  }
})

app.$mount('#root')

// app.text = 'this is content1'

setInterval(() => {
  app.text += 1
  // app.$data.text += 1
  // app.$options.data.text += 1
}, 1000)

console.log(app.$data)
console.log(app.$props)
console.log(app.$el)
console.log(app.$options)

// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }

console.log(app.$root === app)
// <item><div></div></item>
console.log(app.$children)
console.log(app.$slots)
console.log(app.$scopedSlots)
console.log(app.$refs)
console.log(app.$isServer)

// app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
// })
