let token = `2e90c4480ea6c288e3502d1f061667e6c06e9b72cf303218`

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://rangers75-car-inventory-jw-2.herokuapp.com/api/cars/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if(!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://rangers75-car-inventory-jw-2.herokuapp.com/api/cars/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to create car')
        }
        return await response.json()
    },
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://rangers75-car-inventory-jw-2.herokuapp.com/api/cars/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update car')
        }
        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`https://rangers75-car-inventory-jw-2.herokuapp.com/api/cars/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
        if(!response.ok){
            throw new Error('Failed to delete car')
        }
        return await response.json()
    }

}