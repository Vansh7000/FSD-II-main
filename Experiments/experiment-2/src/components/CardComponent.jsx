import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

function CardComponent({ title, description }) {
  return (
    <Card sx={{ height: "100%", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Details</Button>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
