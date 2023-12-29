interface Exercises {
    bodyParts: string[],
    bodyPart: string,
    equipment: string,
    gifUrl: string,
    name:string,
    target: string, 
    id: string
}

interface ExerciseDetail {
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: string;
    name: string;
    target: string;
    instructions: string[];
}