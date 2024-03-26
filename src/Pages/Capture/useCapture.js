import { useContext, useEffect, useState } from "react";
import { UserContext } from "Contexts/UserContext";
import { getTrainerData } from "utils";
import { useNavigate } from "react-router-dom";

export const useCapture = () => {
    const { data } = useContext(UserContext);
    const [trainer, setTrainer] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (!data.tutorial) navigate("/");
    }, [data.tutorial, navigate]);

    useEffect(() => {
        getTrainerData(data.trainer).then(res => {
            setTrainer(res);
        }).catch(err => {
            console.error(err);
        });
    }, [data.trainer]);

    return { data, trainer };
};