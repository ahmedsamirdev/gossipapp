import { Circle } from 'better-react-spinkit'

function Loading() {
    return (
        <center style={{ display: 'grid', placeItems: 'center', height: '100vh'}}>
            <div>
                <img 
                    src="/logo.png" 
                    alt="Loading"
                    width={300}
                    style={{ marginBottom: 15 }}
                />
                <Circle color="#009688" size={50} />
            </div>
        </center>
    )
}

export default Loading
