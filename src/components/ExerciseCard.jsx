import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{ ml: "21px", color: "#fff", backgroundColor: "#ffa9a9", fontSize:'14px', borderRadius: '20px', textTransform: 'capitalize'}}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{ ml: "21px", color: "#fff", backgroundColor: "#fcc757", fontSize:'14px', borderRadius: '20px', textTransform: 'capitalize'}}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' fontSize='22px' textTransform='capitalize'>{exercise.name}</Typography>
    </Link>
  );
};

export default ExerciseCard;
