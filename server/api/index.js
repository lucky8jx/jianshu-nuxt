import { Router } from 'express'

import users from './users'
import hotSearch from './hotSearch'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(hotSearch)

export default router
