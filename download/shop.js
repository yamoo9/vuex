const _books = [
  {
    id: 1,
    name: '세계사의 거장들',
    price: 22500,
    inventory: 7
  },
  {
    id: 2,
    name: '당신이 옳다',
    price: 14200,
    inventory: 1
  },
  {
    id: 3,
    name: '꽃을 보듯 너를 본다',
    price: 9000,
    inventory: 13
  }
]

export default {
  getBooks (cb) {
    window.setTimeout(() => cb(_books), 400)
  },
  buyBooks (products, cb, errorCb) {
    window.setTimeout(() => {
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 300)
  }
}