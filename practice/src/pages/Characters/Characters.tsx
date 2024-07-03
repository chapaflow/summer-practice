import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import Navigation from "../../components/navigation/Navigation";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { characters } from "../../components/info/info";
import './Characters.css'

const Characters = function() {
    return (
        <div className="characters">
            <Header/>
            <h1 className="charctaersTitle">
                Characters <span className="charactersCounter">{characters.length}</span>
            </h1>
            <div className="charactersSearch">
                <Input txt = "Search for Characters by Name"/>
                <Button/>
            </div>
            <div className="charactersInfo">
                {characters.map((current) => (
                    <Navigation 
                        id = {current.id}
                        Image = {current.Image}
                        title = {current.title}
                        description = {current.description}
                        section = "Characters"
                    />
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Characters;