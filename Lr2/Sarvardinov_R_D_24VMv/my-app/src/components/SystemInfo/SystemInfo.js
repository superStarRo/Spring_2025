import {Box,Paper,Typography}from"@mui/material";
export default function SystemInfo({minimum_system_requirements}){
  return(
    <Paper sx={{
      width:{xs:"90%",sm:"96%",md:"95%"},
      backgroundColor:"#23262B",
      borderRadius:2,
      boxShadow:"0 8px 12px -2px rgba(0,0,0,0.2),0 4px 8px -2px rgba(0,0,0,0.1)",
      p:2,
      display:"flex",
      justifyContent:"center",
      flexDirection:{xs:"column",sm:"row"},
    }}>
      <Box sx={{flex:1}}>
        {[
          {title:"OS",value:minimum_system_requirements.os},
          {title:"Memory",value:minimum_system_requirements.memory},
          {title:"Storage",value:minimum_system_requirements.storage},
        ].map((item,index)=>(
          <Box key={index} sx={{mb:2}}>
            <Typography variant="h6" color="#7A8288" fontWeight={400} fontSize="16px">
              {item.title}
            </Typography>
            <Typography variant="body2" color="#7A8288" fontWeight={700} fontSize="16px">
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{flex:1}}>
        {[
          {title:"Processor",value:minimum_system_requirements.processor},
          {title:"Graphics",value:minimum_system_requirements.graphics},
        ].map((item,index)=>(
          <Box key={index} sx={{mb:2}}>
            <Typography variant="h6" color="#7A8288" fontWeight={400} fontSize="16px">
              {item.title}
            </Typography>
            <Typography variant="body2" color="#7A8288" fontWeight={700} fontSize="16px">
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
