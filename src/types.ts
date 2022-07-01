import { Request } from 'express'
import { Session } from 'express-session'
export type myType = {
	req: Request & { session: Session & { tokenAccess?: string } }
}
