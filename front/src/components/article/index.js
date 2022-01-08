const Article = ({ name, day, text}) => {
    return (
        <div>
            <p>Author: {name}</p>
            <p>Article about: {text}</p>
            <p>Today is: {day}</p>
        </div>
    );
}

export default Article;