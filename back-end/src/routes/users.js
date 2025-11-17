import { Router } from 'express'
const router = Router()

router.get('/', (_req, res) => {
  res.send('Fetched all users')
})
router.post('/', (_req, res) => {
  res.send('Created a user')
})
router.patch('/', (_req, res) => {
  res.send('Updated a user')
})
router.delete('/', (_req, res) => {
  res.send('Deleted a user')
})

export default router
