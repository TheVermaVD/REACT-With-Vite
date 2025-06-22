
const CurrentTime = () => {

    const time = new Date();

    return <p className="lead"> The Current Time is : {time.toLocaleDateString()} and  {time.toLocaleTimeString()}</p>
     
}

export default  CurrentTime;