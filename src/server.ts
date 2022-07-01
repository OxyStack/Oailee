import express, { application } from 'express'
import bodyParser from 'body-parser'
import { dataSource as db } from './dataSource'
import { SESSION_SECRET } from './constants'
import session from 'express-session'

const bootstrap = async () => {
	await db.initialize()

	const app = express()

	app.use(bodyParser.json())

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

	app.use('/', require('./routes/users.route'))

	const port = 4000
	app.listen(port, () => {
		console.log(`Server listening on port ${port}`)
	})
}

bootstrap().catch(err => console.error(err))
