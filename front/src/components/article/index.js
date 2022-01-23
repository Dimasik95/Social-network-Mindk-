import articlePropTypes from '../../propTypes/articlePropTypes'


const Article = (props) => {
    const { name, day, text} = props; 
    return (
        <div>
            <p>Author: {name}</p>
            <p>Article about: {text}</p>
            <p>Today is: {day}</p>
        </div>
    );
}

Article.PropTypes = articlePropTypes;

export default Article;