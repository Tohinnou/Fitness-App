"use client"
import React, { useState }  from 'react';
import Image from 'next/image';
import bannerImage from '../assets/images/fitnessimg.jpg';
import { fetchData, exerciseOptions } from '@/utils/fetchData';

type Props = {
  setExercises: (value: any) => void;
};

const Banner = ({setExercises}: Props) => {

  const [search, setSearch] = useState("");
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value.toLowerCase());
  };

  const handleClick = async () =>
  {
    if(search)
      {
        try{
          const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
          const searchedExercises = exerciseData.filter(
            (exercise:Exercises) => 
            exercise.name.toLowerCase().includes(search) || 
            exercise.target.toLowerCase().includes(search) ||
            exercise.gifUrl.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
          );
          console.log(searchedExercises);
          setExercises(searchedExercises);
        }catch(error)
        {
          console.error("Error during API request:", error);
        }
      }
  }
    return (
      <div className="banner">
        <Image src={bannerImage} alt="banner-img" fill className="banner-img" />
          <div>
            <p className="banner-text">
              GET A HEALTHY BODY WITH THE PERFECT EXERCISES
            </p>
          </div>
        <div className="banner-search">
          <input
            type="text"
            className="banner-input"
            placeholder="Search Exercises..."
            onChange = {handleChange}
            value={search}
          />
          <button className="banner-btn" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
    )
  }
  
export default Banner
