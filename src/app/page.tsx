"use client"
import { useState } from 'react';
import Image from 'next/image';
import "./styles.css";
import Exercices from '@/components/Exercices';
import Banner from '@/components/Banner';
import Categories from '@/components/Categories'

export default function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <main>
     <Banner setExercises={setExercises} />
     <Exercices exercises={exercises} bodyPart={bodyPart} setExercises={setExercises} />
     <Categories setBodyPart={setBodyPart} />
    </main>
  )
}