import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/footer';
import { charactersLinks } from '../../components/info/info';
import { comics } from '../../components/info/info'

type fields = {
    title: string, 
    Image: string,
    description: string,    
};

const IComics = function () {
    const { id } = useParams();
    const [thiscomics, newcomics] = useState<fields|undefined>(undefined);
    useEffect(() => {
        const choose = async () => {
            if (id) {
                newcomics(comics[Number(id)]);
            }
        };
        choose();
    }, [id]);

    return (
        <div className='icomics'>
            <Header/>
            <div className='icomicsContent'>
                <img className='icomicsImage' src={thiscomics?.Image}/>
                <h2 className='icomicsTitle'>{thiscomics?.title}</h2>
                <p className='icomicsDescription'>{thiscomics?.description}</p>
                <div>
                <h3>Characters</h3>
                {charactersLinks.map((characters) => (
                    <a href={characters.link}>{characters.title}</a>
                ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default IComics;