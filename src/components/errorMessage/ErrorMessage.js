import img from './error.gif'

const ErrorMessage = () => {
	<img style={{display: "block", widht: "250px", height: "250px", objectFit: "contain", margin: "0 auto"}} src={img} alt="error" />
}

export default ErrorMessage