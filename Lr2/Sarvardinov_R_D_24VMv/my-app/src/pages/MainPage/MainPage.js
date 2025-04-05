import React from 'react';
import Title from "../../components/Title/Title.js";
import Ad from "../../components/Ad/Ad.js";
import FlatGameCard from "../../components/FlatGameCard/FlatGameCard.js";
import Accordion from "../../components/Accordion/Accordion.js";
import PersonalizedRecommendations from "../../components/PersonalizedRecommendations/PersonalizedRecommendations.js";
import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';

const getPersonalizedRecommendations = (allGames) => {
  const personalizedGames = [];
  const recommendedIds = [257, 24, 30];

  for (let i = 0; i < allGames.length; i++) {
    const game = allGames[i];

    let isRecommended = false;
    for (let j = 0; j < recommendedIds.length; j++) {
      if (game.id === recommendedIds[j]) {
        isRecommended = true;
        break;
      }
    }
    if (isRecommended) {
      personalizedGames.push(game);
    }
  }

  return personalizedGames;
};

const getNewReleases = (allGames) => {
  return allGames.filter(i => {
    const releaseDate = new Date(i.release_date);
    return releaseDate.getFullYear() === 2024 && releaseDate.getMonth() >= 8;
  });
};

export default function MainPage({ allGames, onGameClick }) {
  const persRec = getPersonalizedRecommendations(allGames);
  const relData = getNewReleases(allGames);

  return (
    <Container sx={{ padding: { xs: '8px', sm: '16px', md: '24px' } }}>
      <PersonalizedRecommendations persRec={persRec} onGameClick={onGameClick} />
      
      <Box sx={{ mt: 5 }}>
        <Title title="New Releases" />
      </Box>

      <Grid container direction="column" justifyContent="flex-start" alignItems="center" spacing={3}>
        {relData.map((i) => (
          <Grid item key={i.id} xs={12} sm={6} md={4} lg={3}>
            <FlatGameCard
              id={i.id}
              img={i.thumbnail}
              platform={i.platform}
              title={i.title}
              category={i.genre}
              short_description={i.short_description}
              onGameClick={onGameClick}
            />
          </Grid>
        ))}
      </Grid>

      <Ad />
      
      <Box sx={{ mt: 5 }}>
        <Title title="Frequently Asked Questions" />
      </Box>
      <Accordion />
    </Container>
  );
}
