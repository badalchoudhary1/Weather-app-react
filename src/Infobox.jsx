import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import FlareIcon from '@mui/icons-material/Flare';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({info}){
    const INIT_URL="data:image/jpeg;base64,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";
    const HOT_URL="https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1672845514825-96db4b24c233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGR3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL="https://images.unsplash.com/photo-1438449805896-28a666819a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return(
        <div>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? RAIN_URL : info.temp >15 ? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity >80 ? <ThunderstormIcon/> : info.temp >15 ? <FlareIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity ={info.humidity}</p>
          <p>Min temp={info.tempMin}&deg;C</p>
          <p>Max temp={info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feel Like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}