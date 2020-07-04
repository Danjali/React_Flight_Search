const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
};

export const fetchFlightData = async () => {
    try{
        let response = await fetchJson("https://tw-frontenders.firebaseio.com/advFlightSearch.json");
        if(response){
          const uniqueCity = [
            ...new Set(response.map((item) => item.origin)),
          ].map((item) => {
            return { value: item, label: item };
          });
          return { data: response, uniqueCity };
        }
    } catch(error) {
        console.log(error)
        return error;
    }
}
    