import {useParams} from "react-router-dom";
import {Grid,Box,Typography,Paper,Container,Button} from "@mui/material";
import Title from "../../components/Title/Title.js";
import SystemInfo from "../../components/SystemInfo/SystemInfo.js";
import useFetchGameDetails from "../../hooks/useFetchGameDetails.js";

export default function Game(){
  const {id} = useParams();
  const {gameDetails,loading,error} = useFetchGameDetails(id);

  if(loading) return <div>Загрузка...</div>;
  if(error) return <div>Ошибка:{error.message}</div>;
  if(!gameDetails) return <div>Игра не найдена</div>;

  const backgroundImage = gameDetails.screenshots[0]?.image;

  return(
    <Box sx={{position:"relative",minHeight:"100vh",overflow:"hidden"}}>
      {backgroundImage && (
        <Box sx={{
          position:"fixed",
          top:0,
          left:0,
          width:"100%",
          height:"100vh",
          backgroundImage:`url(${backgroundImage})`,
          backgroundSize:"cover",
          backgroundPosition:"center",
          zIndex:-1,
          filter:"grayscale(70%) brightness(70%)",
          "&::before":{
            content:'""',
            position:"absolute",
            top:0,
            left:0,
            width:"100%",
            height:"100%",
            backgroundColor:"rgba(0,0,0,0.4)",
          },
          "&::after":{
            content:'""',
            position:"absolute",
            top:0,
            left:0,
            width:"100%",
            height:"100%",
            background:"radial-gradient(circle,transparent 30%,rgba(0,0,0,0.7) 100%)",
          },
        }} />
      )}
      <Container sx={{mt:4,mb:4,position:"relative",zIndex:1}}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={4} mt={5}>
            <Paper sx={{
              width:{xs:"90%",sm:"96%",md:"95%"},
              backgroundColor:"#23262B",
              borderRadius:2,
              boxShadow:"0 8px 12px -2px rgba(0,0,0,0.2),0 4px 8px -2px rgba(0,0,0,0.1)",
              p:2,
              display:"flex",
              flexDirection:"column",
              justifyContent:"space-between",
              color:"white",
              cursor:"pointer",
              transition:"box-shadow 0.3s ease-in-out",
              "&:hover":{
                boxShadow:"0 16px 24px -4px rgba(0,0,0,0.3),0 8px 16px -4px rgba(0,0,0,0.2)",
              },
            }}>
              <img src={gameDetails.thumbnail} alt={gameDetails.title} style={{width:"100%",borderRadius:"8px"}} />
              <Button variant="contained" fullWidth sx={{
                backgroundColor:"#3A57E8",
                color:"white",
                fontWeight:"bold",
                fontSize:"16px",
                padding:"10px",
                borderRadius:"8px",
                marginTop:"12px",
                "&:hover":{
                  backgroundColor:"#2A46C8",
                },
              }} href={gameDetails.game_url} target="_blank">Play Now</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{mb:4}}>
              <Title title={gameDetails.title} />
              <Paper sx={{width:{xs:"90%",sm:"96%",md:"96%"},p:2}}>
                <Typography variant="body1" sx={{color:"#7A8288",fontSize:"16px"}}>
                  {gameDetails.description}
                </Typography>
              </Paper>
            </Box>
            <Box sx={{mb:4}}>
              <Title title="Minimum System Requirements" />
              <SystemInfo minimum_system_requirements={gameDetails.minimum_system_requirements} />
            </Box>
            <Box sx={{width:{xs:"90%",sm:"96%",md:"96%"},mb:4}}>
              <Title title="Screenshots" />
              <Paper>
                <Box sx={{
                  width:{xs:"100%",md:"100%"},
                  display:"flex",
                  gap:4,
                  overflowX:"auto",
                  flexDirection:{xs:"column",sm:"row"},
                  justifyContent:"center",
                }}>
                  {gameDetails.screenshots.map((i,idx)=>(
                    <Box key={idx} sx={{
                      flex:"0 0 auto",
                      width:{xs:"100%",sm:"400px"},
                      borderRadius:2,
                      overflow:"hidden",
                    }}>
                      <img src={i.image} alt={`Screenshot ${idx}`} style={{
                        width:"100%",
                        height:"100%",
                        objectFit:"cover",
                      }} />
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
