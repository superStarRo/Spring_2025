import GameCardForAllGames from "../../components/GameCardForAllGames/GameCardForAllGames.js";
import Title from "../../components/Title/Title.js";
import { Container, Grid } from '@mui/material';

export default function AllGamesPage({ allGames, onGameClick }) {
  return (
    <Container>
      <Title title="All Games" />
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {allGames.map((i) => (
          <Grid 
            item 
            key={i.id} 
            xs={12}  // 1 карточка в строке на телефонах
            sm={6}   // 2 карточки в строке на планшетах
            md={4}   // 3 карточки в строке на средних экранах
            lg={4}   // 3 карточки в строке на больших экранах
          >
            <GameCardForAllGames
              id={i.id}
              title={i.title}
              img={i.thumbnail}
              category={i.genre}
              short_description={i.short_description}
              onGameClick={onGameClick}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
