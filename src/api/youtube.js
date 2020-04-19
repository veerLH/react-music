import axios from 'axios';

export const baseParam={
    part: 'snippet',
    maxResults : 10,
    key : `${process.env.REACT_APP_API_KEY}`,
};

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3' ,


});