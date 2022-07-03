import express from 'express'
import bodyParser from 'body-parser'
import { dataSource as db } from './dataSource'
import { PORT, SESSION_SECRET } from './constants'
import session from 'express-session'
import { router as userRouter } from './routes/user.route'

const bootstrap = async () => {
	await db.initialize()

	const app = express()

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: true }))

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

	app.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`)
	})
}

bootstrap().catch(err => console.error(err))
