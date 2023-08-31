import react from 'react';
import { useEffect, useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const request_url = 'https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YOUR API KEY&rating=g'

function GifListContainer() {

    const [imageUrls,setImageUrls] = useState([])

    useEffect(() =>{
        fetch(request_url)
        .then(response => response.json())
        .then((data)=>{
            console.log(data.data)
            const theData = data.data
            const topThree = theData.slice(0,4)
            console.log(topThree)

            setImageUrls(topThree.map((urls)=>urls.images.original.url))
                    console.log(topThree[1].images.original.url)

        })
    },[])

    function handleSearch(searchInput) {

        let searchUrl = 

        fetch(searchUrl)
        .then(res => res.json())
        .then((data)=> {
            const searchUrls = data.data.map((gif)=>
            gif.images.original.url)
            setImagesUrls(()=>searchedUrls)
        })

    }

    return(
        <div>
            <GifSearch handleSearch={handleSearch} />
            <GifList imageUrls={imageUrls}/>
        </div>
    )
}

export default GifListContainer;