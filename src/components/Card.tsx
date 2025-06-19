import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type CustomCardProps = {
  image?: string;
  title: string;
  description?: string;
};

export default function CustomCard({ image, title, description }: CustomCardProps) {
  return (
    <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}