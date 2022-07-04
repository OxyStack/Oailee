import express from 'express'
import { getLinks, addLink } from '../controllers/link.contr'

export const router = express.Router()

router.get('/getlinks', getLinks)
router.post('/addlink', addLink)
