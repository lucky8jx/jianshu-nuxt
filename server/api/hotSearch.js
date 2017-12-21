import { Router } from 'express'
import Mock from 'mockjs'

const Random = Mock.Random

const router = Router()

// Mock Users
let data = Mock.mock({
  'hotSearch': function () {
    let data = []
    let count = 24
    for (let i = 0; i < count; ++i) {
      data.push(Random.cword(2, 4))
    }
    return data
  },
  'bannerImage': function () {
    let data = []
    let count = 6
    let title
    let bkcolor
    for (let i = 0; i < count; ++i) {
      title = Random.cword(3, 6)
      bkcolor = Random.color()
      data.push({
        'title': title,
        'image': Random.image('1250x540', bkcolor, '#fff', 'png', title)
      })
    }
    return data
  }
})

/* GET users listing. */
router.get('/hotSearch', function (req, res, next) {
  res.json(data)
})

/* GET user by ID. */
// router.get('/users/:id', function (req, res, next) {
//   const id = parseInt(req.params.id)
//   if (id >= 0 && id < users.length) {
//     res.json(users[id])
//   } else {
//     res.sendStatus(404)
//   }
// })

export default router
