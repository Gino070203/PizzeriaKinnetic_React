
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer.jsx"

export function VideoSection(){

    return(
        <section className="video section">

            <div className="container">

                <div class="sectionTitle">
                    <span>Video promocional</span>
                    <h2>Conoce la experiencia de Pizzeria Kinnetic</h2>
                </div>

                <VideoPlayer  src={'https://www.youtube.com/embed/kij2j6zlR90'} title={"Video promocional de pizzeria Kinnetic"} />

            </div>


        </section>
    )
}