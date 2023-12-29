"use client";
import { useEffect,useState } from 'react';
import { fetchData, exerciseOptions} from '@/utils/fetchData'

type Props = {
  setBodyPart: (value: string) => void
}

const Categories = ({setBodyPart}: Props) => {
    const [bodyParts, setBodyParts] = useState<Exercises["bodyParts"]>([]);
    
    useEffect(() => {
      
      const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );
  
        setBodyParts(["all", ...bodyPartsData]);
      };
  
      fetchExercisesData();
    }, []);

    return (
        <div className="exercises-wrapper">
          <p className="exercise-text">Different BodyParts, Different Exercises</p>
          <div className="dropdown">
            <button className="dropbtn">Categories</button>
            <div className="dropdown-content">
              {bodyParts.map((bodyPart) => (
                <p onClick={() => setBodyPart(bodyPart)}>{bodyPart}</p>
              ))}
            </div>
          </div>
        </div>
    );
}

export default Categories;