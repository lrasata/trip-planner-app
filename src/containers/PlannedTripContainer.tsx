import TripCard from "../components/TripCard.tsx";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPlannedTrips } from "../store/redux/TripSlice.ts";
import { ITrip } from "../types.ts";

const PlannedTripContainer = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const plannedTrips = useSelector((state) => state.trips.plannedTrips);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchPlannedTrips());
  }, []);

  return (
    <Box my={3}>
      <Typography variant="h2" gutterBottom color="textSecondary">
        Your planned trip
      </Typography>
      {plannedTrips &&
        plannedTrips.length > 0 &&
        plannedTrips.map((trip: ITrip, index: number) => (
          <Box my={2} key={index}>
            <TripCard {...trip} />
          </Box>
        ))}
    </Box>
  );
};

export default PlannedTripContainer;
