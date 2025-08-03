import './Paragraph.css';

function Paragraph({ size, children }) {
	return (
		<p className={`paragraph ${size === 'small' ? 'small' : 'default'}`}>{children}</p>
	);
}
export default Paragraph;