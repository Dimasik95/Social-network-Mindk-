import { getArticles } from "./api/crud";
import { useQuery } from "react-query";
import Article from "../../components/article"

const ArticlesContainer = () => {
    const {isFetching, data} = useQuery('articles', () => getArticles());
    const articles = data?.data || [];
    return (
        <div>
            {isFetching && <div>Loading...</div>}
            <Article articles={articles}/>
        </div>
    );
}

export default ArticlesContainer;