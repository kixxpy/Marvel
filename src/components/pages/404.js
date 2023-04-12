import ErrorMessage from '../errorMessage/ErrorMessage'

import { Link } from 'react-router-dom'

const Page404 = () => {

	return (
		<div>
			<ErrorMessage/>
			<p>Вы попали на не туда</p>
			<Link to="/">Back to main page</Link>
		</div>
	)
}

export default Page404;