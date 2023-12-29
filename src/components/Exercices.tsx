import React, { useEffect } from 'react'
import ExerciseCard from '@/components/ExerciseCard';
import { fetchData, exerciseOptions } from '@/utils/fetchData';
type Props = {
  exercises: Exercises[],
  bodyPart: string,
  setExercises: (value: any) => void
}

const Exercices = ({exercises,bodyPart,setExercises}: Props) => {
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if(bodyPart === 'all')
      {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      }else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        )
      }
      console.log(exercisesData);
      setExercises(exercisesData);
    };

    fetchExercisesData();
  },[bodyPart])
    return (
      <div className="search-container">
        <p className="search-text">Exercises Results</p>

        <div className="searched-exercises">
          {exercises.map((exercise) => (
            <ExerciseCard exercise={exercise} />
          ))}
        </div>
      </div>
    )
  }
  
export default Exercices;