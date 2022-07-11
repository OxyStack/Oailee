import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { dataSource as db } from './dataSource'
import { PORT, SESSION_SECRET } from './constants'
import session from 'express-session'
import { router as userRouter } from './routes/user.route'
import { router as linkRouter } from './routes/link.route'

const bootstrap = async () => {
	await db.initialize()

	const app = express()

	app.set('views', './src/views')

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: true }))

	app.use(cors())

	app.use(
		session({
			secret: SESSION_SECRET,
			resave: false,
			saveUninitialized: false,
			cookie: {
				maxAge: 1000 * 60 * 60 * 24 * 7,
				httpOnly: true,
				secure: false,
				sameSite: 'lax',
			},
		})
	)

	app.use('/', userRouter)
	app.use('/', linkRouter)
	app.get('/', (_, res) => {
		res.render('index')
	})

	app.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`)
	})
}

bootstrap().catch(err => console.error(err))
