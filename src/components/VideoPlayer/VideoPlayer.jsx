
import styles  from "./VideoPlayer.module.css"

export function VideoPlayer({src,title}){

return(
    
    <div className={styles.videoContainer}>

        <iframe src={src} title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>

    </div>
)

}