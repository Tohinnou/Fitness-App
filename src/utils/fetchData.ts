export const fetchData = async (url: string, options: object) => {
    try {
        const response = await fetch(url,options);
       
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json();

        return data;

    }catch(error){
        console.error("Error during fetch:", error);
        throw error; // Rejeter l'erreur pour une gestion supplémentaire si nécessaire
    }
}

export const exerciseOptions = {
    method: 'GET',
    params: {limit: '15'},
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}