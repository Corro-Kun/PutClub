
const API = 'https://putclub-production.up.railway.app/'

export async function Lists(){
    const dato = await fetch(API);
    const result = await dato.json();
    return result
}

export async function details(id){
    const dato = await fetch(API + id);
    const result = await dato.json();
    return result
}