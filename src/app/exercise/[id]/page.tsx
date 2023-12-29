"use client"
import React,{ useEffect, useState } from 'react';
import { fetchData, exerciseOptions } from '@/utils/fetchData';
import ExerciseDetail from '@/components/ExerciseDetail';

interface InterfaceParams {
    params: {id: string}
}

const ExercisePage = ({ params }: InterfaceParams) => {
    const [exerciseDetail, setExerciseDetail] = useState<ExerciseDetail>({
        bodyPart: "",
        equipment: "",
        gifUrl: "",
        id: "",
        name: "",
        target: "",
        instructions: [""],
      });
    useEffect(() => {

        const fetchExercisesData = async () => {

            const exerciseDetailData = await fetchData(
                `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`,
                exerciseOptions
              );
              setExerciseDetail(exerciseDetailData);
        }
        fetchExercisesData();
    },[params.id])
    return (
        <ExerciseDetail exerciseDetail={exerciseDetail} />
    )
}

export default ExercisePage;