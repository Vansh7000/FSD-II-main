import { TextField, Button, Paper, Typography } from "@mui/material";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("RSVP Submitted! (Demo)");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6">
        <Paper className="p-4 rounded-4 shadow-sm">
          <Typography variant="h5" fontWeight={900}>
            RSVP / Register
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }} className="mt-1">
            Fill the form to confirm your participation.
          </Typography>

          <form onSubmit={handleSubmit} className="mt-3 d-flex flex-column gap-3">
            <TextField label="Full Name" required fullWidth />
            <TextField label="Email" type="email" required fullWidth />
            <TextField label="Department" required fullWidth />
            <TextField label="Event Interested In" required fullWidth />

            <Button type="submit" variant="contained" size="large">
              Submit RSVP
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
}
