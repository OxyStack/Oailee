import { Link } from '../models/link.model'
import multer from 'multer'

export const getLinks = async (_: any, res: any) => {
	res.status(200).send(await Link.find())
}

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './src/images')
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname)
	},
})
const upload = multer({ storage: storage }).single('thumbnail')

export const addLink = async (req: any, res: any) => {
	upload(req, res, async (err: any) => {
		if (err instanceof multer.MulterError) {
			res.status(500).send(err)
			return
		} else if (err) {
			res.status(500).send(err)
			return
		}

		const { title, url } = req.body

		const link = new Link()
		link.title = title
		link.url = url
		link.thumbnail = req.file.filename

		await link.save()
		res.status(201).send('link added')
	})
}
