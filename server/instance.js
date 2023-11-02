import axios from "axios";

let url = 'https://api.cosmicjs.com/v3/buckets/musichall-production/media?pretty=true&read_key=jHinJpVEjf4wrnHYiGqeFG7Rd3hsWdVfQ8UBiYYKdSaKgHMjTF&depth=1&props=url,imgix_url,name'
const instance = axios.create({
    baseURL: 'https://api.cosmicjs.com/v3/buckets/musichall-production/media?pretty=true&read_key=jHinJpVEjf4wrnHYiGqeFG7Rd3hsWdVfQ8UBiYYKdSaKgHMjTF&depth=1&props=url,imgix_url,original_name,location,folder,id,',
});
export {instance}
