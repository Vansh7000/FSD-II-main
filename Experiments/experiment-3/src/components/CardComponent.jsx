import { Card, CardContent, Typography, Chip, Stack } from "@mui/material";

export default function CardComponent({ title, desc, tag }) {
  return (
    <Card className="h-100 rounded-4 shadow-sm">
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight={800}>
            {title}
          </Typography>
          <Chip label={tag} size="small" />
        </Stack>

        <Typography variant="body2" className="mt-2" sx={{ opacity: 0.85 }}>
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
