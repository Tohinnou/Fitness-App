import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    exercise: Exercises
}

const ExerciseCard = ({exercise}: Props) => {

    return (
        <Link href={`/exercise/${exercise.id}`} className="exercise-card">
            <Image src={exercise.gifUrl} alt={exercise.name} width={330} height={330} />
            <p className="exercise-card-name">{exercise.name}</p>
        </Link>
    );
}

export default ExerciseCard;