const apiService = {
    getEmployees: async () => {
        try{
            const response = await fetch('http://127.0.0.1:5000/employees/getActiveEmployees');

            if(!response.ok){
                throw new Error(`HTTP Error!: ${response.status}`)
            }
            return response.json();
        } catch (error) {
            console.error('Error fetching data: ', error);
            throw error;
        }
    },
};

export default apiService;