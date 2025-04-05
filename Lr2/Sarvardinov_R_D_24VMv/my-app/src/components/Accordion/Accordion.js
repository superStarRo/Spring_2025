import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';

const items = [
  { 
    title: 'What is FreeToGame?', 
    content: "FreeToGame.com is a gaming platform that brings together the best Free-to-Play Multiplayer Online Games and MMO Games into one convenient place. Not only does it offer a curated selection of free PC games across various genres, but it also rewards gamers with free premium loot and exclusive perks. Additionally, users can maintain their own games library, track their gaming history, and easily search for their next favorite game. Whether you're into MMORPGs, MOBAs, FPS, or strategy games, FreeToGame offers a comprehensive gaming experience tailored to your interests. FreeToGame also offers a free public API that can be accessed without any restrictions or the need to create an account. This Free-To-Play Games Database API provides developers and enthusiasts with valuable data to enhance their gaming projects." 
  },
  { 
    title: 'What is free-to-play in games?', 
    content: "Free-to-play games are those amazing titles you can jump into without any upfront cost. Not all games are created equal, but the bottom line is, you should be able to enjoy the game without ever needing to open your wallet. You have the freedom to test out a free-to-play game for as long as you like, really get a feel for it, and if it clicks with you, there's also the option to treat yourself to some cool extras like skins, weapons, or expansions. However, it's important to note that those paid extras should always be completely optional. A good free-to-play game should never obligate you to spend any money." 
  },
  { 
    title: 'Can I play PC games for free?', 
    content: "Absolutely! There's a plethora of PC games available for free. Many games follow a 'free-to-play' model, meaning you can download and start playing them without spending a dime. While most free-to-play games offer optional in-game purchases for extra content or customization, the core experience is usually completely free." 
  },
  { 
    title: 'Are free-to-play games free?', 
    content: "Free-to-play games are indeed free to install and play initially. However, once players delve into the game, they often encounter optional opportunities to purchase additional content such as items, maps, and customization options. Some games also integrate in-game advertising as a means to generate income." 
  },
];

export default function CustomAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: '100%', 
      padding: { xs: '10px', md: '10px' }, 
      boxSizing: 'border-box', 
    }}>
      {items.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            width: '100%', 
            maxWidth: { xs: '90%', sm: '95%', md: '100%' }, 
            backgroundColor: '#23262B',
            color: 'white',
            '&:before': { display: 'none' },
            marginBottom: '10px', 
          }}
        >
          <AccordionSummary>
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: { xs: '16px', md: '18px' }, 
                color: '#7A8288', 
                fontWeight: 'bold', 
              }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography 
              sx={{ 
                fontSize: { xs: '14px', md: '16px' }, 
                color: '#7A8288', 
                lineHeight: '1.5', 
                wordWrap: 'break-word', 
                overflowWrap: 'break-word', 
              }}
            >
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
