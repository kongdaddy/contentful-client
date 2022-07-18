import { Hero } from './Hero';

export const P2GPage = (props) => {
    const { content } = props;
    console.log(content.hero);
    return <div className="p2g-page">
        <Hero options={content.hero} />
    </div>
}