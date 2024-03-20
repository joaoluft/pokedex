import { useEffect, useState } from "react";
import { getTrainersData } from "./../../../utils";

export const useSecondStep = () => {
  const [trainers, setTrainers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrainersData = async () => {
      try {
        const res = await getTrainersData();
        setTrainers(res);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchTrainersData();
  }, []);

  return { trainers, isLoading };
};