import GameCard from "../GameCard/GameCard.js";
import Title from "../Title/Title.js"
import Grid from '@mui/material/Grid2'
export default function PersonalizedRecommendations({persRec, onGameClick}) {
    const title="Personalized Recommendations"
    return <>
        <Title title={title}/>
        <Grid container spacing={1}>
            {persRec.map((i)=><GameCard id={i.id} title={i.title} img={i.thumbnail} onGameClick={onGameClick}/>)}
        </Grid>
    </>
}
